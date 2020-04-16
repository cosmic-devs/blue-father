// We use this middleware to load persisted app state from cookies in the server
export default function({ app, store }: any) {
  if (app.$cookies.get('settings')) store.commit('app/setSettings', app.$cookies.get('settings'))
}
