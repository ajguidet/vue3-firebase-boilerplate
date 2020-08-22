<template>
  <h1>This view requires auth</h1>
  <button @click="signOut">
    Sign Out
  </button>
  <small>
    🌴🌴
  </small>
</template>

<script>
import { auth } from '../plugins/firebase'

export default {
  name: 'AuthView',

  methods: {
    signOut () {
      auth.signOut()
      this.$router.push({ name: 'HomeView' })
    }
  }
}
</script>
