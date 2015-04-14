lwip Promise
============

Promisified [lwip](https://github.com/EyalAr/lwip) library.
Thanks @raine. This repo inspired by https://github.com/EyalAr/lwip/issues/63.

Installation
------------

```
npm install lwip-promise
```

Usage
-----

```js
var lwip = require('lwip-promise');

lwip.openAsync('image.jpg')
  .then(function(image) {
    return image.batch()
      .rotate(45, 'white')
      .scale(0.5)
      .blur(5)
      .writeFileAsync('output.jpg');
  }).catch(function(err) {
    console.error(err.message);
  });
```

License
-------
[MIT](LICENSE)
