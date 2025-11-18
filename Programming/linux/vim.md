# Vim

## Line Navigation

- **j**: Down one line
- **k**: Up one line
- **h**: Left one character
- **l**: Right one character
- **10j / 10k**: Down/up 10 lines (replace 10)
- **gg**: File start
- **G**: File end
- **:42 + Enter**: Go to line 42 (replace 42)
- **Ctrl + d**: Scroll down half page
- **Ctrl + u**: Scroll up half page
- **Ctrl + f**: Scroll down full page
- **Ctrl + b**: Scroll up full page
- **]]**: Next function/block
- **[[**: Previous function/block
- **%**: Matching brace/parenthesis
- **\***: Next word occurrence
- **#**: Previous word occurrence

## Editing (Normal Mode)

- **i**: Insert before cursor
- **I**: Insert at line start
- **a**: Insert after cursor
- **A**: Insert at line end
- **o**: New line below, insert
- **O**: New line above, insert
- **x**: Delete character

## Deleting

- **dd**: Delete line
- **5dd**: Delete 5 lines (replace 5)
- **dw**: Delete to word end
- **d$**: Delete to line end
- **d0**: Delete to line start
- **yy**: Copy line
- **5yy**: Copy 5 lines
- **p**: Paste after cursor
- **P**: Paste before cursor
- **u**: Undo
- **Ctrl + r**: Redo

## Selection (Visual Mode)

- **v**: Character-wise selection
- **V**: Line-wise selection
- **Ctrl + v**: Block-wise selection
- **y**: Copy selection
- **d**: Delete selection

## Search & Replace

- **/pattern + Enter**: Search forward
- **?pattern + Enter**: Search backward
- **n**: Next search result
- **N**: Previous search result
- **:%s/old/new/g + Enter**: Replace all old with new

## VSCode-Specific

- **Cmd + shift + o**: Jump to symbols
- **:w + Enter**: Save
- **:q + Enter**: Close file
- **:wq + Enter**: Save and close
- **Cmd + shift + p**: Command Palette
- **gd**: Go to definition (Rust Analyzer)
