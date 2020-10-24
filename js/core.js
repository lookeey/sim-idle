// saves the game before the player closes or restarts the page
$(window).on("unload", function () {
    save()
})

function gameLoop() {
    setTimeout(function(){
        update();
        gameLoop();
    }, [1000/30])
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
