## Example

Merging the target branch into our branch vs. rebasing our branch on the target
branch.

Note:

- both on the command line and with Fork:
  - show that `examples` and `examples-merge-rebase` have diverged
    - we cannot fast-forward the `examples` branch when merging
      `examples-merge-rebase`
  - merge `examples` into `examples-merge-rebase`
    - we now have an extra merge commit
  - reset
  - rebase `examples-merge-rebase` on `examples`
    - we now have a clean history
