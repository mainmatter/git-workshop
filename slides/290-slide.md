```bash
» git clone git@github.com:simplabs/git-workshop.git
Cloning into 'git-workshop'...
remote: Enumerating objects: 70, done.
remote: Counting objects: 100% (70/70), done.
remote: Compressing objects: 100% (31/31), done.
remote: Total 70 (delta 27), reused 66 (delta 23), pack-reused 0
Receiving objects: 100% (70/70), 79.71 KiB | 784.00 KiB/s, done.
Resolving deltas: 100% (27/27), done.
» cd git-workshop
» git remote -v
origin	git@github.com:simplabs/git-workshop.git (fetch)
origin	git@github.com:simplabs/git-workshop.git (push)
```

Note:

- we clone our example repo
  - …and list the remotes
  - the origin remote has been added by default as the remote you cloned the
    repo from
  - why there are separate URLs for fetching and pushing we don't care about now
    - in reality they will always be the same for you anyway (I don't think I've
      ever had the case where the 2 were different)
  - you can use `git remote` to add and remove remotes but we won't cover that –
    it's not something you'll regularly need and you can always read up on it
- you'll fetch, pull and push from and to remotes – what does that mean?
