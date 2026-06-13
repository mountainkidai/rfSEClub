# Git Commands

## Phase 12: Git Reflogs

```bash
git reflog
```

This will show all the details of project like at what time what you have done.

```bash
git reflog show HEAD
```

```bash
git reflog show main
```

```bash
git reflog head/branch-name@{qualifier}
```

### Time Travel

```bash
git reset --hard <reflog commit id>
```
