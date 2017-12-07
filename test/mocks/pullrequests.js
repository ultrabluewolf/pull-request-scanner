'use strict';

module.exports = {
  responses: {

    myorg: {
      myrepo: {
        "data": {
          "repository": {
            "name": "myrepo",
            "url": "https://github.com/myorg/myrepo",
            "pullRequests": {
              "nodes": [
                {
                  "title": "Add README & LICENSE",
                  "state": "MERGED",
                  "id": "567",
                  "number": 1,
                  "url": "https://github.com/myorg/myrepo/pull/1",
                  "bodyText": "",
                  "createdAt": "2017-10-02T06:55:53Z",
                  "lastEditedAt": null,
                  "publishedAt": "2017-10-02T06:55:53Z",
                  "closedAt": "2017-10-02T14:02:14Z",
                  "mergedAt": "2017-10-02T14:02:14Z",
                  "merged": true,
                  "closed": true,
                  "author": {
                    "login": "notabot",
                    "url": "https://github.com/notabot"
                  }
                },
              ],
              "pageInfo": {
                "hasNextPage": false,
                "startCursor": "Y3Vyc29yOnYyOpHOBFTBQA==",
                "hasPreviousPage": false,
                "endCursor": "Y3Vyc29yOnYyOpHOBg+zyQ=="
              }
            }
          }
        }
      },

      'my-better-repo': {
        "data": {
          "repository": {
            "name": "my-better-repo",
            "url": "https://github.com/myorg/my-better-repo",
            "pullRequests": {
              "nodes": [
                {
                  "title": "Add README & LICENSE",
                  "state": "MERGED",
                  "id": "4343",
                  "number": 1,
                  "url": "https://github.com/myorg/my-better-repo/pull/1",
                  "bodyText": "",
                  "createdAt": "2017-10-02T06:55:53Z",
                  "lastEditedAt": null,
                  "publishedAt": "2017-10-02T06:55:53Z",
                  "closedAt": "2017-10-02T14:02:14Z",
                  "mergedAt": "2017-10-02T14:02:14Z",
                  "merged": true,
                  "closed": true,
                  "author": {
                    "login": "realnotabot",
                    "url": "https://github.com/realnotabot"
                  }
                },
                {
                  "title": "Add README & LICENSE... again.",
                  "state": "MERGED",
                  "id": "4343",
                  "number": 2,
                  "url": "https://github.com/myorg/my-better-repo/pull/2",
                  "bodyText": "",
                  "createdAt": "2017-10-02T06:59:33Z",
                  "lastEditedAt": null,
                  "publishedAt": "2017-10-02T06:59:33Z",
                  "closedAt": "2017-10-03T11:33:22Z",
                  "mergedAt": "2017-10-03T11:33:22Z",
                  "merged": true,
                  "closed": true,
                  "author": {
                    "login": "realnotabot",
                    "url": "https://github.com/realnotabot"
                  }
                },
              ],
              "pageInfo": {
                "hasNextPage": false,
                "startCursor": "Y3Vyc29yOnYyOpHOBFTBQA==",
                "hasPreviousPage": false,
                "endCursor": "Y3Vyc29yOnYyOpHOBg+zyQ=="
              }
            }
          }
        }
      },
    },

  },

  expected: {

    orgs: {
      myorg: {
        myrepo: {
          "repository": {
            "name": "myrepo",
            "url": "https://github.com/myorg/myrepo",
            "pullRequests": [
              {
                "title": "Add README & LICENSE",
                "state": "MERGED",
                "id": "567",
                "number": 1,
                "url": "https://github.com/myorg/myrepo/pull/1",
                "bodyText": "",
                "createdAt": "2017-10-02T06:55:53Z",
                "lastEditedAt": null,
                "publishedAt": "2017-10-02T06:55:53Z",
                "closedAt": "2017-10-02T14:02:14Z",
                "mergedAt": "2017-10-02T14:02:14Z",
                "merged": true,
                "closed": true,
                "author": {
                  "login": "notabot",
                  "url": "https://github.com/notabot"
                }
              }
            ],
            "pageInfo": {
              "hasNextPage": false,
              "startCursor": "Y3Vyc29yOnYyOpHOBFTBQA==",
              "hasPreviousPage": false,
              "endCursor": "Y3Vyc29yOnYyOpHOBg+zyQ=="
            }
          },
        },

        'my-better-repo': {
          "repository": {
            "name": "my-better-repo",
            "url": "https://github.com/myorg/my-better-repo",
            "pullRequests": [
              {
                "title": "Add README & LICENSE",
                "state": "MERGED",
                "id": "4343",
                "number": 1,
                "url": "https://github.com/myorg/my-better-repo/pull/1",
                "bodyText": "",
                "createdAt": "2017-10-02T06:55:53Z",
                "lastEditedAt": null,
                "publishedAt": "2017-10-02T06:55:53Z",
                "closedAt": "2017-10-02T14:02:14Z",
                "mergedAt": "2017-10-02T14:02:14Z",
                "merged": true,
                "closed": true,
                "author": {
                  "login": "realnotabot",
                  "url": "https://github.com/realnotabot"
                }
              },
              {
                "title": "Add README & LICENSE... again.",
                "state": "MERGED",
                "id": "4343",
                "number": 2,
                "url": "https://github.com/myorg/my-better-repo/pull/2",
                "bodyText": "",
                "createdAt": "2017-10-02T06:59:33Z",
                "lastEditedAt": null,
                "publishedAt": "2017-10-02T06:59:33Z",
                "closedAt": "2017-10-03T11:33:22Z",
                "mergedAt": "2017-10-03T11:33:22Z",
                "merged": true,
                "closed": true,
                "author": {
                  "login": "realnotabot",
                  "url": "https://github.com/realnotabot"
                }
              }
            ],
            "pageInfo": {
              "hasNextPage": false,
              "startCursor": "Y3Vyc29yOnYyOpHOBFTBQA==",
              "hasPreviousPage": false,
              "endCursor": "Y3Vyc29yOnYyOpHOBg+zyQ=="
            }
          }
        }
      },
    },

    totals: {
      myorg: {
        "repos": {
          "myrepo": 1,
          "my-better-repo": 2
        },
        "total": 3
      },
    },

  },
};
