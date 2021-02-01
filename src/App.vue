<template>
  <v-app>
    <app-header/>
    <v-main>
      <router-view/>
    </v-main>
    <app-footer/>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppFooter from "./components/AppFooter"
export default {
  components: {
    AppHeader, AppFooter
  }
}
</script>
