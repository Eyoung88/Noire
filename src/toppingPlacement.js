const canvas = document.getElementById('pizzaCanvas');
const ctx = canvas.getContext('2d');
const pizzaImg = "../images/pizza_canvas.png";
const pepperoniImg = "../images/pepperoni.png";
const hamImg = "../images/ham.png";
const oliveImg = "../images/olives.png";
const sausageImg = "../images/sausage.png";
const baconImg = "../images/bacon.png";
const bellPeppersImg = "../images/bell_peppers.png";
const cheeseImg = "../images/cheese.png";
const anchovyImg = "../images/anchovy.png";
const jalapenoImg = "../images/jalepenos.png";
const pineappleImg = "../images/pineapple.png";

const drawPepperoni = (image) => {
    ctx.drawImage(image,170,80);
    ctx.drawImage(image,100,160);
    ctx.drawImage(image,160,270);
    ctx.drawImage(image,110,400);
    ctx.drawImage(image,350,80);
    ctx.drawImage(image,420,160);
    ctx.drawImage(image,340,270);
    ctx.drawImage(image,420,400);
}

const drawHam = (image) => {
    ctx.drawImage(image,150,100);
    ctx.drawImage(image,100,200);
    ctx.drawImage(image,100,310);
    ctx.drawImage(image,150,410);
    ctx.drawImage(image,350,100);
    ctx.drawImage(image,400,200);
    ctx.drawImage(image,400,310);
    ctx.drawImage(image,350,410);
}

const drawOlive = (image) => {
    ctx.drawImage(image,125,110);
    ctx.drawImage(image,90,180);
    ctx.drawImage(image,145,270);
    ctx.drawImage(image,135,350);
    ctx.drawImage(image,360,110);
    ctx.drawImage(image,395,180);
    ctx.drawImage(image,340,270);
    ctx.drawImage(image,350,350);
}

const drawPineapple = (image) => {
    ctx.drawImage(image,100,130);
    ctx.drawImage(image,180,210);
    ctx.drawImage(image,140,310);
    ctx.drawImage(image,180,450);
    ctx.drawImage(image,420,130);
    ctx.drawImage(image,340,210);
    ctx.drawImage(image,380,310);
    ctx.drawImage(image,340,450);
}

const drawSausage = (image) => {
    ctx.drawImage(image,160,80);
    ctx.drawImage(image,60,200);
    ctx.drawImage(image,100,300);
    ctx.drawImage(image,180,400);
    ctx.drawImage(image,330,80);
    ctx.drawImage(image,430,200);
    ctx.drawImage(image,390,300);
    ctx.drawImage(image,310,400);
}

const drawBacon = (image) => {
    ctx.drawImage(image,180,120);
    ctx.drawImage(image,80,200);
    ctx.drawImage(image,130,240);
    ctx.drawImage(image,200,300);
    ctx.drawImage(image,400,120);
    ctx.drawImage(image,500,200);
    ctx.drawImage(image,450,240);
    ctx.drawImage(image,380,300);
}

const drawBellPeppers = (image) => {
    ctx.drawImage(image,160,60);
    ctx.drawImage(image,130,200);
    ctx.drawImage(image,70,300);
    ctx.drawImage(image,150,370);
    ctx.drawImage(image,320,60);
    ctx.drawImage(image,350,200);
    ctx.drawImage(image,410,300);
    ctx.drawImage(image,330,370);
}

const drawCheese = (image) => {
    ctx.drawImage(image,120,120);
    ctx.drawImage(image,220,210);
    ctx.drawImage(image,160,300);
    ctx.drawImage(image,200,420);
    ctx.drawImage(image,400,120);
    ctx.drawImage(image,300,210);
    ctx.drawImage(image,360,300);
    ctx.drawImage(image,320,420);
}

const drawAnchovy = (image) => {
    ctx.drawImage(image,150,80);
    ctx.drawImage(image,60,220);
    ctx.drawImage(image,110,350);
    ctx.drawImage(image,160,460);
    ctx.drawImage(image,320,80);
    ctx.drawImage(image,390,220);
    ctx.drawImage(image,340,350);
    ctx.drawImage(image,290,460);
}

const drawJalapeno = (image) => {
    ctx.drawImage(image,140,100);
    ctx.drawImage(image,200,200);
    ctx.drawImage(image,160,280);
    ctx.drawImage(image,120,370);
    ctx.drawImage(image,370,100);
    ctx.drawImage(image,310,200);
    ctx.drawImage(image,350,280);
    ctx.drawImage(image,390,370);
}

const drawPizzaCanvas = (image) => {
    console.log("Pizza's been drawn")
    ctx.drawImage(image, 0, 0);
}

const loadImages = (sources, callback) => {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    for(var imgSrc in sources) {
        numImages++;
    }
    for(var source in sources) {
        images[source] = new Image();
        images[source].onload = () => {
            if(++loadedImages >= numImages) {
                callback(images);
            }
        };
        images[source].src = sources[source];
    }
}

var sources = {
    pizza: pizzaImg,
    pepperoni: pepperoniImg,
    ham: hamImg,
    olives: oliveImg,
    pineapple: pineappleImg,
    sausage: sausageImg,
    bacon: baconImg,
    bellPepper: bellPeppersImg,
    cheese: cheeseImg,
    anchovies: anchovyImg,
    jalapeno: jalapenoImg
};

loadImages(sources, images => {
    drawPizzaCanvas(images.pizza);
    // drawPepperoni(images.pepperoni);
    // drawHam(images.ham);
    // drawOlive(images.olives);
    // drawPineapple(images.pineapple);
    // drawSausage(images.sausage);
    // drawBacon(images.bacon);
    // drawBellPeppers(images.bellPepper);
    // drawCheese(images.cheese);
    // drawAnchovy(images.anchovies);
    // drawJalapeno(images.jalapeno);
})