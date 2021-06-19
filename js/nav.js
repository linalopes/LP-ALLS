//$(function(){
//        $(".btn-toggle").click(function(e){
//            e.preventDefault();
//            el = $(this).data('element');
//            $(el).toggle();
//        });
//    });

function mostraDiv(caller) {
        if (caller.id === 'dia22') {
            $("#tab1").attr("style", "display: block");
            $("#tab2").attr("style", "display: none");
            $("#tab3").attr("style", "display: none");
        } else if (caller.id === 'dia23') {
            $("#tab1").attr("style", "display: none");
            $("#tab2").attr("style", "display: block");
            $("#tab3").attr("style", "display: none");
        } else if (caller.id === 'dia24') {
            $("#tab1").attr("style", "display: none");
            $("#tab2").attr("style", "display: none");
            $("#tab3").attr("style", "display: block");
        }
    }