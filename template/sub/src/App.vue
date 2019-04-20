<template>
  <div class="app">
    <div class="nav">
      <router-link v-for = 'item in routes' :key = 'item.name' :to='item.path' class = 'nav__item'>
        {{ item.name }}
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import './base';

export default {
   data () {
          return {
              routes: [
                  { name: '测试地址1', path: '/app-user/test' }
              ]
          }
      }
};
</script>


<style scoped>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav {
  padding: 30px;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
</style>
