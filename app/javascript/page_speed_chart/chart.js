import React,{Component} from 'react';
import { BarChart, Bar, Cell, LineChart, Line, Tooltip, YAxis, XAxis, ResponsiveContainer } from 'recharts';
import _ from 'lodash'
import axios from 'axios'



function mapData(data){
  if (!data) return
  return data.map((e) => { return {value: e.value, name: e.commit_id.substring(0,7)}})
}

function max(commits) {
  if (!commits) return 0
  return _.max(commits.map((commit) => commit.value))
}

function last(commits) {
  if (!commits) return 0
  return commits.pop().value
}

export default class PageSpeedChart extends Component {

    constructor(props){
    	super(props);
    	this.state = {data: ''};
    }

    componentWillMount() {
      axios.get('/commits')
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
      const latest = last(this.state.data)
      const best   = max(this.state.data)
      if (!data) return <div></div>;
        return (
          <div>
              <BarChart data={data} margin={{top: 30, right: 20, bottom: 20, left: 0}} width={540} height={250}>
                <YAxis type="number" domain={[0, 100]} label={{ value: 'Score', angle: -90, position: 'insideLeft', offset: 15 }} />
                <XAxis dataKey="name" label={{ value: 'Commit', position: 'insideBottom', offset: -10 }}  />
                <Bar dataKey="value" fill="#8884d8" >
                  {
                    data.map((entry, index) => {
                      const color = entry.value > 90 ? "#009688" : entry.value > 70 ? "#fd7e14" : '#f0384a';
                      return <Cell fill={color} key={index} />;
                    })
                  }
                </Bar>
                <Tooltip/>
              </BarChart>
              <p className="text-muted text-center">Latest = {latest}, Best = {best} </p>
          </div>
        );
    }
}
