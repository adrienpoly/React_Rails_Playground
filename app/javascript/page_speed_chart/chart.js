import React, { Component } from 'react';
import { ResponsiveContainer } from 'recharts';
import BarChart from './bar_chart'
import AreaChart from './area_chart'
import ChartStats from './chart_stats'
import axios from 'axios'

const components = {
  bar_chart: BarChart,
  area_chart: AreaChart,
}

export default class PageSpeedChart extends Component {

    constructor(props){
    	super(props);
    	this.state = {
        ...props,
        remote: props.data ? false : true
      }
    }

    componentWillMount() {
      if (!this.state.remote) return
      this.setState({ chartType: 'bar_chart' })  // temporary fix
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
      const state = this.state
      const data   = state.data
      const Chart  = components[state.chartType]
      if (!data || !Chart) return <div></div>;
        return (
          <div className="mt-2 mb-3">
            <Chart data={data} unit={state.unit} divider={state.divider} limit={state.limit}/>
            <ChartStats data={data} unit={state.unit} divider={state.divider}/>
          </div>
        );
    }
}
