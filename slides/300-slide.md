#### Pulling

Pulling fetches all information from the remote and merges the server's version
of the branch you're on into your local branch.

```bash
» git fetch
» git status
On branch main
Your branch is behind 'origin/main' by 1 commit, and can be fast-forwarded.

nothing to commit, working tree clean
» git pull
Updating 83d8100..53bef25
Fast-forward
 README.md | 10 +++++++++-
 1 file changed, 9 insertions(+), 1 deletion(-)
» git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

Note:

- we start with our local branch being one commit behind the same branch on the
  origin remote
- you'll recognize it says our branch can be fast-forwarded
  - this is exactly what we talked about when we talked about merging
  - what happens when we pull is indeed simply a merge – we merge the remote
    branch into our local branch
    - so this is an easy case then and we can pull (merge)
      - after that our local branch is in sync with the server's branch
- so this is how we **get** data from a remote
  - but we also want to **send** data back
