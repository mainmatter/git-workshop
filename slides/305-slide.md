#### Pushing

Pushing sends your local state back to the origin so others can see it as well.

```bash
» git ci -a -m "test commit"
[main 61381a3] test commit
 1 file changed, 1 insertion(+)
» git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.

nothing to commit, working tree clean
» git push origin main
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 351 bytes | 351.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To github.com:simplabs/git-workshop.git
   53bef25..61381a3  main -> main
```

Note:

- we make a local change and commit that
  - so now we have a commit that's not on the server
- we then push the commit to the same branch on the server
  - note that pushing is also a merge of our local branch into the remote's
    branch
  - contrary to pulling though, this will always be a fast-forward merge
    - and it's clear why that is: there's no human sitting on the other end here
      who would accept the changes and be able to resolve potential conflicts
    - if there were commits added on the remote in the meantime and a 3-way
      merge is necessary, you'll have to do the merge locally first and then
      push the merge commit back to the remote
- …so now we have figured out all the understanding and tools we need to be able
  to…
