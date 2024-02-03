## Delivery Pipelines

![delivery pipeline](/images/delivery-pipeline.png)

Note:

- we start out with our iteration or "sprint"
- someone takes an issue from the list of well-prepared and well-understood
  issues, each one ideally only a day or two of work
- they create a branch to do the work in
- once the changes in that are ready to be merged from their point of view which
  includes CI completing successfully of course as well as potentially other
  stakeholders having reviewed and approved the changes on a preview system,
  they open a PR
- that PR is reviewed by another engineer and once approved, the branch is
  merged back
- once merged back to the main branch, it is deployed to production
  automatically
- once deployed, the production system is validated, ideally with smoke tests
  that run against the production system
- also the production system is constantly monitored for errors, performance,
  etc.
- there's much to say about each of these points but in this workshop we focus
  on the middle part of this diagram
