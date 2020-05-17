const canvas = document.getElementById('pizzaCanvas');
const ctx = canvas.getContext('2d');
//replace these urls with those from json
const pizzaImg = "../images/pizza_canvas.png";
const anchovyLeft = "../images/anchovy_left.png";
const anchovyRight = "../images/anchovy_right.png";
const baconLeft = "../images/bacon_left.png";
const baconRight = "../images/bacon_right.png";
const bellPepperLeft = "../images/bell_peppers_left.png";
const bellPepperRight = "../images/bell_peppers_right.png";
const cheeseLeft = "../images/cheese_left.png";
const cheeseRight = "../images/cheese_right.png";
const hamLeft = "../images/ham_left.png";
const hamRight = "../images/ham_right.png";
const jalapenoLeft = "../images/jalepenos_left.png";
const jalapenoRight = "../images/jalepenos_right.png";
const oliveLeft = "../images/olives_left.png";
const oliveRight = "../images/olives_right.png";
const pepLeft = "../images/pepperoni_left.png";
const pepRight = "../images/pepperoni_right.png";
const pineappleLeft = "../images/pineapple_left.png";
const pineappleRight = "../images/pineapple_right.png";
const sausageLeft = "../images/sausage_left.png";
const sausageRight = "../images/sausage_right.png";

const drawAnchovy = (images, drawLeft, drawRight) => {
    if(drawLeft){
        ctx.drawImage(images.anchovyLeft, 0, 0);
    }
    if(drawRight){
        ctx.drawImage(images.anchovyRight, 0, 0);
    }
}

const drawBacon = (images, drawLeft, drawRight) => {
    if(drawLeft){
        ctx.drawImage(images.baconLeft, 0, 0);
    }
    if(drawRight){
        ctx.drawImage(images.baconRight, 0, 0);
    }
}

const drawBellPeppers = (images, drawLeft, drawRight) => {
    if(drawLeft){
        ctx.drawImage(images.bellPepperLeft, 0, 0);
    }
    if(drawRight){
        ctx.drawImage(images.bellPepperRight, 0, 0);
    }
}

const drawCheese = (images, drawLeft, drawRight) => {
    if(drawLeft){
        ctx.drawImage(images.cheeseLeft, 0, 0);
    }
    if(drawRight){
        ctx.drawImage(images.cheeseRight, 0, 0);
    }
}

const drawHam = (images, drawLeft, drawRight) => {
    if(drawLeft){
        ctx.drawImage(images.hamLeft, 0, 0);
    }
    if(drawRight){
        ctx.drawImage(images.hamRight, 0, 0);
    }
}

const drawJalapeno = (images, drawLeft, drawRight) => {
    if(drawLeft){
        ctx.drawImage(images.jalapenoLeft, 0, 0);
    }
    if(drawRight){
        ctx.drawImage(images.jalapenoRight, 0, 0);
    }
}

const drawOlive = (images, drawLeft, drawRight) => {
    if(drawLeft){
        ctx.drawImage(images.oliveLeft, 0, 0);
    }
    if(drawRight){
        ctx.drawImage(images.oliveRight, 0, 0);
    }
}

const drawPepperoni = (images, drawLeft, drawRight) => {
    if(drawLeft){
        ctx.drawImage(images.pepLeft, 0, 0);
    }
    if(drawRight){
        ctx.drawImage(images.pepRight, 0, 0);
    }
}

const drawPineapple = (images, drawLeft, drawRight) => {
    if(drawLeft){
        ctx.drawImage(images.pineappleLeft, 0, 0);
    }
    if(drawRight){
        ctx.drawImage(images.pineappleRight, 0, 0);
    }
}

const drawSausage = (images, drawLeft, drawRight) => {
    if(drawLeft){
        ctx.drawImage(images.sausageLeft, 0, 0);
    }
    if(drawRight){
        ctx.drawImage(images.sausageRight, 0, 0);
    }
}

const drawPizzaCanvas = (image) => {
    ctx.imageSmoothingEnabled = false;
    ctx.scale(0.5,0.5)
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
    crust: pizzaImg,
    pepLeft: pepLeft,
    pepRight: pepRight,
    hamLeft: hamLeft,
    hamRight: hamRight,
    oliveLeft: oliveLeft,
    oliveRight: oliveRight,
    pineappleLeft: pineappleLeft,
    pineappleRight: pineappleRight,
    sausageLeft: sausageLeft,
    sausageRight: sausageRight,
    baconLeft: baconLeft,
    baconRight: baconRight,
    bellPepperLeft: bellPepperLeft,
    bellPepperRight: bellPepperRight,
    cheeseLeft: cheeseLeft,
    cheeseRight: cheeseRight,
    anchovyLeft: anchovyLeft,
    anchovyRight: anchovyRight,
    jalapenoLeft: jalapenoLeft,
    jalapenoRight: jalapenoRight,
};

//replace trues with booleans affected by buttons
loadImages(sources, images => {
    drawPizzaCanvas(images.crust);
    drawPepperoni(images,true,true);
    drawHam(images,true,true);
    drawOlive(images,true,true);
    drawPineapple(images,true,true);
    drawSausage(images,true,true);
    drawBacon(images,true,true);
    drawBellPeppers(images,true,true);
    drawCheese(images,true,true);
    drawAnchovy(images,true,true);
    drawJalapeno(images,true,true);
})