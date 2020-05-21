<template>
  <div class="field">
      <div class="field_name">
        {{ name }}
      </div>
      <div class="field_content">
        <div class="field_errow">
          <p>^</p>
        </div>
        <div class="field_value">
          <p>3</p>
        </div>
      </div>
      <button @:click="stop()">Stop</button>
      <button @:click="start()">Start</button> 
  </div>
</template>

<script>
export default {
  name: 'Field',
  props: {
    name: String
  },
}
</script>