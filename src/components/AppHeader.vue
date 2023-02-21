<template>
  <header>
    <h1>{{ title }}</h1> 
    <AppButton v-show="homePage"
    @btn-click="$emit('toggle-add-task')"
    :text="showAddTask ? 'Close' : 'Add Task'" 
    :color="showAddTask ? 'red' : 'green'"
    />
  </header>
</template>

<script>
import AppButton from './AppButton.vue';

export default {
  name: 'AppHeader', 
  props: {
    title: String,
    showAddTask: Boolean
  },
  components: {
    AppButton
  },
  computed: {
    homePage() {
      if(this.$route.path == '/') {
        return true
      } 
      else {
        return false
      }
    }
  }
}
</script>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
</style>
