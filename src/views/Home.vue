<template>
  <div class="px-24 py-8">
    <Dashboard :location="state" />
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from '@/components/Dashboard.vue'

export default {
  name: 'Home',
  props: ['state'],
  components: {
    Dashboard
  }
}
</script>
