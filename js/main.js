$(function(){

  $('button').on('click', function(){

  $('body').toggleClass('dark');

    if ($('button').attr('class') === 'on'){
      $('button').attr('class', 'off');
      $('h1').text('Hey, who turned off the lights?');
      // $('body').attr('class', 'dark');
    }
    else {
      $('button').attr('class', 'on');
      $('h1').text("It's so bright in here!");
      // $('body').attr('class', 'light');

    }

  })

})
