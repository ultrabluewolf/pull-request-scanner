'use strict';

module.exports = {

  expected: {

    totals: {
      myorg: {
        "repos": {
          "myrepo": 1,
          "my-better-repo": 2
        },
        "total": 3
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

        }
      }
    },

  },

};
