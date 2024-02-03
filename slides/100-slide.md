#### Objects

Git has 3 kinds of objects, each identified by an object ID (OID, 40 character
long hashes) and stored in the object database (`./git/objects` folder)

Note:

- you'll most often use only the first 8 characters as those are enough to
  uniquely identify things usually
  - if ever the first 8 characters are not enough, Git will tell you and you
    simply use more characters
- …listing all objects in a repo…
