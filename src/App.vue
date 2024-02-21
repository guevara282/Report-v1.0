<template>
  <div>
    <webapp-header />
  </div>
  <nav>
    <router-link to="/general">General</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header,
footer {
  background-color: #42b983; /* Color verde de Vue.js */
  padding: 10px;
  color: white; /* Texto blanco */
}

.center-content {
  max-width: 600px; /* Ancho máximo del contenido */
  margin: 0 auto; /* Centrar en el medio */
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
