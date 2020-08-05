export function exist(obj){
  if(obj === null || obj === undefined || obj === '' || obj === 'n/a'){
    return false
  }
  else{
    return true
  }
}