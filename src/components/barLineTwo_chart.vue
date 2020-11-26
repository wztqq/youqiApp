<template>
    <div ref="chart" style="width: 100%; height: 100%"></div>
</template>
<script>
    import echarts from "echarts";

    export default {
        name: "barLineEchart",
        props: {
            optionObj: {
                type: Object,
                default: () => {
                },
            },
        },
        data() {
            return {
                chartBar: null,
            };
        },
        mounted: function () {
            this.$nextTick(function () {
                this.getBarOption();
            });
        },
        watch: {
            optionObj: {
                handler: function (newVal, oldVal) {
                    if (newVal) {
                        this.getBarOption();
                    }
                },
                deep: true,
            },
        },
        methods: {
            getBarOption() {
                let that = this;
                this.chartBar = null;
                // this.chartBar = echarts.init(document.getElementById(this.id));
                this.chartBar = echarts.init(this.$refs.chart);
                let option = {
                    tooltip: {
                        trigger: "axis",
                        // formatter: "{a} <br/>{b}: {c} ({d}%)",
                        formatter(params) {
                            if (params.length && params.length > 1) {
                                return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value +
                                    '亿立方米'
                                    + '</br>' +
                                    params[1].seriesName + ':' +
                                    params[1].value + '%'
                            } else if (params.length === 1 && params[0].seriesName === "天然气月产量") {
                                return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value + '亿立方米'
                            } else if (params.length === 1 && params[0].seriesName === "同比变化") {
                                return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value + '%'
                            }
                        }
                    },
                    legend: {
                        itemWidth: 10,
                        itemHeight: 6,
                        data: this.optionObj.legendData,
                        x: "right",
                        textStyle: {
                            color: "#383838",
                            // fontSize: ""
                        },
                    },
                    xAxis: {
                        type: "category",
                        axisTick: {
                            show: false, // 去除坐标轴间隔
                        },
                        axisLine: {
                            // 坐标轴样式
                            lineStyle: {
                                color: "#9B9DA1",
                            },
                        },
                        axisLabel: {
                            // 坐标轴label样式
                            textStyle: {
                                color: "#9B9DA1",
                            },
                        },
                        data: this.optionObj.xData,
                    },
                    yAxis: [
                        {
                            type: "value",
                            name: this.optionObj.yLeftName,
                            min: this.optionObj.leftMin,
                            max: this.optionObj.leftMax,
                            interval: this.optionObj.leftInterval,
                            axisTick: {
                                show: false, // 去除坐标轴间隔
                            },
                            axisLine: {
                                // 坐标轴样式
                                lineStyle: {
                                    color: "#9B9DA1",
                                },
                            },
                            axisLabel: {
                                // 坐标轴label样式
                                textStyle: {
                                    color: "#9B9DA1",
                                },
                            },
                        },
                        {
                            type: "value",
                            show: false,
                            name: this.optionObj.yRightName,
                            min: this.optionObj.rightMin,
                            max: this.optionObj.rightMax,
                            interval: this.optionObj.rightInterval,
                            axisTick: {
                                show: false, // 去除坐标轴间隔
                            },
                            axisLine: {
                                // 坐标轴样式
                                lineStyle: {
                                    color: "#9B9DA1",
                                },
                            },
                            axisLabel: {
                                // 坐标轴label样式
                                textStyle: {
                                    color: "#9B9DA1",
                                    // fontSize:'16'
                                },
                            },
                        },
                    ],
                    series: [
                        {
                            name: this.optionObj.legendData[0],
                            data: this.optionObj.seriesLeftData,
                            type: "bar",
                            barWidth: this.optionObj.barWidth,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 0, color: "#39F8FF"},
                                    {offset: 1, color: "#45BBFF"},
                                ]),
                            },
                        },
                        {
                            name: this.optionObj.legendData[1],
                            type: "line",
                            // yAxisIndex: 1,
                            smooth: true,
                            symbolSize: this.optionObj.symbolSize,
                            data: this.optionObj.seriesRightData,
                            lineStyle: {
                                color: "#FBAF5D",
                                width: this.optionObj.lineWidth,
                            },
                            color: "#FBAF5D",
                        },
                    ],
                };
                this.chartBar.clear();
                this.chartBar.setOption(option);
                //柱状图点击事件
                this.chartBar.on('click', function (params) {
                    that.$emit('showBar',params);
                });
            },
        },
    };
</script>
