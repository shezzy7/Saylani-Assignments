//          JavaScript Assignment No.2
//Q1
//print 1-10 using for loop
function oneToTen(){
    console.log("Numbers from 1-10");
    for(let i=1;i<11;i++){
        console.log(i+" ");
    }
}
//Q2
//print even numbers in a given array
function evenNumbers(){
    let array = [];
    for(let i=0;i<10;i++){
        array[i] = parseInt(prompt("Enter num "+(i+1)+" : "));
    }
    console.log("Even numbers in the array are ");
    for(let i=0;i<10;i++){
        if(array[i]%2==0){
            console.log(array[i]+" ");
        }
    }

}
//Q3
//WAP to delete all the occurences of a given element in the array
function del(){
    let array = [1,2,3,5,1,6,4,2,3];
    let target = parseInt("Enter target element ");
    for(let i=0;i<array.length;i++){
        if(array[i]==target){
            array.splice(i,1);
        }
    }
    console.log("Now array");
    for(let i=0;i<array.length;i++){
        console.log(array[i]+" ");
    }
}

//Q4
//WAP to find the power of a number using for loop
function power(){
    let num = parseInt(prompt("Enter your base number : "));
    let pov = parseInt(prompt("Enter power : "));
    let res = 1;
    for(let i=1;i<=pov;i++){
        res = res*num;
    }
    console.log(num+"^"+pov+" = "+res);

}

//Q5
//WAP to print the given patteren
/*
1
12
123
1234
12345
123456
*/
function patteren(){
    let row = parseInt("Enter number of rows : ");
    for(let i=1;i<=row;i++){
        let curRow = '';
        for(let j=1;j<=i;j++){
            curRow+=j;
        }
        console.log(curRow);
    }
}
//Q6
//WAP to find the number of digits in a given number
function digits(){
    let num = parseInt(prompt("Enter number : "));
    let count = 0;
    //as here we don't know the number of iterations we will use while loop
    while(num>0){
        count++;
        //for removing last digit of every element we divide it by 10
        num = Math.floor(num/10);//Math.floor method to remove the decimal values after dividing

    }
    console.log("No of digits in given number are = "+count);
}
//Q7
//WAP to calculate the sum of digits in a given number
function add(){
    let num = parseInt(prompt("Enter number(+ve) : "));
    let sum = 0;
    //as here we don't know the number of iterations we will use while loop
    while(num>0){
        let lastDigit = num%10;
        sum +=lastDigit;
        //for removing last digit of every element we divide it by 10
        num = Math.floor(num/10);//Math.floor method to remove the decimal values after dividing

    }
    console.log("Sum of digits in given number is = "+sum);
}

//Q8
//WAP to find largest num in an array
function largest(){
    let array = [5,6,45,95,12,45,786,85,12,36,586];
    let maxNum = array[0];
    for(let i=1;i<array.length;i++){
        if(maxNum<array[i]){
            maxNum=array[i];
        }
    }
    console.log("Maximum value in the array is : "+maxNum);

}

//Q9
//WAP to find the fabonacci series roe a given value of N
function fabonacci(){
    let num = parseInt(prompt("Enter number : "));
    let var1 = 0;
    let var2 = 1;
    let result = [var1,var2];
    for(let i = 1;i<=num;i++){
        let nextValue = var1+var2;
        result.push(nextValue);
        var1=var2;
        var2=nextValue;
    }
    console.log(result);
}
//Q10
//WAP tofind the duplicate values in array
function findDouble(){
    let array = [];
    let n = parseInt(prompt("Enter size of array : "));
    console.log("Enter elements of array : ");
    for(let i = 0 ;i<n;i++){
        array[i]=prompt("Element no"+(i+1)+" : ");
    }
    let count = 0;
    console.log("Duplicate numbers in the array are given below");
    for(let i =0;i<n-1;i++){
        for(let j=i+1;j<n;j++){
            if(array[i]===array[j]){
                console.log(array[i]);
                count++;
            }
        }
    }
    console.log("Duplicate numbers in the array are "+count);
}


//Q11
//WAP for linear search algorithm
function linearSearch(){
    let array=[20,25,69,84,32,1,6,48,5,65];
   
    let target = parseInt(prompt("Enter target value : "));
    for(var i=0;i<n;i++){
        if(array[i]===target){
            console.log("Target element found at index "+i);
            return;
        }
    }
    console.log("Target element not present in array");
}


//Q12
//WAP a js program for binary search algorithm
function binarySearch(){
    //binary search algo is applied only on sorted array
    let array = [20,36,95,78,46,21,35,95,12,100,152];
    //binary search algo is applied only on sorted array,so first sorting given array in acending order
    //for this purpose using a built in function
    array.sort(function(a,b){
        return a-b;
    });


    let target = parseInt(prompt("Enter target value : "));
    let start = 0;
    let end = array.length-1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(array[mid]===target){//if element found
            console.log("Element founnd at index : "+mid);
            return;
        }
        else if(array[mid]<target){//if target greater then mid element moving start to mid+1
            start = mid+1;
        }
        else{//if target smaller then mid element moving end to mid-1
            end = mid-1;
        }
        
    }
    console.log("Element not found" );
    
}