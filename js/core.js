var currentLevel="Agriculture";

function setAutosave(){
  autosaveInterval = setInterval(() => {save()}, player.options.saveSpeed*1000)
}

$("#current-interval").text(player.options.saveSpeed.toString())

if(player.options.autosave){
  setAutosave();
  $("#autosave").text("ON")
} else {
  $("#autosave").text("OFF")
}

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

function toggleOptions(){
  $("#content").fadeToggle(200);
  $("#options").fadeToggle(200);
}

function autosave(){
  if(player.options.autosave){
    player.options.autosave = false;
    clearInterval(autosaveInterval);
    $("#autosave").text("OFF")
  }
  else {
    player.options.autosave = true
    setAutosave();
    $("#autosave").text("ON")
  }
}

function setAutosaveInterval(){
  player.options.saveSpeed = $('#interval').val();
  if(player.options.autosave){
  clearInterval(autosaveInterval);
  setAutosave();
  $("#current-interval").text(player.options.saveSpeed.toString())
  }
}

function resetSave(){
  if(prompt(`Please input "CONFIRM" without quotes to confirm the game reset.`) == "CONFIRM"){
  localStorage.removeItem("catgirlsimsave");
  load();
  location.reload();
}}

function exp(){
  prompt('Here is your save, press Ctrl+C:', btoa(JSON.stringify(player)));
}

function imp(){
  try {
  let parsedPlayer = JSON.parse(atob(prompt("Paste your save:")))

  if(parsedPlayer.save){
    player = parsedPlayer;
    save();
    location.reload();
  }
  else alert("Your save is invalid.")
} catch {
  alert("Your save is invalid.")
}
}

$(window).on("unload", function(){
  save()
})
