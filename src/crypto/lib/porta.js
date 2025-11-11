function coder(entree,cle)
{
  text=formate_entree(entree.value);
  keyword=cle.value.toUpperCase();
  var alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var first='ABCDEFGHIJKLM';
  var second='NOPQRSTUVWXYZ';
  var keyalphabet='';
  var result='';
  var keypos=0;
 
  for (i=0; i<keyword.length; i++)
  {
    if (alphabet.indexOf(keyword.charAt(i)) == -1) return 'Clé invalide. Vous ne pouvez utiliser que des lettres de A à Z';
  }
  
 
  for (i=0; i<text.length; i++)
  {
    j=alphabet.indexOf(keyword.charAt(keypos))/2;
    j=13-Math.floor(j);
    keyalphabet=second.substr(j)+second.substr(0,j);

    if (keyalphabet.indexOf(text.charAt(i)) > -1)
      result += first.charAt(keyalphabet.indexOf(text.charAt(i)));
    else
      result += keyalphabet.charAt(first.indexOf(text.charAt(i)));
    keypos++;
    if (keypos>=keyword.length) keypos=0;
  }
 

 
  return formate_sortie(result);
}