<template>
  <section>
    <h3>Top {{count}} Recent Species</h3>
    <div>
      <ul>
        <li v-for="bird in topSpecies" :key="bird.code">
          {{bird.name}} : {{bird.count}}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    obs: { type: Array, default: () => [] },
    count: {type:Number, default: 10}
  },
  computed: {
    species() {
      //summarize the obs by species
      const species = [];
      const ssort = (a, b) =>
        a.count > b.count ? -1 : a.count == b.count ? 0 : 1;
      this.obs.forEach(ob => {
        const ndx = species.findIndex(s => s.code == ob.speciesCode)
        if(ndx > -1){
          species[ndx].count += 1
        } else {
          species.push({
            code: ob.speciesCode,
            name: ob.comName,
            sciName: ob.sciName,
            count: 1
          })
        }
      })
      return species.sort(ssort)
    },
    topSpecies(){
      if(this.species.length>=this.count){
        return this.species.slice(0,this.count)
      } else {
        return this.species
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
