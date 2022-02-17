/*// eslint-disable-next-line no-undef
let bar1 = svg.append("rect")
    .attr("fill", "white")
    .attr('x', 3)
    .attr('y', 30)
    .attr('height', 0)
    .attr('width', 50);
// eslint-disable-next-line no-undef
let bar2 = svg.append("rect")
    .attr("fill", "#f28e1c")
    .attr('x', 56)
    .attr('y', 106)
    .attr('height', 4)
    .attr('width', 0);
// eslint-disable-next-line no-undef
let bar3 = svg.append("rect")
    .attr("fill", "#f28e1c")
    .attr('x', 140)
    .attr('y', 106)
    .attr('height', 0)
    .attr('width', 4);
// eslint-disable-next-line no-undef
let bar4 = svg.append("rect")
    .attr("fill", "white")
    .attr('x', 56)
    .attr('y', 106)
    .attr('height', 4)
    .attr('width', 0);
// eslint-disable-next-line no-undef
let bar5 = svg.append("rect")
    .attr("fill", "white")
    .attr('x', 140)
    .attr('y', 106)
    .attr('height', 0)
    .attr('width', 4);
// eslint-disable-next-line no-undef
let fuel1 = svg.append("rect")
    .attr("fill", "#f28e1c")
    .attr('x', 138.3)
    .attr('y', 125)
    .attr('height', 0)
    .attr('width', 8)




//Gläser von Füller nach rechts
// eslint-disable-next-line no-undef
let glass1 = svg.append("rect")
    .attr("fill", "#f28e1c")
    .attr('x', 138.3)
    .attr('y', 125)
    .attr('height', 0)
    .attr('width', 8)

/*let fuel2 = svg.append("rect")
    .attr("fill", "white")
    .style("stroke","#0D3A00")
    .attr('x', 138.3)
    .attr('y', 140)
    .attr('height', 0)
    .attr('width', 8)*/
// eslint-disable-next-line no-undef
/*let glass2 = svg.append("rect")
    .attr("fill", "#f28e1c")
    .attr('x', 153.3)
    .attr('y', 125)
    .attr('height', 0)
    .attr('width', 8)


// eslint-disable-next-line no-undef
let bar7 = svg.append("rect")
    .attr("fill", "#f28e1c")
    .attr('x', 123.3)
    .attr('y', 125)
    .attr('height', 0)
    .attr('width', 8)
// eslint-disable-next-line no-undef
let bar8 = svg.append("rect")
    .attr("fill", "#f28e1c")
    .attr('x', 108.3)
    .attr('y', 125)
    .attr('height', 0)
    .attr('width', 8)
// eslint-disable-next-line no-undef
let bar9 = svg.append("rect")
    .attr("fill", "#f28e1c")
    .attr('x', 93.3)
    .attr('y', 125)
    .attr('height', 0)
    .attr('width', 8)
// eslint-disable-next-line no-undef
let bar10 = svg.append("rect")
    .attr("fill", "#f28e1c")
    .attr('x', 78.3)
    .attr('y', 125)
    .attr('height', 0)
    .attr('width', 8)
// eslint-disable-next-line no-undef
let bar11 = svg.append("rect")
    .attr("fill", "#f28e1c")
    .attr('x', 63.3)
    .attr('y', 125)
    .attr('height', 0)
    .attr('width', 8)
// eslint-disable-next-line no-undef
let bar12 = svg.append("rect")
    .attr("fill", "#f28e1c")
    .attr('x', 48.3)
    .attr('y', 125)
    .attr('height', 0)
    .attr('width', 8)
// eslint-disable-next-line no-undef
let bar13 = svg.append("rect")
    .attr("fill", "#f28e1c")
    .attr('x', 33.3)
    .attr('y', 125)
    .attr('height', 0)
    .attr('width', 8)
// eslint-disable-next-line no-undef
let bar14 = svg.append("rect")
    .attr("fill", "#f28e1c")
    .attr('x', 18.3)
    .attr('y', 125)
    .attr('height', 0)
    .attr('width', 8)
// eslint-disable-next-line no-undef
let bar15 = svg.append("rect")
    .attr("fill", "white")
    .attr('x', 3.3)
    .attr('y', 125)

    .attr('height', 0)
    .attr('width', 8)

//enum Flaschenvorlage
// eslint-disable-next-line no-undef
let bar16 = svg.append("rect")
    .attr("fill", "transparent")
    .attr('x', 3.77)
    .attr('y', 125.45)

    .attr('height', 14)
    .attr('width', 6.85)*/


/*//Füllgefäß und Transportband

g.append('rect')
    .attr("height", 10000)
    .attr("width", 50)
    .attr("x", 3)
    .attr("y", 30)
    .style("stroke", "grey")
    .style("fill", "#f28e1c")

g.append("line")
    .attr("x1", 45)
    .attr("y1", 160)
    .attr("x2", 140)
    .attr("y2", 160)
    .style("stroke", "grey")

g.append("line")
    .attr("x1", 45)
    .attr("y1", 155)
    .attr("x2", 145)
    .attr("y2", 155)
    .style("stroke", "grey")

g.append("line")
    .attr("x1", 140)
    .attr("y1", 160)
    .attr("x2", 140)
    .attr("y2", 167)
    .style("stroke", "grey")

g.append("line")
    .attr("x1", 145)
    .attr("y1", 155)
    .attr("x2", 145)
    .attr("y2", 167)
    .style("stroke", "grey")

g.append("line")
    .attr("x1", 0)
    .attr("y1", 180)
    .attr("x2", 300)
    .attr("y2", 180)
    .style("stroke", "grey")

g.append("line")
    .attr("x1", 0)
    .attr("y1", 185)
    .attr("x2", 300)
    .attr("y2", 185)
    .style("stroke", "grey")

g.append('rect')
    .attr("height", 40)
    .attr("width", 56)
    .attr("x", 0)
    .attr("y", 130)
    .style("stroke", "#0D3A00")
    .style("fill", "#006900")

g.append('rect')
    .attr("height", 10)
    .attr("width", 8)
    .attr("x", 168.3)
    .attr("y", 170)
    .style("stroke", "#0D3A00")
    .style("fill", "white")

//Rand Füllgefäß
g.append('rect')
    .attr("height", 100)
    .attr("width", 3)
    .attr("x", 0)
    .attr("y", 30)
    .style("stroke", "#0D3A00")
    .style("fill", "#006900")

g.append('rect')
    .attr("height", 100)
    .attr("width", 3)
    .attr("x", 53)
    .attr("y", 30)
    .style("stroke", "#0D3A00")
    .style("fill", "#006900")
//Laufräder
g.append("circle")
    .attr("r",2)
    .attr("cx", 3)
    .attr("cy", 182.5)
    .style("stroke", "grey")

g.append("circle")
    .attr("r",2)
    .attr("cx", 13)
    .attr("cy", 182.5)
    .style("stroke", "grey")

g.append("circle")
    .attr("r",2)
    .attr("cx", 23)
    .attr("cy", 182.5)
    .style("stroke", "grey")

g.append("circle")
    .attr("r",2)
    .attr("cx", 33)
    .attr("cy", 182.5)
    .style("stroke", "grey")

g.append("circle")
    .attr("r",2)
    .attr("cx", 43)
    .attr("cy", 182.5)
    .style("stroke", "grey")

g.append("circle")
    .attr("r",2)
    .attr("cx", 53)
    .attr("cy", 182.5)
    .style("stroke", "grey")

g.append("circle")
    .attr("r",2)
    .attr("cx", 63)
    .attr("cy", 182.5)
    .style("stroke", "grey")

g.append("circle")
    .attr("r",2)
    .attr("cx", 73)
    .attr("cy", 182.5)
    .style("stroke", "grey")

g.append("circle")
    .attr("r",2)
    .attr("cx", 83)
    .attr("cy", 182.5)
    .style("stroke", "grey")

g.append("circle")
    .attr("r",2)
    .attr("cx", 93)
    .attr("cy", 182.5)
    .style("stroke", "grey")

g.append("circle")
    .attr("r",2)
    .attr("cx", 103)
    .attr("cy", 182.5)
    .style("stroke", "grey")

g.append("circle")
    .attr("r",2)
    .attr("cx", 113)
    .attr("cy", 182.5)
    .style("stroke", "grey")

g.append("circle")
    .attr("r",2)
    .attr("cx", 123)
    .attr("cy", 182.5)
    .style("stroke", "grey")

g.append("circle")
    .attr("r",2)
    .attr("cx", 133)
    .attr("cy", 182.5)
    .style("stroke", "grey")

g.append("circle")
    .attr("r",2)
    .attr("cx", 143)
    .attr("cy", 182.5)
    .style("stroke", "grey")

g.append("circle")
    .attr("r",2)
    .attr("cx", 153)
    .attr("cy", 182.5)
    .style("stroke", "grey")

g.append("circle")
    .attr("r",2)
    .attr("cx", 163)
    .attr("cy", 182.5)
    .style("stroke", "grey")

g.append("circle")
    .attr("r",2)
    .attr("cx", 173)
    .attr("cy", 182.5)
    .style("stroke", "grey")

g.append("circle")
    .attr("r",2)
    .attr("cx", 183)
    .attr("cy", 182.5)
    .style("stroke", "grey")

g.append("circle")
    .attr("r",2)
    .attr("cx", 193)
    .attr("cy", 182.5)
    .style("stroke", "grey")

g.append("circle")
    .attr("r",2)
    .attr("cx", 203)
    .attr("cy", 182.5)
    .style("stroke", "grey")

g.append("circle")
    .attr("r",2)
    .attr("cx", 213)
    .attr("cy", 182.5)
    .style("stroke", "grey")

g.append("circle")
    .attr("r",2)
    .attr("cx", 223)
    .attr("cy", 182.5)
    .style("stroke", "grey")


//Stern
// eslint-disable-next-line no-undef
const arcGenerator = d3.arc()
    .outerRadius(27.7)
    .innerRadius(0)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2)



g.append("path")
    .attr("transform", "translate(28.3,30)")
    .attr("d", arcGenerator())
    .style("stroke","#0D3A00")
    .style("fill","#006900")

// eslint-disable-next-line no-undef
const star = d3.symbol()
    // eslint-disable-next-line no-undef
    .type(d3.symbolStar)
    .size(20)

g.append("path")
    .attr("transform", "translate(28.3,150)")
    .attr("d", star())
    .style("stroke","#C40006")
    .style("fill","#C40006")



g.append("button")
    .attr("background-color","#C40006")
    .attr("border","none")
    .attr("color","white")
    .attr("padding","5px 3px")
    .attr("text-align","center")
    .attr("text-decoration","none")
    .attr("display","inline-block")
    .attr("font-size","5px")
    .attr("cursor","pointer")
// eslint-disable-next-line no-undef

// eslint-disable-next-line no-undef
delay();
// eslint-disable-next-line no-unused-vars
   //function updates() {

        // eslint-disable-next-line no-undef
        /*bar1.transition().ease(d3.easeLinear)
            .duration(8000)
            .attr("height", 60)

        // eslint-disable-next-line no-undef
        bar2.transition().ease(d3.easeLinear)
            .duration(5000)
            .attr("width", 85)

        // eslint-disable-next-line no-undef
        bar3.transition().ease(d3.easeLinear)
            .delay(5000)
            .duration(500)
            .attr("height", 19)

        // eslint-disable-next-line no-undef
        bar4.transition().ease(d3.easeLinear)
            .delay(8000)
            .duration(2000)
            .attr("width", 85)

        // eslint-disable-next-line no-undef
        bar5.transition().ease(d3.easeLinear)
            .delay(10000)
            .duration(500)
            .attr("height", 19)


        // eslint-disable-next-line no-undef
        glass2.transition().ease(d3.easeLinear)
            .delay(0)
            .duration(0)
            .style("stroke", "#0D3A00")
            .style("fill", "transparent")
            .attr("height", 15)

        // eslint-disable-next-line no-undef
        /*bar7.transition().ease(d3.easeLinear)
            .style("stroke","#0D3A00")
            .duration(0)
            .attr("height", 15)

        // eslint-disable-next-line no-undef
        bar8.transition().ease(d3.easeLinear)
            .style("stroke","#0D3A00")
            .duration(0)
            .attr("height", 15);

        // eslint-disable-next-line no-undef
        fuel1.transition().ease(d3.easeLinear)
            .delay(5450)
            .duration(500)
            .attr("height", 15);

        // eslint-disable-next-line no-undef
        glass1.transition().ease(d3.easeLinear)
            .delay(0)
            .duration(0)
            .style("stroke", "#0D3A00")
            .style("fill", "transparent")
            .attr("height", 14)

        /*console.log(bar3._groups[0][0]);
         if (bar3.attr("height").equals(19)) {
             repeat();
         }
         let repetition = repeat()
         let result = repetition.repeat(9)
         result();

        setTimeout(() => {
            repeater()
        }, 5450)

        /*function runFunctionXTimes(callback, interval, repeatTimes) {
            let repeated = 0;
            const intervalTask = setInterval(doTask, interval)
            function doTask() {
                if ( repeated < repeatTimes ) {
                    callback()
                    repeated += 1
                } else {
                    clearInterval(intervalTask)
                }
            }
        }
        let x = prompt("input filling percentage")

        //let y = prompt("input repetition")

        function repeater() {

//for schleife über alles und neue bars kommen per rechnung dazu


            { // eslint-disable-next-line no-undef
                fuel1.transition().ease(d3.easeLinear)

                    .duration(500)
                    .attr("height", 15)
                    // eslint-disable-next-line no-undef
                    .transition().ease(d3.easeLinear)
                    .duration(0)
                    .attr("height", 0)

                //.on("end", repeater)


                // eslint-disable-next-line no-undef
                bar7.transition().ease(d3.easeLinear)
                    .delay(420)
                    .style("stroke", "#0D3A00")
                    .duration(0)
                    .attr("height", 15);

                // eslint-disable-next-line no-undef
                bar8.transition().ease(d3.easeLinear)
                    .delay(1000)
                    .style("stroke", "#0D3A00")
                    .duration(0)
                    .attr("height", 15);

                // eslint-disable-next-line no-undef
                bar9.transition().ease(d3.easeLinear)
                    .delay(1500)
                    .style("stroke", "#0D3A00")
                    .duration(0)
                    .attr("height", 15);

                // eslint-disable-next-line no-undef
                bar10.transition().ease(d3.easeLinear)
                    .delay(2000)
                    .style("stroke", "#0D3A00")
                    .duration(0)
                    .attr("height", 15);

                // eslint-disable-next-line no-undef
                bar11.transition().ease(d3.easeLinear)
                    .delay(2500)
                    .style("stroke", "#0D3A00")
                    .duration(0)
                    .attr("height", 15);

                // eslint-disable-next-line no-undef
                bar12.transition().ease(d3.easeLinear)
                    .delay(3000)
                    .style("stroke", "#0D3A00")
                    .duration(0)
                    .attr("height", 15);

                // eslint-disable-next-line no-undef
                bar13.transition().ease(d3.easeLinear)
                    .delay(3500)
                    .style("stroke", "#0D3A00")
                    .duration(0)
                    .attr("height", 15);

                // eslint-disable-next-line no-undef
                bar14.transition().ease(d3.easeLinear)
                    .delay(4000)
                    .style("stroke", "#0D3A00")
                    .duration(0)
                    .attr("height", 15);


                // eslint-disable-next-line no-undef
                bar15.transition().ease(d3.easeLinear)
                    .delay(4550)
                    .style("stroke", "#0D3A00")
                    .style("fill", "#f28e1c")
                    .duration(0)
                    .attr("height", 15);

                // eslint-disable-next-line no-undef
                bar16.transition().ease(d3.easeLinear)
                    .delay(4550)
                    .style("fill", "white")

                    .attr("height", 14 - x)
                    .duration(0)


            }
            //.attr('height', bar16.height(14))

// eslint-disable-next-line no-undef
            /*fuel2.transition().ease(d3.easeLinear)
            .delay(4550)
            .duration(0)
            .attr("height", 10)
            .style("fill","#f28e1c")
            .style("stroke","#0D3A00")

        }*/


//runFunctionXTimes(repeater(), 5, 5)


/*// eslint-disable-next-line no-undef
    fuel2.transition().ease(d3.easeLinear)
        .delay(5950)
        .duration(0)
        .attr("height", 15)*/


/*var customShapeCircle = {
    draw: function(context, size) {
        let r = Math.sqrt(2 * size / Math.PI);
        let orgin = (4 * r) / (3 * Math.PI); //the orgin of the circle, not of the symbol
        context.arc(0, -orgin, r, Math.PI, 2 * Math.PI, true);
        context.closePath();
    }
}
// eslint-disable-next-line no-undef
var customCircle = d3.symbol().type(customShapeCircle).size(1000);
// eslint-disable-next-line no-undef
g.select("#demoCustomCircle").append("path")
    .attr("d", customCircle)
    .attr("transform", "translate(28,30)")
    .style("stroke","black")*/


// eslint-disable-next-line no-undef
//d3.select("#increase").on("click", increase);
// eslint-disable-next-line no-undef
//d3.select("#decrease").on("click", decrease);
//increase via scaling
/*function increase() {
    scale +=0.1;
    g.transition().delay("100").attr("transform", "scale("+scale+")");

}
function decrease() {
    scale -=0.1;
    g.transition().delay("100").attr("transform", "scale("+scale+")");
}*/

/*refillGlass();

function refillGlass() {


}*/


// eslint-disable-next-line no-undef

//D3 code hier
//d3.select("p").style("color","firebrick")
// eslint-disable-next-line no-undef
//d3.selectAll("p1").style("color","firebrick")
// eslint-disable-next-line no-undef
//d3.selectAll(".myclass").style("color","navy")
// eslint-disable-next-line no-undef
//d3.select("tr").selectAll("td").style("background-color", "aquamarine")
// eslint-disable-next-line no-undef
//TEXT METHOD
//d3.select("p")
//.text("This is a paragraph!")
// eslint-disable-next-line no-undef

//APPEND METHOD
//d3.select("body").append("p")
//    .text("Third Paragraph")

//INSERT METHOD
// eslint-disable-next-line no-undef
//d3.select("div").insert("p")
//  .text("Here is my new paragraph")

//REMOVE METHOD
// eslint-disable-next-line no-undef
//d3.select("p").remove

//HTML METHOD
// eslint-disable-next-line no-undef
//d3.select("p").html("<em>We changed the paragraph with html</em>");

//ATTRIBUTE METHOD
// eslint-disable-next-line no-undef
//d3.select("p").attr("class","error")

//PROPERTY METHOD
// eslint-disable-next-line no-undef
//d3.select("input").property("checked",true)

//STYLE METHOD
// eslint-disable-next-line no-undef
//d3.select("p").style("color","aqua")

//CLASSED METHOD
// eslint-disable-next-line no-undef
//d3.select("p").classed("error",true)

//VIDEO 4 Method Chaining and functions of Data
//var datArr =[6,5,4,3,2,1,0]
// eslint-disable-next-line no-undef
/*d3.selectAll("p")
    .data(datArr).text(function (d,i){
        console.log("d: "+d);
        console.log("i: "+i);
        return "Data point "+i+" is "+d;
    });*/
//.attr("style","color:navy")

// eslint-disable-next-line no-undef
/*d3.select("body").selectAll("p").style("color", function (d, i){
    var text = this.innerText

    if(text.indexOf("Warning")>=0){
        return "orange";

    }else if (text.indexOf("Danger">=0)){
        return "red";

    }
})*/

//VIDEO 5 EVENTS

//click oder mouseout sind auch möglich

// eslint-disable-next-line no-undef
/*d3.selectAll("div")
    .on("mouseover", function (){
        // eslint-disable-next-line no-undef
        d3.select(this)
            .style("background-color", "aquamarine")
    }).on("mouseout", function () {
    // eslint-disable-next-line no-undef
    d3.select(this)
        .style("background-color", "purple")

})*/

//VIDEO 6 ANIMATION

// eslint-disable-next-line no-undef
/*d3.select("#container")
    .transition().duration(3000)
    .style('background-color', 'red')
    .transition().duration(2000)
    .style('background-color','purple')
// eslint-disable-next-line no-undef
var t = d3.transition().duration(2000)
// eslint-disable-next-line no-undef
d3.select('#container')
    .transition(t)
    .style('background-color', 'yellow')

//DELAY FUNKTION
// eslint-disable-next-line no-undef
let svg = d3.select("body")
            .append("svg")
                .attr("width", 500)
                .attr("height", 500);
// eslint-disable-next-line no-undef
let bar1 = svg.append("rect")
                .attr("fill", "navy")
                .attr('x', 100)
                .attr('y', 20)
                .attr('height', 20)
                .attr('width', 10);
// eslint-disable-next-line no-undef
let bar2 = svg.append("rect")
                .attr("fill", "orange")
                .attr('x', 120)
                .attr('y', 20)
                .attr('height', 20)
                .attr('width', 10);
// eslint-disable-next-line no-undef
update();
// eslint-disable-next-line no-undef
delay();

function update(){
    // eslint-disable-next-line no-undef
    bar1.transition().ease(d3.easeLinear)
        .duration(3000)
        .attr("height",100)
    bar2.transition()
        // eslint-disable-next-line no-undef
        .ease(d3.easeBounce)
        .duration(3000)
        .delay(3000)
        .attr("height",100)
}*/

//VIDEO 7 DATA BINDING

/* var myData= [1,2,3,4,5, 6,7,8,9]
 // eslint-disable-next-line no-undef
 d3.select("body")
     .selectAll("span")
     .data(myData)
     // eslint-disable-next-line no-undef
     .enter()//Dynamically create placeholders
     .append("span")//Span macht alles in eine Zeile, p alles in verschiedene Zeilen
     //.text(function (d,i){ return d+" "; })
     .style('color',function(d){

         if (d%3===0){
             return "blue"
         }else{
             return "red"
         }
     })
     .text(function (d){
         return d
     })*/

/*var mat=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]


]
// eslint-disable-next-line no-undef
var tr = d3.select("body")
    .append("table")
    .selectAll("tr")
    .data(mat)
    .enter()
    .append("tr")//create tr placeholder

// eslint-disable-next-line no-unused-vars
var td = tr.selectAll("td")
    .data(function (d){
    return d;

})
    .enter()
    .append("td")
    .style('color',function (d){
        if (d%2===0){
            return "red"
        }else {
            return "blue"
        }
    })
    .text(function (d){
        return d
        }
    )*/

/*var myData = ["Hello Everybody"]
// eslint-disable-next-line no-undef
d3.select("body")
    .selectAll("p")
    .data(myData)
    .text(function (d){
        return d
    })
    .exit()
    .remove()*/

//datum(9000) am Ende des Videos: Eine Nummer oder Abfolge und die bleibt konstant

//VIDEO 8 LOADING DATA (Zum schauen, hab die Daten nicht
//[CSV, TSV] --> DSV, JSON, XML
//, ; : |

//VIDEO 9 CREATE SVG ELEMENTS
// eslint-disable-next-line no-undef


//var width = 500
//var height = 500

// eslint-disable-next-line no-undef
/*var svg = d3.select('body').append('svg')
    .attr("width", width)
    .attr("height", height)

svg.append('rect')
    .attr('x1', 100)
    .attr('y1', 400)
    .attr("width", 100)
    .attr("height", 200)
    .style('stroke', 'red')*/




/* // eslint-disable-next-line no-undef
 var svg = d3.select("body").append("svg");

 //svg.attr("width", 500).attr("height", 500);
 var g = svg.append("g")
 // eslint-disable-next-line no-undef




//Füllgefäß und Transportband

 g.append('rect')
     .attr("height", 100)
     .attr("width", 50)
     .attr("x", 3)
     .attr("y", 30)
     .style("stroke", "grey")
     .style("fill", "#f28e1c")

 g.append("line")
     .attr("x1", 45)
     .attr("y1", 160)
     .attr("x2", 140)
     .attr("y2", 160)
     .style("stroke", "grey")

 g.append("line")
     .attr("x1", 45)
     .attr("y1", 155)
     .attr("x2", 145)
     .attr("y2", 155)
     .style("stroke", "grey")

 g.append("line")
     .attr("x1", 140)
     .attr("y1", 160)
     .attr("x2", 140)
     .attr("y2", 167)
     .style("stroke", "grey")

 g.append("line")
     .attr("x1", 145)
     .attr("y1", 155)
     .attr("x2", 145)
     .attr("y2", 167)
     .style("stroke", "grey")

 g.append("line")
     .attr("x1", 0)
     .attr("y1", 180)
     .attr("x2", 300)
     .attr("y2", 180)
     .style("stroke", "grey")

 g.append("line")
     .attr("x1", 0)
     .attr("y1", 185)
     .attr("x2", 300)
     .attr("y2", 185)
     .style("stroke", "grey")

     g.append('rect')
     .attr("height", 40)
     .attr("width", 56)
     .attr("x", 0)
     .attr("y", 130)
     .style("stroke", "#0D3A00")
     .style("fill", "#006900")
 */

/*g.append("line")
    .attr("x1", 145)
    .attr("y1", 105)
    .attr("x2", 145)
    .attr("y2", 120)
    .style("stroke", "grey")*/

/*g.append('rect')
    .attr("height", 10)
    .attr("width", 5)
    .attr("x", 0)
    .attr("y", 110)
    .style("stroke", "blue")
    .style("fill", "transparent")*/


//Gläser
/*g.append('rect')
    .attr("height", 15)
    .attr("width", 8)
    .attr("x", 108.3)
    .attr("y", 125)
    .style("stroke", "#0D3A00")

    .style("fill", "white")

g.append('rect')
    .attr("height", 15)
    .attr("width", 8)
    .attr("x", 123.3)
    .attr("y", 125)
    .style("stroke", "#0D3A00")
    .style("fill", "white")

g.append('rect')
    .attr("height", 15)
    .attr("width", 8)
    .attr("x", 138.3)
    .attr("y", 125)
    .style("stroke", "#0D3A00")
    .style("fill", "white")

g.append('rect')
    .attr("height", 15)
    .attr("width", 8)
    .attr("x", 153.3)
    .attr("y", 125)
    .style("stroke", "#0D3A00")
    .style("fill", "white")*/



/*g.append('rect')
    .attr("height", 10)
    .attr("width", 8)
    .attr("x", 168.3)
    .attr("y", 170)
    .style("stroke", "#0D3A00")
    .style("fill", "white")*/

/*g.append('rect')
    .attr("height", 15)
    .attr("width", 8)
    .attr("x", 183.3)
    .attr("y", 125)
    .style("stroke", "#0D3A00")
    .style("fill", "white")

g.append('rect')
    .attr("height", 15)
    .attr("width", 8)
    .attr("x", 198.3)
    .attr("y", 125)
    .style("stroke", "#0D3A00")
    .style("fill", "white")

g.append('rect')
    .attr("height", 15)
    .attr("width", 8)
    .attr("x", 213.3)
    .attr("y", 125)
    .style("stroke", "#0D3A00")
    .style("fill", "white")

g.append('rect')
    .attr("height", 15)
    .attr("width", 8)
    .attr("x", 228.3)
    .attr("y", 125)
    .style("stroke", "#0D3A00")
    .style("fill", "white")*/

/*//Rand Füllgefäß
    g.append('rect')
        .attr("height", 100)
        .attr("width", 3)
        .attr("x", 0)
        .attr("y", 30)
        .style("stroke", "#0D3A00")
        .style("fill", "#006900")

    g.append('rect')
        .attr("height", 100)
        .attr("width", 3)
        .attr("x", 53)
        .attr("y", 30)
        .style("stroke", "#0D3A00")
        .style("fill", "#006900")
//Laufräder
    g.append("circle")
        .attr("r",2)
        .attr("cx", 3)
        .attr("cy", 182.5)
        .style("stroke", "grey")

    g.append("circle")
        .attr("r",2)
        .attr("cx", 13)
        .attr("cy", 182.5)
        .style("stroke", "grey")

    g.append("circle")
        .attr("r",2)
        .attr("cx", 23)
        .attr("cy", 182.5)
        .style("stroke", "grey")

    g.append("circle")
        .attr("r",2)
        .attr("cx", 33)
        .attr("cy", 182.5)
        .style("stroke", "grey")

    g.append("circle")
        .attr("r",2)
        .attr("cx", 43)
        .attr("cy", 182.5)
        .style("stroke", "grey")

    g.append("circle")
        .attr("r",2)
        .attr("cx", 53)
        .attr("cy", 182.5)
        .style("stroke", "grey")

    g.append("circle")
        .attr("r",2)
        .attr("cx", 63)
        .attr("cy", 182.5)
        .style("stroke", "grey")

    g.append("circle")
        .attr("r",2)
        .attr("cx", 73)
        .attr("cy", 182.5)
        .style("stroke", "grey")

    g.append("circle")
        .attr("r",2)
        .attr("cx", 83)
        .attr("cy", 182.5)
        .style("stroke", "grey")

    g.append("circle")
        .attr("r",2)
        .attr("cx", 93)
        .attr("cy", 182.5)
        .style("stroke", "grey")

    g.append("circle")
        .attr("r",2)
        .attr("cx", 103)
        .attr("cy", 182.5)
        .style("stroke", "grey")

    g.append("circle")
        .attr("r",2)
        .attr("cx", 113)
        .attr("cy", 182.5)
        .style("stroke", "grey")

    g.append("circle")
        .attr("r",2)
        .attr("cx", 123)
        .attr("cy", 182.5)
        .style("stroke", "grey")

    g.append("circle")
        .attr("r",2)
        .attr("cx", 133)
        .attr("cy", 182.5)
        .style("stroke", "grey")

    g.append("circle")
        .attr("r",2)
        .attr("cx", 143)
        .attr("cy", 182.5)
        .style("stroke", "grey")

    g.append("circle")
        .attr("r",2)
        .attr("cx", 153)
        .attr("cy", 182.5)
        .style("stroke", "grey")

    g.append("circle")
        .attr("r",2)
        .attr("cx", 163)
        .attr("cy", 182.5)
        .style("stroke", "grey")

    g.append("circle")
        .attr("r",2)
        .attr("cx", 173)
        .attr("cy", 182.5)
        .style("stroke", "grey")

    g.append("circle")
        .attr("r",2)
        .attr("cx", 183)
        .attr("cy", 182.5)
        .style("stroke", "grey")

    g.append("circle")
        .attr("r",2)
        .attr("cx", 193)
        .attr("cy", 182.5)
        .style("stroke", "grey")

    g.append("circle")
        .attr("r",2)
        .attr("cx", 203)
        .attr("cy", 182.5)
        .style("stroke", "grey")

    g.append("circle")
        .attr("r",2)
        .attr("cx", 213)
        .attr("cy", 182.5)
        .style("stroke", "grey")

    g.append("circle")
        .attr("r",2)
        .attr("cx", 223)
        .attr("cy", 182.5)
        .style("stroke", "grey")


//Stern
    // eslint-disable-next-line no-undef
    const arcGenerator = d3.arc()
        .outerRadius(27.7)
        .innerRadius(0)
        .startAngle(-Math.PI / 2)
        .endAngle(Math.PI / 2)



    g.append("path")
        .attr("transform", "translate(28.3,30)")
        .attr("d", arcGenerator())
        .style("stroke","#0D3A00")
        .style("fill","#006900")

    // eslint-disable-next-line no-undef
    const star = d3.symbol()
        // eslint-disable-next-line no-undef
        .type(d3.symbolStar)
        .size(20)

    g.append("path")
        .attr("transform", "translate(28.3,150)")
        .attr("d", star())
        .style("stroke","#C40006")
        .style("fill","#C40006")


// eslint-disable-next-line no-undef
    /*const star2 = d3.symbol()
        // eslint-disable-next-line no-undef
        .type(d3.symbolStar)
        .size(1)

    g.append("path")
        .attr("transform", "translate(142.5,133)")
        .attr("d", star2())
        .style("stroke","#C40006")
        .style("fill","#C40006")*/
// eslint-disable-next-line no-undef

/*g.select("StartTrigger")
    .attr("cx",5)
    .attr("cy",30)

g.select("StopTrigger")
    .attr("cx",5)
    .attr("cy",30)*/




// eslint-disable-next-line no-undef
// set the dimensions and margins of the graph



/*document.getElementById("Startbutton")
    // eslint-disable-next-line no-undef
    .addEventListener('click',constructGlass)*/
/*g.append("button")
    .attr("background-color","#C40006")
    .attr("border","none")
    .attr("color","white")
    .attr("padding","5px 3px")
    .attr("text-align","center")
    .attr("text-decoration","none")
    .attr("display","inline-block")
    .attr("font-size","5px")
    .attr("cursor","pointer")
    // eslint-disable-next-line no-undef

    // eslint-disable-next-line no-undef
    delay();*/
//window.onload = updates()
// eslint-disable-next-line no-undef

//document.getElementById("Startbutton").addEventListener('click', updates)
