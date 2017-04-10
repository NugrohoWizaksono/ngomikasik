$(document).ready(function(){
    $('.button-collapse').sideNav({
        closeOnClick: true
    });
    $('.scrollspy').scrollSpy({
        scrollOffset: 100
    });
    if (screen.width <= 500) {
        $('#kaki').css({"font-size":"9px"});
        $('#cr1').attr('height','50px');
    }
    if (screen.width <= 700) {
        $('#hWeb').hide();
        $('#hMobile').show();
        $('.temaWeb').hide();
        $('.temaMobile').show();
        $('.hadiahWeb').hide();
        $('.hadiahMobile').show();
        
    }
    if (screen.width === 768) {
        $('#1').attr('style','font-size: 0.9rem;');
        $('#2').attr('style','font-size: 0.9rem;');
        $('#3').attr('style','font-size: 0.9rem;');
        $('#4').attr('style','font-size: 0.9rem;');
    }
    if (screen.width >= 700) {
        $('#hMobile').html('<img class="responsive-img" src="images/slider.png" alt="" width="100%"/>');
        $('.temaWeb').show();
        $('.temaMobile').hide();
        $('.hadiahWeb').show();
        $('.hadiahMobile').hide();
        
        $('#img1').html('<img src="images/1.png"> <div id="judul" class="black-text ave">cara ikutan</div>');
        $('#img2').html('<img src="images/2.png">');
        $('#img3').html('<img src="images/3.png">');
        $('#img4').html('<img src="images/4.png">');
        
        $('#txt1').attr('class','isiKiri');
        $('#txt2').attr('class','isiKanan');
        $('#txt3').attr('class','isiKiri');
        $('#txt4').attr('class','isiKanan');
        
        
        $('.bt1').attr( "id", "text4" );
    }
    if (screen.width <= 600) {
        $('.apaMobile').show();
    }if (screen.width >= 600) {
        $('.apaMobile').addClass('valign-wrapper');
    }
    if (screen.width <= 993) {
        $('.brand-logo').html('<img height="63px" src="images/logongomik-asik.png"alt="" />');
        $('#g1').remove();
    }
    if (screen.width === 1024) {
//        $('#g1').attr('height','50px');
        $('.j1').attr('style','font-size: 13px;padding: 0 10px;');
        $('.j2').attr('style','font-size: 13px;padding: 0 1px;');
        $('.j3').attr('style','font-size: 13px;padding: 0 10px;');
        $('.j4').attr('style','font-size: 13px;padding: 0 10px;');
        $('.j5').attr('style','font-size: 13px;padding: 0 10px;');
        
        $('#1').attr('style','font-size: 1rem;');
        $('#2').attr('style','font-size: 1rem;');
        $('#3').attr('style','font-size: 1rem;');
        $('#4').attr('style','font-size: 1rem;');
    }
});
