import * as firebase from 'firebase';


const config = {
  apiKey: "AIzaSyD2R8ZgGPEvaccZmgWz12uqP1EFRSlwOP4",
  authDomain: "expensify-925c6.firebaseapp.com",
  databaseURL: "https://expensify-925c6.firebaseio.com",
  projectId: "expensify-925c6",
  storageBucket: "expensify-925c6.appspot.com",
  messagingSenderId: "611814291707"
};

  firebase.initializeApp(config);

  const database = firebase.database();

   export { firebase, database as default };


//To read data at a path and listen for changes, use the on()

database.ref('expenses').on('value', function(snapShot) {
  const expenses=[];
  snapShot.forEach((childSnapshot)=>{
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    })
  })
  //console.log(expenses);
});

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  //console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  //console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
  //console.log(snapshot.key, snapshot.val());
});




/*
database.ref('expenses').push({
  description: "tv-waeeesh",
  note: "Wasdddhing tv-s",
  amount: 3704440,
  createdAt: 25488000
})



------------------------------------------------------------------------------------
Dec 2nd, 2018
1
firebase.js:50 -LSk7ZrmTDmBgx6Ok8P8 {amount: 3704440, createdAt: 25488000, description: "tv-waeeesh", note: "Wasdddhing tv-s"}

2
firebase.js:50 -LSjxAUTKScdweFvJK-j {amount: 3500, createdAt: 254588000, description: "Car-wash", note: "Washing cars"}
firebase.js:50 -LSjxAUsFxR97p4wxOrG {amount: 1500, createdAt: 2228000, description: "Bike-wash", note: "Washing bikes"}
firebase.js:50 -LSjxAUuQX2_YBRjL0dH {amount: 7500, createdAt: 774588000, description: "Truck-wash", note: "Washing truckss"}
3
firebase.js:35 (4) [{…}, {…}, {…}, {…}]

------------------------------------------------------------------------------------
database.ref('expenses').push({
  description: "Tracktor-wash",
  note: "Washing tractors",
  amount: 3700,
  createdAt: 2588000
})
database.ref('expenses').push({
  description: "tv-wash",
  note: "Washing tv-s",
  amount: 3700,
  createdAt: 2588000
})



database.ref('expenses').once('value').then((snapShot)=> {
  const expenses=[];
  snapShot.forEach((childSnapshot)=>{
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    })
  })
  console.log(expenses);
})






database.ref('expenses').push({
  description: "Car-wash",
  note: "Washing cars",
  amount: 3500,
  createdAt: 254588000
})

database.ref('expenses').push({
  description: "Bike-wash",
  note: "Washing bikes",
  amount: 1500,
  createdAt: 2228000
})


database.ref('expenses').push({
  description: "Truck-wash",
  note: "Washing truckss",
  amount: 7500,
  createdAt: 774588000
})












database.ref('expenses/-LSemev6HBQHIVF5OXXS').once('value').then((snapshot) => {
      const val = snapshot.val(); 
      console.log(val);
    })
    



let expense = [];
var ref = firebase.database().ref("expense");
ref.once("value")
  .then(function(snapshot) {
   snapshot.forEach(function(childSnapshot) {
     expense.push({
         id:childSnapshot.key,
         ...childSnapshot.val()
        }
      )
   })
     console.log(expense);
    
  });


var query = firebase.database().ref("users").orderByKey();
query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
      var key = childSnapshot.key;
      // childData will be the actual contents of the child
      var childData = childSnapshot.val();
  });
});

*/ 


 // database.ref('age').set(27);
  //database.ref('attributes').set({
    //wiight:130,
    //height:200
  //});
//let vrednost = [];
/*

database.ref().on('value', (snapshot) => {
vrednost.push(snapshot.val());
});
let obj = vrednost[0];
console.log(obj.surname);

  database.ref().set({
    name: 'Boban Jankovic',
    surname:'Jnakovic',
    age:25
  }).then(()=>{
    console.log('passed');
  }).catch((e)=>{
    console.log('notpassed',e);
  })
  

*/ 