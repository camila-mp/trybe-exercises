const retornaFatorial = (num) => {
  let guardaNum = 1;
  while (num >= 1){
    guardaNum = guardaNum * num;
    num -= 1; }
  return console.log(guardaNum);
}

retornaFatorial(4);