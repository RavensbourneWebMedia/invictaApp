var $allVideos, $section
    
$(document).ready(function() 
{
  // find all YouTube videos
  $allVideos = $('iframe[src*="youtube"]')
  
  // store all sections
  $section = $('section')

  // figure out and save aspect ratio for each video
  $allVideos.each(function() 
  {
    var $video = $(this)
    
    $video.data('aspectRatio', this.height / this.width)

    // and remove the hard coded width/height
    $video.removeAttr('height')
    $video.removeAttr('width')
  })
  
  // kick off one resize to fix all videos now
  $(window).resize() 
})

// when the window is resized..
$(window).resize(function() 
{
  var newWidth = $section.width()

  // resize all videos according to their own aspect ratio
  $allVideos.each(function() 
  {
    var $video = $(this)
    $video.width(newWidth)
    $video.height(newWidth * $video.data('aspectRatio'))
  })
})
