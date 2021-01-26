$(document).on('ready',function(){
    $('h1').on('click',function(event){
        // alert('클릭되었어요')
        // 이벤트가 발생했을떄 어떤 element에서 evenet가 발생했는지 파악
        alert($(this).text())
    })

})
function my_func(){
    alert('클릭되었습니다')
}
function set_style(){
    $('h1').addClass('myStyle')
}
function release_style(){
    $('h1').removeClass('myStyle')
}
function add_event(){
    // H1을 찾아서 해당 element에 event 처리 능력 부여
    $('h1').on('click',function(event) {
        alert('클릭되었습니다')
    })
}