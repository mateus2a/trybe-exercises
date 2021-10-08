// document.cookie = 'email=mateus@email.com; expires=Thu, 9 Jan 2022 12:00:00 UTC; path=/';

// const myCookie = document.cookie;

// console.log(myCookie)

// LocalStorage

// localStorage.setItem('firstName', 'Mateus');
// localStorage.setItem('lastName', 'Alencar');
// console.log(localStorage.getItem('firstName'));
// console.log(localStorage.length);
// localStorage.removeItem('firstName');
// console.log(localStorage.length);
// localStorage.clear();
// console.log(localStorage.length);


// SessionStorage

// console.log(sessionStorage.length);
// sessionStorage.setItem('firstName', 'Mateus');
// console.log(sessionStorage.getItem('firstName'));
// console.log(sessionStorage.length);
// sessionStorage.clear();
// console.log(sessionStorage.length);



// Object
// let organization = {
//   name: "trybe",
//   since: 2019
// }

// object "storage" can be localStorage or sessionStorage

// storage.setItem("trybe", JSON.stringify(organization))
// let org = JSON.parse(storage.getItem("trybe"))
// console.log(org) // { name: "trybe", since: 2019 }

// let classes = ["2019/set", "2019/oct"]
// storage.setItem("classes", JSON.stringify(classes))
// let cls = JSON.parse(storage.getItem("classes"))
// console.log(cls) // ["2019/set", "2019/oct"]


// Execise
let preferences = {
  backgroundColor: 'rgb(238, 238, 238)',
  color: 'rgb(66, 135, 245)',
  fontSize: '21px',
  lineWeight: '15px',
  fontFamily: 'Poppins'
};

localStorage.setItem('preferences', JSON.stringify(preferences));
let aux = JSON.parse(localStorage.getItem('preferences'));
console.log(aux)
