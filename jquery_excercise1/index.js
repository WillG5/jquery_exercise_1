

function main (){
$('#grow-me').addClass('big');
$('#shrink-me').removeClass('big');
$('li').each(function(index){
    console.log($(this).text());
});
$('#hide-me').css('display', 'none');
$('#show-me').css('display','block');
$('h1').val('Welcome' + '' $('input'));
}

$("#action").on("click", main);