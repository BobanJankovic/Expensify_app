import {addExpense, removeExpense, editExpense} from '../../actions/expenses';




test('should addExpense', ()=> {
  const result = addExpense({ description: 'Water bill', amount: 70, createdAt:150 })
  
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


