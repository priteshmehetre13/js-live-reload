function getFullName(homeTown){
  return `${this.firstName} ${this.lastName} lives in ${homeTown}`;
}


var y = {
  firstName:"Pritesh",
  lastName: "Mehetre"
}

getFullName.call(y,'Hadgaon');
getFullName.apply(y,['Hadgaon']);

let printName = getFullName.bind(y,"Hadgaon");

printName();