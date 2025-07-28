# Git Commands

## Phase 4: Git Diff

### Before Staging

To show the unstaged changes since last commit or to show the changes in our workspace that are not staged yet for the next commit:

```bash
git diff
```

To show all staged and unstaged changes since last commit. To show the changes in your workspace since your last commit. Changes can be anything (before staging/after staging):

```bash
git diff HEAD
```

### After Staging

To show the changes between staging area and last commit:

```bash
git diff --staged
# or
git diff --cached
```

To show the changes between staging area and last commit in a specific file:

```bash
git diff HEAD filename
# or
git diff --staged filename
```

### Comparing Branches and Commits

To show changes between two branches:

```bash
git diff branch1 branch2
```

To show changes between two commits:

```bash
git diff commit1 commit2
```

---
