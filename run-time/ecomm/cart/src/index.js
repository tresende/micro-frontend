import faker from 'faker'

const cartText = `<div>You have ${faker.datatype.number()}</div> items in your cart`

document.querySelector('#dev-cart').innerHTML = cartText

console.log(cartText)
