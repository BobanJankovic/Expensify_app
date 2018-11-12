//expenses-arej sa objektima
//kada ga exportujem default u importu mogu da napisem ime koje god hocu.

export default (expenses, {text, sortBy, startDate, endDate})=> {
  return expenses.filter((expense)=>{
    const startDateMatch= typeof startDate !== "number" || expense.createdAt >= startDate;
    const endDateMatch= typeof startDate !== "number" || expense.createdAt <= endDate;
   // figure out if expense.description has the text variable string inside of it
    const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b)=>{
    if (sortBy==="date"){
      //Ko je ranije napravljen neka ide prvi 
      //koja god 2 objekta da poredim onaj koji bude veci ide prvi ostali idu ispod njega
      //ako zamenim -1 i 1 onda koji god bude veci guraj ga na kraj i dobijamo rastucu vrednost
      return a.createdAt < b.createdAt ? 1 : -1 ;
    } else if (sortBy==="amount") {
      //Ko ima veci amount neka ide prvi
      return a.amount > b.amount ? 1 : -1 ;
    }

  });
}