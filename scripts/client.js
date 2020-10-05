console.log('js');
const employees = [
    //     firstName: 'Leslie',
    //     lastName: 'Knope',
    //     employeeID: '1234',
    //     employeeTitle: 'Deputy Director',
    //     annualSalary: '65,0000'
    // },
    
    //     firstName: 'Ron',
    //     lastName: 'Swanson',
    //     employeeID: '4567',
    //     employeeTitle: 'Director',
    //     annualSalary: '43,000'
    // },
    // {
    //     firstName: 'April',
    //     lastName: 'Ludgate',
    //     employeeID: '6666',
    //     employeeTitle: 'Intern',
    //     annualSalary: '22,000'
    // },
    // {
    //     firstName: 'Ann',
    //     lastName: 'Perkins',
    //     employeeID: '7890',
    //     employeeTitle: 'Nurse',
    //     annualSalary: '0'
    ];

console.log(employees);
// employees.push(document.getElementById("employees"));
// let element_to_remove = document.getElementById("employees");
// var index = $.inArray(element_to_remove, employees);
// if (index > -1) {
//   employees.splice(index, 1);
// }



$(document).ready(readyNow);

function readyNow() {
    console.log('jquery')
    //works!
    //click event 
    $('#submit-button').on('click', addEmployee);
    //delete button event
    $('table').on('click', '.deleteBtn', deleteEmployee);

};

function deleteEmployee() {
    console.log('click in deleteEmployee');   
    $(this).closest('tr').remove();


};


function addEmployee() {
    console.log('click add!');
    let addEmployee = {
        firstName: $('#employee-firstname').val(),
        lastName: $('#employee-lastname').val(),
        employeeID: $('#employee-id').val(),
        employeeTitle: $('#employee-title').val(),
        annualSalary: $('#employee-annual-salary').val()
    }

    if (addEmployee.firstName === '' || addEmployee.lastName === '' || addEmployee.employeeID === '' || addEmployee.employeeTitle === '' || addEmployee.annualSalary === '') {
        alert('Please enter all fields.')
    } else {

        employees.push(addEmployee);

        appendItemsToDom();
        $('#employee-firstname').val('');
        $('#employee-lastname').val('');
        $('#employee-id').val('');
        $('#employee-title').val('');
        $('#employee-annual-salary').val('');

   }
}


function appendItemsToDom() {
//eventually empty the inputs
$('tbody').empty();


    for (let newEmployee of employees) {
        $('tbody').append(`<tr><
    <td>${newEmployee.firstName}</td>
    <td>${newEmployee.lastName}</td>
    <td>${newEmployee.employeeID}</td>
    <td>${newEmployee.employeeTitle}</td>
    <td>$${newEmployee.annualSalary}</td>
    <td> <button class ="deleteBtn">Delete</button> </td></tr>
    `)
    }
    
    let totalSalaryCost = 0;
        for (let i = 0; i < employees.length; i++) {
            totalSalaryCost += employees[i].annualSalary / 12;
            console.log('in totalSalaryCost', totalSalaryCost);
            $('#monthly-total').text(`${totalSalaryCost}`);

            if (totalSalaryCost > 20000) {
                $('#monthly-total').addClass('overBudget');
            } else {
                $('#monthly-total').removeClass('overBudget');
            }


        }
};
