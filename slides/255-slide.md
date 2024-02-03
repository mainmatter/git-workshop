#### Non-linear Merging – 3-way Merge

![non-linear merging – 3-way merge](/images/non-linear-merging-3-way-merge.png)

Note:

- there's 3 relevant commits here:
  - C2 which is the common ancestor of the 2 branches
  - C4 which is the head of the target branch
  - C5 which is the head of the branch to be merged
  - since each commit is a snapshot of the entire repository we don't have to
    worry about C3
    - it doesn't matter what the state of the repo was at some point during the
      branche's lifetime, all that's relevant is the difference between the HEAD
      of the branch and it's root as that's what we're merging back
    - but there's also a diff between the HEAD of the target branch and the same
      base commit
  - so what's happening here is
    - we're generating 2 diffs and combine them into one
    - we then create a new commit that applies the changes in the new diff to
      the common parent
    - the resulting state of the repo (the new revision of the root tree) is the
      snapshot that goes into that commit
