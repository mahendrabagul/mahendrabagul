#!/usr/bin/env node

var myLibrary = require('../lib/index.js');

// Displays the text in the console
const mahendrabagulJson = {
    "login": "mahendrabagul",
    "avatar_url": "https://avatars1.githubusercontent.com/u/6149190?v=4",
    "url": "https://api.github.com/users/mahendrabagul",
    "html_url": "https://github.com/mahendrabagul",
    "gists_url": "https://api.github.com/users/mahendrabagul/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mahendrabagul/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mahendrabagul/subscriptions",
    "organizations_url": "https://api.github.com/users/mahendrabagul/orgs",
    "repos_url": "https://api.github.com/users/mahendrabagul/repos",
    "events_url": "https://api.github.com/users/mahendrabagul/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mahendrabagul/received_events",
    "type": "User",
    "name": "Mahendra Hiraman Bagul",
    "company": "https://www.infracloud.io",
    "location": "Pune",
    "email": "bagulm123@gmail.com",
    "hireable": true,
    "bio": "Well, I like to learn and implement different technologies and I always prefer Linux as a platform.",
    "public_repos": 36,
    "public_gists": 0,
    "followers": 2,
    "following": 0,
    "created_at": "2013-12-10T06:41:44Z",
    "updated_at": "2019-12-24T19:01:25Z"
};
myLibrary.print(mahendrabagulJson);
