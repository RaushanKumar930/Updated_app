var form1, form2, form3, ans, ask, correctAns, ansVal, correctAnsVal, check, user
var state = 0
var game, quesCount = 0
var allQuestions
var flag = 1
var givenAnswer
var rightA, Question0, noQuestion, correctImg, correctDisplay, wrongImg, wrongDisplay, warning

function preload(){
  rightA = loadImage("images/right.png")
  Question0 = loadImage("images/no Question.jpg")
  correctImg = loadImage("images/correct.png")
  wrongImg = loadImage("images/wrongImg.jpg")
  warning = loadImage("images/warning.png")
}

function setup() {
  createCanvas(displayWidth-5, displayHeight-5);
  database = firebase.database();

  user = new User1()

  form2 = new Form2()
  game = new State()
  
  //noQuestion = createSprite(300,300)
  //noQuestion.shapeColor = "#FF1546"
 
}

function draw() {
  background(255,21,70); 
  
  fill("yellow")
  textSize(45)
  text("Welcome", width/2 - 100, 50)
  //text(mouseX + "," + mouseY, mouseX,mouseY)
  image(rightA, width/2, 85, 50, 50)
  image(rightA, width/2 + 70, 135, 50, 50)
  image(rightA, width/2 + 70, 530, 50, 50)
  fill("cyan")
  if(quesCount === 0){
    textSize(25)
    text("Click here to add questions ",width/2 - 350,120)
  }else{
    textSize(25)
    text("Click here to add more questions",width/2 - 400,120)
  }
  textSize(25)
  text("Click here to remove all the entered questions", width/2 - 450, 170)
  textSize(25)
  text("Click here to ask the questions", width/2 - 650, 560)
  text("that you have entered to practice", width/2 - 300, 560)
  
  if(state === 0){
    //clear()
    form2.show1()
    form2.display()
  }else if(state === 1){
    clear()
    background("dodgerblue")
    fill("lime")
    stroke("lawngreen")
    textSize(25)
    text("Type the questions and answers to Practice",width/2 -250,50)

    push()
    fill("dodgerblue")
    stroke("lime")
    ellipse(width/2 - 310,295,10,10)
    ellipse(width/2 - 310,345,10,10)
    pop()

    textSize(20)
    stroke("limegreen")
    text("Note : ",width/2 - 350,250)
    text("Enter the correct question, there is no auto correct...",width/2 - 300,300)
    text("Enter the correct answer, there is no auto correct...",width/2 - 300,350)

    form1.show1()
    form1.display()
    form2.hide()
  }else if(state === 2){
    clear();
    background("hotpink")
    form3.display()
    fill("blue")
    stroke("navy")
    textSize(25)
    text("Let's prepare for test",width/2 - 150,50)

    image(warning,width/2 - 400,380,50,50)

    fill("red")
    stroke("indianred")
    text("Don't cheat, this is for your preparation of test",width/2 - 300,450)
    fill("aqua")
    stroke(0,255,255)
    text("Keep practicing",width/2 - 100,550)
  }
  //console.log(state)
  drawSprites();
}

