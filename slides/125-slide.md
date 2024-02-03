```bash
» git rev-parse HEAD~1:README.md
504664fd7021fde560326b2d3bde3f858fae6116
```

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

- so that the OID of the previous revision of the file is different
- and if we edit the file, its hash will no longer match the OID of the current
  revision and the file will show as modified
- …of course we're not just dealing with file contents but the files are
  arranged in directories
