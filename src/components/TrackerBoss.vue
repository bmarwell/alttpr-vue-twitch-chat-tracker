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
          v-on:click="nextReward()"
          v-bind:src="this.reward" />
        <img
          v-if="this.hasMedallion"
          width="32"
          height="32"
          class="medallion"
          v-on:click="nextMedallion()"
          v-bind:src="this.medallion" />
      </v-card>
    </v-flex>
</template>

<script>
export default {
  name: 'TrackerBoss',
  props: ['image', 'title', 'hasMedallion'],

  data: function() {
    return {
      state: 'deactivated',
      index: 0,
      rewards: [
        '/static/bosses/reward0.png',
        '/static/bosses/reward1.png',
        '/static/bosses/reward2.png',
        '/static/bosses/reward3.png',
        '/static/bosses/reward4.png',
      ],
      medallionIndex: 0,
      medallions: [
        '/static/bosses/medallion0.png',
        '/static/bosses/medallion1.png',
        '/static/bosses/medallion2.png',
        '/static/bosses/medallion3.png',
      ],
    };
  },
  computed: {
    currentClass: function() {
      if (this.state === 'deactivated') {
        return 'boss-deactivated';
      }

      return '';
    },
    medallion: function() {
      return this.medallions[this.medallionIndex];
    },
    reward: function() {
      return this.rewards[this.index];
    },
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
    nextReward: function() {
      if (this.index == this.rewards.length - 1) {
        this.index = 0;
        return;
      }

      this.index++;
    },
    nextMedallion: function() {
      if (this.medallionIndex == this.medallions.length - 1) {
        this.medallionIndex = 0;

        return;
      }

      this.medallionIndex++;
    },
  },
};
</script>

<style>
.boss {
  min-width: 64px;
  min-height: 64px;
  border-color: red;
  border-width: 1px;
  border-style: solid;
}

.boss-deactivated {
    opacity: 0.4;
    filter: alpha(opacity=40); /* msie */
}

img.reward {
  width: 32px;
  height: 32px;
  background-color: transparent;
  position: absolute;
  bottom: 0px;
  left: 0px;
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
