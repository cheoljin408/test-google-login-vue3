import { createApp } from 'vue'
import App from './App.vue'
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)

app.use(vue3GoogleLogin, {
    clientId: '782440341476-sqh3gbcq7c2egacram5c2m6tpe06e2fe.apps.googleusercontent.com'
})

app.mount('#app')
