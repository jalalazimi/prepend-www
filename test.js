import test from 'ava';
import prependWWW from '.';

test('prepend www', t => {
	t.is(prependWWW('demo.com'), 'http://www.demo.com');
	t.is(prependWWW('http://demo.com'), 'http://www.demo.com');
	t.is(prependWWW('https://demo.com'), 'https://www.demo.com');
	t.is(prependWWW('//demo.com'), '//demo.com');
	t.is(prependWWW('localhost'), 'http://www.localhost');
	t.is(prependWWW('localhost:8000'), 'http://www.localhost:8000');
	t.is(prependWWW('localhost:8000  '), 'http://www.localhost:8000');
	t.is(prependWWW('./path'), './path');
	t.is(prependWWW('../path'), '../path');
	t.is(prependWWW('/path'), '/path');
});

test('https option', t => {
	t.is(prependWWW('demo.com', {https: true}), 'https://www.demo.com');
	t.is(prependWWW('//demo.com', {https: true}), '//demo.com');
	t.is(prependWWW('localhost:8000', {https: true}), 'https://www.localhost:8000');
});
