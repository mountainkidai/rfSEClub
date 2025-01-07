let i = 1,
  sum = 1,
  loop_count = 0;
let n = 225;
while (sum <= n) {
  loop_count = loop_count + 1;
  console.log(`i - ${i}, s- ${sum},loop count ${loop_count}`);
  i++;
  sum = sum + i;
  if (sum > n) {
    console.log(`loop is broken`);
  }
}
