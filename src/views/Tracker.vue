<template>
  <div id="tracker">
    <v-container>
      <tracker-item
        v-for="item in items"
        v-bind:key="item.id"
        v-bind:title="item.title"
        v-bind:image="item.images[0]"
      ></tracker-item>
    </v-container>
  </div>
</template>


<script>
import TrackerItem from '@/components/TrackerItem.vue';

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
        {id: 'bow', title: 'bow', images: [
          '/static/items/bow0.png',
          '/static/items/bow1.png',
          '/static/items/bow2.png',
          '/static/items/bow3.png',
        ]},
      ],
    };
  },
};
</script>


<style>
.item-deactivated {
    opacity: 0.4;
    filter: alpha(opacity=40); /* msie */
}
</style>
