# Git Commands

## Phase 7

### Deleting Commits

Undoing a commit or deleting a commit but not the file changes (e.g., by mistake you have committed in a wrong branch):

```bash
git reset commit-id
```

Keep your changes but remove the commit from history:

```bash
git reset --soft commit-id
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
