//expenses-arej sa objektima
//kada ga exportujem default u importu mogu da napisem ime koje god hocu.

export default (expenses, {text, sortBy, startDate, endDate})=> {
  return expenses.filter((expense)=>{
    const startDateMatch= typeof startDate !== "number" || expense.createdAt >= startDate;
    const endDateMatch= typeof startDate !== "number" || expense.createdAt <= endDate;
    const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b)=>{
    if (sortBy==="date"){
      return a.createdAt < b.createdAt ? 1 : -1 ;
    } else if (sortBy==="amount") {
      return a.amount > b.amount ? 1 : -1 ;
    }

  });
}

//[1,4] ako uslov vrati -1 onda prvi broj dobija manji index i ide pre drugog i dobijamo rastucni niz
//a.amount > b.amount ? 1 : -1 ; za ovaj slucaj
//ako je zadati slucaj false prvi brooj ce da dobije manji index i gurace ga napred
//Ko je ranije napravljen neka ide prvi 
