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
        if(expense.id===action.id){
           // console.log(action.updates);
           //console.log(expense);
           //uzima nas stari objekat expense ceo i overriduje njegov jedini key amount iz updates objekta
         return {...expense, ...action.updates}
          
        }else {
          expense;
        }
      });
    default:
      return state;
  }
};
