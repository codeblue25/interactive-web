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
    this.mainElem.style.left = info.xPos + "%"; /*캐릭터 위치를 나타내는 속성*/
    this.scrollState = false; /*스크롤 진행여부를 나타내는 속성, 기본값 false*/
    this.lastScrollTop = 0; /*바로 직전의 스크롤 위치를 나타내는 속성*/
    this.init();
}

Character.prototype = {
    constructor: Character, /*생성자 Character를 새로운 객체로 재설정*/
    init: function(){
        const self = this; /*생성자(Character)로 만든 인스턴스(character)를 가르키기 위해서 self 상수에 넣음*/

        window.addEventListener("scroll", function(){
            clearTimeout(self.scrollState); 
            /*1. 첫번째 턴에서는 setTimeout이 실행되지 않아서 리턴되는 값 없음*/
            /*1-1. 첫번째 턴 이후엔 스크롤 할 때마다 리턴되는 값을 지움*/
        
            if(!self.scrollState){
                self.mainElem.classList.add("running");
                /*2. 첫번째 턴에서는 리턴되는 값이 없으니까 scrollState = false -> if(!false){} -> if(ture){}*/
                /*2-1. if문이 실행되면서 running 클래스 추가 -> 팔다리 움직임*/
                /*4. 리턴된 값이 생겨서  scrollState = true -> if(!true){} ->if(false){} if문 실행안함*/
                /*4-1. 3과 4를 반복하다가 스크롤을 멈추면 5로 넘어감*/
            }

            self.scrollState = setTimeout(function(){
                self.scrollState = false;
                self.mainElem.classList.remove("running");
            }, 500); 
            /*3. 0.5초가 경과되기 전에 스크롤이벤트가 갱신되면 clearTimeout이 실행되서 setTimeout은 실행못함*/
            /*5. 스크롤이 멈추면 스크롤이벤트가 갱신되지 않음 -> clearTimeout이 실행되지 않음으로 setTimeout이 실행됨*/
            /*5-1. 0.5초 뒤 scrollState = false -> running 클래스가 삭제되면서 팔다리 움직임이 멈춤*/            

            // console.log("직전의 마지막 위치: " + self.lastScrollTop);
            // console.log("현재 위치: " + pageYOffset);
            if(self.lastScrollTop < pageYOffset){
                self.mainElem.setAttribute('data-direction', 'forward'); /*스크롤 내릴 때*/
            }else{
                self.mainElem.setAttribute('data-direction', 'backward'); /*스크롤 올릴 때*/
            }
            self.lastScrollTop = pageYOffset;
        });

        window.addEventListener("keydown", function(e){
            if(e.keyCode == 37){
                self.mainElem.setAttribute('data-direction', 'left'); /*왼쪽 방향키*/
                self.mainElem.classList.add('running');
            }else if(e.keyCode == 39){
                self.mainElem.setAttribute('data-direction', 'right'); /*오른쪽 방향키*/
                self.mainElem.classList.add('running');
            }
        });
        window.addEventListener("keyup", function(){
            self.mainElem.classList.remove("running");
        })
    }
}