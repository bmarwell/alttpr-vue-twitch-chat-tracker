<template>
  <div>
    <v-form>
       <v-container grid-list-md fluid class="twichconfig">
          <v-layout align-start justify-start row wrap>
            <v-flex xs5><v-text-field
              prepend-icon="chat"
              v-model="channel"
              hint="twitch channel name"
              label="channel name"></v-text-field></v-flex>
            <v-flex xs5><v-text-field prepend-icon="face"
              hint="twitch user name to listen to"
              v-model="listenuser"
              label="twitch user name"></v-text-field></v-flex>
            <v-flex xs2><v-btn color="info">Update</v-btn></v-flex>

            <v-flex xs5>
              <v-text-field prepend-icon="person"
                hint="enter your twitch.tv user name"
                label="user name"
                v-model="username"
              ></v-text-field>
            </v-flex>
            <v-flex xs5><v-text-field prepend-icon="vpn_key"
              hint="enter your twitch.tv irc oauth token"
              label="oauth token"
              :append-icon="show ? 'visibility_off' : 'visibility'"
              :rules="[rules.required]"
              :type="show ? 'text' : 'password'"
              @click:append="show = !show"
              v-model="password"></v-text-field></v-flex>
            <v-flex xs2><v-btn @click="startClient()" color="info">Reconnect</v-btn></v-flex>
        </v-layout>
       </v-container>
    </v-form>
  </div>
</template>

<script>
import Vuetify from 'vuetify';
import TwitchMessageContext from '@/js/TwitchMessageContext.js';

const tmi = require('tmi.js');

// Valid commands start with:
let commandPrefix = '!';

/**
 *  Called every time the bot connects to Twitch chat:
 * @param {string} addr  the server address we connected to.
 * @param {number} port int the port connected to.
 */
function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}

/**
 * Called every time the bot disconnects from Twitch:
 * @param {string} reason the disconnect reason.
 */
function onDisconnectedHandler(reason) {
  console.log(`Disconnected: ${reason}`);
}

export default {
  components: {
    Vuetify,
    TwitchMessageContext,
  },
  mounted: function() {
    // startClient();
  },
  beforeDestroy: function() {
    if (this.client !== null && this.client !== undefined) {
      this.client.disconnect();
    }
  },
  methods: {
    startClient() {
      if (this.client !== null) {
        this.client.disconnect();
        // unregister listeners.
        this.client.on('message', function() {});
        this.client.on('connected', function() {});
        this.client.on('disconnected', function() {});
      }

      // Create a client with our options:
      this.client = tmi.client(this.opts); // eslint-disable-line new-cap

      // Register our event handlers (defined below):
      this.client.on('message', this.onMessageHandler);
      this.client.on('connected', onConnectedHandler);
      this.client.on('disconnected', onDisconnectedHandler);

      // Connect to Twitch:
      this.client.connect();
    },
    onMessageHandler(target, context, msg, self) {
      if (self) {
        return;
      } // Ignore messages from the bot

      if (context.username != this.listenuser) {
        return;
      }

      // This isn't a command since it has no prefix:
      if (msg.substr(0, 1) !== commandPrefix) {
        return;
      }

      // Split the message into individual words:
      const parse = msg.slice(1).split(' ');
      // The command name is the first (0th) one:
      const commandName = parse[0];
      // The rest (if any) are the parameters:
      const params = parse.splice(1);

      // If the command is known, let's execute it:
      if (commandName in this.knownCommands) {
        // Retrieve the function by its name:
        const command = this.knownCommands[commandName];
        // Then call the command with parameters:
        command(target, context, params);
        console.log(`* Executed ${commandName} command for ${context.username}`);
      } else {
        console.log(`* Unknown command ${commandName} from ${context.username}`);
      }
    },
    hud: function(target, context, params) {
      // If there's something to echo:
      if (!params.length) {
        // send help message to emitter.
        return;
      }

      this.$eventHub.$emit('hud-update', params);
    },
  },
  data() {
    return {
      show: false,
      rules: {
          required: (value) => !!value || 'Required.',
      },
      channel: '',
      username: '',
      password: '',
      listenuser: '',
      client: null,
      // These are the commands the bot knows (defined below):
      knownCommands: {hud: this.hud},
    };
  },
  computed: {
    opts() {
      return {
        identity: {
          username: this.username,
          password: 'oauth:' + this.password.replace(/^(oauth:)/, ''),
        },
        channels: [
          this.channel,
        ],
        connection: {
          reconnect: true,
          maxReconnectAttempts: 13,
        },
      };
    },
  },
};
</script>

<style>
.twitchconfig {
  background-color: antiquewhite;
}
</style>
