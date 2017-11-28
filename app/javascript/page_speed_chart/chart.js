import React,{Component} from 'react';
import { LineChart, Line, Tooltip, YAxis, XAxis, Legend } from 'recharts';
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
        return (
          <div>
            <LineChart data={data} width={530} height={250}
              margin={{top: 30, right: 20, bottom: 20, left: 0}}>
              <defs>
                 <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="0%" stopColor="#009688" stopOpacity={1}/>
                   <stop offset="30%" stopColor="#009688" stopOpacity={1}/>
                   <stop offset="30%" stopColor="#fd7e14" stopOpacity={1}/>
                   <stop offset="50%" stopColor="#fd7e14" stopOpacity={1}/>
                   <stop offset="50%" stopColor="#f0384a" stopOpacity={1}/>
                   <stop offset="100%" stopColor="#f0384a" stopOpacity={1}/>
                 </linearGradient>
               </defs>
              <YAxis type="number" domain={[0, 100]} label={{ value: 'Score', angle: -90, position: 'insideLeft', offset: 15 }} />
              <XAxis dataKey="name" label={{ value: 'Commit', position: 'insideBottom', offset: -10 }}  />
              <Line type="monotone" dataKey="value" dot={false} isAnimationActive={false} stroke="url(#colorValue)" strokeWidth={3} />
              <Tooltip/>
            </LineChart>
            <p className="text-muted text-center">Latest = {latest}, Best = {best} </p>
          </div>
        );
    }
}
