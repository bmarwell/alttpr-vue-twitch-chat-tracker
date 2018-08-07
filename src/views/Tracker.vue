<template>
  <div id="tracker">
    <v-container grid-list-md fluid>
      <v-layout align-start justify-start row wrap>
        <tracker-item
          v-for="item in items"
          v-bind:key="item.id"
          v-bind:title="item.title"
          v-bind:images="item.images"
        ></tracker-item>
      </v-layout>

      <!-- Dungeons -->
      <v-layout align-start justify-start row wrap>
        <tracker-item
          v-for="dungeon in dungeons"
          v-bind:key="dungeon.id"
          v-bind:title="dungeon.title"
          v-bind:images="dungeon.images"
        ></tracker-item>
      </v-layout>
    </v-container>
  </div>
</template>


<script>
import TrackerItem from '@/components/TrackerItem.vue';

import _ from 'lodash';

export default {
  name: 'Tracker',
  components: {
    TrackerItem,
  },
  methods: {
    isActive: function() {
      return false;
    },
  },
  props: ['tracker'],
  data() {
    return {
      items: [
        {id: 'bow', title: 'bow', images: ['/static/items/bow0.png']},
        {id: 'silvers', title: 'silver arrows', images: ['/static/items/silvers.png']},
        {id: 'boomerangs', title: 'Boomerangs', images: [
          '/static/items/boomerang0.png',
          '/static/items/boomerang1.png',
          '/static/items/boomerang2.png',
          ]},
        {id: 'hookshot', title: 'Hookshot', images: ['/static/items/hookshot.png']},
        {id: 'mushroom', title: 'mushroom', images: ['/static/items/mushroom.png']},
        {id: 'powder', title: 'powder', images: ['/static/items/powder.png']},

        {id: 'firerod', title: 'firerod', images: ['/static/items/firerod.png']},
        {id: 'icerod', title: 'icerod', images: ['/static/items/icerod.png']},

        {id: 'bombos', title: 'bombos', images: ['/static/items/bombos.png']},
        {id: 'ether', title: 'ether', images: ['/static/items/ether.png']},
        {id: 'quake', title: 'quake', images: ['/static/items/quake.png']},

        {id: 'lantern', title: 'lantern', images: ['/static/items/lantern.png']},

        /* next 12 */
        {id: 'hammer', title: 'hammer', images: ['/static/items/hammer.png']},
        {id: 'flute', title: 'flute', images: ['/static/items/flute.png']},

        {id: 'net', title: 'net', images: ['/static/items/net.png']},
        {id: 'book', title: 'book', images: ['/static/items/book.png']},
        {id: 'shovel', title: 'shovel', images: ['/static/items/shovel.png']},

        {id: 'bottle', title: 'bottle', images: [
            '/static/items/bottle0.png',
            '/static/items/bottle1.png',
            '/static/items/bottle2.png',
            '/static/items/bottle3.png',
            '/static/items/bottle4.png',
          ]},
        {id: 'byrna', title: 'byrna', images: ['/static/items/byrna.png']},
        {id: 'somaria', title: 'somaria', images: ['/static/items/somaria.png']},

        {id: 'cape', title: 'cape', images: ['/static/items/cape.png']},
        {id: 'mirror', title: 'mirror', images: ['/static/items/mirror.png']},
        {id: 'moonpearl', title: 'moonpearl', images: ['/static/items/moonpearl.png']},

        {id: 'boots', title: 'boots', images: ['/static/items/boots.png']},
        {id: 'gloves', title: 'gloves', images: [
          '/static/items/glove1.png',
          '/static/items/glove2.png',
          ]},
        {id: 'flippers', title: 'flippers', images: ['/static/items/flippers.png']},

        // {id: 'magic', title: 'magic', images: ['/static/items/magic.png']},
        {id: 'sword', title: 'sword', images: [
          '/static/items/sword1.png',
          '/static/items/sword2.png',
          '/static/items/sword3.png',
          '/static/items/sword4.png',
        ]},
        {id: 'shield', title: 'shield', images: [
          '/static/items/shield1.png',
          '/static/items/shield2.png',
          '/static/items/shield3.png',
        ]},
        {id: 'mail', title: 'mail', images: [
          '/static/items/mail0.png',
          '/static/items/mail1.png',
          '/static/items/mail2.png',
        ]},
        {id: 'aga1', title: 'Agahnim', images: ['/static/items/aga1.png']},
      ],
      dungeons: [

      ],
    };
  },
  computed: {
    chunkedItems() {
      let chunk = _.chunk(this.items, 12);
      console.log(chunk);
      return chunk;
    },
  },
};
</script>


<style>

</style>
