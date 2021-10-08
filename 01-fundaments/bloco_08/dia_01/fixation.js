const doingThings = (action) => {
  action();
}


const wakeUp = () => {
  console.log('Acordando!!');
}

const coffee = () => {
  console.log('Bora tomar café!!');
}

const sleep = () => {
  console.log('Partiu dormir!!');
}

doingThings(wakeUp);