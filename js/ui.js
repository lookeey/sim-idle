// appends css file accordingly to set tab
function triggerCss(tab) {
    var head = document.getElementsByTagName('HEAD')[0];
    var link = document.createElement('link');
    var filename = `./styles/${
        tab.toLowerCase()
    }.css`;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = filename;
    head.appendChild(link);
};

// hides current tab, shows selected, changes css variables, updates button symbol and title
function changeTab(tab) {
    $(`.tab.${currentTab}`).hide()
    $(`.tab.${tab}`).show()
    currentTab = tab;
    triggerCss(tab);
    document.getElementById("title").innerHTML = `${tab} Simulator`;
    switch (tab) {
        case "Agriculture":
            symbol = "🌿&#xFE0E;";
            break;
        case "Fisherman":
            symbol = "🐟&#xFE0E;";
            break;
        case "Catsitter":
            symbol = "🐈&#xFE0E;";
            break;
        case "Scientist":
            symbol = "⚛";
            break;
        case "Catgirl":
            symbol = "Catgirl";
            break;
    };
    document.getElementById('btn-core').innerHTML = symbol;
};
