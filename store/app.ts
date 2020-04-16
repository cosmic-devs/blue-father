import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
// @ts-ignore
import Cookies from 'js-cookie'

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
    Cookies.set('settings', this.settings, { expires: 365 })
  }

  get theme(): string {
    return 'theme-' + this.settings.theme
  }
}
