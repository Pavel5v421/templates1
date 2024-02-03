function a(){

    box1.style.backgroundImage = "linear-gradient(0deg,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(watch1.jpg)"
    box1.innerHTML = "<h1>TODOR</h1>\
    <br>Montres Tudor SA, or simply Tudor,\
    is a Swiss watchmaker based in Geneva,\
    Switzerland. Registered in 1926 by Hans Wilsdorf,\
    founder of Rolex, the brand remains a sister \
    company to Rolex; both companies are owned \
    by the Hans Wilsdorf Foundation. Tudor was\
    initially known for watches produced for \
    the military and professional divers.\
    From the 1960s to 1980s,several navies\
    issued Tudor Submariners to their divers, \
    including the US Navy SEALs and the French\
    Marine Nationale."
    box1.style.color = "white"


}
function b(){
box1.style.backgroundImage = "linear-gradient(0deg,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0)), url(watch1.jpg)"
box1.innerHTML = " "

}

function c(){
box2.style.backgroundImage = "linear-gradient(0deg,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(watch2.jpg)"
    box2.innerHTML = "<h1>Ulysse Nardin</h1>\
    <br> is a Swiss luxury watchmaking company\
    founded in 1846 in Le Locle, Switzerland.\
    The company became known for manufacturing \
    highly accurate marine chronometers and complicated \
    timepieces used by over 50 of the world's\
    navies from the end of the 19th century till 1950.\
    According to the last official report of Neuchâtel\
    Observatory in Switzerland, Ulysse Nardin had won\
    numerous awards and honors for its marine chronometers \
    from 1846 to 1975, including 4324 certificates, 2411\
    special prizes and 18 gold medals at International \
    exhibitions."

    box2.style.color = "white"
}
function d(){
box2.style.backgroundImage = "linear-gradient(0deg,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0)), url(watch2.jpg)"
box2.innerHTML = " "

}

function e(){

box3.style.backgroundImage = "linear-gradient(0deg,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(watch3.jpg)"
box3.innerHTML = "<h1>Blancpain</h1>\
 is a Swiss luxury watch manufacturer,\
 headquartered in Paudex/Le Brassus, \
 Switzerland.It designs, manufactures, distributes,\
 and sells prestige and luxury mechanical watches.\
 Founded by Jehan-Jacques Blancpain in Villeret,\
 Switzerland in 1735, Blancpain is the oldest \
 surviving watchmaking brand. Blancpain has been\
 a subsidiary of the Swiss Swatch Group since 1992,\
 and is regarded as a top-tier Swatch brand.\
 It is best known for its Fifty Fathoms diving \
 watch introduced in 1953 and its 1735 Grande\
 Complication wristwatch introduced in 1991"
    box3.style.color = "white"

}
function f(){
box3.style.backgroundImage = "linear-gradient(0deg,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0)), url(watch3.jpg)"
box3.innerHTML = " "
}

function g(){
box4.style.backgroundImage = "linear-gradient(0deg,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(watch4.jpg)"

box4.innerHTML = "<h1>ROLEX</h1>\
is a Swiss watch designer and manufacturer\
based in Geneva, Switzerland. Founded \
in 1905 as Wilsdorf and Davis by Hans\
Wilsdorf and Alfred Davis in London, \
the company registered Rolex as the brand \
name of its watches in 1908 and became Rolex\
Watch Co. Ltd. in 1915.After\
World War I, the company moved its base of\
operations to Geneva because of the\
unfavorable economy in the United Kingdom.\
In 1920, Hans Wilsdorf registered Montres\
Rolex SA in Geneva as the new company \
name (montre is French for clock or watch);\
it later became Rolex SA. \
Since 1960, the company has been owned \
by the Hans Wilsdorf Foundation, a private\
family trust"
    box4.style.color = "white"
}
function h(){
box4.style.backgroundImage = "linear-gradient(0deg,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0)), url(watch4.jpg)"
box4.innerHTML = " "
}

setInterval(function(){
var date = new Date()

var hour = date.getHours();
hours.innerHTML = hour

var minute = date.getMinutes();
min.innerHTML = minute

var secondss = date.getSeconds();
sec.innerHTML = secondss


},1000)

var slay = document.querySelector('.slayder')
window.onmousemove = function(e){
var u = e.clientX
slay.style.transform = "perspective(1000px) rotateY("+u+"deg)"
}



var sendone = document.getElementById("send1")

sendone.addEventListener("click",function(){

inpu3.style.display = "block"
inpu3.style.display = "flex"


})

var sendtu = document.getElementById("send2")

sendtu.addEventListener("click",function(){


reg_for.style.display = "block"
reg_for.style.display = "flex"

})



// var d = setInterval(function () {
// var x = 0
// 	x++
// 	var f=document.documentElement.scrollTop
// 	if( f>=10){
// 	nkar1.classList.add("nkr1")
// 	nkar2.classList.add("nkr2")
// 	nkar3.classList.add("nkr3")
// 	nkar4.classList.add("nkr4")
// 	nkar5.classList. add("nkr5")


// }
 

// },1000)



function click(){
reg_for.style.display = "none"

}


function contact(){

contacts.style.display = "block"
contacts.style.display = "flex"
}

function pak(){
contacts.style.display = "none"

}

