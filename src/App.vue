<template>
  <div id="app">
    <div>
      <div class="header">
        <img src="./assets/factoryWW.jpg" alt="Logo image" class="logo_img">
        <p @click="goToStats">Statistic</p>
     </div>
    </div>
    <router-view
      @updateFields="saveFieldsValues"
      @fieldState="fieldState"
      :fieldsStates="fields"
      :statisticList="statistics" />
  </div>
</template>
<script>
import { fieldNames } from './config';
export default {
  data() {
    return {
      statistics: fieldNames.reduce((a,b)=> (a[b]=[] ,a),{}),
      fields: fieldNames.reduce((a,b)=> (a[b]=true ,a),{}),
    };
  },
  methods: {
    fieldState(field) {
      this.fields[field.name] = field.started;
    },
    goToStats() {
      this.$router.push('/statistic');
    },
    saveFieldsValues(field) {
      this.statistics[field.name].push(field.value);
    },
  },
}
</script>
<style lang="scss">
@use 'scss/main';
</style>
