let solving = false;

export function startSolve() {
    solving = true;
    $(".cell")
        .filter(function () {
            return $(this).val()
        })
        .addClass("fixed");
    $("#info").text("Solving...");
    $(".cell, #clearBtn").prob("disabeld",true);
    $("#sudoku").addClass("solving");
}

//function 