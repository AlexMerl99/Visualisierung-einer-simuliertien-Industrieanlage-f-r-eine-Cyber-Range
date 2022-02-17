//Globale Variablen

var x = Math.floor(Math.random()*(20-1)+1); //Anzahl Flaschen
//var f = 50 //Bewegung der Flaschen in Pixel
let e ;//Füllstand  der Flasche in Pixel (Fehler)
//var b = x  // Wie viel vom Tank ausgeleert wird
//let pace = 100/(e*1.25)
//let u = 0; //Update Füllstand
//let count=0; //Timeout stopper
let c = 400 //Füllstand Tank Prozent

// eslint-disable-next-line no-undef
var svg = d3.select("body").append("svg");
var k; //duration time Bildschirm
svg.attr("width", 1000).attr("height", 1000);
// eslint-disable-next-line no-undef
var g = svg.append("g")

let ft = 0;

let countGateClosing = 0;





//STARTPROGRAM
// eslint-disable-next-line no-undef
//delay();
var i = 0

// eslint-disable-next-line no-unused-vars
function startProgram(){


    start()
    startTimers()
}

function startTimers(){
    //Timeout()
    TimeoutTank()
}
// eslint-disable-next-line no-unused-vars
function start() {
    //for (let i = 0; i < x; i++) {}
    e=Math.random()*(180-0)+0
    k = (e*1.25)/100

    ft=Math.random()*(100-0).toFixed(2) //filling tank

    startTank()
    startPipe()
    updateTank()

    setTimeout(function () {
        updateValue()
    }, 1000)
// eslint-disable-next-line no-undef
    setTimeout(function () {

        drawGlass()



        if (e>80){
            runOver(i)
            document.getElementById("FlowLevel").innerHTML = "Flowlevel : " + k.toFixed(2) + "x standard";

        }if (e<=80){
            underFlow(i)
            startConveyor(i)
            document.getElementById("FlowLevel").innerHTML = "Flowlevel : " + k.toFixed(2) + "x standard";

        }if (i<x){
            start()
        }

    }, 1000)

    i++;

    // eslint-disable-next-line no-unused-vars
console.log(i)

}






//function Timeout(){ setInterval(updateValue,10)}

function updateValue() {


    var adding = x

        if ((e*1.25) > 100) {
            document.getElementById("FillingPercentage").innerHTML = "Füllstand Flasche: " + (e*1.25).toFixed(2) + " % = Overflow";

        }
        if ((e*1.25) < 90) {
            document.getElementById("FillingPercentage").innerHTML = "Füllstand Flasche: " +(e*1.25).toFixed(2) + " % = Deficit";

        }
        if((e*1.25)>=90 && (e*1.25)<=100) {

            document.getElementById("FillingPercentage").innerHTML = "Füllstand Flasche: " + (e*1.25).toFixed(2) + " % = Normal";

        }

    document.getElementById("bottlecount").innerHTML = "Anzahl Flaschen: " + adding;

}






function TimeoutTank(){ setInterval(updateTank,500)}

function updateTank(){
    var t = c-x
    if (c>t) {
        c--;
        //let ps=(c/400)*100
        var btn = document.getElementById("TankFilling")
        btn.innerHTML = "Füllstand Tank = " + ft.toFixed(2)+ "%";

        //}, 50)
    }if (c==t){
        c=t;
    }if (c==0) {
        alert("Refilling Tank")
        location.reload();
    }

}

function drawGlass() {
   // bottleMovement [countGateClosing] = []
        // eslint-disable-next-line no-undef
        g.append("rect")
            .attr("fill", "#f28e1c")
            .attr("stroke", "#0D3A00")
            .attr('x', 496) // -i*f) //i*
            .attr('y', 650)
            .attr('height', 80)
            .attr('width', 30)


  /*  for(let amount=0; amount == bottleMovement.length; amount++) {
        bottleMovement[amount].attr("x",496 -f)
    }*/
    countGateClosing++;




    if (countGateClosing == x) {
// eslint-disable-next-line no-undef
        g.append("rect")
            .attr("x", 500)
            .attr("y", 644)
            .attr("height", 7)
            .attr("width", 22)
            .style("fill", "black")
            .style("stroke", "grey")
    }
}



function startTank(){
// eslint-disable-next-line no-undef
    let tankOrange = g.append("rect")

        .attr("x",50)
        .attr("y",150)

        .style("fill", "#f28e1c")

        .attr("width",200)

    tankOrange.attr("height", 400)
    // eslint-disable-next-line no-undef
    let tank = g.append("rect")

        .attr("x",50)
        .attr("y",150)

        .style("fill", "white")
        .attr("height", 0)
        .attr("width",200)



    //Durchlaufzeit, bis Tank vollständig geleert
    // eslint-disable-next-line no-undef
    tank.attr("height",400-(400*(ft/100)))


}
function startPipe(){
    let gate= g.append("rect")
        .attr("x",500)
        .attr("y",644)
        .attr("height",3)
        .attr("width",22)
        .style("fill","transparent")
        .style("stroke","transparent")



    // eslint-disable-next-line no-undef
    gate.transition().ease(d3.easeLinear)
        .delay(0)
        .duration(0)
    // eslint-disable-next-line no-undef
    let pipe1 = g.append("rect") //Füll-Animation von links nach rechts aus Tank
        .attr("x",270)
        .attr("y",552)

        .style("stroke", "transparent")
        .style("fill", "#f28e1c")
        .attr("height", 18)
        .attr("width",0)
// eslint-disable-next-line no-undef
    let pipe2 = g.append("rect") //Füll-Animation von Oben nach unten aus Rohr
        .attr("x",502)
        .attr("y",552)
        .style("stroke", "transparent")
        .style("fill", "#f28e1c")
        .attr("height", 0)
        .attr("width",18)



        // eslint-disable-next-line no-undef
        pipe1.transition().ease(d3.easeLinear)
            //.delay(0)
            .duration(500)
            .attr("width", 250)

        // eslint-disable-next-line no-undef
        pipe2.transition().ease(d3.easeLinear)
            .delay(500)
            .duration(500)
            .attr("height", 97)




}


function startConveyor() {

    // eslint-disable-next-line no-undef
    let errors = g.append("rect")
        .attr("fill", "white")
        .attr('x', 497) // - i * f)
        .attr('y', 651)
        .attr('height', 0)


    // eslint-disable-next-line no-undef
    errors.transition().ease(d3.easeLinear)
        .delay(0)
        .duration(0)
        .attr("fill", "white")
        .attr("height", 80 - e)
        .attr("width", 28)

}

function runOver(){
    // eslint-disable-next-line no-undef
    g.append("rect")
        .attr("fill", "#f28e1c")
        .attr("stroke","#0D3A00")
        .attr('x', 496 )//- i * f)
        .attr('y', 650)
        .attr('height', 80)
        .attr('width', 30)

    // eslint-disable-next-line no-undef
    g.append("rect")//erster Überlauf rechts
        .attr("fill", "#f28e1c")
        .attr("stroke","transparent")
        .attr('x', 527)
        .attr('y', 650)
        .attr('height', 80)
        .attr('width', 3)



    // eslint-disable-next-line no-undef
    g.append("rect")//erster Überlauf links

        .attr("fill", "#f28e1c")
        .attr("stroke","transparent")
        .attr('x', 492.5)
        .attr('y', 650)
        .attr('height', 80)
        .attr('width', 3)



    // eslint-disable-next-line no-undef
    g.append("rect") //Pfütze rechts
        .attr('x', 528 )
        .attr('y', 730)
         .attr('y',720 )
        .attr('height',20)
        .attr('width', 16.5)
         .attr("fill", "#f28e1c")
         .attr("stroke", "transparent")

    // eslint-disable-next-line no-undef
    g.append("rect") //Pfütze links
        .attr('x', 478)
        .attr('y', 730)
        .attr('y',720 )
        .attr('height',20 )
        .attr('width', 16.5)
        .attr("fill", "#f28e1c")
        .attr("stroke", "transparent")








// eslint-disable-next-line no-undef
    let overflowingLeft = g.append("rect") //Überläufe links folgend
        .attr('x', 492)// - i * f)
        .attr('y', 650)
        .attr("height", 20)




// eslint-disable-next-line no-undef
    let overflowingRight= g.append("rect") //Überläufe rechts
        .attr('x', 527 )//- i * f)
        .attr('y', 650)
        .attr('height',20 )
        .attr('width', 16.5)
        .attr("fill", "#f28e1c")
        .attr("stroke", "#f28e1c")
    // eslint-disable-next-line no-undef
    overflowingLeft.transition().ease(d3.easeLinear)
        .delay(0)
        .duration(0)
        .attr("fill", "#f28e1c")
        .attr("stroke","transparent")
        .attr("y",650)
        .attr("width",3)

    // eslint-disable-next-line no-undef
    overflowingRight.transition().ease(d3.easeLinear)
        .delay(0)
        .duration(0)
        .attr("fill", "#f28e1c")
        .attr("stroke","transparent")
        .attr("y",650)
        .attr("width",3)

}

function underFlow(){
    // eslint-disable-next-line no-undef
    let overflowingLeft=g.append("rect")//transparenter Überlauf links
        .attr("fill", "white")
        .attr("stroke","white")
        .attr('x', 492)
        .attr('y', 650)
        .attr('height', 80)
        .attr('width', 4)

// eslint-disable-next-line no-undef
    let overflowingRight= g.append("rect")//transparenter Überlauf rechts

        .attr("fill", "white")
        .attr("stroke","white")
        .attr('x', 527)
        .attr('y', 650)
        .attr('height', 80)
        .attr('width', 3)




    // eslint-disable-next-line no-undef
     g.append("rect") //Pfütze rechts
        .attr('x', 528 )
        .attr('y', 730)
        .attr('y',720 )
        .attr('height',20)
        .attr('width', 16.5)
        .attr("fill", "white")
        .attr("stroke", "white")

    // eslint-disable-next-line no-undef
    g.append("rect") //Pfütze links
        .attr('x', 478)
        .attr('y', 730)
        .attr('y',720 )
        .attr('height',20 )
        .attr('width', 16.5)
        .attr("fill", "white")
        .attr("stroke", "white")

    // eslint-disable-next-line no-undef
    overflowingLeft.transition().ease(d3.easeLinear)
        .delay(0)
        .duration(0)
        .attr("fill", "white")
        .attr("stroke","white")
        .attr("y",650 )
        .attr("width",3)

    // eslint-disable-next-line no-undef
    overflowingRight.transition().ease(d3.easeLinear)
        .delay(0)
        .duration(0)
        .attr("fill", "white")
        .attr("stroke","white")
        .attr("y",650 )
        .attr("width",3)

    g.append("circle")
        .attr("r",8)
        .attr("cx", 490)
        .attr("cy", 740)
        .style("stroke", "black")
        .style("fill","grey")

    g.append("circle")
        .attr("r",8)
        .attr("cx", 520)
        .attr("cy", 740)
        .style("stroke", "black")
        .style("fill","grey")

    g.append("circle")
        .attr("r",8)
        .attr("cx", 550)
        .attr("cy", 740)
        .style("stroke", "black")
        .style("fill","grey")

    g.append("rect")
        .classed("conveyorTop",true)

    g.append("rect")
        .classed("conveyorBottom",true)
}



// eslint-disable-next-line no-undef
gate = g.append("rect")
    .attr("x",500)
    .attr("y",644)
    .attr("height",7)
    .attr("width",22)
    .style("fill","black")
    .style("stroke","grey")


g.append('rect')
    .classed("tankFill",true)


g.append("rect")
    .classed("pipeBottom",true)

g.append("rect")
    .classed("pipeTop",true)

g.append("rect")
    .classed("shortpipeLeft",true)

g.append("rect")
    .classed("shortpipeRight",true)

g.append("rect")
    .classed("conveyorTop",true)

g.append("rect")
    .classed("conveyorBottom",true)

g.append('rect')
    .classed("bottomTank",true)

g.append('rect')
    .classed("emptyGlass",true)





//Rand Füllgefäß
g.append('rect')
    .classed("leftsideTank",true)

g.append('rect')
    .classed("rightsideTank",true)

//Stern
// eslint-disable-next-line no-undef
const arcGenerator = d3.arc()
    .outerRadius(120)
    .innerRadius(0)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2)



g.append("path")
    .attr("transform", "translate(150,150)")
    .attr("d", arcGenerator())
    .style("stroke","#0D3A00")
    .style("fill","#006900")

// eslint-disable-next-line no-undef
const star = d3.symbol()
    // eslint-disable-next-line no-undef
    .type(d3.symbolStar)
    .size(180)

g.append("path")
    .attr("transform", "translate(150,70)")
    .attr("d", star())
    .style("stroke","#C40006")
    .style("fill","#C40006")



//Laufräder
g.append("circle")
    .attr("r",8)
    .attr("cx", 10)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

g.append("circle")
    .attr("r",8)
    .attr("cx", 40)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

g.append("circle")
    .attr("r",8)
    .attr("cx", 70)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

g.append("circle")
    .attr("r",8)
    .attr("cx", 100)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

g.append("circle")
    .attr("r",8)
    .attr("cx", 130)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

g.append("circle")
    .attr("r",8)
    .attr("cx", 160)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

g.append("circle")
    .attr("r",8)
    .attr("cx", 190)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

g.append("circle")
    .attr("r",8)
    .attr("cx", 220)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

g.append("circle")
    .attr("r",8)
    .attr("cx", 250)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

g.append("circle")
    .attr("r",8)
    .attr("cx", 280)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

g.append("circle")
    .attr("r",8)
    .attr("cx", 310)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

g.append("circle")
    .attr("r",8)
    .attr("cx", 340)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

g.append("circle")
    .attr("r",8)
    .attr("cx", 370)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

g.append("circle")
    .attr("r",8)
    .attr("cx", 400)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

g.append("circle")
    .attr("r",8)
    .attr("cx", 430)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

g.append("circle")
    .attr("r",8)
    .attr("cx", 460)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

g.append("circle")
    .attr("r",8)
    .attr("cx", 490)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

g.append("circle")
    .attr("r",8)
    .attr("cx", 520)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

g.append("circle")
    .attr("r",8)
    .attr("cx", 550)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

g.append("circle")
    .attr("r",8)
    .attr("cx", 580)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

g.append("circle")
    .attr("r",8)
    .attr("cx", 610)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

g.append("circle")
    .attr("r",8)
    .attr("cx", 640)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

g.append("circle")
    .attr("r",8)
    .attr("cx", 670)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

g.append("circle")
    .attr("r",8)
    .attr("cx", 700)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

g.append("circle")
    .attr("r",8)
    .attr("cx", 730)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

g.append("circle")
    .attr("r",8)
    .attr("cx", 760)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

g.append("circle")
    .attr("r",8)
    .attr("cx", 790)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

g.append("circle")
    .attr("r",8)
    .attr("cx", 820)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

g.append("circle")
    .attr("r",8)
    .attr("cx", 850)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

g.append("circle")
    .attr("r",8)
    .attr("cx", 880)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

g.append("circle")
    .attr("r",8)
    .attr("cx", 910)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

g.append("circle")
    .attr("r",8)
    .attr("cx", 940)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

g.append("circle")
    .attr("r",8)
    .attr("cx", 970)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

g.append("circle")
    .attr("r",8)
    .attr("cx", 1000)
    .attr("cy", 740)
    .style("stroke", "black")
    .style("fill","grey")

//leere Gläser für Optik

g.append("rect")
    .attr("x",546)
    .attr("y",650)
    .attr("height",80)
    .attr("width",30)
    .style("stroke","#0D3A00")
    .style("fill","white")

g.append("rect")
    .attr("x",596)
    .attr("y",650)
    .attr("height",80)
    .attr("width",30)
    .style("stroke","#0D3A00")
    .style("fill","white")

g.append("rect")
    .attr("x",646)
    .attr("y",650)
    .attr("height",80)
    .attr("width",30)
    .style("stroke","#0D3A00")
    .style("fill","white")

g.append("rect")
    .attr("x",696)
    .attr("y",650)
    .attr("height",80)
    .attr("width",30)
    .style("stroke","#0D3A00")
    .style("fill","white")

g.append("rect")
    .attr("x",746)
    .attr("y",650)
    .attr("height",80)
    .attr("width",30)
    .style("stroke","#0D3A00")
    .style("fill","white")

g.append("rect")
    .attr("x",796)
    .attr("y",650)
    .attr("height",80)
    .attr("width",30)
    .style("stroke","#0D3A00")
    .style("fill","white")

g.append("rect")
    .attr("x",846)
    .attr("y",650)
    .attr("height",80)
    .attr("width",30)
    .style("stroke","#0D3A00")
    .style("fill","white")

g.append("rect")
    .attr("x",896)
    .attr("y",650)
    .attr("height",80)
    .attr("width",30)
    .style("stroke","#0D3A00")
    .style("fill","white")

g.append("rect")
    .attr("x",946)
    .attr("y",650)
    .attr("height",80)
    .attr("width",30)
    .style("stroke","#0D3A00")
    .style("fill","white")

g.append("rect")
    .attr("x",996)
    .attr("y",650)
    .attr("height",80)
    .attr("width",30)
    .style("stroke","#0D3A00")
    .style("fill","white")

