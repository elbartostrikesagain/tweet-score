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
    var score = $(".team-column input.ui-input-text")[0];
    score.value = parseInt(score.value) + 1;
  });

   $(".lower-score").click(function(){
    var score = $(".team-column input.ui-input-text")[0];
    score.value = parseInt(score.value) - 1;
  });

  $("#send-tweet").click(function(){
    var url = "/tweet"
    jQuery.ajax({
      type: 'POST',
      dataType: 'html',
      url: url,
      data: {'id': ref_id},

      success: function(data) {
        var form = jQuery('#pre_reg_lightbox_form');
        form.html(data);

        form.dialog({
          minWidth: 400,
          width: 450,
          modal: true,
          height: 600,
          minHeight: 400,
          overlay: { opacity: 0.7, background: "black"}
        })
      }
    });
  });

});

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