'use strict';
module.exports = (url, opts) => {
  
	if (typeof url !== 'string') {
		throw new TypeError(`Expected \`url\` to be of type \`string\`, got \`${typeof url}\``);
	}

	url = url.trim();
	opts = Object.assign({https: false}, opts);

	if (/^(?:f|ht)tps?\:\/\/www./.test(url)) {
		return url;
	}

	return url.replace(/^(?:f|ht)tps?\:\/\//, opts.https ? 'https://www.' : 'http://www.');

}