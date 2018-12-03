import expensesReducer from '../../reducers/expenses';
import uuid from "uuid";
import moment from 'moment';
import {expenses} from '../fixtures/expenses';


test('should expensesReducer ', ()=> {
  const expensesReducerDefaultState = [];
  const action= {
    type: "ADD_EXPENSE",
    expense: {
      id:uuid(),
      description:"",
      note:"",
      amount:0,
      createdAt:0
    }
  }
  const result = expensesReducer(expensesReducerDefaultState, action);
  expect(result).toEqual(
    [
     {
      id:expect.any(String),
      description:"",
      note:"",
      amount:0,
      createdAt:0
     }

    ]

    
  );
    
 
});

test('should expensesReducer ', ()=> {
  
  const action= {
    type: "REMOVE_EXPENSE",
    id:"2"
    
  }
  
  const result = expensesReducer(expenses,action);
    expect(result).toEqual([expenses[0],expenses[2]]);
  });


test('should expensesReducer ', ()=> {
  
  const action= {
    type: 'EDIT_EXPENSE',
    id:"2",
    updates:{
      description: 'KitakoSalama'
    }
    
  }
  
  const result = expensesReducer(expenses,action);
    expect(result[1].description).toBe('KitakoSalama');
  });


























/*
// Expenses Reducer

const expensesReducerDefaultState = [];
export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
      
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id){
           // console.log(action.updates);
           //console.log(expense);
           //uzima nas stari objekat expense ceo i overriduje njegov jedini key amount iz updates objekta
         console.log("ovo je radilo")
         return {
           ...expense, 
           ...action.updates
         };
          
        }else {
          //problem je bio jer ovde nisam napisao return i kad naidje  na prvi dispatch 
          //gde nije mecovao id on ne vrati objekat vrati undefined i odma tu slomi aplikaciju ne dodje do 3 dispatcha koji mecuje id
          console.log("uso i ovde")
          return expense;
        }
      });
    default:
      return state;
  }
};


*/