import VuexPersistence from 'vuex-persist'

export default ({ store, app }: any) => {
  // @ts-ignore
  window.onNuxtReady(() => {
    new VuexPersistence({
      storage: app.$localForage,
      asyncStorage: true,
      modules: ['app']
    }).plugin(store)
  })

  const waitForStorageToBeReady: Function = async (_from: any, _to: any, next: Function) => {
    await store.restored
    next()
  }
  app.router.beforeEach(waitForStorageToBeReady)
}
