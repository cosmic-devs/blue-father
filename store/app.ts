import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { $cookies, defaultOptions } from '~/utils/cookies-universal-initializer'

@Module({
  name: 'app',
  namespaced: true,
  stateFactory: true
})
export default class App extends VuexModule {
  settings: Settings = {
    theme: 'light'
  }

  @Mutation setSettings(persisted: Settings) {
    this.settings = persisted
  }

  @Mutation switchTheme() {
    this.settings.theme = this.settings.theme === 'light' ? 'dark' : 'light'
    $cookies.set('settings', this.settings, defaultOptions)
  }

  get theme(): string {
    return 'theme-' + this.settings.theme
  }
}
