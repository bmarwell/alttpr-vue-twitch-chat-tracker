<template>
  <div id="tracker">
  <v-container>
    <v-flex>
      <div id="bow" class="item"><img src="@/assets/items/bow0.png" /></div>
    </v-flex>
    <v-flex>
      <div id="firerod" class="item" v-bind:class="{ 'item-deactivated': isActive }"><img src="@/assets/items/firerod.png" /></div>
    </v-flex>
  </v-container>
  </div>
</template>


<script>
import Vue from 'vue';

new Vue({
  el: '#tracker',
  data: {
      item: {},
    message: '',
    validation: {
      valid: false,
    },
  },
});

export default {
  methods: {
    isActive: function() {
      return false;
    },
  },
};
</script>

<style>
.item {
}

.item-deactivated {
    opacity: 0.4;
    filter: alpha(opacity=40); /* msie */

}
</style>
