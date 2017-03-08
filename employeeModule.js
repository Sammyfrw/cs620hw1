//package requirement definition
const _ = require('underscore');

//employee data definition
var data = [
  {id:1, firstName: 'John', lastName: 'Smith'},
  {id:2, firstName: 'Jane', lastName: 'Smith'},
  {id:3, firstName: 'John', lastName: 'Doe'}
  ];

//function definitions

//lookup by id; where an id is found, that employee's object is returned
var lookupById = (pid) => {
  employee = _.findWhere(data, {id: pid});
  return employee;
};

//Lookup by lastName; where names are found that object is added to an array which is later returned
var lookupByLastName = (name) => {
  employeeList = _.where(data, {lastName: name})
  return employeeList;
};

//Add a new employee with the new first and last name; an ID is supplied
var addEmployee = (newFirstName, newLastName) => {

  //Plucking list of all ids to find max ID; set new ID to 1 if array is empty
  idList = _.pluck(data, 'id');
  if (_.isEmpty(idList)) {
    newId = 1;
  }  else {
    newId = _.max(idList) + 1;
  }

  //Create new employee and add to array
  newEmployee = {id: newId, firstName: newFirstName, lastName: newLastName};
  data.push(newEmployee);
  console.log("Successfully added new employee with data:");
  console.log(newEmployee);
};

//exporting functions
module.exports = {
  lookupById,
  lookupByLastName,
  addEmployee
}
