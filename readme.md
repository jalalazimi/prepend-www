# prepend-www ![Travis (.org)](https://travis-ci.com/jalalazimi/prepend-www.svg?branch=master)
Prepend `http://www.` to URLs


## Install
```
$ npm install prepend-www
```
or
```
$ yarn add prepend-www
```

## Usage

```js
const prependWWW = require('prepend-www');

prependWWW('http://demo.com');
//=> 'http://www.demo.com'

prependWWW('demo.com', {https: true});
//=> 'https://www.demo.com'

prependWWW('demo.com');
//=> 'http://www.demo.com'

prependWWW('localhost');
//=> 'http://www.localhost'

```

## API

### prependWWW(url, [options])

#### url

Type: `string`

URL to prepend `http://www.` on.

#### options

Type: `Object`

##### https

Type: `boolean`<br>
Default: `false`

Prepend `https://www.` instead of `http://www.`.



## License

MIT © [Jalal Azimi](mailto:jalalazimi@gmail.com)
