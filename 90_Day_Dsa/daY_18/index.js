function findAnagrams(s, p) {
  const pl = p.length;
  const result = [];

  for(let i=0; i<=s.length-pl; i++){
    const window = s.substring(i,i+pl).split("").sort().join('');

    if(window===p){
        result.push(i);
    }
    
  }

  return result
  
  
};



findAnagrams('cbaebabacd','abc');
