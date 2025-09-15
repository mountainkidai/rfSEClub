# Git Commands

## Phase 10: Git Tags

Simply pointer that refers to particular phases of your project. Usually we use it to name the version.

### Types of Tags

There are two types:

1. Lightweight tags
2. Annotated tags

### Creating Tags

How to create a tag:

```bash
git tag tagname
```

To list the tags:

```bash
git tag -l  # write version name or common tag name
```

### Checking Tag Status

```bash
git checkout tag
```

### Annotated Tags Creation

```bash
git tag -a <tagname>
```

### Creating Tag for Previous Commits

```bash
git tag <tagname> <commit>
```

### Deleting Tags

```bash
git tag -d <tagname>
```

### Pushing Tags

It has to be separate:

```bash
git push --tags
```
