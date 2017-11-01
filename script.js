//ex 1 in conditions
var x = 5
var y = 22

if (x > y) {
    console.log(x + "is bigger")

} else if (y > x) {
    console.log(y + "is bigger")

} else { console.log("x & y are equal") }

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

var age=67
var gender="male"
gender= (gender==="male" && age>=67) || (gender==="female" && age>=62)?console.log("pension"):console.log("working")
