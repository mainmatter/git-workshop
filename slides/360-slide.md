#### Force-Pushing

Force pushing overwrites the history on the origin.

```bash
git push --force-with-lease origin my-branch
```

Note:

- there's no way we can cleanly apply our local changes to the remote since the
  histories are different
- but we know our local history is the one we want so we want to overwrite
  what's on the server
- force-pushing allows us to overwrite what's on the server
  - of course this is a destructive operation so use it carefully
  - there's no way to rebase without also force-pushing though
- so that's what we do with `git push --force-with-lease`
  - `force-with-lease` (as opposed to `force`) simply checks whether there were
    any new commits added to the remote revision of the branch since you last
    fetched so it's pretty safe
  - however, always do the above as one operation:
    - fetch
    - rebase on the version of the branch on the origin
    - then force-push
    - rebasing on a revision of a branch that is days old or rebasing a branch
      that is already not up-to-date with what's on the remote is likely to
      cause problems
- …but when we're rewriting history, how do your coworkers get our chagnes?
