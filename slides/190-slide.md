changed: the file is part of the repo and has different contents than what's
referenced from the HEAD revision of the repo's root tree\*

```bash
» echo "test" >> README.md
» git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  modified:   README.md

no changes added to commit
```

Note:

- we're editing `README.md` which is tracked by git
- git reports the file as changed
- so what does this staged for commit mean?
  - we'll see that the text on this slide is not precisely correct
