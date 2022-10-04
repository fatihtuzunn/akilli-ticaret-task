import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'


/* add icons to the library */
library.add(faUserSecret,faTwitter, faFacebook, faInstagram, faYoutube,faMagnifyingGlass)

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
