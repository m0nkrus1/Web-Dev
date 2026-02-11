alert( alert(1) || 2 || alert(3) ); // 1, because alert returns undefined, so the first operand is falsy, then it evaluates and returns the second operand.
