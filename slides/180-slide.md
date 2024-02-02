tracked: the file is part of the repo

```bash
» git rev-parse HEAD^{tree}
5ca643ec5f09cd61ac8334e42323fbd61b431b91
» git cat-file -p efc1ddf585012aa6b07217858f9caf8b2977e434
100644 blob 1f22b9c26a3d8e65b0d0393dbe20c556a68a6416	.gitignore
100644 blob e10db93f4cbe2b2928419ff2f84cd75d7168f498	README.md
040000 tree 100fd3a355de08e0ffc042255b6b3a477abf6096	examples
```

Note:

- basically all files that are referenced from the repo's root tree or any of
  its subtrees
  - or their subtrees etc.
- …adding a file…
