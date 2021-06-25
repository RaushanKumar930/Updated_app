class Form3{
    constructor(){
        this.ans2 = createInput("Answer: ")
        this.check = createButton()
        this.next = createButton()
        this.back = createButton()
    }
    hide(){
        this.ans2.hide()
        this.check.hide()
        this.next.hide()
        this.back.hide()
    }
    display(){
        this.ans2.position(width/2 - 200,150)
        this.check.html("Check")
        this.check.position(width/2 + 500,530)
        User1.getQuestionInfo()
        this.next.html("Next >>")
        this.next.position(width/2 + 500,570)
        this.back.html("<< Back")
        this.back.position(100,570)
        for(var i in allQuestions){
            if(i === "Question"+flag){
                textSize(20)
                fill("black")
                text(allQuestions[i].Q,width/2 - 200,100)
                this.check.mousePressed(() => {
                    if(allQuestions[i].A === this.ans2.value()){
                        correctDisplay = createSprite(width/2,height/2 - 50)
                        correctDisplay.addImage(correctImg)
                        correctDisplay.scale = 0.5
                        correctDisplay.lifetime = 100
                        this.next.show()
                        this.back.show()
                        this.check.hide()
                    }else{
                        //this.next.hide()
                        //this.back.hide()
                        wrongDisplay = createSprite(width/2,height/2 - 50)
                        wrongDisplay.addImage(wrongImg)
                        wrongDisplay.scale = 0.3
                        wrongDisplay.lifetime = 50
                    }
                    this.next.mousePressed(() => {
                        flag++
                        this.check.show()
                        correctDisplay.remove()
                        if(flag-1 === quesCount){
                            state = 0;
                            game.updateState(0)
                            quesCount = 0;
                            user.updateCount(0)
                            user.removeQuestions()

                            form2.show1()
                            form2.display()

                            this.ans2.hide()
                            this.check.hide()
                            this.next.hide()
                            this.back.hide()
                            //correctDisplay.remove();
                            //wrongDisplay.remove();
                        }
                    })
                })
                this.back.mousePressed(() => {
                    state = 0;
                    game.updateState(0);
                    form2.show1()
                    form2.display()

                    this.ans2.hide()
                    this.check.hide()
                    this.next.hide()
                    this.back.hide()
                    correctDisplay.remove();
                    wrongDisplay.remove();
                })
            }
        }
    }
}