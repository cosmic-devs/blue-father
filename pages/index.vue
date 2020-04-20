<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="my-5 text-xl select-none text-inverse-soft">
        blue-father
      </h1>
      <h2 class="mb-5 text-inverse-soft">
        {{ $t('header.description') }}
      </h2>
      <button
        type="button"
        class="px-4 py-2 rounded bg-primary focus:outline-none text-inverse-soft focus:shadow-outline hvr-float-shadow"
        @click="switchTheme"
      >
        {{ $t('header.button') }}
      </button>
      <n-link
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        type="button"
        class="px-4 py-2 mx-1 rounded bg-primary focus:outline-none text-inverse-soft focus:shadow-outline hvr-float-shadow"
      >
        {{ locale.name }}
      </n-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, namespace } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'
const app = namespace('app')

@Component({ components: { Logo } })
export default class PageIndex extends Vue {
  @app.Mutation switchTheme!: Function

  get availableLocales() {
    if (!this.$i18n.locales) return []
    return this.$i18n.locales.filter((i: any) => i.code !== this.$i18n.locale)
  }
}
</script>

<style>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}

.hvr-float-shadow {
  @apply transition duration-300;
}
</style>
