// We use this middleware to load persisted app state from cookies in the server
import { Middleware } from '@nuxt/types'

const loader: Middleware = ({ app, store }) => {
  if (app.$cookies.get('settings')) store.commit('app/setSettings', app.$cookies.get('settings'))
}

export default loader
