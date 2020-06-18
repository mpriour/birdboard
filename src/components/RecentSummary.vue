<template>
  <section>
    <h3>Top {{count}} Recent Species</h3>
    <div class="grid grid-cols-4 subsection">
      <p
        v-for="bird in topSpecies"
        :key="bird.code"
        @click="birdClicked(bird)"
        class="rounded text-white text-sm m-px hover:text-black cursor-pointer"
        :class="randomBgColor()"
      >{{bird.comName}}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    obs: { type: Array, default: () => [] },
    count: { type: Number, default: 10 }
  },
  computed: {
    topSpecies() {
      if (this.obs.length > this.count) {
        return this.obs.slice(0, this.count);
      } else {
        return this.obs;
      }
    },
  },
  methods: {
    birdClicked(record) {
      this.$emit("select", record);
    },
    randomBgColor(){
      const colors = ['pink','purple','indigo','blue','teal','green','orange','red']
      const ndx = Math.floor(Math.random() * colors.length)
      return `bg-${colors[ndx]}-800 hover:bg-${colors[ndx]}-200`
    }
  }
};
</script>

<style lang="scss" scoped>
.subsection {
  max-height: 85%;
}
</style>
