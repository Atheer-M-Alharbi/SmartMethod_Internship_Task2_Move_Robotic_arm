let port;
let writer;
const textEncoder = new TextEncoder();


async function getCommand() {

  try {
    const result = transcript.toLowerCase();
    const resultSplit = result.split(" ")
    const resultCommand = resultSplit.slice(-1);
    if (resultCommand.includes("right") || resultCommand.includes("يمين") || resultCommand.includes("رايت")) {
      await writer.write(textEncoder.encode('right'));
    }

    if (resultCommand.includes("left") || resultCommand.includes("يسار") || resultCommand.includes("لفت")) {
      await writer.write(textEncoder.encode('left'));
    }

  } catch (e) {
    console.log(e);
    }

}


async function connectSerial() {
   try {

     if (navigator.serial) {

    port = await navigator.serial.requestPort();

    // Wait for the serial port to open.
    await port.open({ baudRate: 9600 });

    // write left and right whenever the user say so
    const writableStreamClosed = textEncoder.readable.pipeTo(port.writable);
    writer = textEncoder.writable.getWriter();

    } else {
      alert('Web Serial API not supported.');
    }

  } catch (e) {
    console.log("error", e);
    }

}
