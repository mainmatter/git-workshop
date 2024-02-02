untracked: the file is in the same folder you cloned the repo to but not part of
the repo

```bash
» touch test-file
» git status
On branch content
Your branch is up to date with 'origin/content'.

Untracked files:
  test-file

no changes added to commit
```

Note:

- we create a new file
- `test-file` isn't part of the repo, just happens to be a local file but is
  otherwise irrelevant to git
