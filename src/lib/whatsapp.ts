export function getWhatsAppLink({
  name,
  price,

}: {
  name: string
  price: number
 
}) {
  const phone = "2348083193784" 

  const message = `
Hi! I'm interested in this product:

• Product: ${name}
• Price: ${price}
`

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}
