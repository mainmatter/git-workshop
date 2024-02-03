```bash
» git rev-parse HEAD^{tree}
efc1ddf585012aa6b07217858f9caf8b2977e434
```

```bash
» git cat-file -p efc1ddf585012aa6b07217858f9caf8b2977e434
100644 blob 1f22b9c26a3d8e65b0d0393dbe20c556a68a6416	.gitignore
100644 blob e10db93f4cbe2b2928419ff2f84cd75d7168f498	README.md
040000 tree 100fd3a355de08e0ffc042255b6b3a477abf6096	examples
```

Note:

- get the OID of the root tree of the repo
- that tree lists other trees (folders) and blobs (files) toghether with their
  paths and file modes
- like for blobs, the OID of a tree depends on its contents, any change in a
  tree will result in its OID to change
  - if a subtree's OID changes, its parent tree OID will change as well, all the
    way up to the root tree
- …this is how Git recognizes moved files and also why it shows the file as
  deleted first until you add it at the new location (until which time the file
  in the new location is not part of the repo)…
