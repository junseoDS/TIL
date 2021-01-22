function my_func() {
    // 버튼을 누르면 호출되요
    //jQuery 사용법
    // 1. selector 부터 알아보기
    // selector는 HTML 엘리먼트 지칭하는 특수한 표기법
    // jQuery는 $로 시작
    // $(selector).method() 의 형태
    // 1. 전체 선택자 : *
    // $('*').css('color','red');
    // 2. 태그 선택자 : 태그명을 가지고 선택
    //$('span').remove()
    //$('li').css('background-color','yellow')
    // 3. 아이디 선택자 : ID 속성을 이용해서 선택
    //$('#inchoen').text('소리있는 이우성')
    // 4. 클래스 선택자 : class 속성을 이용하여 선택
    // $('.region').css('color','blue')
    // 5. 구조 선택자 : 부모, 자식, 형제 관계를 이용해서 선택
    $('ol > li').css('color','red')

}