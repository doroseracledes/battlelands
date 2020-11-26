input.onButtonPressed(Button.A, function () {
    tom.move(1)
})
input.onButtonPressed(Button.B, function () {
    jerry.move(1)
})
let jerry: game.LedSprite = null
let tom: game.LedSprite = null
game.setScore(0)
basic.showIcon(IconNames.Heart)
basic.clearScreen()
tom = game.createSprite(0, 4)
jerry = game.createSprite(4, 4)
basic.forever(function () {
    while (game.score() < 3) {
        basic.pause(500)
        if (tom.isTouchingEdge()) {
            tom.turn(Direction.Right, 45)
        }
        if (jerry.isTouchingEdge()) {
            jerry.turn(Direction.Left, 45)
        } else if (tom.isTouching(jerry)) {
            game.addScore(1)
        }
    }
    game.gameOver()
})
