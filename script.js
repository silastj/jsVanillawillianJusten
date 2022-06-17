// TAGGED TEMPLATES
const city = 'Poá'
const district = 'Santa Helena'
const address = 'Fernando de Noronha'

function Grup(template, ...values) {
  return template.reduce((acumulator, part, i) => {
    return `
      ${acumulator}
      <span class="green">${values[i - 1].toUpperCase()}</span>
      ${part}
    `
  })
}
const result = Grup`Seu ${address} no bairro ${district} da cidade ${city}.`
const primary = document.querySelector('.primary')
primary.innerHTML = result

//SHORTHAND PROPERTIES

let name = 'Silas'
let surname = 'Santos'
let age = 38
const person = {
  name,
  surname,
  age,

  hello(){
    console.log('hello')
  }
}
console.log(person)
person.hello()

//DEFAULT PARAMETERS

function createCar(car = 'Fiat', modelo = 'Punto'){
  console.log(`O ${modelo} e do modelo ${car}`)
}
createCar('volks', 'gol')
createCar('volks')

//METODOS STRINGS

const text = 'A Samara é minha noiva'
console.log(text.startsWith('Sa', 2))
console.log(text.endsWith('noiva'))
console.log('lo -'.repeat(10))
console.log(text.includes('é'))

//ARRAY FROM

const team = 'Santos Futebol Clube'
console.log(Array.from(team))

const list = document.querySelectorAll('.list li')
const listArray = Array.from(list)
console.log(list);
const le = listArray.map((name) => name.textContent)
console.log(le);

//ARRAY OF
// Juntar varios dados em array de forma rapida e simples

const arrayOf = Array.of(1,4,'Silas',{name: 'Santos'})
console.log(arrayOf)


// ARRAY FIND and FINDINDEX
// Find ele traz o primeiro resultado encontrado
// FINDindex ele traz o primeiro resultado do index encontrado

const numbers = [-1, 10, 0, -2, 10];

const numbersIndex = numbers.find(num => num < 10);
console.log(numbersIndex);


// ARRAY fill
// Ele add no array os valores passado, com inicio e fim da posição.
const arrayFill = new Array(50)
arrayFill.fill('Santos')
console.log(arrayFill)

const numberFill = [1,2,3,4,5,6]
numberFill.fill('numero', 1, 3)
console.log(numberFill)

//DESTRUCTURING
// Reduz o código, e caso não tiver a propriedade do objeto podemos deixar default

const personSilas = {
  nome:'Amós',
  idade: 38,
  endereço: 'Fernando de Noronha',
  numero: 51,
  completo: 'casa 27',
  bairro: 'Jardim Santa Helena',
  cidade: 'Poá',
  estado: 'São Paulo',
  cep:'08545-090',
  social:{
    instagram:'silastj',
    facebook: 'asilastj'
  }
}

const { nome: no, idade, sexo ='Masculino' } = personSilas
console.log('nome', no)
console.log('idade', idade)
console.log('sexo', sexo)

//PROMISES
// Temos 3 estados na promises
// pending - resolve - reject
// No .all Só envia quando todas as promisses são resolvidas
// NO .race O valor só é printado quando alguma das promises tiver resultado, a outra promise é
// cancelada.

let defer = new Promise((resolve, reject) => {
  if(false){
    resolve('Resolveu')
  }else{
    reject('rejeitado')
  }
})

defer
  .then((data) => console.log(data))
  .catch((erro) => console.log(erro))

  let posts = fetch('https://corebiz-test.herokuapp.com/api/v1/products')
  posts
  .then(data => data.json())
  .then(data => console.log(data))


  const currency = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ currency: 'euro', value: 3.50 })      
    }, 2000);
  })

  const countries = new Promise((resolve, reject) => {
    resolve(['Poá', 'Sorocaba', 'Pilar do Sul'])
  })

  Promise
  .all([currency, countries])
  .then(responses => {
    console.log('Promise All retorna após tiver resultado de todas',responses)
  })

  Promise
  .race([currency, countries])
  .then(responses => {
    console.log('Promise race retorna após tiver resultado de uma, cancelando as demais',responses)
  })

  // Herança Prototipal

