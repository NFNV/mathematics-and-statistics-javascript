const btn = document.querySelector("#calculate")
const inputPrice = document.querySelector("#price")
const inputDiscount = document.querySelector("#discount")
const pResult = document.querySelector("#result")

const calculatePriceDiscount = () => {
  const price = Number(inputPrice.value)
  const discount = Number(inputDiscount.value)

  if (!price || !discount)
    return (pResult.innerText = "We need a price and a discount")

  if (discount >= 100) return (pResult.innerText = "Nothing for free")

  const newPrice = (price * (100 - discount)) / 100

  pResult.innerText = `Price with discount: ${newPrice}`
}

btn.addEventListener("click", calculatePriceDiscount)
