import * as firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyB_9_qTGvy2ciLAoLyBs6TmJHzuNNR6WH4",
    authDomain: "expensify-1d08f.firebaseapp.com",
    databaseURL: "https://expensify-1d08f.firebaseio.com",
    projectId: "expensify-1d08f",
    storageBucket: "expensify-1d08f.appspot.com",
    messagingSenderId: "389147117128",
    appId: "1:389147117128:web:12a868ce1122d83cb43a7d",
    measurementId: "G-3L0BMQXDB6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const database = firebase.database();

  database.ref().set({
    name: 'Alex Doss',
    age: 27,
    isSingle: true,
    location: {
      city: 'Orem',
      country: 'United States of America'
    }
  });

  // database.ref().set('This is my data');

  database.ref('age').set({
    age: 28
  });

  database.ref('location/city').set('Dallas');

  datatbase.ref('attributes').set({
    height: 75,
    weight: 258
  });