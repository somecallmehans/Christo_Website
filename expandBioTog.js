$("#skillset").hide();

$(document).ready(function () {
        $("#btn1").on("click", function () {
            $("#skillset").toggle("slow");
            if ($(this).val() == "Hide Skills")
                $(this).val("Display Skills");
            else
                $(this).val("Hide Skills");
        });
    });