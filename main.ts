/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Nico Sellitto
 * Created on: Sep 2024
 * This program shows temperature
*/

basic.showIcon(IconNames.Happy)

let temp = input.temperature()

input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString('the temperature is:')
    basic.showNumber(temp)
    basic.showIcon(IconNames.Happy)
})