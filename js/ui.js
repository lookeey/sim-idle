// appends css file accordingly to set tab
function triggerCss(tab) {

    let cssRGBs = {
        Agriculture: ["79, 194, 34", "215, 230, 81", "4, 34, 0"],
        Fisherman: ["30, 207, 184", "170, 97, 63", "0, 24, 34"],
        Catsitter: ["247, 76, 156", "158, 81, 230", "34, 0, 16"],
        Scientist: ["255, 255, 255", "84, 86, 214", "0, 1, 70"]
    }

    let colors = cssRGBs[tab]
    $(':root').css('--accent1', colors[0])
    $(':root').css('--accent2', colors[1])
    $(':root').css('--bg-color', colors[2])

};

// hides current tab, shows selected, changes css variables, updates button symbol and title
function changeTab(tab) {
    $(`.tab.${currentTab}`).hide()
    $(`.tab.${tab}`).show()
    $(`.btn-core.${currentTab}`).hide()
    $(`.btn-core.${tab}`).show()
    $(`.btn-progress.${currentTab}`).hide()
    $(`.btn-progress.${tab}`).show()
    currentTab = tab;
    triggerCss(tab);
    $("#title").text(`${tab} Simulator`);
    $("title").text(`${tab} Simulator`);

};

function hideSelectors() { // loops through player currencies, hiding all selectors for not obtained currencies

    var entries = Object.entries(player.mainCurrencies);
    for (var [currency, amount] of entries) {
        if (amount > 0) {
            $(`.selector.${currency}`).show()
        } else if (amount < 1) {
            $(`.selector.${currency}`).hide()
        }
    }
    $(`.selector.wheat`).show()
    if (player.mainCurrencies.fish == 0) {
        $(`.selector.wheat`).hide()
    }
}

function setTab() {
    // changes css accordingly to player's current level (which is not defined by the game yet)
    currentTab = player.currentLevel.split(' ')[0];
    triggerCss(currentTab);
    changeTab(currentTab);
};