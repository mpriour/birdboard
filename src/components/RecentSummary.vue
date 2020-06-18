<template>
  <section>
    <h3>Top {{count}} Recent Species</h3>
    <div class="grid grid-cols-4 subsection">
      <p
        v-for="bird in topSpecies"
        :key="bird.code"
        @click="birdClicked(bird)"
        class="rounded bg-blue-800 text-white text-sm m-px"
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
    }
  },
  methods: {
    birdClicked(record) {
      this.$emit("select", record);
    }
  }
};
</script>

<style lang="scss" scoped>
.subsection {
  max-height: 85%;
}
</style>
