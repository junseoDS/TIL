function my_func() {
    //적절한 코드를 작성
    console.log($('#apple').text())
    $('#apple').text('소리없는 아우성')
    console.log($('#pineapple').text())
    console.log($('ul > .myList').text())
    console.log($('#uId').val())
    console.log($('input[type=text]').attr('id'))
    $('input[type=text]').attr('size',10)
    console.log($('ol>li:first').text()) // fisrt/list만 있음
    console.log($('ol>li:last').text())
    console($('ol > li : fisrt + li').text()) //호랑이
    console.log($('ol>li:eq(1)').text())
    $('ol>li').each(function(idx,item){
        console.log($(item).text()+'입니다')
    })



}
// 이름이 없는 함수 -> 묵시적 함수 -> lambda 함수
// 결국 함수를 독립적으로 선언하지 못하고 변수같은 곳에 저장
// 함수를 하나의 값으로 인식 -> first class
// 함수가 하나의 값으로 사용하기 때문에 함수를 다른 함수의 인자로 활용 가능
//let kaka = function(){ }
