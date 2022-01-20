function tennisGamePoints(score) {
  const arr = score.split('-');
  let result = 0
  for(let i=0; i<arr.length; i++){
    if(arr[i]==='love') result += 0;
     if(arr[i]==='15') result += 1;
     if(arr[i]==='30') result += 2;
     if(arr[i]==='40') result += 3;
     if(arr[i]==='all') result += result;
  }
  return result;
}
