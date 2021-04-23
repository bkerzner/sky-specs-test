const fetch = require("node-fetch")

const GIST_API_HOST = 'https://api.github.com';
const GIST_API_HEADERS = {
    'Accept' : 'application/vnd.github.v3+json'
};

async function getGistsForUser(username) {
    const settings = {
        'headers': GIST_API_HEADERS
    };
    const path = '/users/' + username + '/gists';
    const endpointURL = GIST_API_HOST + path;
    const response = await fetch(endpointURL, settings);
    const gists = await response.json();
    return gists.map((g) => ({
        'id' : g.id,
        'description' : g.description,
        'date' : g.updated_at
    }));
}

async function getGistById(gistId) {
    const settings = {
        'headers': GIST_API_HEADERS
    };
    const path = '/gists/' + gistId;
    const endpointURL = GIST_API_HOST + path;
    const response = await fetch(endpointURL, settings);
    const gist = await response.json();
    return gist;
}

module.exports = {getGistsForUser, getGistById}