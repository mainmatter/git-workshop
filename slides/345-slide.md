```bash
» git switch my-branch
Switched to branch 'my-branch'
Your branch is up to date with 'origin/my-branch'.
» git fetch origin
» git status
On branch my-branch
Your branch is up to date with 'origin/my-branch'.

nothing to commit, working tree clean
» git rebase origin/main
» git status
On branch my-branch
Your branch and 'origin/my-branch' have diverged,
and have 7 and 4 different commits each, respectively.

nothing to commit, working tree clean
```

Note:

- we switch to our branch
- we then fetch all the latest information from the origin
- we then check our branch is representative of what's on the remote
- we then rebase our branch on the HEAD of the `main` branch as it is on the
  origin
  - we could have rebased on the local HEAD of that `main` branch as well but
    that might be out of date of course
- since we rewrote history, our local branch and the remote branch now have
  different commits
- we can go a step further though…
