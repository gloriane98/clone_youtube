import firebase from 'firebase/compat/app'
import "firebase/compat/auth"



const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_APIKEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_APP_APPID
};

firebase.initializeApp(firebaseConfig)

export const auth= firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')

export const signInWithGoogle= async ()=>{
  const response = await auth.signInWithPopup(provider);
 
  if(response) {
    window.location.href='/home';
    localStorage.setItem('image',response.additionalUserInfo.profile.picture)
    localStorage.setItem('token', response.credential.accessToken)
  }
}

export default firebase.auth();

