
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAHYY2S-ObX0nrMNjrMMDOKgKy3uKqTfZA",
    authDomain: "hulu-redesign.firebaseapp.com",
    projectId: "hulu-redesign",
    storageBucket: "hulu-redesign.appspot.com",
    messagingSenderId: "105309765497",
    appId: "1:105309765497:web:89aa2cf379e9814075b9a8"
  };

//   const firebaseApp = !firebase.apps.length?firebase.initializeApp(firebaseConfig);
//   const db =firebaseApp.firestore();
//   const auth = firebase.auth();
//   export{db,auth}

  const app = !firebase.apps.length?firebase.initializeApp(firebaseConfig):
  firebase.app();
  const db=app.firestore();
  const auth = firebase.auth();
  export{auth}
  export default db;