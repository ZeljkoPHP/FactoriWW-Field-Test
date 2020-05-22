<template>
  <div>
    <div class="field_wrapper">
      <Field
        v-for="item in fields"
        :key="item"
        :name="item"
        :fieldState="fieldsStates[item]"
        :existingStats="statisticList[item]"
        @fieldState="fieldState"
        @fieldValueChanged="updateStatistic" />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Field from '../Field';
import { fieldNames } from '../../config';

export default {
  props: {
    statisticList: Object,
    fieldsStates: Object,
  },
  components: {
    Field,
  },
  data() {
    return {
      fields: fieldNames
    };
  },
  methods: {
    fieldState(field) {
      this.$emit('fieldState', field);
    },
    updateStatistic(field) {
      this.$emit('updateFields', {
        name: field.name,
        value: field.value,
      });
    },
  },
}
</script>
