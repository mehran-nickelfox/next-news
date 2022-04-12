import jsCookie from "js-cookie";

export const setSession = (key,token) => {
  jsCookie.set(key, token);
};

export const getSession = (key) => {
  return jsCookie.get(key);
}
export const removeSession = (key) => {
    jsCookie.remove(key);
}