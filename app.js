// function validate(password) {
//     return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(password);
// }

// function alphanumeric(string){
//   if(/\w/.test(string) && !(/[-_ !]/.test(string))) {
//       return true
//   } else {
//       return false
//   }
// }
function a(arr){
    let newA = []
    arr = [...new Set(arr)]  
    console.log(arr);
    // || arr[i] === 'EAST' && arr[i--] !== 'WEST' && arr[i++] !== 'WEST'
      for(i in arr) {
        if(arr[i].length === arr[i++].length) {
           arr.splice(arr[i], 1)
           arr.splice(arr[i++], 1)
        }
    }
    return arr
  }    

