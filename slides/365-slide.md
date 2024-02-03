#### Resetting

The equivalent of force pushing is hard resetting. That will replace the local
history with what's on the remote

```bash
» git fetch origin
» git status
On branch my-branch
Your branch and 'origin/my-branch' have diverged,
and have 7 and 4 different commits each, respectively.

nothing to commit, working tree clean

» git reset --hard origin/my-branch
» git status
On branch my-branch
Your branch is up to date with 'origin/my-branch'.

nothing to commit, working tree clean
```

Note:

- we get all the latest information from the origin
- we check the status and see that our local history and the origin's history
  have changed
- we hard-reset our local history to what's on the origin
- after that our local history is up-to-date with the origin's
- you can only reset a clean working directory
  - if you're in the middle of something and someone tells you to hard-reset
    because they force-pushed, you can simply stash your local changes
- …task…
