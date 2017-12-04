import React, { Component } from 'react';
import { AreaChart, Area, ResponsiveContainer, CartesianGrid, Tooltip, YAxis, XAxis } from 'recharts';

function mapData(data, divider){
  if (!data) return
  return data.map((e) => {
    const value = Math.round(parseInt(e.value) / divider)
    const name = e.commit_id.substring(0,7)
    return { value, name }
  })
}

export default class MyAreaChart extends Component {

    render() {
      const props = this.props
      if (!props.data) return <div></div>;
      const data   = mapData(props.data, props.divider)
        return (
          <ResponsiveContainer height={320}>
            <AreaChart data={data} margin={{top: 30, right: 30, bottom: 20, left: 10}} height={320}>
              <XAxis dataKey="name" label={{ value: 'Commit', position: 'insideBottom', offset: -10 }}  />
              <YAxis type="number" domain={[0, 'auto']} label={{ value: props.unit, angle: -90, position: 'insideLeft', offset: 5 }} />
              <CartesianGrid strokeDasharray="3 3"/>
              <Tooltip/>
              <Area type="monotone" dataKey="value" stroke="#009688" fillOpacity={1} fill="#009688" isAnimationActive={false} />
            </AreaChart>
          </ResponsiveContainer>
        );
    }
}
