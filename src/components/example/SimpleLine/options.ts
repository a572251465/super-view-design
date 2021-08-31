import { EChartsOption } from 'echarts'

/**
 * @author lihh
 * @description 简单折现图 实现参数
 * @returns 参数配置
 */
const getSimpleLineOptions = (): EChartsOption => {
  const monthInfo = Array.from({ length: 12 }).map((_, key) => key + 1)
  const options: EChartsOption = {
    xAxis: {
      type: 'category',
      data: monthInfo,
      // -- 坐标名称
      name: '月',
      // -- 位置
      nameLocation: 'end',
      axisLine: {
        show: true,
        lineStyle: {
          color: '#598fbd'
        }
      },
      axisTick: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      // -- 坐标名称
      name: '金额 (万元)',
      nameLocation: 'end',
      axisLine: {
        show: true,
        lineStyle: {
          color: '#598fbd'
        }
      },
      // -- 分割线
      splitLine: {
        show: true,
        lineStyle: {
          color: '#0f1c32'
        }
      }
    },
    series: [
      {
        data: [200, 270, 380, 200, 260, 130, 300],
        type: 'line',
        itemStyle: {
          color: '#0090ed'
        }
      }
    ]
  }

  return options
}

export default getSimpleLineOptions
