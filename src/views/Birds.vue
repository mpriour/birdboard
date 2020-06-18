<template>
  <main class="px-24 py-8 bg-green-900 h-screen">
    <Dashboard :location="state" />
  </main>
</template>

<script>
// @ is an alias to /src
import Dashboard from '@/components/Dashboard.vue'

export default {
  name: 'Birds',
  props: ['state'],
  components: {
    Dashboard
  }
}
</script>
