export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function isEmpty(array) {
  if (!array) return true;
  return array.length === 0;
}

export function findObjectById(id, array) {
  return array.find((product) => product.id === id);
}

export function removeObjectById(id, array) {
  return array.filter((product) => product.id !== id);
}

export function checkProductSelection(productId, productSelectedId) {
  return productId === productSelectedId;
}
