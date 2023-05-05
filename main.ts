function Giro_inv_izquierda () {
    wuKong.setAllMotor(-100, 0)
}
function Giro_izquierda () {
    wuKong.setAllMotor(0, 100)
}
function rot_derecha () {
    wuKong.setAllMotor(100, -100)
}
input.onButtonPressed(Button.A, function () {
    Hacia_atras()
})
function Hacia_atras () {
    wuKong.setAllMotor(-100, -100)
}
function Giro_inv_derecha () {
    wuKong.setAllMotor(0, -100)
}
function rot_izquierda () {
    wuKong.setAllMotor(-100, 100)
}
input.onButtonPressed(Button.AB, function () {
    PArar()
})
input.onButtonPressed(Button.B, function () {
    hacia_adelante()
})
function PArar () {
    wuKong.stopAllMotor()
}
function hacia_adelante () {
    wuKong.setAllMotor(100, 100)
}
function Giro_derecha () {
    wuKong.setAllMotor(100, 0)
}
