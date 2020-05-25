const cleanRegex = /[^0-9۰-۹a-zA-Zابپتسجچحخدذرزژسشصضطظعغفقکگلمنوهی\s]/g;
const alifRegex = /[آاًٱأإ]/g;
const yehRegex = /[يىۍېئ]/g;
const tehRegex = /[ەھهٔةہ]/g;
const kehRegex = /[ك]/g;

function clean(str) {
  return str
    .replace(alifRegex, "ا")
    .replace(tehRegex, "ه")
    .replace(kehRegex, "ک")
    .replace(yehRegex, "ی")
    .replace(cleanRegex, "");
}

module.exports = clean;
