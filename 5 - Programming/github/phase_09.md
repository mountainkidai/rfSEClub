# Git Commands

## Phase 9: Rebasing

### Alternative for Merging

> **Note:** Don't use

```bash
git switch newbranch
git rebase master  # or main
```

This would move all the new branch commits to the tip of master branch.

### Interactive Rebase

To change the commit details:

```bash
git rebase -i commit-id  # or HEAD~id
```
