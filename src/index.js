module.exports = function check(str, bracketsConfig) {
  let i, j, n, strTransform
  i = str.length
  while (i > 0) {
    equalOneElementsStr = str.slice(i, (i + 1))
    n = i
    for (j = 0; j < bracketsConfig.length; j++) {
      strTransform = (bracketsConfig[j][0]) + (bracketsConfig[j][1])
      str = str.replace(strTransform, '')
    }
    i = str.length
    if (n == i) { i = 0 }
  }
  return !(str)
}