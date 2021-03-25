function Character(info){
    this.mainElem = document.createElement("div");
    this.mainElem.classList.add("character");
    this.mainElem.innerHTML = ""
    + '<div class = "character-face-con character-head">'
        + '<div class = "character-face character-head-face face-front"></div>'
        + '<div class = "character-face character-head-face face-back"></div>'
    + '</div>'
    + '<div class = "character-face-con character-torso">'
        + '<div class = "character-face character-torso-face face-front"></div>'
        + '<div class = "character-face character-torso-face face-back"></div>'
    + '</div>'
    + '<div class = "character-face-con character-arm character-arm-right">'
        + '<div class = "character-face character-arm-face face-front"></div>'
        + '<div class = "character-face character-arm-face face-back"></div>'
    + '</div>'
    + '<div class = "character-face-con character-arm character-arm-left">'
        + '<div class = "character-face character-arm-face face-front"></div>'
        + '<div class = "character-face character-arm-face face-back"></div>'
    + '</div>'
    + '<div class = "character-face-con character-leg character-leg-right">'
        + '<div class = "character-face character-leg-face face-front"></div>'
        + '<div class = "character-face character-leg-face face-back"></div>'
    + '</div>'
    + '<div class = "character-face-con character-leg character-leg-left">'
        + '<div class = "character-face character-leg-face face-front"></div>'
        + '<div class = "character-face character-leg-face face-back"></div>'
    + '</div>';

    document.querySelector(".stage").appendChild(this.mainElem);
    this.mainElem.style.left = info.xPos + "%";
    this.mainElem.style.top = info.yPos + "%";
    this.init();
}

Character.prototype = {
    constructor: Character, /*생성자 Character를 새로운 객체로 재설정*/
    init: function(){
        const self = this; /*생성자(Character)로 만든 인스턴스(character)를 가르키기 위해서 self 상수에 넣음*/
        window.addEventListener("scroll", function(){
            self.mainElem.classList.add("running");
        });
    }
}