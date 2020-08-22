<template>
  <h1>
    Index view
  </h1>
  <div>
    <RouterLink
      :to="{ name: 'AuthView' }"
      class="link"
    >
      Hidden view
    </RouterLink>
    <RouterLink
      :to="{ name: 'NoAuthView' }"
      class="link"
    >
      No auth
    </RouterLink>
  </div>
</template>

<script>
export default {
  name: 'IndexView'
}
</script>

<style scoped>
  .link {
    margin: 30px;
  }
</style>