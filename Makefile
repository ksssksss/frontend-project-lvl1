install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

say:
	echo 'Hello!!!'

lint:
	npx eslint .