# Git Commands

## Phase 1: Basic Git Operations

### Configuration

To check your name and email if you have configuration:

```bash
git config user.name
git config user.email
```

To set global configuration:

```bash
git config --global user.name "your name"
git config --global user.email "your email"
```

### Project Initialization

To initialize the project:

```bash
git init
```

### Status and Tracking

To check the status of the project:

```bash
git status
```

### Adding Files to Staging

To add a single file to staging from workspace:

```bash
git add <file name>
```

To add multiple files to staging from workspace:

```bash
git add file1 file2 ...
```

To add all files to staging from workspace:

```bash
git add .
```

### Committing Changes

To commit the changes to the repo:

```bash
git commit -m "message"
```

To commit the changes to the repo in an editor:

```bash
git commit
```

### Viewing Commit History

To check all the commits:

```bash
git log
```

To check all the commits in oneline mode:

```bash
git log --oneline
```

### Unstaging Files

To unstage a file from staging area back to workspace:

```bash
git rm --cached filename
```

### Amending Commits

To amend the last commit:

```bash
git commit --amend
```

### Git Ignore

Create a file named `.gitignore` and add files that you don't want git to track.

---
