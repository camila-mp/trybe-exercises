function verificaPalindrome (palavra) {

    let palavraInvert = palavra.split('').reverse().join('');
  
    if (palavra === palavraInvert){
        return console.log(true);
    }else{
        return console.log(false);
    }
}

verificaPalindrome('desenvolvimento')