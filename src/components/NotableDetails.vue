<template>
  <section>
    <h3>Observation Details</h3>
    <div>
      <ul>
        <li v-for="r in selected" :key="r.obsId">
          <div>{{r.howMany}} {{r.comName}}</div>
          <div>Sighted by: {{r.userDisplayName}}</div>
          <div>On: {{formatDateTime(r.obsDt)}}</div>
          <div>At: {{r.locName}}</div>
        </li>
      </ul>
    </div>
    </section>
</template>

<script>
const dtFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
export default {
  props:{
    byLocation: {type: Boolean, default: false},
    id: {type: String, default: ''},
    obs: {type: Array, default: ()=>[]}
  },
  computed: {
    selected(){
      const idField = this.byLocation ? 'subnational2Code' : 'speciesCode'
      return this.obs.filter(ob => ob[idField] == this.id)
    }
  },
  methods: {
    formatDateTime(val){
      const d = new Date(val)
      return dtFormatter.format(d)
    }
  }
}
</script>
