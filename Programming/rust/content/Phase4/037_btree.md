```text
Real table (scattered rows):
row1:    user_id=5      → Taj Mahal
row500k: user_id=123k   → Goa
row999k: user_id=999k   → Kerala

Without index → Query user=123k scans 1M rows = 1M disk reads = 30 seconds 😭
```

### B-tree Index (257 keys/block - Postgres 8KB reality)

```text
Level 0 ROOT (1 read):
[<100k] [100k-500k] [500k-1M]   ← 123k? Go middle branch!

Level 1 MIDDLE (2nd read):
[110k][200k][300k][400k]        ← 123k? Go left-ish child!

Level 2 LEAF (3rd read):
[123001→row500k][123002→row501k] ← GOTCHA! 3 reads total ⚡

→ Jump straight to table row500k & row501k

```

```text
 1M places - B-tree INDEX (scale example):

                    ROOT (Read #1)
                 <100k / [100k-500k] \ >500k
                            | 123k here!
                            |
                 MIDDLE (Read #2)
            [110k] [200k] [300k] [400k]
                       ↑ 123k goes here ↓
                            |
                       LEAF BLOCKS (Read #3)

            [121k→rX][123k→row500k][123k→row501k][125k→rY]
                                             ↓
            Table jumps → row500k & row501k data instantly!
```
