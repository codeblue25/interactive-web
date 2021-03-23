(function(){
    const house = document.querySelector(".house");
    let maxScroll; /*body 전체 높이 - 현재 브라우저 창 높이 = 스크롤바 높이*/
    const bar = document.querySelector(".progress-bar");
    const mousePos = {x: 0, y: 0};
    const stage = document.querySelector(".stage");

    window.addEventListener("scroll", function(){
        // console.log(pageYOffset); /*스크롤 된 양을 수치화*/
        // console.log(pageYOffset / maxScroll); /*실제 스크롤 영역*/

        const scrollGauge = pageYOffset / maxScroll;
        const zMove = scrollGauge * 980 - 490; /*초기 원근감 값인 490vw만큼 뺀다*/
        house.style.transform = "translateZ(" + zMove + "vw)";
        bar.style.width = scrollGauge * 100 + "%"; /*스크롤 따라 progress bar 채움*/
    });

    window.addEventListener("mousemove", function(e){
        mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
        mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;
        /*마우스 위치를 나타내는 기준을 중심으로 옮기기 위한 식*/
        stage.style.transform = "rotateX(" + (mousePos.y * 5) + "deg) rotateY(" + (mousePos.x * 5) + "deg)";
    });

    
    function resizeHandler(){
        maxScroll = document.body.offsetHeight - window.innerHeight;
    } 

    window.addEventListener("resize", resizeHandler); /*브라우저 크기가 변할 때마다 maxScroll을 경신시킴*/
    resizeHandler();

    new Character();
})(); /*전역변수를 회피하기 위해 즉시 실행 함수 사용*/