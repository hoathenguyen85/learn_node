var sum = 0;
for(i=2;i < process.argv.length; i++) {
  // + in front of variable somehow converts the variable into an integer
  sum += +process.argv[i];
}
console.log(sum);