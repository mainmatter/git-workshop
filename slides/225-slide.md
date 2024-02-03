#### Branches

```bash
» touch test-file
» git add test-file
» git commit -m "test commit"
[main 71ec772] test
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 test-file
» cat .git/refs/heads/my-branch
71ec77282937221294ab177346fb080c2c9bf2fc // new commit
```

Note:

- adding a commit to a branch simply moves the branch ref forward
- …so branches are simple, what's more interesting here is merging…
