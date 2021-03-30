import * as firebase from "firebase"
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCX5fER6n3qEGq1jMoq6y2MHg15ku23IUY",
  authDomain: "shop-app-c4467.firebaseapp.com",
  databaseURL: "https://shop-app-c4467-default-rtdb.firebaseio.com",
  projectId: "shop-app-c4467",
  storageBucket: "shop-app-c4467.appspot.com",
  messagingSenderId: "822299292105",
  appId: "1:822299292105:web:dc26db63d94d2dc4be7818",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
