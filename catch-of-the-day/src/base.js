import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCCbTHUj_NciYD7LzS0yh5wUCTyA-0YtV0",
  authDomain: "catch-of-the-day-dbb-wng.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-dbb-wng.firebaseio.com"
})

// create rebase
const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;