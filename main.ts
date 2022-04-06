input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    random_number = randint(0, 3)
    if (random_number == 0) {
        basic.showString("Oh nah man")
    } else if (random_number == 1) {
        basic.showString("Oh yah man")
    } else if (random_number == 2) {
        basic.showString("maybe")
    } else if (random_number == 3) {
        basic.showString("prolly not")
    }
})
let random_number = 0
basic.showString("ask question")
basic.forever(function () {
    basic.showIcon(IconNames.StickFigure)
})
