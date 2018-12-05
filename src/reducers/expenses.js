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
//------------------------------------------
    case 'SET_EXPENSES':
      return action.expenses;
//------------------------------------------------


    default:
      return state;
  }
};
