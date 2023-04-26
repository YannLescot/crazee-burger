export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function isEmpty(arr) {
  return arr.length === 0;
}

export function findObjectById(id, arr) {
  return arr.find((product) => product.id === id);
}
