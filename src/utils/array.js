export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function isEmpty(arr) {
  if (!arr) return true;
  return arr.length === 0;
}

export function findObjectById(id, arr) {
  return arr.find((product) => product.id === id);
}

export function removeObjectById(id, arr) {
  return arr.filter((product) => product.id !== id);
}

export function checkProductSelection(productId, productSelectedId) {
  return productId === productSelectedId;
}
