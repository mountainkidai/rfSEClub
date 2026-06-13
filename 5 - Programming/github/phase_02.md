# Git Commands

## Phase 2: Branching

### Check Current Branch

To check the head position:

```bash
git branch
```

### Creating Branches

To create a branch:

```bash
git branch branch-name
```

Example:

```bash
git branch coffee
```

### Switching Branches

Switch branch:

```bash
git switch branch-name
```

To create a branch and switch:

```bash
git switch -c branch-name
git checkout -b branch-name
```

### Branch Information

To view information about each branch:

```bash
git branch -v
```

### Deleting Branches

To delete branch after merging:

> **Note:** You can't delete the branch that you're currently using

```bash
git branch -d branch-name
```

To delete branch forcefully without merge:

> **Note:** You can't delete the branch that you're currently using

```bash
git branch -D branch-name
```

---
