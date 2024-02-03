```bash
» touch test-file
» git status
On branch content
Your branch is up to date with 'origin/content'.

Untracked files:
  test-file

no changes added to commit
» git add test-file
» git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  new file:   test-file
» git reset test-file
» git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  test-file

nothing added to commit but untracked files present
```

Note:

- same example as before, new file is not tracked initially
- adding it makes it tracked (we can ignore what staged for commit means for
  now)
- `reset` removes it from the repo again
- …next, editing files that are in the repo already…
