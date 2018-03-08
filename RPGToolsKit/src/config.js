import getMenuItems from './menuItems'
import locales from './locales'
import routes from './routes'
import themes from './themes'
import grants from './grants'

const config = {
  firebase_config: {
      apiKey: "AIzaSyBJK_5ZTzIy61f4L4O6H9p4iJhcamztcyQ",
      authDomain: "rpgtoolkit-13f84.firebaseapp.com",
      databaseURL: "https://rpgtoolkit-13f84.firebaseio.com",
      projectId: "rpgtoolkit-13f84",
      storageBucket: "rpgtoolkit-13f84.appspot.com",
      messagingSenderId: "993737320550"
  },
  firebase_config_dev: {
      apiKey: "AIzaSyBJK_5ZTzIy61f4L4O6H9p4iJhcamztcyQ",
      authDomain: "rpgtoolkit-13f84.firebaseapp.com",
      databaseURL: "https://rpgtoolkit-13f84.firebaseio.com",
      projectId: "rpgtoolkit-13f84",
      storageBucket: "rpgtoolkit-13f84.appspot.com",
      messagingSenderId: "993737320550"
  },
  firebase_providers: [
    'google.com',
    'facebook.com',
    'twitter.com',
    'github.com',
    'password',
    'phone'
  ],
  initial_state: {
    theme: 'dark',
    locale: 'en'
  },
  drawer_width: 256,
  locales,
  themes,
  grants,
  routes,
  getMenuItems,
  firebaseLoad: () => import('./firebase'),
}

export default config
