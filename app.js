//alert("Script working!");

$("h1").addClass("big-title margin-50");

$("img").width("400");

/* any key entered while on the page is being displayed in the H1 field */
$(document).keydown(function(event) {
  $("h1").text(event.key);
  $("h2").text(event.code);
})
