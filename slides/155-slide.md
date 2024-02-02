#### Visualizing Commits

![diff](/images/diff.png)

Note:

- when looking at commits, you're looking at a diff between the commit and its
  parent
  - that diff is calculated on the fly and nost stored anywhere
  - how that diffing works doesn't really matter but every diff is the result of
    comparing 2 snapshots of the entire repo
  - …and those snapshots are references to the root tree of the repo at a
    particular revision
- …so what's the big picture here?…
