// Part I
const custumer = {
  name: 'Mateus',
};

const add = (custumer, idade) => {
  custumer.idade = idade;
}

add(custumer, 20);

//console.log(custumer);

// Part II
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

// console.log(Object.keys(student1));

const listSkills = (student) => {
  const listSkillKey = Object.keys(student);
    
  for (let index in listSkillKey) {
    console.log(`Nome da habilidade: ${listSkillKey[index]}, Nivel: ${student[listSkillKey[index]]}`)
  }
}

//listSkills(student1)
// listSkills(student2)


// Part III 
const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

const listSkillsWithValues = (student) => Object.values(student);

// Sem Object.values
console.log(listSkillsWithFor(student));

// Com Object.values
console.log(listSkillsWithValues(student));









