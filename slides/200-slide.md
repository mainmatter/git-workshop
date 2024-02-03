```bash
» git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  modified:   README.md

» echo "more changes" >> README.md
» git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  modified:   README.md

Changes not staged for commit:
  modified:   README.md

```

Note:

- README.md has been changed and those changes (not the file as such!) have been
  staged for commit
- we then change the file again but those changes are not staged
- This is a very important point to consider, especially if you're just in the
  habit of running git add . (everything) and then git commit
  - "changed" does not mean the contents of the file on disk are different from
    the contents of the same file in the HEAD revision of the repo but that they
    are different from the HEAD revision of the repo or a version of the file
    that has been staged for commit
- …so that shows how you have pretty fine-grained control over what goes into
  your commits but you can go even further:
