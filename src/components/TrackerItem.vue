<template>
  <v-flex d-block md1>
      <v-card class="item"><img width="64" height="64" v-bind:src="this.image" /></v-card>
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

<style>
.item {
  min-width: 64;
  min-height: 64;
  border-color: red;
  border-width: 1px;
  border-style: solid;
}
</style>
