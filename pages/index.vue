<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="my-5 text-xl">
        blue-father
      </h1>
      <h2>
        Online study space for Urantia book readers.
      </h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'

@Component({
  components: { Logo }
})
export default class PageIndex extends Vue {}
</script>

<style>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>
