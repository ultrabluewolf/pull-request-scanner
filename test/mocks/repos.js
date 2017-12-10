'use strict';

module.exports = {
  responses: [
    {
      "data": {
        "organization": {
          "name": "myorg",
          "repositories": {
            "nodes": [
              {
                "id": "123",
                "name": "myrepo",
                "url": "https://github.com/myorg/myrepo",
                "owner": {
                  "login": "myorg"
                }
              },
              {
                "id": "124",
                "name": "my-better-repo",
                "url": "https://github.com/myorg/my-better-repo",
                "owner": {
                  "login": "myorg"
                }
              },
              {
                "id": "125",
                "name": "my-beta-repo",
                "url": "https://github.com/myorg/my-beta-repo",
                "owner": {
                  "login": "myorg"
                }
              },
            ],
            "pageInfo": {
              "hasNextPage": false,
              "startCursor": "Y3Vyc29yOnYyOpHOALL9pg==",
              "hasPreviousPage": false,
              "endCursor": "Y3Vyc29yOnYyOpHOBkiK1Q=="
            }
          }
        }
      }
    }
  ],

  expected: [
    {
      "organization": {
        "name": "myorg",
        "repositories": [
          {
            "id": "123",
            "name": "myrepo",
            "url": "https://github.com/myorg/myrepo",
            "owner": {
              "login": "myorg"
            }
          },
          {
            "id": "124",
            "name": "my-better-repo",
            "url": "https://github.com/myorg/my-better-repo",
            "owner": {
              "login": "myorg"
            }
          },
          {
            "id": "125",
            "name": "my-beta-repo",
            "url": "https://github.com/myorg/my-beta-repo",
            "owner": {
              "login": "myorg"
            }
          },
        ],
        "pageInfo": {
          "hasNextPage": false,
          "startCursor": "Y3Vyc29yOnYyOpHOALL9pg==",
          "hasPreviousPage": false,
          "endCursor": "Y3Vyc29yOnYyOpHOBkiK1Q=="
        }
      }
    }
  ],
};
