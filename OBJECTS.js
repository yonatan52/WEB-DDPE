function Register(name, age,phone) {
    this.fullName = name;
    this.phone = age;
    this.age = phone;
    this.introduceMySelf = () => {
        parent = document.getElementById('render');
        const div = document.createElement('div');
        div.classList.add('appended');
        div.innerHTML = <><h1>New Added Form</h1><h1>Full Name: ${this.fullName}</h1><h1>Age: ${this.age}</h1><h1>PhoneNo.: ${this.phone}</h1></>;
        parent.appendChild(div)
    }
    
}
const callBack = () => {
var name = document.getElementById('fullname').value;
var fullname = document.getElementById('phone').value;
var age = document.getElementById('age').value;

const newObject = new Register(name,fullname,age);
newObject.introduceMySelf()
}
document.getElementById('submitBtn').addEventListener('click', callBack);
function Display() {
    this.fullName = document.getElementById('fullname').value;
    this.phone = document.getElementById('phone').value;
    this.age = document.getElementById('age').value;
    this.introduceMySelf = () => {
        parent = document.getElementById('render');
        const div = document.createElement('div');
        div.classList.add('appended');
        div.innerHTML = <><h1>Full Name: ${this.fullName}</h1><h1>Age: ${this.age}</h1><h1>PhoneNo.: ${this.phone}</h1></>;
        parent.appendChild(div)
    }
    
}
const  newHTML = function () {
const newObject = new  Display();
newObject.introduceMySelf()
}


document.getElementById('submitBtn').addEventListener('click', newHTML);

const  newHTML = function () {
    function Display() {
        this.fullName = document.getElementById('fullname').value;
        this.phone = document.getElementById('phone').value;
        this.age = document.getElementById('age').value;


    }
    var  newObject = new  Display();

    var render = function () {
        parent = document.getElementById('render');
        const div = document.createElement('div');
        div.classList.add('appended');
        div.innerHTML = <><h1>Full Name: ${newObject.fullName}</h1><h1>Age: ${newObject.age}</h1><h1>PhoneNo.: ${newObject.phone}</h1></>;
        parent.appendChild(div)
    }
     render();
}


document.getElementById('submitBtn').addEventListener('click', newHTML);