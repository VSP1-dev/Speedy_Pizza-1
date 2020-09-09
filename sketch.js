var player;
var house1, house2, house3, house4;
var rand;
var score = 100;
var text_ready;
var dog;
var order1, order2, order3, order4;
var shop;
var pizza1, pizza2, pizza3, pizza4;
var ord1,ord2,ord3,ord4;
var road1,road2, road3, road4;
var car1, car2, car3, car4;
var timer = 60;

//this is preload
function preload()
{
house1_img = loadImage("../images/House_final.png");
house2_img = loadImage("../images/House_final.png");
house3_img = loadImage("../images/House_final.png");
house4_img = loadImage("../images/House_final.png");
shop_img = loadImage("../images/pizza_house.png");
}


function setup() {
  createCanvas(800,400);
  player = createSprite(200, 200, 30, 30);
  house1 = createSprite(100,370,100,100);
  //house1.addImage("house1", house1_img);
  //house1.scale = 1.5;
  order1 = createSprite(150,360,10,10);
  order1.shapeColor = "yellow";
  house2 = createSprite(700,370,100,100);
  //house2.addImage("house2", house2_img);
  //house2.scale = 1.5;
  order2 = createSprite(600,360,10,10);
  order2.shapeColor = "yellow";
  house3 = createSprite(700,30,100,100);
  //house3.addImage("house3", house3_img);
  //house3.scale = 1.5;
  order3 = createSprite(650,30,10,10);
  order3.shapeColor = "yellow";
  house4 = createSprite(100,30,100,100);
  //house4.addImage("house4", house4_img);
  //house4.scale = 1.5;
  order4 = createSprite(150,30,10,10);
  order4.shapeColor = "yellow";
  shop = createSprite(400,200,100,100);
  pizza1 = createSprite(330,200,10,10);
  pizza1.shapeColor = "red";
  pizza2 = createSprite(470,200,10,10);
  pizza2.shapeColor = "blue";
  pizza3 = createSprite(400,270,10,10);
  pizza3.shapeColor = "green";
  pizza4 = createSprite(400,130,10,10);
  pizza4.shapeColor = "yellow";
  road1 = createSprite(400,80,250,30);
  car1 = createSprite(500, 80,10,10);
  car1.shapeColor = "black";
  road2 = createSprite(400,320,250,30);
  car2 = createSprite(500, 320,10,10);
  car2.shapeColor = "black";
  road3 = createSprite(250,200,30,250);
  car3 = createSprite(250,80,10,10);
  car3.shapeColor = "black";
  road4 = createSprite(550,200,30,250);
  car4 = createSprite(550,380,10,10);
  car4.shapeColor = "black";


}

function draw() {
  background(255,255,255);
  textSize (20);
  text("Score: " + score , 400,30);
  textSize(20);
  text("Time Remaning :" + timer ,400, 50 );
  textSize (30);
  text_ready = text("Ready Set Go!",400,100 );

  if (keyDown("UP_ARROW")) {
  
    player.velocityX=0;
    player.velocityY=-8;
    }
    if (keyDown(DOWN_ARROW)) {
      
    player.velocityX=0;
    player.velocityY=8;
    }
    if (keyDown(LEFT_ARROW)) {
      
    player.velocityX=-8;
    player.velocityY=0;
    }
    if (keyDown(RIGHT_ARROW)) {
      
    player.velocityX=8;
    player.velocityY=0;
    
    }
    rand = Math.round(random(1,4));
    if(frameCount%450===0){
      text_ready.visible = false;
    if(rand === 1)
    {
      order1.shapeColor = "red";
      order2.shapeColor = "green";
      order3.shapeColor = "yellow";
      order4.shapeColor = "blue";
    }
    //else
    //{
     // house1.shapeColor = "green";
    //}

    if(rand === 2)
    {
      order1.shapeColor = "yellow";
      order2.shapeColor = "red";
      order3.shapeColor = "blue";
      order4.shapeColor = "green";
    }
    //else
    //{
      //house2.shapeColor = "green";
    //}


    if(rand === 3)
    {
      order1.shapeColor = "green";
      order2.shapeColor = "blue";
      order3.shapeColor = "red";
      order4.shapeColor = "yellow";
    }
    //else
    //{
      //house3.shapeColor = "green";
    //}


    if(rand === 4)
    {
      order1.shapeColor = "blue";
      order2.shapeColor = "yellow";
      order3.shapeColor = "green";
      order4.shapeColor = "red";
    }
    //else
    //{
      //house4.shapeColor = "green";
    //}
  }
 
  if(player.collide(house1) && house1.shapeColor === "red")
  {
    score = score + 10;
  }
  else if(player.collide(house1) && house1.shapeColor === "green")
  {
    score = score -10;
  }

  if(player.collide(house2) && house2.shapeColor === "red")
  {
    score = score + 10;
  }
  else if(player.collide(house2) && house2.shapeColor === "green")
  {
    score = score -10;
  }

  if(player.collide(house3) && house3.shapeColor === "red")
  {
    score = score + 10;
  }
  else if(player.collide(house3) && house3.shapeColor === "green")
  {
    score = score -10;
  }

  if(player.collide(house4) && house4.shapeColor === "red")
  {
    score = score + 10;
  }
  else if(player.collide(house4) && house4.shapeColor === "green")
  {
    score = score -10;
  }

  if(frameCount % 230 === 0)
  {
    console.log("YAY");
  }

  
  if(player.isTouching(pizza1))
  {
    pizza1.x = player.x;
    pizza1.y = player.y;
    (pizza2.x != player.x && pizza2.y != player.y && pizza3.x != player.x && pizza3.y != player.y&&pizza4.x != player.x&&pizza4.y != player.y);
    
  }

  if(player.isTouching(pizza2))
  {
    pizza2.x = player.x;
    pizza2.y = player.y;
    (pizza1.x != player.x && pizza1.y != player.y && pizza3.x != player.x && pizza3.y != player.y&&pizza4.x != player.x&&pizza4.y != player.y);
  }

  if(player.isTouching(pizza3))
  {
    pizza3.x = player.x;
    pizza3.y = player.y;
    (pizza1.x != player.x && pizza1.y != player.y && pizza2.x != player.x && pizza2.y != player.y&&pizza4.x != player.x&&pizza4.y != player.y);
  }

  if(player.isTouching(pizza4))
  {
    pizza4.x = player.x;
    pizza4.y = player.y;
    (pizza1.x != player.x && pizza1.y != player.y && pizza3.x != player.x && pizza3.y != player.y&&pizza2.x != player.x&&pizza2.y != player.y);
  }
  //call the test 
  /*
  //let player pick one pizza at a time
  one_at_time(pizza1, pizza2);
  one_at_time(pizza1, pizza3);
  one_at_time(pizza1, pizza4);
  one_at_time(pizza2, pizza1);
  one_at_time(pizza2, pizza3);
  one_at_time(pizza2, pizza4);
  one_at_time(pizza3, pizza1);
  one_at_time(pizza3, pizza2);
  one_at_time(pizza3, pizza4);
  one_at_time(pizza4, pizza1);
  one_at_time(pizza4, pizza2);
  one_at_time(pizza4, pizza3);
*/
one_at_time();
//give points to player
point_order1();
point_order2();
point_order3();
point_order4();

//execute car movement
car_movement();

//execute the loss of score
//decrease_score();
/*
if(rand_car === 1)
{
  car1.velocityX = -2;
}
else if(rand_car === 2)
{
  car2.velocityX = -2
}
*/

if(frameCount % 40 === 0)
{
timer = timer -1;
}
if(timer === 0 && order2.shapeColor === "brown" && order2.shapeColor === "brown" && order3.shapeColor === "brown" && order4.shapeColor === "brown")
{
  score = score + 100;
}
else if (timer === 0 && order1.shapeColor != "brown" || order2.shapeColor != "brown" || order3.shapeColor != "brown" || order4.shapeColor != "brown" )
{
  score = score -10;
}

  
  drawSprites();
}



function point_order1()
{
  if(pizza1.collide(order1) && order1.shapeColor === "red")
  {
    score = score +10;
    pizza1.destroy()
    pizza1 = createSprite(330,200,10,10);
  pizza1.shapeColor = "red";
  /*
  order1.destroy();
  order1 = createSprite(150,360,10,10);
*/
order1.shapeColor = "brown"
  }
 else if(pizza1.collide(order1) && order1.shapeColor === "blue"){
    score = score-10;
  }
  else if(pizza1.collide(order1) && order1.shapeColor === "green"){
    score = score-10;
  }
  else if(pizza1.collide(order1) && order1.shapeColor === "yellow"){
    score = score-10;
  }

  if(pizza2.collide(order1) && order1.shapeColor === "blue")
  {
    score = score + 10;
    pizza2.destroy();
    pizza2 = createSprite(470,200,10,10);
  pizza2.shapeColor = "blue";
  /*
  order1.destroy();
  order1 = createSprite(150,360,10,10);
*/
order1.shapeColor = "brown"
  }
  else if(pizza2.collide(order1) && order1.shapeColor === "red"){
    score = score-10;
  }
  else if(pizza2.collide(order1) && order1.shapeColor === "green"){
    score = score-10;
  }
  else if(pizza2.collide(order1) && order1.shapeColor === "yellow"){
    score = score-10;
  }

  if(pizza3.collide(order1) && order1.shapeColor === "green")
  {
    score = score + 10;
    pizza3.destroy();
    pizza3 = createSprite(400,270,10,10);
  pizza3.shapeColor = "green";
  /*
  order1.destroy();
  order1 = createSprite(150,360,10,10);
 */
order1.shapeColor = "brown";
  }
  else if(pizza3.collide(order1) && order1.shapeColor === "red"){
    score = score-10;
  }
  else if(pizza3.collide(order1) && order1.shapeColor === "blue"){
    score = score-10;
  }
  else if(pizza3.collide(order1) && order1.shapeColor === "yellow"){
    score = score-10;
  }
  if(pizza4.collide(order1) && order1.shapeColor === "yellow")
  {
    score = score + 10;
    pizza4.destroy();
    pizza4 = createSprite(400,130,10,10);
  pizza4.shapeColor = "yellow";
  /*
  order1.destroy();
  order1 = createSprite(150,360,10,10);
 */
order1.shapeColor = "brown";
  }
  else if(pizza4.collide(order1) && order1.shapeColor === "red"){
    score = score-10;
  }
  else if(pizza4.collide(order1) && order1.shapeColor === "blue"){
    score = score-10;
  }
  else if(pizza4.collide(order1) && order1.shapeColor === "yellow"){
    score = score-10;
  }
}

function point_order2()
{
  if(pizza1.collide(order2) && order2.shapeColor === "red")
  {
    score = score +10;
    pizza1.destroy()
    pizza1 = createSprite(330,200,10,10);
  pizza1.shapeColor = "red";
  /*
  order2.destroy();
  order2 = createSprite(600,360,10,10);
 */
order2.shapeColor = "brown";
  }
 else if(pizza1.collide(order2) && order2.shapeColor === "blue"){
    score = score-10;
  }
  else if(pizza1.collide(order2) && order2.shapeColor === "green"){
    score = score-10;
  }
  else if(pizza1.collide(order2) && order2.shapeColor === "yellow"){
    score = score-10;
  }

  if(pizza2.collide(order2) && order2.shapeColor === "blue")
  {
    score = score + 10;
    pizza2.destroy();
    pizza2 = createSprite(470,200,10,10);
  pizza2.shapeColor = "blue";
  /*
  order2.destroy();
  order2 = createSprite(600,360,10,10);
*/
order2.shapeColor = "brown";
  }
  else if(pizza2.collide(order2) && order2.shapeColor === "red"){
    score = score-10;
  }
  else if(pizza2.collide(order2) && order2.shapeColor === "green"){
    score = score-10;
  }
  else if(pizza2.collide(order2) && order2.shapeColor === "yellow"){
    score = score-10;
  }

  if(pizza3.collide(order2) && order2.shapeColor === "green")
  {
    score = score + 10;
    pizza3.destroy();
    pizza3 = createSprite(400,270,10,10);
  pizza3.shapeColor = "green";
  /*
  order2.destroy();
  order2 = createSprite(600,360,10,10);
*/
order2.shapeColor = "brown";
  }
  else if(pizza3.collide(order2) && order2.shapeColor === "red"){
    score = score-10;
  }
  else if(pizza3.collide(order2) && order2.shapeColor === "blue"){
    score = score-10;
  }
  else if(pizza3.collide(order2) && order2.shapeColor === "yellow"){
    score = score-10;
  }
  if(pizza4.collide(order2) && order2.shapeColor === "yellow")
  {
    score = score + 10;
    pizza4.destroy();
    pizza4 = createSprite(400,130,10,10);
  pizza4.shapeColor = "yellow";
  /*
  order2.destroy();
  order2 = createSprite(600,360,10,10);
  */
 order2.shapeColor = "brown";

  }
  else if(pizza4.collide(order2) && order2.shapeColor === "red"){
    score = score-10;
  }
  else if(pizza4.collide(order2) && order2.shapeColor === "blue"){
    score = score-10;
  }
  else if(pizza4.collide(order2) && order2.shapeColor === "yellow"){
    score = score-10;
  }

}

function point_order3()
{
  if(pizza1.collide(order3) && order3.shapeColor === "red")
  {
    score = score +10;
    pizza1.destroy()
    pizza1 = createSprite(330,200,10,10);
  pizza1.shapeColor = "red";
  /*
 order3.destroy();
 order3 = createSprite(650,30,10,10);
 */
order3.shapeColor = "brown";
  }
 else if(pizza1.collide(order3) && order3.shapeColor === "blue"){
    score = score-10;
  }
  else if(pizza1.collide(order3) && order3.shapeColor === "green"){
    score = score-10;
  }
  else if(pizza1.collide(order3) && order3.shapeColor === "yellow"){
    score = score-10;
  }

  if(pizza2.collide(order3) && order3.shapeColor === "blue")
  {
    score = score + 10;
    pizza2.destroy();
    pizza2 = createSprite(470,200,10,10);
  pizza2.shapeColor = "blue";
  /*
  order3.destroy();
  order3 = createSprite(650,30,10,10);
 */
order3.shapeColor = "brown";
  }
  else if(pizza2.collide(order3) && order3.shapeColor === "red"){
    score = score-10;
  }
  else if(pizza2.collide(order3) && order3.shapeColor === "green"){
    score = score-10;
  }
  else if(pizza2.collide(order3) && order3.shapeColor === "yellow"){
    score = score-10;
  }

  if(pizza3.collide(order3) && order3.shapeColor === "green")
  {
    score = score + 10;
    pizza3.destroy();
    pizza3 = createSprite(400,270,10,10);
  pizza3.shapeColor = "green";
  /*
  order3.destroy();
  order3 = createSprite(650,30,10,10);
 */
order3.shapeColor = "brown";
  }
  else if(pizza3.collide(order3) && order3.shapeColor === "red"){
    score = score-10;
  }
  else if(pizza3.collide(order3) && order3.shapeColor === "blue"){
    score = score-10;
  }
  else if(pizza3.collide(order3) && order3.shapeColor === "yellow"){
    score = score-10;
  }
  if(pizza4.collide(order3) && order3.shapeColor === "yellow")
  {
    score = score + 10;
    pizza4.destroy();
    pizza4 = createSprite(400,130,10,10);
  pizza4.shapeColor = "yellow";
  /*
  order3.destroy();
  order3 = createSprite(650,30,10,10);
 */
order3.shapeColor = "brown";
  }
  else if(pizza4.collide(order3) && order3.shapeColor === "red"){
    score = score-10;
  }
  else if(pizza4.collide(order3) && order3.shapeColor === "blue"){
    score = score-10;
  }
  else if(pizza4.collide(order3) && order3.shapeColor === "yellow"){
    score = score-10;
  }
}

function point_order4()
{
  if(pizza1.collide(order4) && order4.shapeColor === "red")
  {
    score = score +10;
    pizza1.destroy()
    pizza1 = createSprite(330,200,10,10);
  pizza1.shapeColor = "red";
  /*
order4.destroy();
order4 = createSprite(150,30,10,10);
*/
order4.shapeColor = "brown";
  }
 else if(pizza1.collide(order4) && order4.shapeColor === "blue"){
    score = score-10;
  }
  else if(pizza1.collide(order4) && order4.shapeColor === "green"){
    score = score-10;
  }
  else if(pizza1.collide(order4) && order4.shapeColor === "yellow"){
    score = score-10;
  }

  if(pizza2.collide(order4) && order4.shapeColor === "blue")
  {
    score = score + 10;
    pizza2.destroy();
    pizza2 = createSprite(470,200,10,10);
  pizza2.shapeColor = "blue";
  /*
  order4.destroy();
  order4 = createSprite(150,30,10,10);
 */
order4.shapeColor = "brown";
  }
  else if(pizza2.collide(order4) && order4.shapeColor === "red"){
    score = score-10;
  }
  else if(pizza2.collide(order4) && order4.shapeColor === "green"){
    score = score-10;
  }
  else if(pizza2.collide(order4) && order4.shapeColor === "yellow"){
    score = score-10;
  }

  if(pizza3.collide(order4) && order4.shapeColor === "green")
  {
    score = score + 10;
    pizza3.destroy();
    pizza3 = createSprite(400,270,10,10);
  pizza3.shapeColor = "green";
  /*
  order4.destroy();
  order4 = createSprite(150,30,10,10);
 */
order4.shapeColor = "brown";
  }
  else if(pizza3.collide(order4) && order4.shapeColor === "red"){
    score = score-10;
  }
  else if(pizza3.collide(order4) && order4.shapeColor === "blue"){
    score = score-10;
  }
  else if(pizza3.collide(order4) && order4.shapeColor === "yellow"){
    score = score-10;
  }
  if(pizza4.collide(order4) && order4.shapeColor === "yellow")
  {
    score = score + 10;
    pizza4.destroy();
    pizza4 = createSprite(400,130,10,10);
  pizza4.shapeColor = "yellow";
  /*
  order4.destroy();
  order4 = createSprite(150,30,10,10);
 */
order4.shapeColor = "brown";
  }
  else if(pizza4.collide(order4) && order4.shapeColor === "red"){
    score = score-10;
  }
  else if(pizza4.collide(order4) && order4.shapeColor === "blue"){
    score = score-10;
  }
  else if(pizza4.collide(order4) && order4.shapeColor === "yellow"){
    score = score-10;
  }
}

function one_at_time()
{
  if(player.isTouching(pizza2) && pizza1.x === player.x && pizza1.y === player.y)
  {
    pizza1.destroy();
    pizza1 = createSprite(330,200,10,10);
    pizza1.shapeColor = "red";
    pizza2.x = player.x;
    pizza2.y = player.y;

  }

  if(player.isTouching(pizza3) && pizza1.x === player.x && pizza1.y === player.y)
  {
    pizza1.destroy();
    pizza1 = createSprite(330,200,10,10);
    pizza1.shapeColor = "red";
    pizza3.x = player.x;
    pizza3.y = player.y;

  }
  if(player.isTouching(pizza2) && pizza4.x === player.x && pizza4.y === player.y)
  {
    pizza4.destroy();
    pizza4 = createSprite(400,130,10,10);
  pizza4.shapeColor = "yellow";
    pizza2.x = player.x;
    pizza2.y = player.y;

  }
}

function car_movement()
{
  if(frameCount % 100 === 0)
  {
  //logic for car movement
  var rand_car = Math.round(random(1,4));
  switch(rand_car)
  {
    case 1 : car1.velocityX = -2
    break;
    case 2 : car2.velocityX = -2
    break;
    case 3: car3.velocityY = 2
    break;
    case 4 : car4.velocityY = -2
    break;
    default:
    break;
  
  }
  }
  if(car1.isTouching(road3))
  {
    car1.x = 500;
    //car1.velocityX = 0;
    //car1.velocityY = 2;
  }

}

function decrease_score()
{
  if(order1.shapeColor === "brown" && order2.shapeColor === "brown" && order3.shapeColor === "brown" && order4.shapeColor === "brown")
  {
    score = score +100;
  }
  else
  {
    score = score -10;
  }
}
