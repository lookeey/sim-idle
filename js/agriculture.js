function wheat() {
    $('#btn-core').css("opacity", "0.6")
    $('#btn-core').prop('disabled', true)
    $('#btn-progress').css("transition", `clip-path ${player.ticks.wheat / 2}ms`)
    $('#btn-progress').css("clip-path", "circle(50% at 50% 50%)")
    
    setTimeout(function () {
        $('#btn-progress').css("clip-path", "circle(0% at 50% 50%)")
        $('#btn-core').css({opacity: 1})
    }, player.ticks.wheat / 2)
  
    setTimeout(function () {
        player.mainCurrencies.wheat ++;
        $('#btn-core').prop('disabled', false)
        $('.wheat .amount').text(`${player.mainCurrencies.wheat}`)
    }, player.ticks.wheat)
}
