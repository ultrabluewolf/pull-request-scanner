'use strict';

module.exports = {

  expected: {

    totals: {
      myorg: {
        "repos": {
          "myrepo": 1,
          "my-better-repo": 2,
          "my-beta-repo": 5,
        },
        "total": 8,
      },
    },

    weeklyTotals: {
      myorg: {
        "repos": {
          "myrepo": {
            "2017-10-01": 1
          },
          "my-better-repo": {
            "2017-10-01": 2
          },
          "my-beta-repo": {
            "2017-11-12": 1,
            "2017-12-17": 3,
          }
        }
      },
    },

    averagesAndMedians: {
      "myorg": {
        "repos": {

          "myrepo": {
            "2017-10-01": {
              "creation": {
                "avg": 426.35,
                "median": 426.35,
              },
              "firstCommit": {
                "avg": 600.73,
                "median": 600.73,
              },
              "totalCommits": {
                "avg": 1,
                "median": 1
              },
              "totalFiles": {
                "avg": 2,
                "median": 2
              },
              "lineAdditions": {
                "avg": 10,
                "median": 10
              },
              "lineDeletions": {
                "avg": 12,
                "median": 12
              },
            }
          },

          "my-better-repo": {
            "2017-10-01": {
              "creation": {
                "avg": 1070.08,
                "median": 1070.08,
              },
              "firstCommit": {
                "avg": 511.53,
                "median": 511.53,
              },
              "totalCommits": {
                "avg": 2.5,
                "median": 2.5
              },
              "totalFiles": {
                "avg": 5,
                "median": 5
              },
              "lineAdditions": {
                "avg": 12,
                "median": 12
              },
              "lineDeletions": {
                "avg": 6,
                "median": 6
              },
            }
          },

          "my-beta-repo": {
            "2017-11-12": {
              "creation": {
                "avg": 426.35,
                "median": 426.35
              },
              "firstCommit": {
                "avg": 631.05,
                "median": 631.05
              },
              "totalCommits": {
                "avg": 4,
                "median": 4
              },
              "totalFiles": {
                "avg": 30,
                "median": 30
              },
              "lineAdditions": {
                "avg": 30,
                "median": 30
              },
              "lineDeletions": {
                "avg": 4,
                "median": 4
              }
            },
            "2017-12-10": {
              "totalCommits": {
                "avg": 2,
                "median": 2
              },
              "totalFiles": {
                "avg": 7,
                "median": 7
              },
              "lineAdditions": {
                "avg": 4,
                "median": 4
              },
              "lineDeletions": {
                "avg": 9,
                "median": 9
              }
            },
            "2017-12-17": {
              "creation": {
                "avg": 1635.35,
                "median": 2079.85
              },
              "firstCommit": {
                "avg": 2501.77,
                "median": 3363.22
              },
              "totalCommits": {
                "avg": 2,
                "median": 1
              },
              "totalFiles": {
                "avg": 7.33,
                "median": 4
              },
              "lineAdditions": {
                "avg": 11.33,
                "median": 8
              },
              "lineDeletions": {
                "avg": 15.67,
                "median": 12
              },
            },
          },

        }
      }
    },

  },

};
