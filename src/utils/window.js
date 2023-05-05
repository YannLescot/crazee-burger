export const refreshPage = () => {
  window.location.reload();
};

export const storeLocally = (username, key, value) => {
  if (!username) return;
  window.localStorage.setItem(username, JSON.stringify({ [key]: value }));
};

export const retrieveFromLocalStorage = (username, key) => {
  if (!username) return;
  const storedData = JSON.parse(window.localStorage.getItem(username));
  if (!storedData) return;
  return storedData[key];
};
