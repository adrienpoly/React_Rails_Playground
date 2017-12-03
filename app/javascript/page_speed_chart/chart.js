import React, { Component } from 'react';
import { BarChart, Bar, Cell,
         Tooltip, YAxis, XAxis, ResponsiveContainer } from 'recharts';
import ChartStats from './chart_stats'
import axios from 'axios'
import './chart.scss'

function mapData(data){
  if (!data) return
  return data.map((e) => { return {value: e.value, name: e.commit_id.substring(0,7)}})
}

export default class PageSpeedChart extends Component {

    constructor(props){
    	super(props);
    	this.state = {
        data: props.data,
        remote: props.data ? false : true
      }
    }

    componentWillMount() {
      if (!this.state.remote) return
      axios.get('/commits?order=asc')
      .then( response => response.data )
      .then( data => {
        return data.map((commit) => {
          return {commit_id: commit.slug, value: commit.page_speed.ruleGroups.SPEED.score}
        })
      })
      .then( commits => this.setState({data: commits}) )
    }

    render() {
      const data   = mapData(this.state.data)
      if (!data) return <div></div>;
        return (
          <div className="mt-2 mb-3">
            <div className="page-speed-chart">
              <ResponsiveContainer height={320}>
                <BarChart data={data} margin={{top: 30, right: 30, bottom: 20, left: 0}} width={520} height={250}>
                  <YAxis type="number" domain={[0, 100]} label={{ value: 'Score', angle: -90, position: 'insideLeft', offset: 15 }} />
                  <XAxis dataKey="name" label={{ value: 'Commit', position: 'insideBottom', offset: -10 }}  />
                  <Bar dataKey="value" fill="#8884d8" isAnimationActive={false}>
                    {
                      data.map((entry, index) => {
                        const color = entry.value > 90 ? "#009688" : entry.value > 70 ? "#fd7e14" : '#f0384a';
                        return <Cell fill={color} key={index} />;
                      })
                    }
                  </Bar>
                  <Tooltip/>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <ChartStats data={data} />
          </div>
        );
    }
}
