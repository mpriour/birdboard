<template>
  <div class="hello">
    <bird-fetch v-slot="{obs}" :notable="true" :max="100" :location="location">
      <div class="flex">
        <notable-summary :by-location="true" :obs="obs" @select="handleSelect"></notable-summary>
        <notable-summary :obs="obs" @select="handleSelect"></notable-summary>
        <notable-details :obs="obs" :id="selectedId" :byLocation="selectedLocation"></notable-details>
      </div>
    </bird-fetch>
    <bird-fetch v-slot="{obs}" :max="100" :location="location">
      <recent-summary :count="50" :obs="obs"></recent-summary>
    </bird-fetch>
  </div>
</template>

<script>
import BirdFetch from './BirdFetch.vue'
import NotableSummary from './NotableSummary.vue'
import RecentSummary from './RecentSummary.vue'
import NotableDetails from './NotableDetails.vue'

export default {
  name: 'Dashboard',
  props: {
    location: {type:String, default: 'TX'}
  },
  components: {BirdFetch, NotableSummary, RecentSummary, NotableDetails},
  data(){
    return {
      selectedId: null,
      selectedLocation: false
    }
  },
  methods: {
    handleSelect(code, byLocation){
      this.selectedId = code
      this.selectedLocation = byLocation
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  display: flex;
  margin: auto;
  flex-direction: column;
}
</style>
