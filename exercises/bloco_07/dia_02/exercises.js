// Part I
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;
}

// console.log(customerInfo(order));

const orderModifier = (order) => {
  const pizzas = Object.keys(order.order.pizza);
  
  return `Olá ${order.name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${order.order.drinks.coke.type} é R$ ${order.payment.total}.`;

}

// console.log(orderModifier(order));

// Part II
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Part II - 1
const addMorn = (object, key, value) => {
  object[key] = value;
}
addMorn(lesson2, 'turno', 'manha');

// console.log(lesson2);


// Part II - 2
const showObject = (object) => {
  console.log(Object.keys(object));
}

// showObject(lesson1);


// Part II - 3
const showObjectLenght = (object) => {
  console.log(Object.keys(object).length);
}

// showObjectLenght(lesson1);


// Part II - 4
const showObjectValue = (object) => {
  console.log(Object.values(object));
}

// showObjectValue(lesson2);


// Part II - 5
const allLessons = {

};

Object.assign(allLessons, {lesson1}, {lesson2}, {lesson3});

// console.log(allLessons);


// Part II - 6
const numberStudent = (allLessons) => {
  console.log(allLessons.lesson1.numeroEstudantes);
  console.log(allLessons.lesson2.numeroEstudantes);
  console.log(allLessons.lesson3.numeroEstudantes);
}

// numberStudent(allLessons);


// Part II - 7
const getValueByNumber = (object, number) => {
  console.log(Object.values(object)[number]);
}

// getValueByNumber(lesson1, 0);


// Part II - 8
const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));
