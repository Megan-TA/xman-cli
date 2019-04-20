<template>
  <div id="app">
    <div id="nav">
       <router-link
          v-for="r in routes"
          :key="r.name"
          :to="r.name"
          :class="{ active: r.isActive }"
          class="link"
          >{{ r.title }}</router-link
        >
    </div>
    <router-view/>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                routes: [
                    { name: '/app-user', title: 'app-user' }
                ]
            }
        }
    }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.link {
  margin-right: 20px;
}
</style>
