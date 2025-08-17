export async function fetchClients() {
  const res = await fetch("https://my.api.mockaroo.com/client.json?key=0fc28bb0")
  if (!res.ok) throw new Error("Failed to load clients")
  return res.json()
}

export async function fetchOrders() {
  const res = await fetch("https://my.api.mockaroo.com/orders.json?key=0fc28bb0")
  if (!res.ok) throw new Error("Failed to load orders")
  return res.json()
}

export async function fetchProducts() {
  const res = await fetch("https://my.api.mockaroo.com/products.json?key=0fc28bb0")
  if (!res.ok) throw new Error("Failed to load products")
  return res.json()
}

export async function fetchMessages() {
  const res = await fetch("https://my.api.mockaroo.com/message.json?key=0fc28bb0")
  if (!res.ok) throw new Error("Failed to load products")
  return res.json()
}

