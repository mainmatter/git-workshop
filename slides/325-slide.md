#### Rebasing – advantages:

- constant reassurance that our changes are in line and make sense still with
  what's happening on the target branch
  - inconsistencies and test failures are discovered early
- detect conflicts early: it's easier to resolve many small conflicts than one
  huge one when merging
- a better (potentially even linear) history on the target (main) branch

Note:

- if changes that oppose our own changes or in combination with which our
  changes no longer make sense, we see that early
- if tests are broken, we see that and we not only know that our changes work in
  combination with an old revision of the target branch but with the latest
  revision
- we keep resolving conflicts as they occur as opposed to fixing a huge conflict
  when we merge back
- a clean history on the target branch enables easier code archaology, etc.
- …to understand how this works, first some more theory…
