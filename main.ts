input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Angry)
    music.play(music.stringPlayable("F A B B B A F F ", 120), music.PlaybackMode.UntilDone)
})
