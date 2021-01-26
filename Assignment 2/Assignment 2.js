                                                                           
    alert(' Here Is My Assignment! - Dev ')               

    const clothes = ['jacket', 't-shirt'];                       // QUESTION 1
    clothes.length = 0;
    console.log(clothes[0]);    

// Reason:

// Reducing the value of the length property has the side-effect of deleting own array elements whose array index is between the old and new length values.

// Because of this "length" behavior, when JavaScript executes clothes.length = 0, all the items of the array clothes are deleted.

// Hence, clothes[0] is undefined, because clothes array was emptied.


// QUESTION  2: Program to find the sum of all elements of a given array


var powers=[1,10,12,36,456,7,5];
var sum;

sum=powers.reduce(function(a,b){
	return a+b;
},0);

console.log(sum);

