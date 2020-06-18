<template>
  <section class="rounded bg-white shadow-lg h-full text-lg px-8 mx-4 w-screen/4">
    <h3 class="text-2xl">Notable Details</h3>
    <div v-if="id" class="overflow-y-auto subsection">
        <article v-for="r in selected" :key="r.obsId" @click="birdClicked(r)" class="bg-gray-200 rounded-sm my-4 cursor-pointer">
          <div class="bg-black text-white flex justify-between border-bottom border-indigo-400 border-2 text-xs px-2">
            <span>{{r.userDisplayName}}</span>
            <span>{{formatDateTime(r.obsDt)}}</span>
          </div>
          <div class="text-black text-lg font-medium">{{r.howMany}} {{r.comName}}</div>
          <div class="bg-black text-xs text-white border-top border-indigo-400 border-2 text-left px-2">{{r.locName}}</div>
        </article>
    </div>
    <div v-else class="h-full flex items-center">
      <p class="text-xl text-gray-600 italic">Click on a notable location or a species to get more details</p>
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
    },
    birdClicked(record){
      this.$emit('select', record)
    }
  }
}
</script>

<style lang="scss" scoped>
.subsection{
  max-height: 85%;
}
</style>
