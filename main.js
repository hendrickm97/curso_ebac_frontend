$(document).ready(function () {
  $("#submit-btn").on("click", function () {
    const nomeTarefa = $("#text-input").val();
    const li = document.createElement("li");
    li.innerHTML = `${nomeTarefa}`;
    $("ul").append(li);
    $("#text-input").val("");
    $(li).click(function () {
      $(li).on("click", function () {
        $(li).css("text-decoration", "line-through");
      });
    });
  });
});
