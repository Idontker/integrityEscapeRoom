function generateRandomKey(length) {
  return CryptoJS.randomBytes(Math.ceil(length / 2))
    .toString("hex")
    .slice(0, length);
}

function generateRandomKey_alph(length) {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  const characterArray = characters.split("");
  const randomArray = new Uint32Array(length);
  window.crypto.getRandomValues(randomArray);
  let key = "";
  for (let i = 0; i < length; i++) {
    key += characterArray[randomArray[i] % characters.length];
  }
  return key;
}
