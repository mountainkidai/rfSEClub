# Git Commands

## Phase 6: Detaching & Time Travel

### Detaching HEAD

To detach the head to a specific commit:

```bash
git checkout commit-id  # (first 7 digits)
```

To detach the head to a specific commit using HEAD:

```bash
git checkout HEAD~1
```

Where:

- `HEAD~1` = Last commit
- `HEAD~2` = Last but one commit

### Creating New Commit at Detached HEAD

1. Create a new branch at detached head
2. Do the commit
3. Switch back to master or your branch
4. Merge it

Or:

```bash
git branch branch-name new-commit-id
# Git merge it to master or your branch
```

### Reattaching HEAD

```bash
git switch branch-name
```

### Switching Between Branches

```bash
git switch -
```

### Undoing Changes

### Using Git Restore

To undo the unstaged changes in a specific file:

```bash
git restore filename

```

To undo everything in unstaged:

```bash
git restore .
```

To undo or discard the staged changes:

```bash
git restore --staged filename
# or
git restore --cached filename
```
