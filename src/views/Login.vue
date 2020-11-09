<template>
<div id="wrapper">
  <h2>Login</h2>
  <div id='inputs'>
    <h3>Username</h3>
    <input v-model="username" placeholder="jones324"/>
    <h3>Password</h3>
    <input v-model="password" placeholder="000" />
  </div>
  <button @click="login">Submit</button>
</div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      let success = false
      this.$root.$data.users.forEach(u => {
        if (u.username === this.username && u.password === this.password)
          success = true
      })

      if (success)
        alert('You are logged in!')
      else
        alert('Login failed')
    }
  }
}
</script>