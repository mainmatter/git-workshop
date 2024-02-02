```bash
» git rev-list --objects --all
[…]
e10db93f4cbe2b2928419ff2f84cd75d7168f498 README.md
```

```bash
» git cat-file -p e10db93f4cbe2b2928419ff2f84cd75d7168f498
# Git Workshop
```

Note:

- previously we saw an object with OID e10db9… and README.md
  - that object is simply the contents of the README.md file
- …since this is a hash, we get a new hash with every change that is made to the
  file
