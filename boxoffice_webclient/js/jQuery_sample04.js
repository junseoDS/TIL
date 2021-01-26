function my_search(){
    //버튼 누르면 호출되요
    let keyword = '건축학개론'

    // AJAX 방식으로 서버프로그램 호출
    // 우리가 호출할 서버프로그램으로 다음카카오 키워드 검색

    $.ajax({
        url : "https://dapi.kakao.com/v2/search/image",
        type : 'GET',
        dataType : 'json',
        data : {
            query : keyword
        },
        headers : {
            Authorization : 'KakaoAK b1a1f1e115c4156fbc6542aa4a54bcab'
        },
        success : function (){
            alert('호출성공')
        },
        error : function (){
            alert('호출실패')
        }

    })
}