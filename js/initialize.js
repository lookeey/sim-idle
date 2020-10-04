var buttonIcons = {
    agriculture: "🌿&#xFE0E;",
    fisherman: "🐟&#xFE0E;",
    cat: "🐈&#xFE0E;",
    scientist: "⚛"
};

function createPlayer(){
  player = {
      save: true,
      currentLevel: "Agriculture",
      mainCurrencies: {
          wheat: 0,
          fish: 0,
          cat: 0,
          catdna: 0,
          humanDna: 0,
          catgirls: 0,},
      extraCurrencies: {
      },
      ticks: {
        wheat: 3000,
      },
      unlocked: {
          wheat_upgrades: false
      },
      options: {
        saveSpeed: 15,
        autosave: true,
      }
  }
}

function load(){
    if (!JSON.parse(localStorage.getItem("catgirlsimsave"))){
        createPlayer();
    } else {
    player = JSON.parse(localStorage.getItem("catgirlsimsave"))};
};

function save(){
    localStorage.setItem("catgirlsimsave", JSON.stringify(player));
    notify("Game saved.")
};

function hideTabs() {
  var entries = Object.entries(player.mainCurrencies);
  for(var [currency, amount] of entries){
    if(amount > 0){
        $(`.selector.${currency}`).show()

    }
    else if(amount < 1){
        $(`.selector.${currency}`).hide()
    }}
    $(`.selector.wheat`).show()
    if(player.mainCurrencies.fish == 0){
        $(`.selector.wheat`).hide()

    }
}

function setTab(){
    document.getElementById("title").innerHTML = `${player.currentLevel} Simulator`;
    document.getElementById("btn-core").innerHTML = buttonIcons[player.currentLevel.split(' ')[0].toLowerCase()];
    currentTab = player.currentLevel.split(' ')[0];
    triggerCss(currentTab);
};

function setAmount(el, amount){
    $(`.${el} .amount`).text(amount)
}


load();
hideTabs();
setTab();
setAmount("wheat", player.mainCurrencies.wheat);
