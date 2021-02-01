<template>
  <div>
    <v-footer
      v-bind="localAttrs"
      :padless="padless">
      <h1>Footer Information</h1>
    </v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      padless: false,
      variant: 'default',
    }
  },
  computed: {
    localAttrs () {
      const attrs = {}
      if (this.variant === 'default') {
        attrs.absolute = false
        attrs.fixed = false
      } else {
        attrs[this.variant] = true
      }
      return attrs
    }
  }
}
</script>

<style scoped>
</style>