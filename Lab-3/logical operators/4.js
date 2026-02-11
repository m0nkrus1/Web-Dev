if ( -1 || 0 ) alert( 'first' ); // works, because -1 is truthy
if ( -1 && 0 ) alert( 'second' ); // doesn't work, because 0 is falsy
if ( null || -1 && 1 ) alert( 'third' ); // works, because -1 && 1 is truthy, so the whole expression is truthy
