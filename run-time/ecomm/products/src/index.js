import faker from 'faker'

let products = []

for (let index = 0; index < 10; index++) {
  const name = faker.commerce.productName()
  products += `<div>${name}</div>`
}

document.querySelector('#dev-products').innerHTML = products

console.log(products)
