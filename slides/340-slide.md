#### Rebasing is really just applying a series of cherry-picks

![rebasing start](/images/rebasing-scenario.png)

![rebasing result](/images/rebasing-result.png)

Note:

- the `experiment` branch is branched off commit C2 on `master`
- when we rebasing on `master`, we move the base commit of the `experiment`
  branch to the HEAD of `master`
- we then create a new commit C4' that contains the diff of C4 but the parent
  commit of that commit is now C3
- this way:
  - the `experiment` branch contains everything that the `master` branch
    contains so the state of the `experiment` branch is the exact same code as
    what we get on `master` when we merge `experiment` into it
  - when merging `experiment` into `master` we can simply fast-forward `master`
- …so how does rebasing work?…
