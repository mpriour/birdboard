<template>
  <div id="app">
    <nav id="nav" class="h-12 bg-yellow-700 flex justify-between text-lg pt-4 px-8">
      <router-link to="/">Select State</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: lightgray;
    }
  }
}
</style>
