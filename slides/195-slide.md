staged: a tracked file that has changed and those changes will be part of the
next commit

```bash
» echo "test" >> README.md
» git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  modified:   README.md

no changes added to commit

» git add README.md
» git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  modified:   README.md
» git reset README.md
Unstaged changes after reset:
M	README.md
» git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  modified:   README.md

no changes added to commit
```

Note:

- same example as before – we change the file, git marks it as changed but not
  staged
- we add it, it is now staged and will be part of the next commit
- we then use `reset` to go back a step and make file changed again
- notice that on this slide we say that a set of changes to a file will be part
  of the next commit, not necessarily the entire file…
