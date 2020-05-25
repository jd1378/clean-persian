# strip-persian

removes all diacritics from the given string. preserves persian and english letters and numbers.

## usage

```bash
npm i strip-persian
# or
yarn add strip-persian
```

```js
const clean = require('clean-persian');

console.log(clean('آیا مُطمَئِن هَستید؟'));
// result: ایا مطمین هستید
```