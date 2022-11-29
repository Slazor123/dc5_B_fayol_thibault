function afficherCombinaisons() {
  for (let i = 0; i < 10; i++) {
    for (let j = i + 1; j < 10; j++) {
      console.log(i + "00 " + j);
    }
  }
}

afficherCombinaisons();