<template>
  <p class="text-right">
    {{ secToMin(Math.round(elapsed / 1000)) }}
  </p>
</template>

<script>

export default {

  name: 'Timer',
  
  data: () => ({
    timer: null,
    time: '',
    elapsed: 0
  }),
  created () {
    this.time = Date.now();
  },
  mounted () {
    this.timer = setInterval(() => this.tick(), 1000);
  },
  unmounted () {
    clearInterval(this.timer);
  },
  methods: {
    tick () {
      this.elapsed = new Date() - this.time;
      this.$emit('timer-tick', this.elapsed);
    },
    secToMin(seconds) {
      const minuteDivisor = seconds % (60 * 60)
      const minutes = Math.floor(minuteDivisor / 60)
      const secondDivisor = minuteDivisor % 60
      let remSecs = Math.ceil(secondDivisor)

      switch (seconds) {
        case seconds < 10:
          return `0:0${seconds}`
        case seconds < 60:
          return `0:${seconds}`
        default:
          if (remSecs < 10 && remSecs > 0) remSecs = `0${remSecs}`
          if (remSecs === 0) remSecs = `${remSecs}0`
          return `${minutes}:${remSecs}`
      }
    }
  },
}
</script>
