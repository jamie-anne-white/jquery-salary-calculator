console.log('js');
const employees = [{
        FirstName: 'Leslie',
        LastName: 'Knope',
        employeeID: '1234',
        employeeTitle: 'Deputy Directory',
        annualSalary: '65,0000'
    },
    {
        FirstName: 'Ron',
        LastName: 'Swanson',
        employeeID: '4567',
        employeeTitle: 'Director',
        annualSalary: '43,000'
    },
    {
        FirstName: 'April',
        LastName: 'Ludgate',
        employeeID: '6666',
        employeeTitle: 'Intern',
        annualSalary: '22,000'
    },
    {
        FirstName: 'Ann',
        LastName: 'Perkins',
        employeeID: '7890',
        employeeTitle: 'Nurse',
        annualSalary: '0'
    }


];

console.log(employees);


$(document).ready(readyNow);

function readyNow() {
    console.log('jquery')
    //works!
     //click event 
     $('#submit-button').on('click', addEmployee);
     
     


}

function addEmployee() {
    console.log('click in addEmployee!');
    let addEmployee = {
        firstName: $('#employee-firstname').val(),
        lastName: $('#employee-lastname').val(),
        employeeID: $('#employee-id').val(),
        employeeTitle: $('#employee-title').val(),
        annualSalary: $('#employee-annual-salary').val()
    };

    employees.push(addEmployee);
    console.log('adding employees', employees);
    

};
