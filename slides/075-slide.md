#### Good Pull Requests

- address a single issue (or an aspect of a single issue)
- summarize the changes they include in the description
- include guidance for testing the changes
- visualize changes if applicable
- reference the issue they address and all other relevant materials

Note:

- **read the first point** combining multiple unrelated issues or changes in one
  PR makes following what the PR does harder and creates unnecessary
  dependencies
- another thing to consider is that if you're combining two logical changes in
  one PR, one of those changes could need further discussion block other changes
  from being merged. If they were two separate PRs then the non-controversial
  changes could be merged while you discuss the blocking changes
- **read the second point** not providing an overview of what a PR does, why and
  how means the only way to find out is be inspecting the changes which might or
  might not be a trivial thing to do
  - not everyone looks at a PR to review and would look at all individual
    changes anyway – maybe someone just wants to follow what's happening or you
    or someone else looks at the PR later to understand a project's history
- **read the thrid point** reviewers will want to test changes and must know how
  to do that
  - or product experts or other stakeholders are looking at the PR on a preview
    system and might not even be able to infer what, where or how to test from
    looking at the code changes
- **read the forth point** before/after screenshots etc. give a good impression
  of what a PR does at a glance
- **read the fifth point** obviously this is useful to be able to understand
  what task this addresses
  - if merging the PR closes that issue, add something like "closes #ticket"
    (depending on what tool you use)
- …eventually every PR wants to be merged but before that comes the…
