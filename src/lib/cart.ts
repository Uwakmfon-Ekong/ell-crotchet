export type CartItem = {
  id: number
  name: string
  price: number
  image: string
  qty: number
}

export function addToCart(item: CartItem) {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]")

  const existing = cart.find((i: CartItem) => i.id === item.id)

  if (existing) {
    existing.qty += 1
  } else {
    cart.push(item)
  }

  localStorage.setItem("cart", JSON.stringify(cart))
}
