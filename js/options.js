// displays current save interval in options
$("#current-interval").text(player.options.saveSpeed.toString())

// starts autosave interval if it's on
if (player.options.autosave) {
    setAutosave();
    $("#autosave").text("ON")
} else {
    $("#autosave").text("OFF")
}


// toggles view between options and game
function toggleOptions() {
    $("#content").fadeToggle(200);
    $("#options").fadeToggle(200);
}

// starts autosave
function setAutosave() {
    autosaveInterval = setInterval(() => {
        save()
    }, player.options.saveSpeed * 1000)
}

// toggles autosave between true and false and updates it in options screen
function autosave() {
    if (player.options.autosave) {
        player.options.autosave = false;
        clearInterval(autosaveInterval);
        $("#autosave").text("OFF")
    } else {
        player.options.autosave = true
        setAutosave();
        $("#autosave").text("ON")
    }
}

// sets autosave interval with player input
function setAutosaveInterval() {
    player.options.saveSpeed = $('#interval').val();
    if (player.options.autosave) {
        clearInterval(autosaveInterval);
        setAutosave();
        $("#current-interval").text(player.options.saveSpeed.toString())
    }
}

// prompts confirmation and resets save with a page reload
function resetSave() {
    if (prompt(`Please input "CONFIRM" without quotes to confirm the game reset.`) == "CONFIRM") {
        localStorage.removeItem("catgirlsimsave");
        load();
        location.reload();
    }
}

// exports save to base64
function exp() {
    prompt('Here is your save, press Ctrl+C:', btoa(JSON.stringify(player)));
}

// imports save with a prompt
function imp() {
    try {
        let parsedPlayer = JSON.parse(atob(prompt("Paste your save:")))

        if (parsedPlayer.save) {
            player = parsedPlayer;
            save();
            location.reload();
        } else 
            alert("Your save is invalid.")

        

    } catch {alert("Your save is invalid.")}}

