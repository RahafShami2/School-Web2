var students = [];
document.getElementById('submit').addEventListener('click', (e) => {
	e.preventDefault()
	let x = 20;
	let nameInputEl = document.getElementById('name');
	let idInputEl = document.getElementById('idNumber');
	let gdpaInputEl = document.getElementById('gdpa');

	// Validation for input
	inputValidation(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

	// insert student
	insertStudent(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

	// Show success message
	showMessage('success');

	//show
	show();
});

function inputValidation(name, id, gdpa) {
	// check for the value of each element
	let x = 30;

	if (name == '') {
		alert('Please insert the student name');
	}

	if (id == '') {
		alert('Please insert the student id number');
	}

	if (gdpa == '') {
		alert('Please insert the student gdpa');
	}
}
function insertStudent(name, id, gdpa) {
	let student = {
		name: name,
		id: id,
		gdpa: gdpa,
	};
	students.push(student);
	console.log('students array: ', students);
}
function showMessage(event) {
	if (event == 'success') {
		alert('Studnet added!');
	} else {
		alert('Faild to add student');
	}
}
// Show list of students 
/*
	var table = document.getElementById("myTable");
	var row = table.insertRow(-1);
				var cell1 = row.insertCell(0);
				var cell2 = row.insertCell(1);
				var cell3 = row.insertCell(2);
*/			
function show(){
	var c=0;
	var r=-1;
	var table = document.getElementById("myTable");
	var row = table.insertRow(r);
				var cell1 = row.insertCell(c);
				var cell2 = row.insertCell(c+1);
				var cell3 = row.insertCell(c+2);
			cell1.innerHTML =  document.getElementById('name').value;
			cell2.innerHTML = document.getElementById('idNumber').value;
			cell3.innerHTML = document.getElementById('gdpa').value;				
			c=c-1;	
			r=r-1;		
}

// Update student
document.getElementById('update').addEventListener('click', () => {
	update();
	});
function update(){	
let index =document.getElementById('index').value;	
students[index].name=document.getElementById('Name').value ;
students[index].id=document.getElementById('Id').value ;
students[index].gdpa=document.getElementById('Gdpa').value ;
console.log(students);
cell1.vinnerHTML=students[index].name;
cell2.innerHTML=students[index].id;
cell3.innerHTML=students[index].gdpa;
}

// Delete student
document.getElementById('delete').addEventListener('click', () => {
	deleteStudent();
	});
function deleteStudent() {
var index =document.getElementById('indDelete').value;
    students.splice(index, 1);
console.log(students);
myTable.deleteRow(index);
}
