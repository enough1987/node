const stdin = process.openStdin();

stdin.addListener("data", (d) => {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that
    // with toString() and then trim()
    console.log( d.toString().split("").reverse().join("") );
  });