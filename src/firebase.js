import Firebase from 'firebase/app'
import 'firebase/auth'

const app = Firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING,
    appId: process.env.REACT_APP_FIREBASE_APPID,
})

export const auth = app.auth();
export default app