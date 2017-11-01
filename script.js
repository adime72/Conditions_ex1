//Ex1 in conditions
var num1 = -66
var y = -11

if (num1 > y) {
    console.log(num1 + "is bigger")

} else if (y > num1) {
    console.log(y + "is bigger")

} else { console.log("num1 & y are equal") }

//an bs ex's from Nir

var age =12
if (age>0 && age<13) {
    console.log("a kid")}
else { console.log("old person")
}
var city= "Tel Aviv"
if (city==="Tel Aviv" || city==="Haifa") {
    console.log("In Srael")   
} else  { console.log("Not in Srael")  
    
}

var age=68
var gender="female"
var working_status= (gender==="male" && age>=67) || (gender==="female" && age>=62)? working_status="pension": working_status="working";
console.log(working_status)

//Ex 2 
var z=33
if (num1*y*z>0){
    console.log("The sign is +")} else  {console.log("The sign is -")
}
//ex 3
if (num1>y && y>z ){console.log(num1+","+y+","+z)} 
    else if (num1>y && y<z) {console.log(num1+","+z+","+y)}
        else if (num1<y && y<z) {console.log(z+","+y +"," +num1)}
    else if (num1<y && y>z && z>num1) {console.log (y+","+z+","+num1)}
    else{console.log(z+","+num1+","+y) }
  //ex4      
var num4=-44
var num5=-12
if (num1>y && num1>z && num1>num4 && num1>num5 ){console.log("biggest number"+ num1)} 
else if (y>num1 && y>z &&  y>num4 && y>num5 ) {console.log("biggest number"+ y)}
    else if (z>num1 && y<z &&  z>num4 && z>num5) {console.log("biggest number"+ z)}
else if (num4<y && num4>y && num4>z && num4>num5) {console.log("biggest number"+ num4)}
else{console.log("biggest number"+ num5) }

//Ex6

var david =80
var vinoth =77
var divya = 88
var ishitha = 95
var thomas  =68
var Student_avg=(david+vinoth+divya+ishitha+thomas)/5

if (Student_avg>=90) {console.log("the avg grade is A")} 
else if (Student_avg<90 && Student_avg>=80) {console.log("the avg grade is B")} 
else if (Student_avg<80 && Student_avg>=70) {console.log("the avg grade is C")} 
else if (Student_avg<70 && Student_avg>=60) {console.log("the avg grade is D")} 
else   {console.log("the avg grade is F")} ;
console.log (Student_avg);

    
