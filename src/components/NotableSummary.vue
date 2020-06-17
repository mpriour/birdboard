<template>
  <section v-if="byLocation">
    <h3>Notable Observation Locations</h3>
    <div>
      <ul>
        <li v-for="county in topCounties" :key="county.code" @click="selectItem(county.code)">
          {{county.name}} County, {{county.state}} : {{county.count}}
        </li>
      </ul>
    </div>
  </section>
  <section v-else>
    <h3>Notable Observation Species</h3>
    <div>
      <ul>
        <li v-for="bird in topSpecies" :key="bird.code" @click="selectItem(bird.code)">
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
    count: {type:Number, default: 10},
    byLocation: {type: Boolean, default: false}
  },
  methods: {
    selectItem(code){
      this.$emit('select', code, this.byLocation)
    }
  },
  computed: {
    counties() {
      //summarize the obs by county
      const counties = [];
      const csort = (a, b) =>
        a.count > b.count ? -1 : a.count == b.count ? 0 : 1;
      this.obs.forEach(ob => {
        const ndx = counties.findIndex(c => c.code == ob.subnational2Code);
        if (ndx > -1) {
          counties[ndx].count += 1;
        } else {
          counties.push({
            code: ob.subnational2Code,
            name: ob.subnational2Name,
            state: ob.subnational1Name,
            count: 1
          });
        }
      });
      return counties.sort(csort);
    },
    topCounties(){
      if(this.counties.length>=this.count){
        return this.counties.slice(0,this.count)
      } else {
        return this.counties
      }
    },
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
