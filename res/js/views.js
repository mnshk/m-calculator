function hide_views() {
    var views = document.getElementsByClassName("view");
    for (var i = 0; i < views.length; i++)
        views[i].style.display = "none";
}

function view(view_ids) {
    hide_views();
    for (var j = 0; j < view_ids.length; j++)
        document.getElementById(view_ids[j]).style.display = "block";
}

function hide_tabs() {
    var tabs = document.getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++)
        tabs[i].style.display = "none";
}

function tab(tab_ids) {
    hide_tabs();
    for (var j = 0; j < tab_ids.length; j++)
        document.getElementById(tab_ids[j]).style.display = "block";
}