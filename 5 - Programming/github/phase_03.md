# Git Commands

## Phase 3: Git Merge

There are 3 kinds of merges:

1. Fast forwarding
2. Merge commit without conflict (with no forward commits in the other branch)
3. Merge commit with conflict (with 1 or more forward commit in the other branch)

### How to Merge

Switch to the branch that you want to receive the merge:

```bash
git switch branch-name
```

Now merge the other branch into your branch:

```bash
git merge branch-name
```

---
