/**
 * @author lihh
 * @description 给定两个颜色 获取渐变色
 */

// -- 颜色#FF00FF格式转为Array(255,0,255)
const color2rgb = (color: string): number[] => {
  const r = parseInt(color.substr(1, 2), 16)
  const g = parseInt(color.substr(3, 2), 16)
  const b = parseInt(color.substr(5, 2), 16)
  return [r, g, b]
}

// -- 颜色Array(255,0,255)格式转为#FF00FF
const rgb2color = (rgb: number[]): string => {
  let pre = '#'
  let i = 0
  for (; i < 3; i += 1) {
    let c = Math.round(rgb[i]).toString(16)
    if (c.length === 1) {
      c = `0${c}`
    }
    pre += c
  }
  return pre.toUpperCase()
}

/**
 * @author lihh
 * @description 生成最终的颜色值
 * @param color1 渐变起始颜色
 * @param color2 渐变结束颜色
 * @param len 表示渐变颜色个数
 */
const generatorColor = (color1: string, color2: string, len: number): string[] => {
  const Gradient = new Array(3)
  const result: string[] = []
  const A = color2rgb(color1)
  const B = color2rgb(color2)
  let i = 0
  const length = len - 1
  for (; i <= length; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      Gradient[j] = A[j] + ((B[j] - A[j]) / length) * i
    }
    const res = rgb2color(Gradient)
    result.push(res)
  }
  return result
}

export default generatorColor
