// let x = {
//   firstName: "Ram",
//   lastName: "Suryavanshi",
// };
function getFullName(age) {
  console.log(this.firstName + " " + this.lastName + " " + age);
  return this.firstName + " " + this.lastName + " " + age;
}
// console.log(x.getFullName());

let y = {
  firstName: "Sita",
  lastName: "Raman",
};
// it borrows a function
getFullName.call(y, 31);
getFullName.apply(y, [32]);

let bindData = getFullName.bind(y, 33);
bindData();
