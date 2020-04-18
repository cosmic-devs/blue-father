<template>
  <div :class="theme" class="bg-light">
    <!-- We use opacity change technique for transitioning gradient backgrounds -->
    <div :class="{ 'opacity-0': theme === 'theme-light' }" class="bg-dark"></div>
    <nuxt class="relative z-10" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, namespace } from 'nuxt-property-decorator'
const app = namespace('app')

@Component({
  name: 'LayoutDefault',
  middleware: 'loader',
  head() {
    return this.$nuxtI18nSeo()
  }
})
export default class extends Vue {
  @app.Getter theme!: string
}
</script>

<style>
html {
  font-size: 16px;
  @apply font-sans antialiased;
}
</style>
