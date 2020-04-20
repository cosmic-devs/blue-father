import { Plugin } from '@nuxt/types'
import { initializeCookies } from '~/utils/cookies-universal-initializer'

const accessor: Plugin = ({ app }) => {
  initializeCookies(app.$cookies)
}

export default accessor
