# Git

---

## Why do we even care?

Notes:
* the old way of shipping code to production looks something like this…

---

<!-- .slide: data-background-image="/images/flood.gif" -->

Notes:
* we make changes to our codebase until finally release day comes and we ship.
* this is when the engineering team hides as a flood of bugs is about to come in
* but this is not what we want – instead we want this…

---

<!-- .slide: data-background-image="/images/stream.gif" -->

Notes:
* a steady but calm stream of incremental changes
* this requires what we call a delivery pipeline…
* how does that work?

---

## Delivery Pipelines

![delivery pipeline](/images/delivery-pipeline.png)

Notes:
* we start out with our iteration or "sprint"
* someone takes an issue from the list of well-prepared and well-understood issues, each one ideally only a day or two of work
* they create a branch to do the work in
* once the changes in that are ready to be merged from their point of view which includes CI completing successfully of course as well as potentially other stakeholders having reviewed and approved the changes on a preview system, they open a PR
* that PR is reviewed by another engineer and once approved, the branch is merged back
* once merged back to the main branch, it is deployed to production automatically
* once deployed, the production system is validated, ideally with smoke tests that run against the production system
* also the production system is constantly monitored for errors, performance, etc.
* there's much to say about each of these points but in this workshop we focus on the middle part of this diagram

---

## Pull/Merge Request based workflows

![PR/MR based workflow](/images/pr-workflow.png)

Notes:
* everyone is familiar with this generally by now and even if some teams would have more branches etc. (which I'd generally advice to avoid though), it's always the same: branch – validate – merge
* and virtually everyone is using git for that
* btw: GitHub and Bitbucket say Pull Requests while GitLab says Merge Request but they really all work the same way
* yet, it's not always as easy as it looks in this diagram and many people and teams are struggling with this workflow
* which is why we're doing this workshop

---

## Gitting things done

Notes:
* what will we be covering?

---

* Issues
* PRs/MRs
* Git
  * How does it even work? 🙀
  * Branching and Merging
  * Rewriting history

Notes:
* we'll be focussing on Git but since issues and PRs/MRs are the foundation of organizing our work, we'll look into those topics as well
* Then we'll look into how Git even works – don't worry, it's easier than you might think and we're not going into every little detail
* Branching and merging are at the core of how we work so we'll look into what's actually happening when we use those features
* Taming and rewriting history is essential to a successful PR/MR based workflow

---

## Issues

Issues aren't just a place to put notes or high level requirements

Notes:
* Well-prepared issues are a key element of an effective development process. They provide guidance for the project team's work, allow external parties not directly involved with the project to get an understanding of what is happening directly, and can serve as a future reference to understand what was done in a project, and for which reasons.

---

![bad issue](/images/bad-issue.png)

Notes:
* this is obviously pretty bad
  * not clear what specifically is to be done
  * no information (e.g. what's slow? how slow?, etc.)
  * no proper description or background info (e.g. have users complained, etc.)

---

#### Good issues aim to:

* describe what is to be done and why
* include a course of action
* include all necessary materials and references
* be a discrete unit of work

Notes:
* add all context you have, including visual materials, a bit of history and alternatives that have been ruled out and why, etc.
  * the issue is not only written for the person doing the work who maybe has all the details in their head somewhere
  * that person might forget all those details but others don't know them anyway, yet might be interested in what's happening or have relevant information to share
  * issues are also relevant as historic artifacts when someone (sometimes even the issue's author) is trying to understand why something was done in hindsight
* figuring out what individual changes need to be made to close the issue is invaluable for uncovering uncertainties, hidden complexity or blockers
  * the alternative is you'll run into those later when you have spent time and work already which in the worst case is now useless
  * this is not about listing every single code change but listing the fundamental steps and most importantly thinking those through
  * if you cannot come up with this list, it's a great indicator the issue is not ready to be worked on yet –> do a spike first!
* the issue should be the central place for all information necessary to complete it
  * while collecting materials, references, etc. you'll realize if anything is missing and the issue is not ready to be worked on yet!
* separate tasks go into separate issues
  * ideally an issue is only a few days of work
  * that does not mean, bigger tasks can not be broken down but each issue should "make sense" on its own
* preparing issues like this takes time and in my experience it's important to make clear that this is an essential part of everyone's job
  * this is also not the task of the PM – they will not have the necessary context around everything to be able to prepare an issue like this
  * yet, neither can an engineer do it on their own – this requires input from all involved stakeholders!
* …so let's say you have an issue like that, what comes next…

---

#### Iterations/Sprints

provide plannability and focus

Notes:
* we prefer saying "iteration" – "sprint" is unfortunate wording since running a marathon in a series of sprints will not make you complete the marathon faster than a steady pace
  * you will likely even be slower and certainly much more exhausted when reaching the finish line
* iterations provide plannability and focus
  * it's clear to everyone what you plan to work on and what you don't plan to work on (of course plans can change and you want to remain open to that)
  * reducing scope to just 1-2 weeks also makes it easier to understand each single issue and prepare it as explained previously
    * you will find out things while preparing and working on the issues in the iteration and those learnings will inform prioritization as well as scoping and preparation of the issues for the next iteration
* …so you have your iteration with well-prepared issues, you take an issue and start coding away…

---

#### Branches

![my home is my castle](/images/my-home-is-my-castle.jpg)

Notes:
* first thing you do is you create a branch
* the branch you create for the issue you're working on is for that issue only and only for you (and maybe the person you're pairing with)
* in your branch, you don't have to worry about interfering with others or destroying anything
  * it also keeps the scope of changes you're dealing with small – the diff between your branch and the main branch is all you have to worry about
* and I'll stress it again, you really want to have a branch model where you have a main branch and feature branches only
  * any other branching model (e.g. develop, master, production, hotfix branches, etc.) in my experience is only necessary either:
    * if you're legally required to somehow have changes certified (if you're a bank or whatever)
    * or, which is way more common, to cover up a lack of automation around testing and deployment
* …so you're working in your branch and at some point you're happy with things and you create…

---

#### Pull Requests/Merge Requests

are about communicating around what's going on

Notes:
* …take them seriously…

---

![bad PR](/images/bad-pr.png)

Notes:
* this is obviously bad
  * no description – you have to dig through the code to find out what this does
  * no reference to an issue even that might provide context
* so what's a good PR then?

---

#### Good Pull Requests

* address a single issue (or an aspect of a single issue)
* summarize the changes they include in the description
* include guidance for testing the changes
* visualize changes if applicable
* reference the issue they address and all other relevant materials

Notes:
* combining multiple unrelated issues or changes in one PR makes following what the PR does harder and creates unnecessary dependencies – one change for one issue not being ok also blocks other changes from being merged
* not providing an overview of what a PR does, why and how means the only way to find out is be inspecting the changes which might or might not be a trivial thing to do
  * not everyone looks at a PR to review and would look at all individual changes anyway – maybe someone just wants to follow what's happening or you or someone else looks at the PR later to understand a project's history
* reviewers will want to test changes and must know how to do that
  * or product experts or other stakeholders are looking at the PR on a preview system and might not even be able to infer what, where or how to test from looking at the code changes
* before/after screenshots etc. give a good impression of what a PR does at a glance
* obviously this is useful to be able to understand what task this addresses
  * if merging the PR closes that issue, add something like "closes #ticket" (depending on what tool you use)
* …eventually every PR wants to be merged but before that comes the…

---

#### Reviews

are for ensuring quality and sharing know-how

Notes:
* of course you need automated testing but
  * quality isn't correctness: bad code can still work correctly
  * wrong code with wrong or no tests doesn't make a good package
* after pairing, reviewing is the best way there is to share know-how
  * you don't want to end up with only the author of something knowing anything about how it works
* …to make reviews work and work well though, make sure a PR fulfils the requirements…

---

#### Pre-Review checklist

* the PR isn't "work in progress"
* the changes in the PR are covered by (passing) tests
* the branch does not have conflicts with the target branch
* the commit history is cleaned up

Notes:

* it's fine to ask for feedback on a PR that's in progress but for a final review the author should consider it to be complete
* if there are no tests or not enough tests or the tests are failing, it's likely that the non-test changes would have to change again as well as bugs are uncovered while adding or fixing tests
  * thus, what anyone would review would likely not be the final changes that would be merged
* while resolving the conflicts, the branch will change, meaning that reviewing before those changes would mean not reviewing the final set of changes that will be merged
* it's fine to make a mess on your own branch while you're working on it
  * see above – "my home is my castle"
  * but you don't want to merge that mess back into your main history
  * for bigger or complex PRs, it's sometimes good to review by commit which is harder when there's a mess
* these last 2 points is typically what people struggle with
  * …which is why we're doing this workshop
  * …so let's jump right into it…

---

## Git – how does it even work

🙀

Notes:
* don't worry – as I said, not too much detail
  * and it's actually not as hard as you might think it is
* understanding at least roughly how git works internally helps figuring out all kinds of situations later on

---

<!-- .slide: data-background-image="/images/breathe.gif" -->

Notes:
* everyone breathe
* …we'll start with…

---

#### Objects

Git has 3 kinds of objects, each identified by an object ID (OID, 40 character long hashes) and stored in the object database (`./git/objects` folder)

Notes:
* you'll most often use only the first 8 characters as those are enough to uniquely identify things usually
  * if ever the first 8 characters are not enough, Git will tell you and you simply use more characters
* …listing all objects in a repo…

---

#### Listing all Objects

```bash
» git rev-list --objects --all
[…]
92bc321cc4e6662009a9e1aa837b1b9819546a22
73889ca9bec7afba1c6017c16090e22d29be1bb5 
1f22b9c26a3d8e65b0d0393dbe20c556a68a6416 .gitignore
e10db93f4cbe2b2928419ff2f84cd75d7168f498 README.md
100fd3a355de08e0ffc042255b6b3a477abf6096 examples
a0fb1384f103b29cea1957edede6926d3d689416 examples/my-awesome-calculator
a4aa5dff44ff36b82a90e3e8fa4b549376ffeda5 examples/my-awesome-calculator/.github
b810dee8a9db3c90d1426dd3355609066b4df727 examples/my-awesome-calculator/.github/workflows
68a0a4e13da8d612cd35a5bfc078a58ff4733c9c examples/my-awesome-calculator/.github/workflows/ci.yml
24d5e769ff7985509c66596fb82aef70163f7024 examples/my-awesome-calculator/babel.config.js
72c093726c8bba1ddc968657389f4aabd9a0c8aa examples/my-awesome-calculator/jest.config.js
a4fe39dff9195de7f5f531a10bf63e004fef3f5e examples/my-awesome-calculator/my-awesome-calculator.js
c768c3563b642195b3a7b130bd251b5be7200d87 examples/my-awesome-calculator/my-awesome-calculator.test.js
41833794b930a9c241dac706442d403ef5c6792e examples/my-awesome-calculator/package.json
c1a112cb602ac6d06fc8f353b7bae86c535e0e47 examples/my-awesome-calculator/yarn.lock
[…]
```

Notes:
* you see some of these have filenames, some don't
* …so what kinds of objects exist?…

---

#### Git Object types

* Blobs (File Contents)
* Trees (Directories)
* Commits

Notes:
* let's look at blobs first…

---

#### Blobs

Blobs store contents of files at a particular revision.

---

```bash
» git rev-list --objects --all
[…]
e10db93f4cbe2b2928419ff2f84cd75d7168f498 README.md
```

```bash
» git cat-file -p e10db93f4cbe2b2928419ff2f84cd75d7168f498
# Git Workshop
```

Notes:
* previously we saw an object with OID e10db9… and README.md
  * that object is simply the contents of the README.md file
* …since this is a hash, we get a new hash with every change that is made to the file

---

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

Notes:
* so that the OID of the previous revision of the file is different
* and if we edit the file, its hash will no longer match the OID of the current revision and the file will show as modified
* …of course we're not just dealing with file contents but the files are arranged in directories

---

#### Trees

Blobs only contain file **contents**. Trees are ordered lists of paths with files modes and OIDs that references other trees or blobs.

---

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

Notes:
* get the OID of the root tree of the repo
* that tree lists other trees (folders) and blobs (files) toghether with their paths and file modes
* like for blobs, the OID of a tree depends on its contents, any change in a tree will result in its OID to change
  * if a subtree's OID changes, its parent tree OID will change as well, all the way up to the root tree
* …this is how Git recognizes moved files and also why it shows the file as deleted first until you add it at the new location (until which time the file in the new location is not part of the repo)…

---

```bash
» cp README.md README2.md
» git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.

Untracked files:
  README2.md

nothing added to commit but untracked files present
```

```bash
» git add .
» git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.

Changes to be committed:
  new file:   README2.md
```

```bash
» git rm README.md 
rm 'README.md'
» git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.

Changes to be committed:
  renamed:    README.md -> README2.md
```

Notes:
* we first copy the README.md file to a new location
  * until we add the file to the repo, git doesn't handle it at all
  * when we add it, since the files are the same, they have the same OID, we simply get a new entry for that same OID with a different path in the tree
    * so git shows a new file
  * we then remove the old file
    * git sees a removed file and a file with identical OID, thus contents added so it shows it as moved
* I think this illustrates the concept of trees nicely
* …last kind of object in Git…

---

#### Commits

Commits are snapshots of the repository in time that reference a revision of the root tree of the repo as well as their parent commit(s).

Notes:
* in the case of merge commits, they will have multiple parent commits – more on that later
* commits also contain meta-data like author, committer, date, etc.
* as we saw, the reference to the root tree is enough to refer to the entire repo at a particular revision

---

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

Notes:
* we get the OID of the latest commit
* that commit refers to a tree and a parent commit
* that tree identifies a revision of the entire repo uniquely
* as a note: this is now how we look at commits…

---

#### Visualizing Commits

![diff](/images/diff.png)

Notes:
* when looking at commits, you're looking at a diff between the commit and its parent
  * that diff is calculated on the fly and nost stored anywhere
  * how that diffing works doesn't really matter but every diff is the result of comparing 2 snapshots of the entire repo
  * …and those snapshots are references to the root tree of the repo at a particular revision
* …so what's the big picture here?…

---

#### The big picture

![big picture](/images/big-picture.webp)

Notes:
* a repo's history is a list of commits, each pointing to its parent
* each commit points to a particular revision of the root tree of the repo
  * which in turn points to blobs and subtrees, which point to blobs and subtrees again, etc.
  * since blobs' and trees' OIDs are dependent on their contents, every blob and tree at a particular revision only exists once
    * so you're not actually copying all of the repo every time you're snapshotting
* branch names or special identifiers like `HEAD` are just names for commit OIDs
  * you can think of them like DNS entries

---

## Task

We want to read the contents `README.md` with `git cat-file` at the snapshot/commit 83d8100283ab5123f78f1e193ff29e37f686e636.

* get the OID of the tree that commit references
* get the OID of the blob the tree points to at path `README.md`
* get the contents of the blog with `git cat-file`

Make use https://git-scm.com/docs and `git <command> --help`.

Notes:
* pair with 2 people & talk to each other about what you're doing
* …how do files and changes end up in our repo?…

---

### Stages

Git distinguishes between 4 states the files in your working directory can have:

---

untracked: the file is in the same folder you cloned the repo to but not part of the repo

```bash
» touch test-file
» git status
On branch content
Your branch is up to date with 'origin/content'.

Untracked files:
  test-file

no changes added to commit
```

Notes:
* we create a new file
* `test-file` isn't part of the repo, just happens to be a local file but is otherwise irrelevant to git

---

* tracked: the file is part of the repo

```bash
» git rev-parse HEAD^{tree}
5ca643ec5f09cd61ac8334e42323fbd61b431b91
» git cat-file -p efc1ddf585012aa6b07217858f9caf8b2977e434
100644 blob 1f22b9c26a3d8e65b0d0393dbe20c556a68a6416	.gitignore
100644 blob e10db93f4cbe2b2928419ff2f84cd75d7168f498	README.md
040000 tree 100fd3a355de08e0ffc042255b6b3a477abf6096	examples
```

Notes:
* basically all files that are referenced from the repo's root tree or any of its subtrees
  * or their subtrees etc.
* …adding a file…

---

```bash
» touch test-file
» git status
On branch content
Your branch is up to date with 'origin/content'.

Untracked files:
  test-file

no changes added to commit
» git add test-file 
» git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  new file:   test-file
» git reset test-file 
» git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  test-file

nothing added to commit but untracked files present
```

Notes:
* same example as before, new file is not tracked initially
* adding it makes it tracked (we can ignore what staged for commit means for now)
* `reset` removes it from the repo again
* …next, editing files that are in the repo already…

---

* changed: the file is part of the repo and has different contents than what's referenced from the HEAD revision of the repo's root tree*

```bash
» echo "test" >> README.md 
» git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  modified:   README.md

no changes added to commit
```

Notes:
* we're editing `README.md` which is tracked by git
* git reports the file as changed
* so what does this staged for commit mean?
  * we'll see that the text on this slide is not precisely correct

---

staged: a tracked file that has changed and those changes will be part of the next commit

```bash
» echo "test" >> README.md 
» git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  modified:   README.md

no changes added to commit

» git add README.md
» git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  modified:   README.md
» git reset README.md 
Unstaged changes after reset:
M	README.md
» git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  modified:   README.md

no changes added to commit
```

Notes:
* same example as before – we change the file, git marks it as changed but not staged
* we add it, it is now staged and will be part of the next commit
* we then use `reset` to go back a step and make file changed again
* notice that on this slide we say that a set of changes to a file will be part of the next commit, not necessarily the entire file…

---

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

Notes:
* README.md has been changed and those changes (not the file as such!) have been staged for commit
* we then change the file again but those changes are not staged
* this is the reason for the mark on the slide for the "changed" state
  * "changed" does not mean the contents of the file on disk are different from the contents of the same file in the HEAD revision of the repo but that they are different from the HEAD revision of the repo or a version of the file that has been staged for commit
* …so that shows how you have pretty fine-grained control over what goes into your commits but you can go even further:

---

Interactive staging allows staging changes to files line-by-line vs. all at once

```bash
» echo "test\n\nmore test" >> README.md
» git add -p README.md 
diff --git a/README.md b/README.md
index e10db93..c6465a6 100644
--- a/README.md
+++ b/README.md
@@ -7,3 +7,6 @@ This is the example application we're using in the Git workshop.
 Copyright © 2021 simplabs GmbH (https://simplabs.com); released under the
 Attribution NonCommercial ShareAlike 3.0 Unported license.
 
+test
+
+more test
(1/1) Stage this hunk [y,n,q,a,d,e,?]? e
Press [Return] when finished editing...
» git status 
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  modified:   README.md

Changes not staged for commit:
  modified:   README.md

```

Notes:
* we're adding a few lines to the README.md
* but we don't want to commit all those changes at once so we stage them interactively and thus have control
* we end up with parts of the changes staged and parts of the changes not

---

## Example

Making several changes at once, then committing them individually.

Notes:
* both on the command line and with Fork:
  * on the `examples` branch, edit the file and create 3 sections
  * commit them individually, one-by-one

---

## Task

We want to make some changes to the README.md and stage them individually.

* add 3 new sections to the `README.md`
* commit those sections each in its own commit

Make use https://git-scm.com/docs and `git <command> --help`.

Notes:
* pair with 2 people & talk to each other about what you're doing
* next: branches…

---

#### Branches

```bash
» git switch -c my-branch
» cat .git/refs/heads/my-branch
53bef251fe116f9cc293f4d39a7d2519e58101d0
```

```bash
» cat .git/HEAD                
ref: refs/heads/my-branch
```

Notes:
* branches are (one kind) of references
* they are kept in .git/reafs/heads/*
* the value is simply the latest commit of the branch
  * this is why branching is so cheap
  * you're simply adding a new name for a commit
* HEAD simply points to the current branch

---

#### Branches

```bash
» touch test-file
» git add test-file
» git commit -m "test commit"
[main 71ec772] test
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 test-file
» cat .git/refs/heads/my-branch 
71ec77282937221294ab177346fb080c2c9bf2fc // new commit
```

Notes:
* adding a commit to a branch simply moves the branch ref forward
* …so branches are simple, what's more interesting here is merging…

---

#### Merging

There's no value in branching without merging.

Notes:
* and while most of the time you'll be using GitHub/GitLab etc. for merging, it's valuable to understand what's actually happening when merging a branch into another one
* there's 2 cases – linear and non-linear merges…

---

#### Linear Merging

![linear merging](/images/linear-merging.png)

Notes:
* here we're merging "hotfix" into "master"
  * ignore the "iss53" branch for now
* the parent of the first commit in the merged branch is the latest commit in the target branch
  * so git can "fast-forward" the target branch to the latest commit in the merged branch…

---

#### Linear Merging – Fast Forwarding

![linear merging – fast forward](/images/linear-merging-fast-forward.png)

Notes:
* both the merged merged branch and target branch point to the same commit in a linear history now
* so this is easy but when talking about merging we're typically thinking of a more complicated scenario…

---

#### Non-linear Merging

![non-linear merging](/images/non-linear-merging.png)

Notes:
* the target branch has progressed separately since we created our branch
* so we cannot fast-forward the target branch since that would mean we'd lose the commit C4
* …instead we need to do a 3-way merge…

---

#### Non-linear Merging – 3-way Merge

![non-linear merging – 3-way merge](/images/non-linear-merging-3-way-merge.png)

Notes:
* there's 3 relevant commits here:
  * C2 which is the common ancestor of the 2 branches
  * C4 which is the head of the target branch
  * C5 which is the head of the branch to be merged
  * since each commit is a snapshot of the entire repository we don't have to worry about C3
    * it doesn't matter what the state of the repo was at some point during the branche's lifetime, all that's relevant is the difference between the HEAD of the branch and it's root as that's what we're merging back
    * but there's also a diff between the HEAD of the target branch and the same base commit
  * so what's happening here is
    * we're generating 2 diffs and combine them into one
    * we then create a new commit that applies the changes in the new diff to the common parent
    * the resulting state of the repo (the new revision of the root tree) is the snapshot that goes into that commit

---

#### Non-linear Merging – Merge commit

![non-linear merging – merge commit](/images/non-linear-merging-merge-commit.png)

Notes:
* C6 is the new merge commit we created in the merge process
  * it has 2 parents which are the latest commits from the merged branch and the target branch
  * and the target branch's HEAD now is that new merge commit
* during the generation of this merge commit is when conflicts will occur that you'll fix then

---

#### Task – linear merge

We want to do both a fast-forward and a 3-way merge commit

* from the `main` branch, create a new branch `my-branch`
* add a commit to that branch
* go to the `main` branch
* merge `my-branch` into the `main` branch
* look at the history

---

#### Task – 3-way merge

* from `main` branch, create a new branch `my-branch`
* add a commit to that branch
* go to the `main` branch
* add a commit to that branch
* merge `my-branch` into the `main` branch
* look at the history

---

Notes:
* we have covered the basics now but so far everything has been local on your machine only – we need to add…

---

## Remotes

Remotes enable collaboration across networks.

Notes:
* remotes are versions of a repository you have cloned locally that exist somewhere on the network
* typically you'll have one remote which is your GitHub or GitLab server
  * but you can have multiple, e.g. a mirror of you main remote or even multiple remotes on the same GitHub/GitLab (e.g. forks)

---

#### Cloning

Cloning downloads a copy of a repository from a remote.

Notes:
* this is usually how you get your local repo
  * unless you initialize a repo locally and then you'd typically push it to a remote to make it available for others

---

```bash
» git clone git@github.com:simplabs/git-workshop-example.git
Cloning into 'git-workshop-example'...
remote: Enumerating objects: 70, done.
remote: Counting objects: 100% (70/70), done.
remote: Compressing objects: 100% (31/31), done.
remote: Total 70 (delta 27), reused 66 (delta 23), pack-reused 0
Receiving objects: 100% (70/70), 79.71 KiB | 784.00 KiB/s, done.
Resolving deltas: 100% (27/27), done.
» cd git-workshop-example 
» git remote -v
origin	git@github.com:simplabs/git-workshop-example.git (fetch)
origin	git@github.com:simplabs/git-workshop-example.git (push)
```

Notes:
* we clone our example repo
  * …and list the remotes
  * the origin remote has been added by default as the remote you cloned the repo from
  * why there are separate URLs for fetching and pushing we don't care about now
    * in reality they will always be the same for you anyway (I don't think I've ever had the case where the 2 were different)
  * you can use `git remote` to add and remove remotes but we won't cover that – it's not something you'll regularly need and you can always read up on it
* you'll fetch, pull and push from and to remotes – what does that mean?

---

#### Fetching

Fetching loads all information from a remote but does not change anything to your clone.

```bash
» git fetch origin
```

Notes:
* after fetching from a remote you have all information about the state of blobs, trees, commits, branches, etc. on the remote

---

#### Pulling

Pulling fetches all information from the remote and merges the server's version of the branch you're on into your local branch.

```bash
» git fetch
» git status
On branch main
Your branch is behind 'origin/main' by 1 commit, and can be fast-forwarded.

nothing to commit, working tree clean
» git pull
Updating 83d8100..53bef25
Fast-forward
 README.md | 10 +++++++++-
 1 file changed, 9 insertions(+), 1 deletion(-)
» git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

Notes:
* we start with our local branch being one commit behind the same branch on the origin remote
* you'll recognize it says our branch can be fast-forwarded
  * this is exactly what we talked about when we talked about merging
  * what happens when we pull is indeed simply a merge – we merge the remote branch into our local branch
    * so this is an easy case then and we can pull (merge)
      * after that our local branch is in sync with the server's branch
* so this is how we **get** data from a remote
  * but we also want to **send** data back

---

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
To github.com:simplabs/git-workshop-example.git
   53bef25..61381a3  main -> main
```

Notes:
* we make a local change and commit that
  * so now we have a commit that's not on the server
* we then push the commit to the same branch on the server
  * note that pushing is also a merge of our local branch into the remote's branch
  * contrary to pulling though, this will always be a fast-forward merge
    * and it's clear why that is: there's no human sitting on the other end here who would accept the changes and be able to resolve potential conflicts
    * if there were commits added on the remote in the meantime and a 3-way merge is necessary, you'll have to do the merge locally first and then push the merge commit back to the remote
* …so now we have figured out all the understanding and tools we need to be able to…

---

## Rewriting History

![PR – conflict](/images/bad-pr-conflict.png)

Notes:
* we typically end up in situations like this:
  * our PR cannot be merged as there are conflicts (and the target branch cannot be fast-forwarded)
  * also the commit history has gotten messy and we don't want all that to end up in our main branch
  * we also don't want to merge the target branch into our local branch since that would result in a messy history on the target branch later on…

---

#### Example

Merging the target branch into our branch

Notes:
* both on the command line and with Fork:
  * show that `examples` and `examples-merge-rebase` have diverged
    * we cannot fast-forward the `examples` branch when merging `examples-merge-rebase`
  * merge `examples` into `examples-merge-rebase`
    * we now have an extra merge commit
  * reset
  * rebase `examples-merge-rebase` on `examples`
    * we now have a clean history

---

#### Rebasing

Rebasing allows us to move our branch's base commit to the HEAD of the target branch. Doing so interactively further allows to clean up the commits along the way.

Notes:
* ideally we want our main branch to have a linear commit history to make it easier to follow and to do code archeology afterwards
* rebasing our branches on the main branch's head lets us keep up with the latest changes on the target branch
  * moving the base commit of our branch with the target branch keeps us in the situation where our branch always adds changes to whatever is on the target branch
* this has many advantages…

---

#### Rebasing – advantages:

* constant reassurance that our changes are in line and make sense still with what's happening on the target branch
  * inconsistencies and test failures are discovered early
* detect conflicts early: it's easier to resolve many small conflicts than one huge one when merging
* a better (potentially even linear) history on the target (main) branch

Notes:
* if changes that oppose our own changes or in combination with which our changes no longer make sense, we see that early
* if tests are broken, we see that and we not only know that our changes work in combination with an old revision of the target branch but with the latest revision
* we keep resolving conflicts as they occur as opposed to fixing a huge conflict when we merge back
* a clean history on the target branch enables easier code archaology, etc.
* …to understand how this works, first some more theory…

---

#### Cherry Picking

Cherry Picking allows applying changes introduced by **any** existing commit **anywhere**.

Notes:
* you just take a commit from some branch or anywhere and apply it to whatever the revision is you local repo is on
* you might have done that already when you wanted to have a commit from another branch in your current branch or so
* …one thing to understand about cherry picking is…

---

#### Cherry Picking does not move commits

When applying the changes on one commit elsewhere, the commit in the new location will have a different parent commits and therefore **be** a different commit.

```bash
» git cherry-pick 1d88d72b4269fa80fe2d9e4fe0007cd54a01261c
[main f2ab459] test
 Date: Thu Feb 4 16:16:51 2021 +0100
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 test-file
```

Notes:
* the commit you're cherry picking will have a different parent commit than what your current HEAD is
* cherry-picking computes the diff between the cherry-picked commit and the current HEAD and creates a new commit that contains a snapshot of the repo at you HEAD with that diff applied
  * you might also have to resolve conflicts to be able to apply that diff at all
  * this is also why you sometimes see commits that have a different committer and author
    * the author is the person that did the original commit
    * the committer is the person that cherry-picked that commit somewhere else
* in this example you see that we cherry-pick commit 1d88… but the OID of the new commit is f2ab4…
* …how does that relate to rebasing…

---

#### Rebasing is really just applying a series of cherry-picks

![rebasing start](/images/rebasing-scenario.png)

![rebasing result](/images/rebasing-result.png)

Notes:
* the `experiment` branch is branched off commit C2 on `master`
* when we rebasing on `master`, we move the base commit of the `experiment` branch to the HEAD of `master`
* we then create a new commit C4' that contains the diff of C4 but the parent commit of that commit is now C3
* this way:
  * the `experiment` branch contains everything that the `master` branch contains so the state of the `experiment` branch is the exact same code as what we get on `master` when we merge `experiment` into it
  * when merging `experiment` into `master` we can simply fast-forward `master`
* …so how does rebasing work?…

---

```bash
» git switch my-branch
Switched to branch 'my-branch'
Your branch is up to date with 'origin/my-branch'.
» git fetch origin
» git status
On branch my-branch
Your branch is up to date with 'origin/multiplication'.

nothing to commit, working tree clean
» git rebase origin/main
» git status
On branch multiplication
Your branch and 'origin/multiplication' have diverged,
and have 7 and 4 different commits each, respectively.

nothing to commit, working tree clean
```

Notes:
* we switch to our branch
* we then fetch all the latest information from the origin
* we then check our branch is representative of what's on the remote
* we then rebase our branch on the HEAD of the `main` branch as it is on the origin
  * we could have rebased on the local HEAD of that `main` branch as well but that might be out of date of course
* since we rewrote history, our local branch and the remote branch now have different commits
* we can go a step further though…

---

#### Interactive Rebasing

Interactive Rebasing allows modifying the commits that are cherry-picked during the rebase.

Notes:
* we would often not only want to rebase
  * but maybe we want to remove some debug commits
  * or reorder the commits we did
  * or merge some commits that we made while figuring out the right solution to something into one commit
* …for all that we can do interactive rebasing…

---

#### Example

TODO: show interactive rebasing

Notes:
* …so how do we get our local changes back to the remote?

---

#### Force-Pushing

Force pushing overwrites the history on the origin.

```bash
git push --force-with-lease origin my-branch
```

Notes:
* there's no way we can cleanly apply our local changes to the remote since the histories are different
* but we know our local history is the one we want so we want to overwrite what's on the server
* force-pushing allows us to overwrite what's on the server
  * of course this is a destructive operation so use it carefully
  * there's no way to rebase without also force-pushing though
* so that's what we do with `git push --force-with-lease`
  * `force-with-lease` (as opposed to `force`) simply checks whether there were any new commits added to the remote revision of the branch since you last fetched so it's pretty safe
  * however, always do the above as one operation:
    * fetch
    * rebase on the version of the branch on the origin
    * then force-push
    * rebasing on a revision of a branch that is days old or rebasing a branch that is already not up-to-date with what's on the remote is likely to cause problems
* …but when we're rewriting history, how do your coworkers get our chagnes?

---

#### Resetting

The equivalent of force pushing is hard resetting. That will replace the local history with what's on the remote

```bash
» git fetch origin
» git status
On branch multiplication
Your branch and 'origin/multiplication' have diverged,
and have 7 and 4 different commits each, respectively.

nothing to commit, working tree clean

» git reset --hard origin/my-branch
» git status
On branch my-branch
Your branch is up to date with 'origin/multiplication'.

nothing to commit, working tree clean
```

Notes:
* we get all the latest information from the origin
* we check the status and see that our local history and the origin's history have changed
* we hard-reset our local history to what's on the origin
* after that our local history is up-to-date with the origin's
* you can only reset a clean working directory
  * if you're in the middle of something and someone tells you to hard-reset because they force-pushed, you can simply stash your local changes
* …task…

---

## Task

We want to apply all of what we learned and fix a bad PR:

![bad PR](/images/bad-pr-task.png)

* rebase the branch on the target branch
* clean up the commit history
* add proper description, etc.

Make use https://git-scm.com/docs and `git <command> --help`.

Notes:
* pair with 2 people & talk to each other about what you're doing
* this is the last task – you know everything you need to know after this!
