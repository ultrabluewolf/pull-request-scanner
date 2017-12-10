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
                  },
                  "commits": {
                    "nodes": [
                      {
                        "commit": {
                          "committedDate": "2017-10-02T04:01:30Z",
                          "message": "My commit",
                          "author": {
                            "user": {
                              "login": "notabot",
                              "url": "https://github.com/notabot"
                            }
                          }
                        }
                      }
                    ]
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
                  },
                  "commits": {
                    "nodes": [
                      {
                        "commit": {
                          "committedDate": "2017-10-02T03:31:11Z",
                          "message": "My cool commit",
                          "author": {
                            "user": {
                              "login": "realnotabot",
                              "url": "https://github.com/realnotabot"
                            }
                          }
                        }
                      },
                      {
                        "commit": {
                          "committedDate": "2017-10-02T03:51:45Z",
                          "message": "My cool commit #2",
                          "author": {
                            "user": {
                              "login": "realnotabot",
                              "url": "https://github.com/realnotabot"
                            }
                          }
                        }
                      },
                      {
                        "commit": {
                          "committedDate": "2017-10-02T03:59:00Z",
                          "message": "My cool commit #3",
                          "author": {
                            "user": {
                              "login": "realnotabot",
                              "url": "https://github.com/realnotabot"
                            }
                          }
                        }
                      }
                    ]
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
                  },
                  "commits": {
                    "nodes": [
                      {
                        "commit": {
                          "committedDate": "2017-10-03T05:01:21Z",
                          "message": "My bad commit",
                          "author": {
                            "user": {
                              "login": "realnotabot",
                              "url": "https://github.com/realnotabot"
                            }
                          }
                        }
                      },
                      {
                        "commit": {
                          "committedDate": "2017-10-03T05:42:48Z",
                          "message": "My awesome commit",
                          "author": {
                            "user": {
                              "login": "realnotabot",
                              "url": "https://github.com/realnotabot"
                            }
                          }
                        }
                      }
                    ]
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
                },
                "commits": [
                  {
                    "committedDate": "2017-10-02T04:01:30Z",
                    "message": "My commit",
                    "author": {
                      "user": {
                        "login": "notabot",
                        "url": "https://github.com/notabot"
                      }
                    }
                  }
                ]
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
                },
                "commits": [
                  {
                    "committedDate": "2017-10-02T03:31:11Z",
                    "message": "My cool commit",
                    "author": {
                      "user": {
                        "login": "realnotabot",
                        "url": "https://github.com/realnotabot"
                      }
                    }
                  },
                  {
                    "committedDate": "2017-10-02T03:51:45Z",
                    "message": "My cool commit #2",
                    "author": {
                      "user": {
                        "login": "realnotabot",
                        "url": "https://github.com/realnotabot"
                      }
                    }
                  },
                  {
                    "committedDate": "2017-10-02T03:59:00Z",
                    "message": "My cool commit #3",
                    "author": {
                      "user": {
                        "login": "realnotabot",
                        "url": "https://github.com/realnotabot"
                      }
                    }
                  }
                ]
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
                },
                "commits": [
                  {
                    "committedDate": "2017-10-03T05:01:21Z",
                    "message": "My bad commit",
                    "author": {
                      "user": {
                        "login": "realnotabot",
                        "url": "https://github.com/realnotabot"
                      }
                    }
                  },
                  {
                    "committedDate": "2017-10-03T05:42:48Z",
                    "message": "My awesome commit",
                    "author": {
                      "user": {
                        "login": "realnotabot",
                        "url": "https://github.com/realnotabot"
                      }
                    }
                  }
                ]
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

  },
};
