<template>
  <div class="field">
      <div class="field_name">
        {{ name }}
      </div>
      <div class="field_content">
        <div class="field_errow" v-if="increase">
          <img src="../assets/arrow-up.jpg" class="errow_img"/>
        </div>
        <div class="field_errow" v-else>
          <img src="../assets/arrow-down.jpg" class="errow_img"/>
        </div>
        <div class="field_value">
          {{ value }}
        </div>
      </div>
      <button class="button_start" v-if="fieldState" v-on:click="stop()">Stop</button>
      <button class="button_stop" v-else v-on:click="start()">Start</button>
  </div>
</template>

<script>
export default {
  name: 'Field',
  props: {
    name: String,
    existingStats: Array,
    fieldState: Boolean,
  },
  data () {
    return {
      value: 3,
      interval: null,
      increase: true,
    };
  },
  methods: {
    fieldStatusChange(started) {
      this.$emit('fieldState', {
        name: this.name,
        started: started,
      });
    },
    start() {
      this.interval = setInterval(() => {
        this.fieldStatusChange(true);
        let v = this.generateValue();
        const sign = this.generateValue();
        if (sign > 1.4) {
          this.increase = true;
        } else {
          v = v * -1;
          this.increase = false;
        }
        this.value = Math.round((this.value + v) * 10) / 10;
        this.$emit('fieldValueChanged', {
          name: this.name,
          value: this.value,
        });

      }, 2000);
    },
    stop() {
      this.fieldStatusChange(false);
      clearInterval(this.interval);
    },
    generateValue() {
      return Math.round((Math.random() + 1) * 10) / 10;
    }
  },
  mounted() {
    if( this.existingStats.length > 0 ){
      this.value =  this.existingStats[this.existingStats.length - 1];
    }
    console.log(this.fieldState)
    if( this.fieldState ){
      this.fieldStatusChange(true);
      this.start();
    }
  },
};
</script>