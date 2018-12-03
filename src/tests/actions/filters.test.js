import { setStartDate, setEndDate, sortByDate, setTextFilter } from "../../actions/filters";
import moment from "moment";


test('should setStartDate', ()=> {
    const time=moment();
  const result = setStartDate(time);
  expect(result).toEqual(
    {
     type: 'SET_START_DATE',
     startDate:time
    }

  );
});


test('should sortByDate', ()=> {
const result = sortByDate();
  expect(result).toEqual(
    {
     type: 'SORT_BY_DATE'
    }

  );
});




test('should setTextFilter ', ()=> {
const result = setTextFilter("blablacar");
  expect(result).toEqual(
    {
      type: "SET_TEXT_FILTER",
      text: "blablacar"
    }

  );
});





