$(document).ready(function() 
{
  var $body = $('body'),
      $menu = $('.menu')
  
  $menu.on('click', function()
  {
    $body.toggleClass('menu-open')
  })
  
  $menu.on('click', 'li', function()
  {
    var $li = $(this),
        section = $li.attr('goTo')
    
    if (section) goTo(section)
  })
})

function goTo(section)
{
  console.log('goTo ' + section)
  
  var $newSection = $('section[name=' + section + ']'),
      $newMenuItem = $('.menu li[goTo=' + section + ']')
  
  // if the new section exists
  if ($newSection.length > 0)
  {
    // remove the class "active" from the old section
    $('article section').removeClass('active')
    // add the class "active" to the new section
    $newSection.addClass('active')
  }
  
  // if the new menu item exists
  if ($newMenuItem.length > 0)
  {
    // remove the class "active" from the old menu item
    $('.menu li').removeClass('active')
    // add the class "active" to the new menu item
    $newMenuItem.addClass('active')
  }
}