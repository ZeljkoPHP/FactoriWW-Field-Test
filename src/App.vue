<template>
  <div id="app">
    <div>
      <Header/>
    </div>
    <div class="field_wrapper">
      <Field
        v-for="(item, index) in fields"
        :key="`field-${index}`"
        :name="item"
        @fieldValueChanged="updateStatistics" />
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
      fields: fieldNames,
    };
  },
  computed: {
    statisticList: function() {
      return fieldNames.reduce((a,b)=> (a[b]=[],a),{});
    }
  },
  methods: {
    updateStatistics(obj) {
      this.statisticList[obj.fieldName].push(obj.value);
    },
  },
};
</script>

<style lang="scss">
@use 'scss/main';
</style>
