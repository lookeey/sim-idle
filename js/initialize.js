// creates player object if it doesn't yet exist
function createPlayer() {
    player = {
        save: true,
        currentLevel: "Agriculture",
        mainCurrencies: {
            wheat: 0,
            fish: 0,
            cat: 0,
            catdna: 0,
            humanDna: 0,
            catgirls: 0
        },
        extraCurrencies: {},
        ticks: {
            wheat: 6000
        },
        unlocked: {
            wheat_upgrades: false
        },
        options: {
            saveSpeed: 15,
            autosave: true
        }
    }
}

// loads local storage and sets data as a player object
function load() {
    if (!JSON.parse(localStorage.getItem("catgirlsimsave"))) {
        createPlayer();
    } else {
        player = JSON.parse(localStorage.getItem("catgirlsimsave"))
    };
};


// saves player object to local storage
function save() {
    localStorage.setItem("catgirlsimsave", JSON.stringify(player));
    notify("Game saved.")
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

function setAmount(el, amount) {
    $(`.${el} .amount`).text(amount)
}

function gameLoop() {
    setTimeout(function(){
        update();
        gameLoop();
    }, [1000/30])
}

// adds event listeners to interactable elements and calls the game loop
function initGame() {

    gameLoop();
}

// initialize player object and set current tab

load();
hideSelectors();
setTab();
initGame();

// needs to set every amount in the html in a for loop
setAmount("wheat", player.mainCurrencies.wheat);
