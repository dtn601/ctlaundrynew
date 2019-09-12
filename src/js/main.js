
"use strict";
// function initMap() {} // now it IS a function and it is in global

//    initMap = function() {
//     // your code like...
//     var map = new google.maps.Map(document.getElementById('map'), {
//             center: {
//                 lat: -34.397, 
//                 lng: 150.644
//             },
//             zoom: 8});
//     // and other stuff...
//   } 

$(function(){

    console.log('tesing123')
    $('.content').load('main.html')

    $('body').on('load', function(e){
      e.preventDefault()
      console.log('this works?')
    })

      function callPage(pageRefInput,scroll){
        $.ajax({
          url: pageRefInput,
          type: 'GET',
          dataType: 'html',

          success: function(res){
            $('.content').html(res)
          },
          error: function(err) {
            console.log('page not loaded: ', err)
          },
          complete: function( xhr, status){
            goToByScroll(scroll)
          }
        })
      
      }
    function goToByScroll(id){
        $('html,body').animate({scrollTop: $(id).offset().top - 30}, 'slow')
      }

    $('body').on('click','.links',function(e){
      e.preventDefault()
      var test = e.currentTarget.attributes
        console.log(test)
        console.log(e.currentTarget.attributes)
      callPage(test.data.value,test.href.value)
  });




        $('.sidenav').sidenav();
        $('.material-box').materialbox();
        $('.parallax').parallax();
        $('.tabs').tabs();
        $('.datepicker').datepicker({
            disableWeekends: true
        });
        $('.tooltipped').tooltip();
        $('.scrollspy').scrollSpy(); 


    });