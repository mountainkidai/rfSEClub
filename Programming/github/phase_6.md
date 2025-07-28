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

To undo the unstaged or working stage changes:

```bash
git checkout -- filename
# or
git checkout HEAD filename
# or
git checkout HEAD~1 filename
# or
git checkout commit-id filename
```

To undo everything:

```bash
git checkout .
```

### Using Git Restore

To undo or discard the unstaged or working stage changes:

```bash
git restore filename
```

To undo or discard the unstaged or working stage changes to a specific commit file:

```bash
git restore --source commit-id filename
# or
git restore --source HEAD~1 filename
```

To undo everything:

```bash
git restore .
```

To undo or discard the staged changes:

```bash
git restore --staged filename
# or
git restore --cached filename
```

### Undoing Commits

Undoing a commit or deleting a commit but not the file changes (e.g., by mistake you have committed in a wrong branch):

```bash
git reset commit-id
```

Permanently deleting a commit along with the file changes:

```bash
git reset --hard commit-id
```

Deleting a commit in a different way - revert. It will create a new commit and there it will delete the file changes:

```bash
git revert commit-id
```

---
