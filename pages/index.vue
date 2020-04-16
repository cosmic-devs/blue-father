<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="my-5 text-xl select-none text-inverse-soft">
        blue-father
      </h1>
      <h2 class="mb-5 text-inverse-soft">
        Online study space for Urantia book readers.
      </h2>
      <button
        type="button"
        class="px-4 py-2 rounded bg-primary focus:outline-none text-inverse-soft focus:shadow-outline"
        @click="switchTheme"
      >
        switch theme
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, namespace } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'
const app = namespace('app')

@Component({ components: { Logo }, loading: false })
export default class PageIndex extends Vue {
  @app.Mutation switchTheme!: Function
}
</script>

<style>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>
