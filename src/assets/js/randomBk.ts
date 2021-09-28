/**
 * @author lihh
 * @description 随机背景颜色
 * @returns rgb颜色值
 */
const randomBk = (): string => {
  const getRandom = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min
  return `rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)})`
}

export default randomBk
