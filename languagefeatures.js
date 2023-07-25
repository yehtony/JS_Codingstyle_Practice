/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */

// Object
const Object = {
  width: 42, // struct-style unquoted key
  'maxWidth': 43, // dict-style quoted key
};

// String
const quote = "She said, 'I like you.'";

const longString = 'This is a very long string that far exceeds the 80 \
    column limit. It unfortunately contains long stretches of spaces due \
    to how the continued lines are indented.';
console.log(longString);

// Primitive types
const x = new Boolean(false);
if (x) console.log(typeof x);
