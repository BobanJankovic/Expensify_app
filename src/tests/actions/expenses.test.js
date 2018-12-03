import {startAddExpense, addExpense, removeExpense, editExpense} from '../../actions/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {expenses} from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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
  const store = createMockStore({});
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
   return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    
  }).then((snapshot) => {
      
      expect(snapshot.val()).toEqual(expenseData);
       done();
    });
  
});


test('should add expenses to database and store DEFAULT VALUES', (done)=> {
  const store = createMockStore({});
  
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
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  
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



test('should editExpense', ()=> {
 const result = editExpense("abch", { amount: 500 });
  expect(result).toEqual(
    {
      id: "abch", 
      type: "EDIT_EXPENSE", 
      updates: {amount: 500}
    }

  );
  
});


