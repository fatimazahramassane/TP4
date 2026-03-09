
//hackerrank //codingame
function ma(){
  var  tempF = prompt("entrer valeur :");
  tempC=(5/9)*(tempF-32) ;
  console.log(tempC)
}

//ma()
 
function date(){
   var  Sec = prompt("entrer valeur :");
   c=Sec / 60 /60/24
   jour=parseInt(c)
   console.log("jour",jour)
   h=(c-jour)*24
   heur=parseInt(h)
   console.log("heur",heur)
   m=(h-heur)*60
   minute=parseInt(m)
   console.log("minute",minute)
   s=(m-minute)*60
   second=parseInt(s)
   console.log("second",second)
   console.log("cette durée équivaut à ",jour," jours ",heur ,"heures ",minute ,"minutes ",second ,"secondes")

}
//date()


function Amlioerer(){
   var  Sec = prompt("entrer valeur :");
   c=Sec / 60 /60/24
   jour=parseInt(c)
   console.log("jour",jour)
   h=(c-jour)*24
   heur=parseInt(h)
   console.log("heur",heur)
   m=(h-heur)*60
   minute=parseInt(m)
   console.log("minute",minute)
   s=(m-minute)*60
   second=parseInt(s)
   console.log("second",second)
   a=jour+" jour "
   b=heur+" heure "
   c=minute+" minute "
   d=second +" seconde"
  
   if (jour >1 ){
    a=a+"s"
   }
   if(heur >1 ){
    b=b+"s"

   }
   if(minute >1 ){
    c=c+"s"

   }
   if(second >1 ){
    d=d+"s"

   }
   
   if (jour ==0 ){
    a=""
   }
   if(heur ==0 ){
    b=""

   }
   if(minute ==0 ){
    c=""

   }
   if(second ==0 ){
    d=""

   }
   
   console.log("cette durée équivaut à ",a,b,c,d)

}
//Amlioerer()

function ORder(){
/*     
    var  n1 = prompt("entrer valeur 1:");
    var  n2 = prompt("entrer valeur 2:");
    var  n3 = prompt("entrer valeur 3:"); */
    var list=[5,7,1]
    list2=[]
    max=0
    for (i in list){
        console.log("cela",i)
        if (list[i]>max){
          console.log(list[i])
            max=list[i];
            console.log(max)
            list2.push(max)    
        }
        
    }
   
   console.log(list2)

}
var list=[5,7,1]
var list2=[]
var max=0
    for (i in list){
        if (list[i]>max){
            max=list[i];
            console.log(max)
            list2.push(max)    
        }
    }

console.log(list2)