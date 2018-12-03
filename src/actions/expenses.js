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



export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});
// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});


