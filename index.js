'use strict';
module.exports = (url, opts) => {
	if (typeof url !== 'string') {
		throw new TypeError(`Expected \`url\` to be of type \`string\`, got \`${typeof url}\``);
	}

	url = url.trim();
	opts = Object.assign({
		https: url.indexOf('https') !== -1
	}, opts);
	if (/^\.*\/|((^(?:f|ht)tps?:\/|^(?!localhost)\w+:)\/\/www.)/.test(url)) {
		return url;
	}

	return url.replace(/^(?!(?:\w+:)?\/\/)|^(?:f|ht)tps?:\/\//, opts.https ? 'https://www.' : 'http://www.');
};
