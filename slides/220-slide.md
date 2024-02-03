#### Branches

```bash
» git switch -c my-branch
» cat .git/refs/heads/my-branch
53bef251fe116f9cc293f4d39a7d2519e58101d0
```

```bash
» cat .git/HEAD
ref: refs/heads/my-branch
```

Note:

- branches are (one kind) of references
- they are kept in .git/reafs/heads/\*
- the value is simply the latest commit of the branch
  - this is why branching is so cheap
  - you're simply adding a new name for a commit
- HEAD simply points to the current branch
