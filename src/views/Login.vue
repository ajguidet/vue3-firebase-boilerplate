<template>
  <h1>
    LOGIN PAGE
  </h1>
  <div class="fake-form">
    <input
      v-model="email"
      type="email"
      placeholder="email"
    >
    <input
      v-model="password"
      type="password"
      placeholder="password"
    >
    <button
      :disabled="!inputsAreFilled"
      @click="signInWithEmailAndPassword"
    >
      Sign In
    </button>
  </div>
</template>

<script>
import { auth } from '../plugins/firebase'
import { ref, computed } from 'vue'

export default {
  name: 'LoginView',

  setup () {
    const email = ref('')
    const password = ref('')

    const inputsAreFilled = computed(() => email.value.length && password.value.length)

    return { email, password, inputsAreFilled }
  },
  methods: {
    async signInWithEmailAndPassword () {
      try {
        const loginReq = await auth.signInWithEmailAndPassword(this.email, this.password)
        if (loginReq.user) {
          this.$router.push({ name: 'AuthView' })
        }
      } catch (e) {
        console.warn(e)
      }
    }
  }
}
</script>

<style scoped>
  .fake-form {
    margin: 0 auto;
    max-width: 400px;
    display: flex;
    justify-content: center;
    flex-flow: column;
  }
  .fake-form input {
    margin: 5px 0px;
  }
</style>
