<template>
  <footer>
    <p>Copyright &copy; 2023 </p>
    <router-link to="/AppAbout">About </router-link>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
a {
  color: #333;
}
footer {
  margin-top: 30px;
  text-align: center;
}
</style>