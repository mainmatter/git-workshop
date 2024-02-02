## Task

We want to apply all of what we learned and fix a bad PR:

![bad PR](/images/bad-pr-task.png)

- rebase the branch on the target branch
- clean up the commit history
- add proper description, etc.

Make use https://git-scm.com/docs and `git <command> --help`.

Note:

- pair with 2 people & talk to each other about what you're doing
- this is the last task – you know everything you need to know after this!
- things to realize/fix:
  - CI isn't running because the config was only fixed in a later commit
  - there's a conflict
  - the addition of Prettier should go into its own PR
  - a test is missing for the multiplication
  - some of the commits (possibly all of the remaining 3) should be combined
    into one
  - the PR should have a proper description
