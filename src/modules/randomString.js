export default () => {
  let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuiopasdfghjklzxcvbnm",
    string = "";
  for (let i in Array(10).fill(""))
    string += char[Math.round(Math.random() * 51)];
  return string;
};
