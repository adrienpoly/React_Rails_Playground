import React, { Component } from 'react';
import { BarChart, Bar, ResponsiveContainer, Cell, Tooltip, YAxis, XAxis } from 'recharts';

function mapData(data){
  if (!data) return
  return data.map((e) => { return {value: e.value, name: e.commit_id.substring(0,7)}})
}

export default class MyBarChart extends Component {

    render() {
      const data   = mapData(this.props.data)
      if (!this.props.data) return <div></div>;
        return (
          <ResponsiveContainer height={320}>
            <BarChart data={data} margin={{top: 30, right: 30, bottom: 20, left: 0}} width={520} height={320}>
              <YAxis type="number" domain={[0, 100]} label={{ value: 'Score', angle: -90, position: 'insideLeft', offset: 15 }} />
              <XAxis dataKey="name" label={{ value: 'Commit', position: 'insideBottom', offset: -10 }}  />
              <Bar dataKey="value" fill="#8884d8" isAnimationActive={false}>
                {
                  this.props.data.map((entry, index) => {
                    const color = entry.value > 90 ? "#009688" : entry.value > 70 ? "#fd7e14" : '#f0384a';
                    return <Cell fill={color} key={index} />;
                  })
                }
              </Bar>
              <Tooltip/>
            </BarChart>
          </ResponsiveContainer>
        );
    }
}
