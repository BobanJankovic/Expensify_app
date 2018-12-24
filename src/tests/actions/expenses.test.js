import {startAddExpense, startEditExpense, addExpense, removeExpense, editExpense, setExpenses, startSetExpenses} from '../../actions/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {expenses} from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);
const uid = "thisismytestuid"
const defaultAuthState = { auth: {uid} };


beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    //daj ime objektu po id-ju , a objekat neka sadrzi ove 4 vrednosti i ubaci u firebase
    expensesData[id] = { description, note, amount, createdAt };
  });
  database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});





test('should addExpense', ()=> {
  const result = addExpense(expenses[0])
  expect(result).toEqual(
    {
      type: "ADD_EXPENSE",
      expense:expenses[0]
    }

  );
});

test('should add expenses to database and store', (done)=> {
  const store = createMockStore(defaultAuthState);
  const expenseData = {
    description:'Mouse',
    amount:3000,
    note: 'thiss',
    createdAt: 1000
  }
  //ubacili smo done da bi jest sacekao da cela funkcija odradi ovako test zavrsi pre then funkcije i vrati true iako je false
  //mozemo da cejnujemo then zato jer sam vratio funkciju firebase koja vraca promise a na promisu mogu da chainujem then
  store.dispatch(startAddExpense(expenseData)).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type:'ADD_EXPENSE',
      expense: {
        id:expect.any(String),
        ...expenseData
      }
    });
   return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    
  }).then((snapshot) => {
      
      expect(snapshot.val()).toEqual(expenseData);
       done();
    });
  
});


test('should add expenses to database and store DEFAULT VALUES', (done)=> {
  const store = createMockStore(defaultAuthState);
  
  //ubacili smo done da bi jest sacekao da cela funkcija odradi ovako test zavrsi pre then funkcije i vrati true iako je false
  store.dispatch(startAddExpense()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
     
      type:'ADD_EXPENSE',
     expense: {
          id:expect.any(String),
          description: '',
          note: '',
          amount: 0, 
          createdAt: 0
        }
      
    });
    //actions je arej objekata , u njemu je objekat po imenu expense koga smo ubacili kodom na linijji 
    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
  
  }).then((snapshot) => {
      
    expect(snapshot.val()).toEqual({
      //id:expect.any(String),
      description: '',
      note: '',
      amount: 0, 
      createdAt: 0
      });
    done();
  });
});



test('should removeExpense', ()=> {
  const result = removeExpense({ id:"abc" });
  expect(result).toEqual(
    {
  type: 'REMOVE_EXPENSE',
  id:"abc"
}
  );
  
});




//console.log(expenses); arej objekata iz fixture
test('should setup set expense action object with data', () => {
  const result = setExpenses(expenses);
  expect(result).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
  
});


test('should fetch the expenses from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });
});

test('should edit Expense', ()=> {
 const result = editExpense("abch", { amount: 500 });
  expect(result).toEqual(
    {
      id: "abch", 
      type: "EDIT_EXPENSE", 
      updates: {amount: 500}
    }

  );
  
});


test('sholud edit expense from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startEditExpense(1, 
  {
    amount:200,
    createdAt:200,
    description:"Boban",
    note:"Coban"

  })).then(() => {
    const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'EDIT_EXPENSE',
        id:1,
        updates: {
          amount:200,
          createdAt:200,
          description:"Boban",
          note:"Coban"
        }
    });
    return database.ref(`users/${uid}/expenses/1`).once('value');
    
  }).then((snapshot) => {
    expect(snapshot.val().amount).toBe(200);
  });
  done();
});



/*
// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).set(updates).then(() => {
      dispatch(editExpense(id, updates));
    });
   
   
  };
};


*/ 