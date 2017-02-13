
$(document).ready(function () {
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/javascript");
    editor.setReadOnly(false);


    var runApp = function () {
        eval(editor.getValue());
    };

    $('#run').on('click', function () {
        runApp();
    });

    $(document).on('keypress', function (key) {
    if (key.ctrlKey && !key.altKey && !key.shiftKey && (key.keyCode==2 || key.keyCode==1080)) {
            runApp();
        }
    })
});

