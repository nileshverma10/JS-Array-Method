var ages= [3,4,67,43,66];
console.log(ages);
var b= ages.find(adultage);
function adultage(age){
    return age>=18;
    
}
console.log(b);


var ages= [3,4,7,43,66];
console.log(ages);
var b= ages.findIndex(adultage);
function adultage(age){
    return age>=18;
    
}
console.log(b);


var a = ["nilesh", "umesh", "papu", "aysh", " jetu"];
a.reverse();
console.log(a);




var a = ["hum", "tum", "sirf", "teeth", ];
var b = ["hawkeye", "temple", "tour"];
  var c = a +" "+b.join();
console.log(c);


var a = ["hum", "tum", "sirf", "teeth", ];
var b = a.concat("jitesh","suresh");
console.log(b);


var a = ["hum", "tum", "sirf", "teeth" ];
var b = ["hawkeye", "temple", "tour"];
var c = [ "jitesh","suresh"];
var d = b.concat(a, c);
console.log(d);


var a = ["hum", "tum", "sirf", "teeth" ];
var b = ["hawkeye", "temple", "tour"];
var c= a.concat(b);
console.log(c);
var d= c.join("  / ");
console.log(d);



var a = ["hum", "tum", "sirf", "teeth" ];
 var b = a.slice( 1,3);
console.log(b);


var a = ["hawkeye", "temple", "tour"];
 a.splice(1,2,"nilesh", "monu");
console.log(a);



var a = ["hawkeye", "temple", "tour"];
var b = Array.isArray(a);
console.log(b);



var a = 10
var b = Array.isArray(a);
console.log(b);


var a = ["hawkeye", "temple", "tour"];
var b = a.indexOf("temple");
console.log(b);


var a = ["hum",  "jigneshg","tum", "sirf", "teeth", "suresh" ];
var b = a.lastIndexOf("teeth");
console.log(b);
