const btn = document.querySelector("#calculate")
const inputPrice = document.querySelector("#price")
const inputCoupon = document.querySelector("#coupon")
const pResult = document.querySelector("#result")

const calculatePriceDiscount = () => {
  const price = Number(inputPrice.value)
  const coupon = inputCoupon.value
  let discount

  if (!price || !coupon)
    return (pResult.innerText = "We need a price and a discount")

  switch (coupon) {
    case "Discount_lvl_1":
      discount = 15
      break
    case "Discount_lvl_2":
      discount = 20
      break
    default:
      pResult.innerText = "Coupon is not valid"
      return
  }

  const newPrice = (price * (100 - discount)) / 100

  pResult.innerText = `Price with discount: ${newPrice}`
}

btn.addEventListener("click", calculatePriceDiscount)

// const couponsObj = {
//   'Discount_lvl_1': 15,
//   'Discount_lvl_2': 20,
//   'Discount_lvl_3': 25,
//   'Discount_lvl_4': 30,
// }
