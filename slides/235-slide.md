#### Linear Merging

![linear merging](/images/linear-merging.png)

Note:

- here we're merging "hotfix" into "master"
  - ignore the "iss53" branch for now
- the parent of the first commit in the merged branch is the latest commit in
  the target branch
  - so git can "fast-forward" the target branch to the latest commit in the
    merged branch…
