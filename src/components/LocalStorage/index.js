import ls from "local-storage";

const save = (key, value) => {
  ls.set(key, value);
}

const get = (key, value) => {
  return ls.get(key);
}

export { save, get };