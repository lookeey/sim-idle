function wheat() {
    $('.btn-core.Agriculture').css("opacity", "0.6")
    $('.btn-core.Agriculture').prop('disabled', true)
    $('.btn-progress.Agriculture').css("transition", `clip-path ${player.ticks.wheat / 2}ms`)
    $('.btn-progress.Agriculture').css("clip-path", "circle(50% at 50% 50%)")
    
    setTimeout(function () {
        $('.btn-progress.Agriculture').css("clip-path", "circle(0% at 50% 50%)")
        $('.btn-core.Agriculture').css({opacity: 1})
    }, player.ticks.wheat / 2)
  
    setTimeout(function () {
        player.mainCurrencies.wheat ++;
        $('.btn-core.Agriculture').prop('disabled', false)
    }, player.ticks.wheat)
}
