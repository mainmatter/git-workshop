#### Pre-Review checklist

- the PR isn't "work in progress"
- the changes in the PR are covered by (passing) tests
- the branch does not have conflicts with the target branch
- the commit history is cleaned up

Note:

- it's fine to ask for feedback on a PR that's in progress but for a final
  review the author should consider it to be complete
- if there are no tests or not enough tests or the tests are failing, it's
  likely that the non-test changes would have to change again as well as bugs
  are uncovered while adding or fixing tests
  - thus, what anyone would review would likely not be the final changes that
    would be merged
- while resolving the conflicts, the branch will change, meaning that reviewing
  before those changes would mean not reviewing the final set of changes that
  will be merged
- it's fine to make a mess on your own branch while you're working on it
  - see above – "my home is my castle"
  - but you don't want to merge that mess back into your main history
  - for bigger or complex PRs, it's sometimes good to review by commit which is
    harder when there's a mess
- these last 2 points is typically what people struggle with
  - …which is why we're doing this workshop
  - …so let's jump right into it…
