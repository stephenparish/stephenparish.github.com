/* needed resize and orientation change functions
* on orientation change
* ---------------------
*  ipad vert = menu bar top
*  ipad horiz = no top menu bar
*  iphone horiz and vert same
*
* iphone window sizes:
* vert
* ----
*  height: 320 or 356?
*  width: 320
*
* horiz
* -----
*  height: 106 with debug bar, 139 with bar
*
* on resize (comp)
* ----------------
*  check size, if < 960, top tool bar.
*/

var myScroll;
$(document).ready(function() {
   console.log("Viewport dim -- h: " + $(window).height() + " w:" + $(window).width());
  /*setTimeout(function () {
    myScroll = new iScroll('testdiv', {
      snap: 'section',
      momentum: false,
      hScrollbar: false,
      vScrollbar: false,
      hScroll: false
    });
  }, 100);*/
  photo_roll.colors();
  mobile.clean();
  //space_sections();
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        $target.ScrollTo(400);
        return false;
      }
    }
  });
});

$(window).bind(
  'keypress',
  function(e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    console.log(keycode);
    switch (keycode) {
      case 106:
        myScroll.scrollToPage('prev', 0);
        break;
      case 107:
        myScroll.scrollToPage('next', 0);
        break;
    }
  }
);

var photo_roll = {
  colors: function () {
    color = "#cf3736";
    for (var i = 0; i < 400; i++) {
      var box_width = (Math.floor(Math.random() * 11) + 5) + "px";
      if (color == "#cf3736") color = "#60a042";
      else if (color == "#60a042") color = "#2f3239";
      else if (color == "#2f3239") color = "#8270ac";
      else if (color == "#8270ac") color = "#23a3ae";
      else if (color == "#23a3ae") color = "#cf3736";
      var box = "<div id=\"color_" + i + "\" style=\"width:" + box_width + "; height: 20px; float:left; background-color: " + color + "\">";
      $(".colors").append(box);
    }
  },
  hide: function () {
    //$("#photo-roll").hide("slow");
    $("#photo-roll").animate({
      height: 'toggle'
    }, 800, 'easeOutBounce');
  },
  show: function () {
    alert("test");
  },
  enlarge: function () {
    $("#content").animate({
      width: 'toggle'
    });
  },
  pull: function () {
    // http://api.flickr.com/services/rest/?method=flickr.test.echo&name=value
    var endpoint = "http://api.flickr.com/services/rest/";
    var api_key = "cd2572728886652826f99be597ce4af0";
    var api_secret = "86f0b9884357fefb";
    var photoset_id = "72157626096294849";
    $.getJSON(
      endpoint + "?method=flickr.photosets.getPhotos&format=json&nojsoncallback=1&api_key=" + api_key + "&photoset_id=" + photoset_id, 
      function (data) {
        $("#photo-roll").animate({
            height: '0px'
          },1000, 'easeOutBounce', function () {
          $.each(data.photoset.photo, function (i, item) {
            var photo_url = "http://farm" + item.farm + ".static.flickr.com/" + item.server + "/" + item.id + "_" + item.secret;
            var photo = "<img src=\"" + photo_url + "_s.jpg\" height=\"25\" width=\"25\" />";
            $("#color_" + i).html(photo);
            $("#color_" + i).hover(function () {
              $("#photo-hover").stop();
              $("#photo-hover img").attr("src", photo_url + "_m.jpg");
              $("#photo-hover").delay(200).fadeIn().animate({
                left : ($("#color_" + i).offset().left - ($("#photo-hover img").outerWidth()/2)) + "px",
                top : ($("#color_" + i).offset().top + 30) + "px"
              },400);
            });
          });
          $("#photo-roll").hover(
            function () {
              $("#photo-hover").fadeIn();
            }, function () {
              $("#photo-hover").fadeOut();
            }
          );
          //$("#photo-roll").css("height","25px");
          $("#photo-roll div").css({
            "width" : "25px",
            "height" : "25px"
          });
        })
        $("#container").delay(800).animate({paddingTop:'35px'},1000, 'easeOutBounce');
        $("#photo-roll").delay(800).animate({height: '25px'},1000, 'easeOutBounce');
    });
  },
  shorten: function (num, alphabet) {
    alphabet = alphabet || '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';
    var base_count = alphabet.length;
    var encoded = '';
    while (num >= base_count) {
      var div = num/base_count;
      var mod = (num-(base_count*intval(div)));
      encoded = alphabet.charAt(mod) + encoded;
      num = intval(div);
    }
    if (num) encoded = alphabet.charAt(num) + encoded;
    return "http://flic.kr/p/" + encoded;
  }
}

function space_sections () {
  $("section").each(function () {
    if (!$(this).hasClass("current")) {
      $(this).css("margin-top", $(window).height() + "px");
      /*$("a[href='#" + $(this).id + "']").click(function (event) {
        event.preventDefault();
        $(".current").animate({
          marginTop: "-" + $(".current").outerHeight()
        });
        $(".current").css("margin-top", $(window).height() + "px");
        $(".current").removeClass("current");
        $(this).animate({
          marginTop: "15px"
        });
        $(this).addClass("current");
      });*/
    }
  });
}

var mobile = {
  is: {
    iphone: function () {
      if (navigator.userAgent.match(/iPhone/i))
        return true;
      else
        return false;
    },
    ipad: function () {
      if (navigator.userAgent.match(/iPad/i))
        return true;
      else
        return false;
    }
  },
  clean: function () {
    setTimeout(function () {
      window.scrollTo(0,1);
    }, 500);
  },
  card: {
    flip: function () {
      console.log("Business card flipped");
    }
  }
}

function intval (mixed_var, base) {
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: stensi
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   input by: Matteo
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Rafał Kukawski (http://kukawski.pl)
    // *     example 1: intval('Kevin van Zonneveld');
    // *     returns 1: 0
    // *     example 2: intval(4.2);
    // *     returns 2: 4
    // *     example 3: intval(42, 8);
    // *     returns 3: 42
    // *     example 4: intval('09');
    // *     returns 4: 9
    // *     example 5: intval('1e', 16);
    // *     returns 5: 30
    var tmp;

    var type = typeof(mixed_var);

    if (type === 'boolean') {
        return +mixed_var;
    } else if (type === 'string') {
        tmp = parseInt(mixed_var, base || 10);
        return (isNaN(tmp) || !isFinite(tmp)) ? 0 : tmp;
    } else if (type === 'number' && isFinite(mixed_var)) {
        return mixed_var | 0;
    } else {
        return 0;
    }
}

window.onorientationchange = function () {
  var orientation = window.orientation;
  switch (orientation) {
    case 0:
      // portrait mode
      $("meta[name='viewport']").attr("content", "user-scalable=no, initial-scale=1, width=device-width");
      break;
    case 90:
      // landscape with screen turned to the left
      $("meta[name='viewport']").attr("content", "user-scalable=no, initial-scale=1, width=device-height");
      break;
    case -90:
      // landscape with screen turned to the right
      $("meta[name='viewport']").attr("content", "user-scalable=no, initial-scale=1, width=device-height");
      break;
  }
}
