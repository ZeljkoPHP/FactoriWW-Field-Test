<template>
  <div id="app">
    <div>
      <Header/>
    </div>
    <div class="field_wrapper">
      <Field v-for="item in fieldNames" :key="item" :name="item" />
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
import Field from './components/Field';
import { fieldNames } from './config';

export default {
  name: 'App',
  components: {
    Header,
    Field
  },
  data() {
    return {
      fieldNames: fieldNames
    };
  }
};
</script>

<style lang="scss">
@use 'scss/main';
</style>
