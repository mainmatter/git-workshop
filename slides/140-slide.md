```bash
» cp README.md README2.md
» git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.

Untracked files:
  README2.md

nothing added to commit but untracked files present
```

```bash
» git add .
» git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.

Changes to be committed:
  new file:   README2.md
```

```bash
» git rm README.md
rm 'README.md'
» git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.

Changes to be committed:
  renamed:    README.md -> README2.md
```

Note:

- we first copy the README.md file to a new location
  - until we add the file to the repo, git doesn't handle it at all
  - when we add it, since the files are the same, they have the same OID, we
    simply get a new entry for that same OID with a different path in the tree
    - so git shows a new file
  - we then remove the old file
    - git sees a removed file and a file with identical OID, thus contents added
      so it shows it as moved
- I think this illustrates the concept of trees nicely
- …last kind of object in Git…
