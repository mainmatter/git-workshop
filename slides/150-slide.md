```bash
» git rev-parse HEAD
53bef251fe116f9cc293f4d39a7d2519e58101d0
```

```bash
» git cat-file -p 53bef251fe116f9cc293f4d39a7d2519e58101d0
tree efc1ddf585012aa6b07217858f9caf8b2977e434
parent 83d8100283ab5123f78f1e193ff29e37f686e636
author Marco Otte-Witte <marco.otte-witte@simplabs.com> 1613744305 +0100
committer Marco Otte-Witte <marco.otte-witte@simplabs.com> 1613744305 +0100

improve README
```

Note:

- we get the OID of the latest commit
- that commit refers to a tree and a parent commit
- that tree identifies a revision of the entire repo uniquely
- as a note: this is now how we look at commits…
