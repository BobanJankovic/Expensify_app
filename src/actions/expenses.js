import uuid from "uuid";
import database from '../firebase/firebase';

/*
expense: {
          id:expect.any(String),
          description: '',
          note: '',
          amount: 0, 
          createdAt: 0
        }

zbog parametra expense u expenses.test.js kada proveravamo toEqual ocekujemo expense objekat sa svime gore navedenim
*/ 
export const addExpense = (expense) => {
  return {
    type: "ADD_EXPENSE",
    expense
  }
};
export const startAddExpense = ( {description = '', note = '', amount = 0, createdAt=0 } = {}) => { 
  //funkcija umesto objekta vraca funkciju(koja radi 2 stvari
  // 1)pusuje nas expense objekat u firebase, a onda ako je promise uspesan dispacuje i salje u reducer )
  return (dispatch) => {
   const expense = {description, note, amount, createdAt };
   return database.ref('expenses').push(expense).then((ref)=>{
     dispatch(addExpense( {id: ref.key, description, note, amount, createdAt }));
     //add expense vrati objekat koji u sebi ima type:add_expense i objekat koji se zove expense 
     //i ima vredonsti parametara iznad
   });
   };
  };




// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

//SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

// export const startSetExpenses;

// 1. Fetch all expense data once
// 2. Parse that data into array 
// 3. Dispatch SET_EXPENSES


export const startSetExpenses = ( ) => { 
  return (dispatch) => {
   return database.ref('expenses').once('value').then((snapShot)=> {
  const expensesArray=[];
  snapShot.forEach((childSnapshot)=>{
    expensesArray.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    })
  })
  console.log(expensesArray);
   dispatch(setExpenses(expensesArray));
})
   
   };
  };

// expense removal challange

// 1.Create startRemoveExpense (same call signature as removeExpense)
// 2. Test startRemoveExpense with 'should remove expenses from firebase'
// 3. Use startRemoveExpense in EditExpensePage instead of removeExpense
// 4. Adjust EditExpensePage tests


export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});


export const startRemoveExpense = ( { id } = {}) => { 
  return (dispatch) => {
    return database.ref(`expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({ id }));
    });
   
   
  };
};

/*


// dam mu id kao parameatar onda on radi iterejsn kroz snapsjhot kad naidje na zadati id izbaci ga iz firebase-a
export const startRemoveExpense = (key) => { 
  return (dispatch) => {
     database.ref('expenses').child(key).once('value').then((snapShot)=> {
     var expense = snapShot.val();
     snapShot.key.remove();
     console.log(expense);
  dispatch(removeExpense({ key } = {}));
})

   
   };
  };

*/
