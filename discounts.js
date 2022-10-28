const btn = document.querySelector('#calculate')
const inputPrice = document.querySelector('#price')
const inputDiscount = document.querySelector('#discount')

const calculatePriceDiscount = (price, discount) => {

    const price = inputPrice.value
    const discount = inputDiscount.value

    return price - (price * discount) / 100
}



btn.addEventListener('click', calculatePriceDiscount)