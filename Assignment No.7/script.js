//          MERN Assignment no 7
//Q1
//WAP to find greater between three numbers
function compare2(){
    let n = parseInt(prompt("Enter num1"));//we use parseInt beacuse prompt treats input as string so for converting it we use parseInt
    let m = parseInt(prompt("Enter num2"));
    if(isNaN(n) || isNaN(m)){
        alert("Invalid input!");
        return;
    }
    if(n>m){
        alert("Greater number is = "+n);
    }
    else{
        alert("Greater number is = "+m);
    }


}

//Q2
//WAP to find greater between three numbers
function compare3(){
    let a = parseInt(prompt("Enter num1"));
    let b = parseInt(prompt("Enter num2"));
    let c = parseInt(prompt("Enter num3"));
    if(isNaN(a) || isNaN(b) || isNaN(c)){
        alert("Invalid numbers!");
        return;
    }
    if(a>b){
        if(a>c){
            alert("Greater number is = "+a);
        }
        else{
            alert("Greater number is = "+c);
        }
    }
    else if(b>c){
        alert("Greater number is = "+b);
    }
    else{
        alert("Greater number is = "+c);
        
    }


}

//Q3
//WAP to check whether a number is positive,nagative or zero
function natureOfNum(){
    let n = parseInt(prompt("Enter number"));
    if(isNaN(n)){
        alert("Invalid input");
    }
    if(n>0){
        alert("Poaitive number");
    }
    else if(n<0){
        alert("Negative number");
    }
    else{
        alert("ZERO");
    }

}

//Q4
//WAP to check whether number is divisible by 5 and 11 or not
function divisible(){
    let n = parseInt(prompt("Enter number"));
    if(isNaN(n)){
        alert("Invalid input");
    }
    if( n%5==0 && n%11==0){
            alert("Number is divisble by both 5 and 11");
    }
    else{
        alert("Number is not divisible by 5 and 11");
    }
}

//Q5
//WAP to check whether number is even or odd
function evenOdd(){
    let n = parseInt(prompt("Enter number"));
    if(isNaN(n)){
        alert("Invalid input");
    }
    if(n%2==0){
        alert("Even number")
    }
    else{
        alert("Odd number");
    }
}

//Q6
//WAP to check whether year is Leap or not
function leapYear() {
    let year = parseInt(prompt("Enter Year"));

    if (isNaN(year)) {
        alert("Invalid input");
        return; 
    }

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        alert("Leap year");
    } else {
        alert("Not a leap year");
    }
}

//Q7
//WAP to input an alphabet and check whether it's a vowel or consonant
function vowel(){
    let alpha = prompt("Enter alphabet : ");
    let vowels = ['a','e','i','o','u'];
   
    //first we convert it to lowercase so we don't nedd to check for both upper and lowercase indvidually
    alpha = alpha.toLowerCase();
    if(vowels.includes(alpha)){
        alert("Vowel");
    }
    else{
        alert("Consonant");
    }
    
}
//Q8
//WAP to check whether a haractor is upperCase or lowerCase
function checkCase(){
    let char = prompt("Enter character : ");
    if(char === char.toLowerCase()){
        alert("LowerCase character");
    }
    else{
        alert("Uppercase character");
    }
}

//Q9
//WAP to input a week number and print weekday
function weekDay(){
    let weekDays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Satureday","Sunday"];
    let day = parseInt(prompt("Enter week number(1-7)"));
    for(var i=0;i<7;i++){
        if(day == i+1){
            alert(weekDays[i]);
            return;
        }
    }
    alert("invalid input");
}

//Q10
//WAP to input month numer and print no of days of that month
function monthDays(){
    let month = [31,29,31,30,31,30,31,31,30,31,30,31];
    let monthNo = parseInt(prompt("Enter month number(1-12)"));
    //using switch staement
    switch(monthNo){
        case 1:
            alert("January : " +month[0]);
            break;
        case 2:
            alert("February : " +month[1]);
            break;
        case 3:
            alert("March : " +month[2]);
            break;
        case 4:
            alert("April : " +month[3]);
            break;
        case 5:
            alert("May : " +month[4]);
            break;
        case 6:
            alert("June : " +month[5]);
            break;
        case 7:
            alert("July : " +month[6]);
            break;
        case 8:
            alert("August : " +month[7]);
            break;
        case 9:
            alert("September : " +month[8]);
            break;
        case 10:
            alert("October : " +month[9]);
            break;
        case 11:
            malert("November : " +month[10]);
            break;
        case 12:
            malert("December : " +month[11]);
            break;
        default:
            alert("invalid input")
    }
}
//Q11
//WAP to count a minimum no of notes of a given amount
 function notes(){
    let money = parseInt(prompt("Enter your amount"));
    let noOfNotes = 0;
    while(money>0){
        if(money>=5000){
            noOfNotes++;
            money-=5000;
        }
        else if(money>=1000){
            noOfNotes++;
            money-=1000;
        }
        
        else if(money>=500){
            noOfNotes++;
            money-=500;
        }
        
        else if(money>=100){
            noOfNotes++;
            money-=100;
        }
        
        else if(money>=50){
            noOfNotes++;
            money-=50;
        }
        
        else if(money>=20){
            noOfNotes++;
            money-=20;
        }
        
        else if(money>=10){
            noOfNotes++;
            money-=10;
        }
        else{
            alert(money+" rupeese remained as their value is less then value of any note");
            break;
        }
        
    }
    alert("Minimum number of notes for the given money are : "+noOfNotes);
 }

//Q12
//WAP to input  marks 5 subjects phy,chem,bio,math and comp.Calculate percentage and grade according to following above 90%=Grade A| above 80%=Grade B | above 70%=Grade C | above 60%=Grade D | above 40%=Grade E | below 40%=Grade F
function grades(){
    let phy = parseInt(prompt("Enter marks of Physics (1-100)"));
    let chem = parseInt(prompt("Enter marks of Chemistry (1-100)"));
    let bio = parseInt(prompt("Enter marks of Biology (1-100)"));
    let math = parseInt(prompt("Enter marks of Mahematics (1-100)"));
    let comp = parseInt(prompt("Enter marks of Computor (1-100)"));
    let total = phy + chem + bio + math + comp;
    let percentage = (total/500)*100;
    let grade;
    if(percentage>=90){
        grade = 'A';
    }
    else if(percentage>=80){
        grade = 'B';
    }
    
    else if(percentage>=70){
        grade = 'C';
    }
    
    else if(percentage>=60){
        grade = 'D';
    }
    
    else if(percentage>=40){
        grade = 'E';
    }
    else{
        grade = 'F';
    }

    alert("Percentage of your marks is "+percentage+"% and your Grade is '"+grade+"'");
} 

//Q13
//calculate gross salary of a employee
function grossSalary(){
    let basicSalary = parseInt(prompt("Enter your salary"));
    let hra = 0;
    let da = 0;
    if(basicSalary<=10000){
        hra = basicSalary * 0.2;
        da = basicSalary * 0.8;
    }
    else if(basicSalary<=20000){
        hra = basicSalary * 0.2;
        da = basicSalary * 0.8;
    }
    
    else {
        hra = basicSalary * 0.3;
        da = basicSalary * 0.95;
    }
    let grossSalary = basicSalary + hra + da;
    alert("Your Gross Salary is = "+grossSalary);  
}

//Q14
//WAP to calculate electricity bill
//for first 50 units -> 0.5/unit
//for next 100 units -> 0.75/unit
//for next 100 units -> 1.20/unit
//for units above 250 -> 1.50/unit
//add additional surcharge of 20% 

function eBill(){
    let units = parseInt(prompt("Enter no of units"));
    let bill = 0;
    if(units<=50){
        bill = units*0.5;
    }
    else if(units<=150){
        bill = (50*0.5) + (units-50)*0.75;
    }
    
    else if(units<=250){
        bill = (50*0.5) + (100*0.75) + (units-150)*1.20;
    }
    else{
        bill = (50*0.5) + (100*0.75) + (100*1.20) + (units-250)*1.50;
    }
    bill = bill + (bill*0.20);
    alert("Your bill is = "+bill);
}