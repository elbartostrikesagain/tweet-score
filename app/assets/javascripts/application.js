// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require jquery.mobile

//auto width
$(document).ready(function() {
  $("#scores-area").hide();
  $("#nav-button").click(function(){
    toggleSetup();
  });

  $(".raise-score").click(function(){
    var teamId = $(this).attr("id");
    var score = $("input." + teamId)[0];
    score.value = parseInt(score.value) + 1;
    updateTweet();
  });

   $(".lower-score").click(function(){
    var teamId = $(this).attr("id");
    var score = $("input." + teamId)[0];
    score.value = parseInt(score.value) - 1;
    updateTweet();
  });

  // $("#send-tweet").click(function(){
  //   var url = "/tweet"
  //   jQuery.ajax({
  //     type: 'POST',
  //     dataType: 'html',
  //     url: url,
  //     data: {'id': ref_id},

  //     success: function(data) {
  //       var form = jQuery('#pre_reg_lightbox_form');
  //       form.html(data);

  //       form.dialog({
  //         minWidth: 400,
  //         width: 450,
  //         modal: true,
  //         height: 600,
  //         minHeight: 400,
  //         overlay: { opacity: 0.7, background: "black"}
  //       })
  //     }
  //   });
  // });

  $('.team-name').change(function() {
    var id = $(this).attr('id');
    var teamName = $(this).find("input").val() || id;
    $("#" + id + "-name").text(teamName);
    updateTweet();
  });

});

function updateTweet(){
  var tweet = [$('#team-1-name').text(), $('input.team-1').val(), $('#team-2-name').text(), $('input.team-2').val(), $('#additional-tweet-content').val()].join(' ') + ' ' + $('#hashtags input').val();
  $('#tweet-sample').text(tweet);
}

function toggleSetup() {
  var setup = $("#setup-area");
  var scores = $("#scores-area");
  var button = $("#nav-button span.ui-btn-text");
  if (setup.is(":hidden")){
    scores.hide();
    setup.show();
    button.text("Scores");
  }
  else{
    setup.hide();
    scores.show();
    button.text("Setup");
  }
  
}