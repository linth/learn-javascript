/**
 * Buffer example.
 * 
 * Reference:
 *  - https://nodejs.org/api/buffer.html
 */


{
  let bin = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f ]); // Buffer is deprecated.
  let bin2 = new Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f]);

  console.log(bin.length); // 5
  console.log(bin2.length); // 5

  /**
   * bin -> string.
   */
  let str = bin.toString('utf-8');
  console.log(str); // hello

  /**
   * string -> bin
   */
  let stringToBin = new Buffer.from('hello', 'utf-8');
  console.log(stringToBin); // <Buffer 68 65 6c 6c 6f>
  // console.log(bin.slice.call());

  /**
   * copy
   */
  // let copyBin2 = bin2.copy();
  // console.log(copyBin2);


}


