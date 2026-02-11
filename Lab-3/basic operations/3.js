// //"" + 1 + 0 = "10" // (1)
// "" - 1 + 0 = -1 // (2)
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// "  -9  " + 5 = "  -9  5" // (3)
// "  -9  " - 5 = -14 // (4)
// null + 1 = 1 // (5)
// undefined + 1 = NaN // (6)
// " \t \n" - 2 = -2 // (7)


// (1) The empty string is converted to 0, so the result is "10".
// (2) The empty string is converted to 0, so the result is -1.
// (3) The string is not converted to a number, because the plus operator is used for concatenation. So the result is "  -9  5".
// (4) The string is converted to a number, because the minus operator is used for subtraction. So the result is -14.
// (5) null is converted to 0, so the result is 1.
// (6) undefined is converted to NaN, so the result is NaN.
// (7) The string is converted to a number, because the minus operator is used for subtraction. The string contains only whitespace, which is ignored, so the result is -2. 