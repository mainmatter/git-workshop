#### The big picture

![big picture](/images/big-picture.webp)

Note:

- a repo's history is a list of commits, each pointing to its parent
- each commit points to a particular revision of the root tree of the repo
  - which in turn points to blobs and subtrees, which point to blobs and
    subtrees again, etc.
  - since blobs' and trees' OIDs are dependent on their contents, every blob and
    tree at a particular revision only exists once
    - so you're not actually copying all of the repo every time you're
      snapshotting
- branch names or special identifiers like `HEAD` are just names for commit OIDs
  - you can think of them like DNS entries
