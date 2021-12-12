function genRandHex(len: number): string {
  const arr = window.crypto.getRandomValues(new Uint8Array(len))
  return arr.reduce((acc, cur) => acc + ('0' + cur.toString(16)).slice(-2), "")
}

let len = 16
try {
  const numStr = Deno.args[0]
  const num = parseInt(numStr, 10)
  if (num) {
    len = num
  }
} catch (err) {
  console.error(err)
}
console.log(genRandHex(len))
