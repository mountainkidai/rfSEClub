# Git Commands

## Phase 8: Remote Repositories

### Cloning Repository

Cloning the repo from GitHub:

```bash
git clone <remote repo link>
```

### SSH Keys Configuration

What is SSH : <https://www.canva.com/design/DAGbqm7F0BU/sokdDZKFoaWqPII-LPYUpg/edit?utm_content=DAGbqm7F0BU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton>

Config SSH keys: <https://docs.github.com/en/authentication/connecting-to-github-with-ssh>

### Two Ways to Link Git Repo to GitHub

1. Push your existing repo (Local machine) to GitHub
2. Start a project on GitHub and clone it to the local machine

### Push Existing Repo to GitHub

1. Create a new repo on GitHub using GUI
2. Connect your local repo to the GitHub repo (also called remote)

> **Note:** Remote is destination link or remote repo URL link or GitHub repo URL link. By convention, it has to be origin.

To check remote details:

```bash
git remote -v
```

### Managing Remotes

Adding remote:

```bash
git remote add <remote-name> <remote repo url>
```

Renaming remote:

```bash
git remote rename <old-remote-name> <new-remote-name>
```

Removing remote:

```bash
git remote remove <remote-name>
```

### Pushing Changes

Now push your changes to GitHub:

```bash
git push <remote-name> <branch name>
```

This will do two things:

1. First it will create a branch on the repo based on your command request
2. Now it will push your last commit to the remote repo

Example: You have a master branch in your local repo. If you push it like `git push origin jyotsna`, this will create a new branch jyotsna on the repo. Now it will push your last commit to the remote repo.

### Set Upstream

Linking local and remote branches:

```bash
git push -u <remote-name> <branch-name>
```

Imagine you are in jyotsna branch in local repo, and you want to commit to Jyotsna repo branch. Now as I am in jyotsna branch in my local machine, if I write `git push -u origin jyotsna`, now as long as I stay in jyotsna local branch, I can simply use `git push` instead of `git push origin branch-name`. Because the link has been established.

### Start Project on GitHub and Clone

1. Create a new repo on GitHub
2. Clone it to your local machine
3. Work locally
4. Now you can push your changes

```bash
git clone <remote-url>
```

> **Note:** The default branch of git is master. But the default branch of GitHub is main.

### Checking Branches

To check local branches:

```bash
git branch
```

To check remote branches:

```bash
git branch -r
```

### Pulling Changes

To pull the remote repo changes to the local machine:

```bash
git pull <origin-name> <branch>
```

### Fetching

You want to check or preview the changes before pulling, so that you can make sure your codebase is not messed up:

```bash
git fetch <origin> <branch-name>
```

This will show you the new remote commits ahead of your local machine code.

### How to Check the Code

Using detached HEAD:

```bash
git checkout <remote-branch name>
```

Example:

```bash
git checkout origin/main
```

Now you can check the code and two cases you have here:

1. You liked it? Then pull the changes
2. You don't like it? Then ignore it

How to come back from detached head:

```bash
git switch <branch-name>
```

### Special Case

Person 1 has pushed a branch to the remote repo and when you pull it, it will show the changes in the remote branch, but not in the local machine. So if you want to see branches, do the following:

```bash
git branch -r
```

This will show you the list of remote branches.

Example:

```bash
origin/main
origin/newbranch
```

```bash
git switch branchname
```

Example:

```bash
git switch newbranch
```

Now this will create the branch newbranch and shows you the code.

### Git Pull vs Git Fetch + Merge

#### Git pull = git fetch + git merge

---

## Collaboration Problems & Solutions

### Problem Example

- Steve made a commit for registration file on master
- Bill is working on login file in his local machine and he needs support from Steve
- Now the only way he can do this is by committing his incomplete code to master
- Now as this master latest commit has bugs, the website that Jack is providing for his customer is stopped
- Now as long as Steve works on the bill bug, the website won't be available for anybody

### Solution: Feature Branches

Treat master as official project history or branch where you push changes only when you are sure that the project has no bugs.

Example: Create a party menu

- Steve - Morning Menu
- Bill - Afternoon Menu
- Jack - Evening Menu

1. Steve will create morning menu branch
2. Bill will create afternoon menu branch
3. Jack will create evening menu branch

Now Steve added tea, coffee. Meanwhile bill push his afternoon branch to remote but, he wants Steve's help in deciding the afternoon menu. Now bill would pull the Steve branch, and help bill with a new commit.

### Pull Request

We should not allow users to push the changes directly. In a real time scenario, we need someone who would scrutinize or verify your pull merge before merging it to master or official branch.

### Contributing to Open Source with Fork and Clone

1. Fork the project
2. Clone the project
3. Set upstream remote to the Open-source project so that you can pull the changes to the local machine
4. Push the changes to the origin
5. Now create a pull request

---
