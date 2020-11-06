<template>
    <div ref="chart" style="width: 100%; height: 100%"></div>
</template>

<script>
    import echarts from "echarts";
    export default {
        name: "line-chart",
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
            this.getBarOption();
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
                let yAxisName = this.optionObj.yAxisName;
                this.chartBar = null;
                this.chartBar = echarts.init(this.$refs.chart);

                let option = {
                    tooltip: {
                        trigger: "axis",
                        formatter(params) {
                            return params[0].name + '</br>' + params[0].seriesName + ':' + params[0].value + yAxisName + '</br>' +
                                params[1].seriesName + ':' +
                                params[1].value + yAxisName + '</br>' +
                                params[2].seriesName + ':' +
                                params[2].value + yAxisName
                        }
                    },
                    grid: {
                        height: 160,
                        bottom: 50,
                    },
                    legend: {
                        itemWidth: 14,
                        itemHeight: 2,
                        top: 0,
                        right: "center",
                        itemGap: 20,
                        data: this.optionObj.legendData,
                    },
                    xAxis: [
                        {
                            type: "category",
                            data: this.optionObj.xAxisData,
                            axisPointer: {
                                type: "shadow",
                            },
                            axisLabel: {
                                fontSize: 12,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "#9B9DA1", // 颜色
                                    width: 1, // 粗细
                                },
                            },
                            axisTick: {
                                show: false,
                            },
                        },
                    ],
                    yAxis: [
                        {
                            name: this.optionObj.yAxisName,
                            type: "value",
                            min: 0,
                            interval: 2,
                            axisLabel: {
                                fontSize: 12,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "#9B9DA1", // 颜色
                                    width: 1, // 粗细
                                },
                            },
                            axisTick: {
                                show: false,
                            },
                        },
                    ],
                    series: [
                        {
                            name: this.optionObj.seriesName ? this.optionObj.seriesName[0] : '',
                            type: "bar",
                            barWidth: this.optionObj.barWidth ? this.optionObj.barWidth : 3,
                            barGap: this.optionObj.barGap ? '-1' : 0,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, this.optionObj.seriesColorOne),
                                barBorderRadius: this.optionObj.barGap ? [20, 20, 20, 20] : [0, 0, 0, 0]
                            },
                            data: this.optionObj.seriesDataOne,
                        },
                        {
                            name: this.optionObj.seriesName ? this.optionObj.seriesName[1] : '',
                            type: "bar",
                            barWidth: this.optionObj.barWidth ? this.optionObj.barWidth : 3,
                            barGap: this.optionObj.barGap ? '-1' : 0,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, this.optionObj.seriesColorTwo),
                            },
                            data: this.optionObj.seriesDataTwo,
                        },
                        {
                            name: this.optionObj.seriesName ? this.optionObj.seriesName[2] : '',
                            type: "bar",
                            barWidth: this.optionObj.barWidth ? this.optionObj.barWidth : 3,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, this.optionObj.seriesColorThree),
                            },
                            data: this.optionObj.seriesDataThree,
                        },
                    ],
                };
                this.chartBar.clear();
                this.chartBar.setOption(option);
            },
        },
    };
</script>

<style scoped>

</style>
