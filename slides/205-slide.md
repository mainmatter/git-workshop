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

Note:

- we're adding a few lines to the README.md
- but we don't want to commit all those changes at once so we stage them
  interactively and thus have control
- we end up with parts of the changes staged and parts of the changes not
