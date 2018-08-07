<template>
  <v-flex d-block md1>
      <v-card class="boss">
        <img
          v-bind:class="this.currentClass"
          v-on:click="nextState()"
          width="64"
          height="64"
          v-bind:src="this.image" />
        <img
          width="32"
          height="32"
          class="reward"
          v-bind:src="this.reward" />
        <img
          v-if="this.hasMedallion"
          width="32"
          height="32"
          class="medallion"
          v-bind:src="this.medallion" />
      </v-card>
    </v-flex>
</template>

<script>
export default {
  name: 'TrackerBoss',
  props: ['image', 'title', 'hasMedallion'],

  computed: {
    currentClass: function() {
      if (this.state === 'deactivated') {
        return 'boss-deactivated';
      }

      return '';
    },
    medallion: function() {
      return '/static/bosses/medallion' + this.medallionIndex + '.png';
    },
  },
  data: function() {
    return {
      state: 'deactivated',
      index: 0,
      medallionIndex: 0,
    };
  },
  methods: {
    nextState: function() {
      // on deactivated, image should stay at index 0 and just activate itself.
      if (this.state === 'deactivated') {
        this.state = '';

        return;
      }

      this.state = 'deactivated';
    },
  },
};
</script>

<style>
.boss {
  min-width: 64;
  min-height: 64;
  border-color: red;
  border-width: 1px;
  border-style: solid;
}

.boss-deactivated {
    opacity: 0.4;
    filter: alpha(opacity=40); /* msie */
}

img.medallion {
  width: 32px;
  height: 32px;
  background-color:transparent;
  position:absolute;
  bottom:0px;
  right:0px;
  display: flex;
}

</style>
