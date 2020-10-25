import * as firebase from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyDMSHaWU2EzbQ-2LpMARfiG2tPxboXZACE",
    authDomain: "nwitter-learning.firebaseapp.com",
    databaseURL: "https://nwitter-learning.firebaseio.com",
    projectId: "nwitter-learning",
    storageBucket: "nwitter-learning.appspot.com",
    messagingSenderId: "588801109564",
    appId: "1:588801109564:web:357628e835f34a23329d39"
  };

export default firebase.initializeApp(firebaseConfig);
