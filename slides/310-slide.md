#### Rewriting History

![PR – conflict](/images/bad-pr-conflict.png)

Note:

- we typically end up in situations like this:
  - our PR cannot be merged as there are conflicts (and the target branch cannot
    be fast-forwarded)
  - also the commit history has gotten messy and we don't want all that to end
    up in our main branch
  - we also don't want to merge the target branch into our local branch since
    that would result in a messy history on the target branch later on…
