export function checkoutViaWhatsApp() {
  const phone = "2348083193784"
  const cart = JSON.parse(localStorage.getItem("cart") || "[]")

  if (!cart.length) return

  const items = cart
    .map(
      (i: any) =>
        `• ${i.name} (x${i.qty}) – ${i.price}`
    )
    .join("\n")

  const message = `
Hello! I'd like to place an order:

${items}
`

  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
    "_blank"
  )
}
