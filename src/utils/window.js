export const refreshPage = () => {
  window.location.reload();
};

export const storeLocally = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const retrieveFromLocalStorage = (key) => {
  if (!window.localStorage.getItem(key)) return null;
  return JSON.parse(window.localStorage.getItem(key));
};
