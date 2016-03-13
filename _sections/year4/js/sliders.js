// see https://github.com/kenwheeler/slick/
$(document).ready( function() 
                  { 
  $('.receptionSlider').slick(
    {
      autoplay: true, 
      lazyLoad: 'ondemand',
      fade: true,
      cssEase: 'linear',
      speed: 500 // in milliseconds
    })

  $('#year1AudioBook').slick(
    {
      lazyLoad: 'ondemand',
      fade: true,
      cssEase: 'linear',
      speed: 200 // in milliseconds
    })

  // stop playing audios when moving from slide to slide
  $('#year1AudioBook').on('beforeChange', function(event, slick, currentSlide, nextSlide)
                          {
    var $audios = $( 'audio' )
    $audios.each(function(index, audio)
                 {
      // console.log(audio)
      audio.pause()
    })
  })
})

// read the manual at http://kenwheeler.github.io/slick/