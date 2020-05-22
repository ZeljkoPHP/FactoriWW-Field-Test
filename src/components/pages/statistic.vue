<template>
  <div>
    <ul>
        <li v-for="(field, index) in statisticList" :key="index">
            {{ index }}: 
            <span v-for="(fieldValue, index) in field" :key="`field-${index}`">
                {{ fieldValue }} ,
            </span>
        </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    statisticList: Object,
  },
}
</script>
