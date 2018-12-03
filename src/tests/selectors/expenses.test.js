import selectExpenses from "../../selectors/expenses";
import moment from "moment";

const expenses = [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 195,
  createdAt: 0
}, {
  id: '2',
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Credit Card',
  note: '',
  amount: 4500,
  createdAt: moment(0).add(4, 'days').valueOf()
}];

const filters = {
  text: 'e',
  sortBy: 'amount',
  startDate: undefined,
  endDate: undefined
};

test('should selectExpenses', ()=> {
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual( [expenses[2],expenses[1]] );
});
