import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' // Vue Persistence Library

const store = createPinia()
store.use(piniaPluginPersistedstate)
export default store
