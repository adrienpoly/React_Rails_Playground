import React, { Component } from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  ReferenceLine,
  CartesianGrid,
  Tooltip,
  YAxis,
  XAxis
} from "recharts";
import _ from "lodash";

function mapData(data, divider) {
  return data.map(e => {
    const value = Math.round(parseInt(e.value) / divider);
    const name = e.commit_id.substring(0, 7);
    return { value, name };
  });
}

function offset(data, limit) {
  const max = Math.round(_.max(data.map(e => e.value)));
  return 1 - limit / max;
}

export default class MyAreaChart extends Component {
  render() {
    const props = this.props;
    if (!props.data) return <div />;
    const data = mapData(props.data, props.divider);
    const offGreen = offset(data, props.limit * 0.9);
    const offOrange = offset(data, props.limit * 1.3);
    const offRed = offset(data, props.limit * 2);
    const id = props.name.replace(/\W/g, "_");
    return (
      <ResponsiveContainer height={320}>
        <AreaChart
          data={data}
          margin={{ top: 30, right: 30, bottom: 20, left: 10 }}
          height={320}
        >
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
              <stop offset={offRed} stopColor="#f0384a" stopOpacity={0.6} />
              <stop offset={offOrange} stopColor="#fd7e14" stopOpacity={0.6} />
              <stop offset={offGreen} stopColor="#009688" stopOpacity={0.7} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            label={{ value: "Commit", position: "insideBottom", offset: -10 }}
          />
          <YAxis
            type="number"
            domain={[0, "auto"]}
            label={{
              value: props.unit,
              angle: -90,
              position: "insideLeft",
              offset: 5
            }}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip payload={[{ name: "05-01", value: 12, unit: "kg" }]} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="none"
            fillOpacity={1}
            fill={`url(#${id})`}
            isAnimationActive={false}
          />
          <ReferenceLine
            y={props.limit}
            stroke="#009688"
            strokeDasharray="3 3"
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
