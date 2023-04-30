input.onButtonPressed(Button.A, function () {
    iBrightness += -50
    if (iBrightness < 50) {
        iBrightness = 255
    }
    scrollbit.clear()
    scrollbit.setAll(iBrightness)
    scrollbit.clear()
})
input.onButtonPressed(Button.B, function () {
    iDelay += -20
    if (iDelay < 20) {
        iDelay = 100
    }
})
let iDelay = 0
let iBrightness = 0
iBrightness = 128
iDelay = 40
scrollbit.clear()
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    scrollbit.scrollText(" I {Heart} RAMSAT! ", iBrightness, iDelay)
})
