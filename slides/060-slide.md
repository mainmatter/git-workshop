#### Branches

![my home is my castle](/images/my-home-is-my-castle.jpg)

Note:

- first thing you do is you create a branch
- the branch you create for the issue you're working on is for that issue only
  and only for you (and maybe the person you're pairing with)
- in your branch, you don't have to worry about interfering with others or
  destroying anything
  - it also keeps the scope of changes you're dealing with small – the diff
    between your branch and the main branch is all you have to worry about
- and I'll stress it again, you really want to have a branch model where you
  have a main branch and feature branches only
  - any other branching model (e.g. develop, master, production, hotfix
    branches, etc.) in my experience is only necessary either:
    - if you're legally required to somehow have changes certified (if you're a
      bank or whatever)
    - or, which is way more common, to cover up a lack of automation around
      testing and deployment
- …so you're working in your branch and at some point you're happy with things
  and you create…
