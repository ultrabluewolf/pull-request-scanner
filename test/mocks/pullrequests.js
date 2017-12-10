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
                  "changedFiles": 2,
                  "additions": 10,
                  "deletions": 12,
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
                  "changedFiles": 3,
                  "additions": 20,
                  "deletions": 3,
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
                  "changedFiles": 7,
                  "additions": 4,
                  "deletions": 9,
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

      'my-beta-repo': {
        "data": {
          "repository": {
            "name": "my-beta-repo",
            "url": "https://github.com/myorg/my-beta-repo",
            "pullRequests": {
              "nodes": [
                {
                  "title": "Add a Cool Feature",
                  "state": "MERGED",
                  "id": "4343",
                  "number": 1,
                  "url": "https://github.com/myorg/my-beta-repo/pull/1",
                  "bodyText": "",
                  "createdAt": "2017-11-18T06:55:53Z",
                  "lastEditedAt": null,
                  "publishedAt": "2017-11-18T06:55:53Z",
                  "closedAt": "2017-11-18T14:02:14Z",
                  "mergedAt": "2017-11-18T14:02:14Z",
                  "merged": true,
                  "closed": true,
                  "changedFiles": 30,
                  "additions": 30,
                  "deletions": 4,
                  "author": {
                    "login": "realnotabot",
                    "url": "https://github.com/realnotabot"
                  },
                  "commits": {
                    "nodes": [
                      {
                        "commit": {
                          "committedDate": "2017-11-18T03:31:11Z",
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
                          "committedDate": "2017-11-18T03:51:45Z",
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
                          "committedDate": "2017-11-18T04:01:25Z",
                          "message": "My cool commit #3",
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
                          "committedDate": "2017-11-18T04:12:00Z",
                          "message": "My cool commit #4",
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
                  "title": "Add a feature that we no longer wanted",
                  "state": "CLOSED",
                  "id": "4343",
                  "number": 2,
                  "url": "https://github.com/myorg/my-beta-repo/pull/2",
                  "bodyText": "",
                  "createdAt": "2017-11-25T20:01:33Z",
                  "lastEditedAt": null,
                  "publishedAt": "2017-11-25T20:01:33Z",
                  "closedAt": "2017-12-10T11:33:22Z",
                  "mergedAt": null,
                  "merged": false,
                  "closed": true,
                  "changedFiles": 7,
                  "additions": 4,
                  "deletions": 9,
                  "author": {
                    "login": "realnotabot",
                    "url": "https://github.com/realnotabot"
                  },
                  "commits": {
                    "nodes": [
                      {
                        "commit": {
                          "committedDate": "2017-11-20T15:01:21Z",
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
                          "committedDate": "2017-11-20T15:42:48Z",
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
                {
                  "title": "Add Another Cool Feature",
                  "state": "MERGED",
                  "id": "4343",
                  "number": 1,
                  "url": "https://github.com/myorg/my-beta-repo/pull/3",
                  "bodyText": "",
                  "createdAt": "2017-12-18T06:55:53Z",
                  "lastEditedAt": null,
                  "publishedAt": "2017-12-18T06:55:53Z",
                  "closedAt": "2017-12-18T14:02:14Z",
                  "mergedAt": "2017-12-18T14:02:14Z",
                  "merged": true,
                  "closed": true,
                  "changedFiles": 15,
                  "additions": 23,
                  "deletions": 25,
                  "author": {
                    "login": "realnotabot",
                    "url": "https://github.com/realnotabot"
                  },
                  "commits": {
                    "nodes": [
                      {
                        "commit": {
                          "committedDate": "2017-12-18T03:31:11Z",
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
                          "committedDate": "2017-12-18T03:51:45Z",
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
                          "committedDate": "2017-12-18T04:01:25Z",
                          "message": "My cool commit #3",
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
                          "committedDate": "2017-12-18T04:12:00Z",
                          "message": "My cool commit #4",
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
                  "title": "Tweaking a Weird Component",
                  "state": "MERGED",
                  "id": "4343",
                  "number": 1,
                  "url": "https://github.com/myorg/my-beta-repo/pull/4",
                  "bodyText": "",
                  "createdAt": "2017-12-20T22:02:23Z",
                  "lastEditedAt": null,
                  "publishedAt": "2017-12-20T22:02:23Z",
                  "closedAt": "2017-12-22T14:02:14Z",
                  "mergedAt": "2017-12-22T14:02:14Z",
                  "merged": true,
                  "closed": true,
                  "changedFiles": 3,
                  "additions": 8,
                  "deletions": 12,
                  "author": {
                    "login": "realnotabot",
                    "url": "https://github.com/realnotabot"
                  },
                  "commits": {
                    "nodes": [
                      {
                        "commit": {
                          "committedDate": "2017-12-20T03:31:11Z",
                          "message": "My cool commit",
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
                  "title": "Tweaking Other Weird Component",
                  "state": "MERGED",
                  "id": "4343",
                  "number": 1,
                  "url": "https://github.com/myorg/my-beta-repo/pull/5",
                  "bodyText": "",
                  "createdAt": "2017-12-20T23:22:23Z",
                  "lastEditedAt": null,
                  "publishedAt": "2017-12-20T23:22:23Z",
                  "closedAt": "2017-12-22T10:02:14Z",
                  "mergedAt": "2017-12-22T10:02:14Z",
                  "merged": true,
                  "closed": true,
                  "changedFiles": 4,
                  "additions": 3,
                  "deletions": 10,
                  "author": {
                    "login": "realnotabot",
                    "url": "https://github.com/realnotabot"
                  },
                  "commits": {
                    "nodes": [
                      {
                        "commit": {
                          "committedDate": "2017-12-20T01:59:01Z",
                          "message": "My cool commit",
                          "author": {
                            "user": {
                              "login": "realnotabot",
                              "url": "https://github.com/realnotabot"
                            }
                          },
                        }
                      }
                    ]
                  },
                },
                {
                  "title": "Refactoring Frenzy",
                  "state": "OPEN",
                  "id": "4343",
                  "number": 6,
                  "url": "https://github.com/myorg/my-beta-repo/pull/6",
                  "bodyText": "",
                  "createdAt": "2017-12-21T19:34:59Z",
                  "lastEditedAt": "2017-12-21T21:23:17Z",
                  "publishedAt": "2017-12-21T19:34:59Z",
                  "closedAt": null,
                  "mergedAt": null,
                  "merged": false,
                  "closed": false,
                  "changedFiles": 2,
                  "additions": 54,
                  "deletions": 4,
                  "commits": {
                    "nodes": [
                      {
                        "commit": {
                          "author": {
                            "user": {
                              "login": "realnotabot",
                              "url": "https://github.com/realnotabot"
                            }
                          },
                          "message": "abc 123",
                          "committedDate": "2017-12-21T19:32:07Z"
                        }
                      },
                      {
                        "commit": {
                          "author": {
                            "user": {
                              "login": "realnotabot",
                              "url": "https://github.com/realnotabot"
                            }
                          },
                          "message": "bcd 234",
                          "committedDate": "2017-12-21T19:51:21Z"
                        }
                      },
                      {
                        "commit": {
                          "author": {
                            "user": {
                              "login": "realnotabot",
                              "url": "https://github.com/realnotabot"
                            }
                          },
                          "message": "cde 345",
                          "committedDate": "2017-12-21T19:53:01Z"
                        }
                      }
                    ]
                  },
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
                "changedFiles": 2,
                "additions": 10,
                "deletions": 12,
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
                "changedFiles": 3,
                "additions": 20,
                "deletions": 3,
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
                "changedFiles": 7,
                "additions": 4,
                "deletions": 9,
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
        },

        'my-beta-repo': {
          "repository": {
            "name": "my-beta-repo",
            "url": "https://github.com/myorg/my-beta-repo",
            "pullRequests": [
              {
                "title": "Add a Cool Feature",
                "state": "MERGED",
                "id": "4343",
                "number": 1,
                "url": "https://github.com/myorg/my-beta-repo/pull/1",
                "bodyText": "",
                "createdAt": "2017-11-18T06:55:53Z",
                "lastEditedAt": null,
                "publishedAt": "2017-11-18T06:55:53Z",
                "closedAt": "2017-11-18T14:02:14Z",
                "mergedAt": "2017-11-18T14:02:14Z",
                "merged": true,
                "closed": true,
                "changedFiles": 30,
                "additions": 30,
                "deletions": 4,
                "author": {
                  "login": "realnotabot",
                  "url": "https://github.com/realnotabot"
                },
                "commits": [
                  {
                    "committedDate": "2017-11-18T03:31:11Z",
                    "message": "My cool commit",
                    "author": {
                      "user": {
                        "login": "realnotabot",
                        "url": "https://github.com/realnotabot"
                      }
                    }
                  },
                  {
                    "committedDate": "2017-11-18T03:51:45Z",
                    "message": "My cool commit #2",
                    "author": {
                      "user": {
                        "login": "realnotabot",
                        "url": "https://github.com/realnotabot"
                      }
                    }
                  },
                  {
                    "committedDate": "2017-11-18T04:01:25Z",
                    "message": "My cool commit #3",
                    "author": {
                      "user": {
                        "login": "realnotabot",
                        "url": "https://github.com/realnotabot"
                      }
                    }
                  },
                  {
                    "committedDate": "2017-11-18T04:12:00Z",
                    "message": "My cool commit #4",
                    "author": {
                      "user": {
                        "login": "realnotabot",
                        "url": "https://github.com/realnotabot"
                      }
                    }
                  }
                ],
              },
              {
                "title": "Add a feature that we no longer wanted",
                "state": "CLOSED",
                "id": "4343",
                "number": 2,
                "url": "https://github.com/myorg/my-beta-repo/pull/2",
                "bodyText": "",
                "createdAt": "2017-11-25T20:01:33Z",
                "lastEditedAt": null,
                "publishedAt": "2017-11-25T20:01:33Z",
                "closedAt": "2017-12-10T11:33:22Z",
                "mergedAt": null,
                "merged": false,
                "closed": true,
                "changedFiles": 7,
                "additions": 4,
                "deletions": 9,
                "author": {
                  "login": "realnotabot",
                  "url": "https://github.com/realnotabot"
                },
                "commits": [
                  {
                    "committedDate": "2017-11-20T15:01:21Z",
                    "message": "My bad commit",
                    "author": {
                      "user": {
                        "login": "realnotabot",
                        "url": "https://github.com/realnotabot"
                      }
                    }
                  },
                  {
                    "committedDate": "2017-11-20T15:42:48Z",
                    "message": "My awesome commit",
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
                "title": "Add Another Cool Feature",
                "state": "MERGED",
                "id": "4343",
                "number": 1,
                "url": "https://github.com/myorg/my-beta-repo/pull/3",
                "bodyText": "",
                "createdAt": "2017-12-18T06:55:53Z",
                "lastEditedAt": null,
                "publishedAt": "2017-12-18T06:55:53Z",
                "closedAt": "2017-12-18T14:02:14Z",
                "mergedAt": "2017-12-18T14:02:14Z",
                "merged": true,
                "closed": true,
                "changedFiles": 15,
                "additions": 23,
                "deletions": 25,
                "author": {
                  "login": "realnotabot",
                  "url": "https://github.com/realnotabot"
                },
                "commits": [
                  {
                    "committedDate": "2017-12-18T03:31:11Z",
                    "message": "My cool commit",
                    "author": {
                      "user": {
                        "login": "realnotabot",
                        "url": "https://github.com/realnotabot"
                      }
                    }
                  },
                  {
                    "committedDate": "2017-12-18T03:51:45Z",
                    "message": "My cool commit #2",
                    "author": {
                      "user": {
                        "login": "realnotabot",
                        "url": "https://github.com/realnotabot"
                      }
                    }
                  },
                  {
                    "committedDate": "2017-12-18T04:01:25Z",
                    "message": "My cool commit #3",
                    "author": {
                      "user": {
                        "login": "realnotabot",
                        "url": "https://github.com/realnotabot"
                      }
                    }
                  },
                  {
                    "committedDate": "2017-12-18T04:12:00Z",
                    "message": "My cool commit #4",
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
                "title": "Tweaking a Weird Component",
                "state": "MERGED",
                "id": "4343",
                "number": 1,
                "url": "https://github.com/myorg/my-beta-repo/pull/4",
                "bodyText": "",
                "createdAt": "2017-12-20T22:02:23Z",
                "lastEditedAt": null,
                "publishedAt": "2017-12-20T22:02:23Z",
                "closedAt": "2017-12-22T14:02:14Z",
                "mergedAt": "2017-12-22T14:02:14Z",
                "merged": true,
                "closed": true,
                "changedFiles": 3,
                "additions": 8,
                "deletions": 12,
                "author": {
                  "login": "realnotabot",
                  "url": "https://github.com/realnotabot"
                },
                "commits": [
                  {
                    "committedDate": "2017-12-20T03:31:11Z",
                    "message": "My cool commit",
                    "author": {
                      "user": {
                        "login": "realnotabot",
                        "url": "https://github.com/realnotabot"
                      }
                    }
                  }
                ],
              },
              {
                "title": "Tweaking Other Weird Component",
                "state": "MERGED",
                "id": "4343",
                "number": 1,
                "url": "https://github.com/myorg/my-beta-repo/pull/5",
                "bodyText": "",
                "createdAt": "2017-12-20T23:22:23Z",
                "lastEditedAt": null,
                "publishedAt": "2017-12-20T23:22:23Z",
                "closedAt": "2017-12-22T10:02:14Z",
                "mergedAt": "2017-12-22T10:02:14Z",
                "merged": true,
                "closed": true,
                "changedFiles": 4,
                "additions": 3,
                "deletions": 10,
                "author": {
                  "login": "realnotabot",
                  "url": "https://github.com/realnotabot"
                },
                "commits": [
                  {
                    "committedDate": "2017-12-20T01:59:01Z",
                    "message": "My cool commit",
                    "author": {
                      "user": {
                        "login": "realnotabot",
                        "url": "https://github.com/realnotabot"
                      }
                    }
                  }
                ],
              },
              {
                "title": "Refactoring Frenzy",
                "state": "OPEN",
                "id": "4343",
                "number": 6,
                "url": "https://github.com/myorg/my-beta-repo/pull/6",
                "bodyText": "",
                "createdAt": "2017-12-21T19:34:59Z",
                "lastEditedAt": "2017-12-21T21:23:17Z",
                "publishedAt": "2017-12-21T19:34:59Z",
                "closedAt": null,
                "mergedAt": null,
                "merged": false,
                "closed": false,
                "changedFiles": 2,
                "additions": 54,
                "deletions": 4,
                "commits": [
                  {
                    "author": {
                      "user": {
                        "login": "realnotabot",
                        "url": "https://github.com/realnotabot"
                      }
                    },
                    "message": "abc 123",
                    "committedDate": "2017-12-21T19:32:07Z"
                  },
                  {
                    "author": {
                      "user": {
                        "login": "realnotabot",
                        "url": "https://github.com/realnotabot"
                      }
                    },
                    "message": "bcd 234",
                    "committedDate": "2017-12-21T19:51:21Z"
                  },
                  {
                    "author": {
                      "user": {
                        "login": "realnotabot",
                        "url": "https://github.com/realnotabot"
                      }
                    },
                    "message": "cde 345",
                    "committedDate": "2017-12-21T19:53:01Z"
                  }
                ],
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
        },

      },
    },

  },
};
