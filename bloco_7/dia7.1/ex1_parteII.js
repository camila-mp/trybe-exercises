const retornaFatorial = (num) => {
  let guardaNum = 1;
  while (num >= 1){
    guardaNum = guardaNum * num;
    num -= 1; }
  return guardaNum;
}

console.log(retornaFatorial(7));