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
    stressLevel: 8,
    job: {
      title: 'Software Engineer',
      company: 'Impartner'
    },
    location: {
      city: 'Orem',
      country: 'United States of America'
    }
  })
  .then(() => {
    console.log('Data is saved');
  })
  .catch((error) => {
    console.log(error);
  });

  // database.ref().set('This is my data');

  database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
  });

  database.ref('location/city').set('Dallas');

  datatbase.ref('attributes').set({
    height: 75,
    weight: 258
  })
  .then(() => {
    console.log('you added attributes obj');
  })
  .catch((error) => {
    console.log(error);
  });

  database.ref('isSingle').remove();