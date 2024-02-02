#### Rebasing

Rebasing allows us to move our branch's base commit to the HEAD of the target
branch. Doing so interactively further allows to clean up the commits along the
way.

Note:

- ideally we want our main branch to have a linear commit history to make it
  easier to follow and to do code archeology afterwards
- rebasing our branches on the main branch's head lets us keep up with the
  latest changes on the target branch
  - moving the base commit of our branch with the target branch keeps us in the
    situation where our branch always adds changes to whatever is on the target
    branch
- this has many advantages…
