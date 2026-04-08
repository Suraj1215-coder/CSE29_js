let employees [];
function addEmployee(){
    let name = document.getElementById("name").ariaValueMax;
    let id = document.getElementById("id").ariaValueMax;
    let salary = Number(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;

    employees.push({name,id,salary,dept});
    alert("employee Added!");
}

function displayAll(){
    let out="";
    employees.array.forEach(element => {
        
    });
}