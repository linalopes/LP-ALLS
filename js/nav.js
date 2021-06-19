function mostraDiv(caller) {
        if (caller.id === 'dia22') {
            $("#tab1").attr("style", "display: block");
            $("#dia22").attr("style", "background-color: #851f82");
            $("#tab2").attr("style", "display: none");
            $("#dia23").attr("style", "background-color: #ededed");
            $("#tab3").attr("style", "display: none");
            $("#dia24").attr("style", "background-color: #ededed");
        } else if (caller.id === 'dia23') {
            $("#tab1").attr("style", "display: none");
            $("#dia22").attr("style", "background-color: #ededed");
            $("#tab2").attr("style", "display: block");
            $("#dia23").attr("style", "background-color: #851f82");
            $("#tab3").attr("style", "display: none");
            $("#dia24").attr("style", "background-color: #ededed");
        } else if (caller.id === 'dia24') {
            $("#tab1").attr("style", "display: none");
            $("#dia22").attr("style", "background-color: #ededed");
            $("#tab2").attr("style", "display: none");
            $("#dia23").attr("style", "background-color: #ededed");
            $("#tab3").attr("style", "display: block");
            $("#dia24").attr("style", "background-color: #851f82");
        }
    }
