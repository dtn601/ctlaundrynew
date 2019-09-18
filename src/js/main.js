
function initMap() {console.log('map')}

$(function(){
    console.log('hello')

     initMap = function() {
      // your code like... 
      console.log('map render')
      var CT = {lat: 30.1929877, lng: -97.7799065}
      var SC = {lat: 30.366566, lng: -97.694302}
      
      var CTmap = new google.maps.Map(document.getElementById('CTmap'), {
              center: CT,
              zoom: 15,
              disableDefaultUI: true
            });
      var CTMarker = new google.maps.Marker({
              position: CT,
              map: CTmap
            });
      var CTmap2 = new google.maps.Map(document.getElementById('CTmap2'), {
              center: CT,
              zoom: 15,
              disableDefaultUI: true
            });
      var CTMarker2 = new google.maps.Marker({
              position: CT,
              map: CTmap2
            });
      var SCmap = new google.maps.Map(document.getElementById('SCmap'), {
              center: SC,
              zoom: 15,
              disableDefaultUI: true
            });
      var SCMarker = new google.maps.Marker({
              position: SC,
              map: SCmap
            });  
      var SCmap2 = new google.maps.Map(document.getElementById('SCmap2'), {
              center: SC,
              zoom: 15,
              disableDefaultUI: true
            });
      var SCMarker2 = new google.maps.Marker({
              position: SC,
              map: SCmap2
            });  

    };
      // and other stuff...


    // $('.content').load('main.html', function(e){
    //    console.log('this works?')
    //    ajaxComplete()

    // })

    // $('body').on('load', '#header', function(e){
    //   e.preventDefault()
    //   console.log('this works?')
    // })

    //   function callPage(pageRefInput,scroll){
    //     $.ajax({
    //       url: pageRefInput,
    //       type: 'GET',
    //       dataType: 'html',

    //       success: function(res){
    //         $('.content').html(res)
    //       },
    //       error: function(err) {
    //         console.log('page not loaded: ', err)
    //       },
    //       complete: function( xhr, status){
    //         ajaxComplete();
    //         goToByScroll(scroll);
    //       }
    //     })
      
    //   }
    // function goToByScroll(id){
    //     $('html,body').animate({scrollTop: $(id).offset().top - 30}, 'slow')
    //   }

    // $('body').on('click','.links',function(e){
    //   e.preventDefault()
    //   var test = e.currentTarget.attributes
    //     console.log(test)
    //     console.log(e.currentTarget.attributes)
    //   callPage(test.data.value,test.href.value)
    // });

    $('.sidenav').sidenav();
    $('.material-box').materialbox();
    $('.parallax').parallax();
    $('.tabs').tabs();
    $('.datepicker').datepicker({
        disableWeekends: true
    });
    $('.tooltipped').tooltip();
    $('.scrollspy').scrollSpy(); 
    $('.modal').modal();








    });