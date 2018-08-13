<template>
  <v-flex d-block md1>
      <v-card class="item">
        <img
          v-bind:class="this.currentClass"
          v-on:click="nextState()"
          width="64"
          height="64"
          v-bind:src="this.currentImage" />
      </v-card>
    </v-flex>
</template>

<script>
export default {
  name: 'TrackerItem',
  props: {
    'images': Array,
    'title': String,
    'update': {
      type: Function,
      // Object or array defaults must be returned from
      // a factory function
      default: function() { },
    },
   },

  computed: {
    currentImage: function() {
      return this.images[this.index];
    },
    currentClass: function() {
      if (this.state === 'deactivated') {
        return 'item-deactivated';
      }

      return '';
    },
  },
  data: function() {
    return {
      state: 'deactivated',
      index: 0,
    };
  },
  methods: {
    setState: function(state) {
      if (!Number.isInteger(state)) {
        return;
      }

      if (state >= this.images.length) {
        this.nextState();
        return;
      }

      if (state === 0) {
        this.state = 'deactivated';
        this.index = 0;

        return;
      }

      this.state = '';
      this.index = state -1;
    },
    nextState: function() {
      // on deactivated, image should stay at index 0 and just activate itself.
      if (this.state === 'deactivated') {
        this.state = '';

        return;
      }

      // if the state has just changed, go on.

      // if we are at the last available image, switch back to first state (deactivated, 0).
      if (this.index === this.images.length - 1) {
        this.index = 0;
        this.state = 'deactivated';

        return;
      }

      // more images? next one.
      this.index++;
    },
  },
  created: function() {
    return [
      this.$eventHub.$on('hud-update', (params) => this.update(this, params)),
    ];
  },
};
</script>

<style>
.item {
  min-width: 64px;
  min-height: 64px;
/*  border-color: red;
  border-width: 1px;
  border-style: solid; */
}

.item-deactivated {
    opacity: 0.4;
    filter: alpha(opacity=40); /* msie */
}
</style>
