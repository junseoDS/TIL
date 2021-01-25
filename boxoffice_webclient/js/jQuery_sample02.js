function my_func() {
    // $('div').css('color','red')
    // $('div').css('background-color','yellow')
    // $('div').addClass('myStlye')
    // $(html:'input[type=button]:first').removeAttr('disabled')
    // $('div.myStyle').remove()  //자기 자신도 지워짐
    // $('div.myStyle').empty()   // 후손들만 지워짐
    // 없는 element를 새롭게 생성하기
    //let my_div = $(html:'<div></div>').text(text_function:'소리없는 아우성')

//    let my_ing = $(html: '<img/>')   // <img src = img/car.jpg>
    // 이렇게 새로운 element를 만들었으면 내가 원하는 위치에 가져다 붙여야 한다
    // 4종류의 함수를 이용해서 element를 원하는 위치에 가져다 붙일 수 있다
    // 1. append() :자식으로 붙이고 맨 마지막 자식으로 붙인다
    // 2. prepend() : 자식으로 붙이고 맨 처음으로 붙인다
    // 3. after() : 형제로 붙이고 바로 다음 형재로 붙인다
    // 4. before() : 형제로 붙이고 바로 이전 형제로 붙인다

    //새로운 li를 생성
    let my_li = $(html:'<li></li>').text(text_function:'아이유')
    //$(html:'ul').append(my_li)

    //$(html:'ul').prepend(my_li)

    //$(html:'ul>li:eq(1)').after(my_li)
    $(html:'ul>li:last').before(my_li)


    }

function remove_func(){
    // $('div').removeClass('myStyle')
}