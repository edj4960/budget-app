<template>
  <div id="app">
    <div id="nav">
      <h1>Budget++</h1>
      <router-link to="/">Home</router-link>
      <router-link to="/categories">Categories</router-link>
      <router-link to="/login">Login</router-link>
    </div>
    <router-view/>
    <footer>
      <a href="https://github.com/edj4960/budget-app">Github Repo</a>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px 20px;
  background-color: #42b983;
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
}

#nav h1 {
  margin: 0 20px 0 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-top: 9px;
  margin-right: 10px;
}

#nav a.router-link-exact-active {
  color: black;
}

footer {
    background-color: #42b983;
    width: 100%;
    text-align: center;
    padding: 10px 0;
    position: fixed;
    bottom: 0;
}
</style>
