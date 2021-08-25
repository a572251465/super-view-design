import { EChartsOption } from "echarts";

/**
 * @author lihh
 * @description 获取图形参数
 */
const getOptions = (): EChartsOption => {
  const options: EChartsOption = {
    legend: {
      show: true,
      left: "59%",
      top: "35%",
      orient: "horizontal",
      width: 250,
      itemGap: 10,
      itemWidth: 15,
      itemHeight: 15,
      textStyle: {
        color: "#32526e",
        width: 80,
        overflow: "breakAll",
      },
    },
    series: [
      // 外圈渐变
      {
        // -- 类型
        type: "gauge",
        center: ["30%", "50%"],
        // -- 起始角度
        startAngle: 360,
        radius: "100%",
        // -- 结束角度
        endAngle: 0,
        // -- 表示线的相关操作
        axisLine: {
          // -- 设置线不显示
          show: false,
          // -- 线样式
          lineStyle: {
            width: -7,
            opacity: 0,
            color: [
              [0.25, "#1fa58d"],
              [0.5, "#01386e"],
              [0.75, "#01386e"],
              [1, "#1fa58d"],
            ],
          },
        },
        title: { show: false },
        detail: { show: false },
        splitLine: { show: false },
        axisTick: {
          show: true,
          // -- 刻度之间分割数
          splitNumber: 12,
          // -- 刻度长度
          length: 16,
          distance: 15,
          lineStyle: {
            // -- 刻度颜色 跟线的样式保持一致
            color: "auto",
            // -- 刻度宽度
            width: 2,
          },
        },
        axisLabel: { show: false },
        pointer: { show: false },
        itemStyle: {
          color: "red",
        },
        data: [
          {
            value: 180,
            name: "test gauge",
          },
        ],
      },

      // -- 内圈饼状图
      {
        type: "pie",
        // -- 表示饼状图的半径
        radius: ["60%", "82%"],
        center: ["30%", "50%"],
        itemStyle: {
          // -- 圆形边框的颜色
          borderColor: "black",
          // -- 圆形边框的宽度
          borderWidth: 4,
        },
        // -- 显示标签
        label: {
          show: false,
        },
        // -- 扇形区域以及标签的样式
        emphasis: {
          label: {
            show: false,
          },
        },
        // -- 引导线
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "显示事业" },
          { value: 735, name: "智慧军工事业" },
          { value: 580, name: "智能物联" },
          { value: 484, name: "艺云" },
          { value: 300, name: "CHRO" },
          { value: 1048, name: "CFO" },
          { value: 735, name: "CSO" },
          { value: 580, name: "CSCO" },
          { value: 484, name: "CASO" },
          { value: 300, name: "集团办公室" },
          { value: 1048, name: "中祥英" },
          { value: 735, name: "集团通用类办公系统" },
        ],
      },

      // -- 最内圈的线
      {
        type: "gauge",
        center: ["30%", "50%"],
        startAngle: 360,
        radius: "58%",
        endAngle: 0,
        // -- 表示线的相关操作
        axisLine: {
          // -- 设置线不显示
          show: true,
          // -- 线样式
          lineStyle: {
            width: 1,
            opacity: 1,
            color: [[1, "#16273f"]],
          },
        },
        title: { show: false },
        detail: { show: false },
        splitLine: { show: false },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        pointer: { show: false },
      },
    ],
  };
  return options;
};

export default getOptions;
