#### Cherry Picking does not move commits

When applying the changes on one commit elsewhere, the commit in the new
location will have a different parent commits and therefore **be** a different
commit.

```bash
» git cherry-pick 1d88d72b4269fa80fe2d9e4fe0007cd54a01261c
[main f2ab459] test
 Date: Thu Feb 4 16:16:51 2021 +0100
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 test-file
```

Note:

- the commit you're cherry picking will have a different parent commit than what
  your current HEAD is
- cherry-picking computes the diff between the cherry-picked commit and the
  current HEAD and creates a new commit that contains a snapshot of the repo at
  you HEAD with that diff applied
  - you might also have to resolve conflicts to be able to apply that diff at
    all
  - this is also why you sometimes see commits that have a different committer
    and author
    - the author is the person that did the original commit
    - the committer is the person that cherry-picked that commit somewhere else
- in this example you see that we cherry-pick commit 1d88… but the OID of the
  new commit is f2ab4…
- …how does that relate to rebasing…
