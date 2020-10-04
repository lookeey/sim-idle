var currentLevel="Agriculture";

setInterval(() => {save()}, player.options.saveSpeed*1000)

function getCurrentButton(){
  switch(currentTab){
      case "Agriculture": return "wheat";
      case "Fisherman": return "fish";
      case "Catsitter": return "catDna";
      case "Scientist": return "humanDna";
  };
}

function mainButtonClick(){
    eval(`${getCurrentButton()}()`)
}

$(window).on("unload", function(){
  save()
})
