function trinombre(){
    var nombre = '0123456789';
    var nombreTrie = nombre.split('').sort().join('');
  return nombreTrie;
  }
  console.log(trinombre()); 