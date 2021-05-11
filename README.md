# Textng Node.js Library


```

The Textng Node library provides convenient access to the Textng API from
applications written in server-side JavaScript.


```

## Documentation

See the [`Textng` API docs](https://dev.textng.xyz/).Written in PHP Language


## Requirements

Node 8, 10 or higher.



## Installation

Install the package with:

```sh
npm install textng --save
# or
yarn add textng

```

## Usage

The package needs to be configured with your account's secret key.This could be found at the bottom of your Account Profile page. The key authorizes the transaction.



<!-- prettier-ignore -->
```js

const textng = new Textng({
  key: "xxxxxxxxx",
  sender:"yyyyyyyyy"
})

textng.sendSMS({
  phone: "0800000000",
  message:"hello world"
})
  .then(textng => console.log(textng))
  .catch(error => console.error(error));

```

Or using ES modules and `async`/`await`:

```js
import Textng from 'textng';
const textng = new Textng({
  key: "xxxxxxxxx",
  sender:"yyyyyyyyy"
})

(async () => {
  const textng = await textng.sendSMS({
    email: "0800000000",
     message:"hello world"
  });

  console.log(textng);
})();
```
