class Form {
  constructor() {
    this.title = createImg("/assets/title.png");
    this.input = createInput("").attribute("placeholder","Enter Your Name");
    this.playButton = createButton("play");
    this.greeting = createElement("h3");

  }
  setElementPosition(){
    this.title.position(100,60);
    this.input.position(width/2-100,height/2-80);
    this.playButton.position(width/2-90,height/2);
    this.greeting.position(width/2-200,height/2-70)
  }
  handleMousePressed(){
      this.playButton.mousePressed(()=>{
        this.input.hide();
        this.playButton.hide();
        var msg = `Hellow ${this.input.value()}, </br>  Wait for Another player to Join `;
        this.greeting.html(msg);
    })
  }
  display(){
    this.setElementPosition();
    this.handleMousePressed();
    this.setElementSize();
  }
  setElementSize(){
    this.input.class("customInput");
    this.playButton.class("customButton");

  }
}
