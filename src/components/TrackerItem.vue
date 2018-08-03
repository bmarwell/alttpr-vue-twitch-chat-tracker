<template>
  <v-flex>
      <div class="item"><img v-bind:src="this.image" /></div>
    </v-flex>
</template>

<script>
export default {
  name: 'TrackerItem',
  props: ['image', 'title'],

  computed: {
  },
};
</script>
