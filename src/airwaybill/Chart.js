import React from "react";
// import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";

export default function Chart() {
  var options = {
    series: [
      {
        data: [100, 0, 200, 0, 300, 0, 400, 0, 500],
      },
    ],
    chart: {
      type: "bar",
      height: 380,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        barHeight: "100%",
        distributed: true,
        horizontal: true,
        dataLabels: {
          position: "bottom",
        },
      },
    },
    colors: ["#9DFE80", "#fff", "#FFE67C", "#fff", "#E59F25", "#fff", "#B2A040", "#fff", "#FC7F59", "#fff"],
    dataLabels: {
      enabled: false,
      textAnchor: "start",
      style: {
        colors: ["#fff"],
      },
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
      },
      offsetX: 0,
      dropShadow: {
        enabled: false,
      },
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "India",
      ],
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    title: {
      text: "",
      align: "center",
      floating: true,
    },
    subtitle: {
      text: "",
      align: "center",
    },
    tooltip: {
      theme: "dark",
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function () {
            return "";
          },
        },
      },
    },
    legend: {
      show: false,
    },
  };
  return <ReactApexChart options={options} series={options.series} type="bar" width="100%" />;
}
