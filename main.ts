input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
input.onGesture(Gesture.TiltLeft, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    number += -1
    basic.showNumber(number)
})
input.onGesture(Gesture.TiltRight, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let sprite: game.LedSprite = null
let number = 0
basic.showIcon(IconNames.Ghost)
number = 7
sprite = game.createSprite(2, 2)
basic.forever(function () {
	
})
