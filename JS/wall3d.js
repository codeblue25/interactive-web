(function(){
    const house = document.querySelector(".house");
    let maxScroll; /*body 전체 높이 - 현재 브라우저 창 높이 = 스크롤바 높이*/

    window.addEventListener("scroll", function(){
        console.log(pageYOffset); /*스크롤 된 양을 수치화*/
        console.log(pageYOffset / maxScroll); /*실제 스크롤 영역*/
        const zMove = pageYOffset / maxScroll * 980 - 490; /*초기 원근감 값인 490vw만큼 뺀다*/
        house.style.transform = "translateZ(" + zMove + "vw)";
    });

    function resizeHandler(){
        maxScroll = document.body.offsetHeight - window.innerHeight;
    } 

    window.addEventListener("resize", resizeHandler); /*브라우저 크기가 변할 때마다 maxScroll을 경신시킴*/
    resizeHandler();

})(); /*전역변수를 회피하기 위해 즉시 실행 함수 사용*/