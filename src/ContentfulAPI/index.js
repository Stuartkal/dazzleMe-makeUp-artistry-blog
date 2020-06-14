const contentful = require('contentful');
const client = contentful.createClient({
	// This is the space ID. A space is like a project folder in Contentful terms
	space: '86hc0dtv3g49',
	// This is the access token for this space. Normally you get both ID and the token in the Contentful web app
	accessToken: 'Bgy9hHxQ5C4kfmdappnWrvK7rl4vWi5SzxDuVu8xWGo '
});

export default client;
