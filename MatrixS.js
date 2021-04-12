/*From the following matrix invert it but keep the special characters in the same position. 

	[n,2,&,a,l,9,$,q,47,i,a,j,b,z,%,8]
*/


const array = [
 'n','2','&','a','l','9','$','q','47','i','a','j','b','z','%','8'
];

const reverse  = (array, newArray = []) => {
  newArray.push(array.pop());

 return (array.length === 0) ? 
  newArray : reverse(array, newArray);
}

console.log(array);