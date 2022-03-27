import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import '@fortawesome/fontawesome-free/js/all'
import './assets/styles/colors.min.css'
import './assets/styles/style.css'

//Create state storage
const store = createStore({
  state () {
    return {
      mainColor: "orange"
    }
  },
  getters :{
    mainColor : state => {
        return state.mainColor
    }
  },
  mutations: {
    mainColor (state, color) {
        state.mainColor = color
    }
  }
})

//Start up of Application
const app = createApp(App)
app.use(BootstrapVue3)
app.use(store)
app.use(router)
app.mount('#app')
