/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Nico Sellitto
 * Created on: Sep 2024
 * This program shows temperature in kelvin
*/

basic.showIcon(IconNames.Happy)

let temp = input.temperature() + 273.15

input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString('the temperature is:' + Math.round(temp) + " k")
    basic.showIcon(IconNames.Happy)
})