import React,{Component} from 'react';
import { LineChart, Line, Tooltip } from 'recharts';
import _ from 'lodash'

function average(data){
  return _.round(_.sum(data) / data.length, 1)
}

function mapData(data){
  // return data.map((value) => {value})
  return data.map((value) => { return {value: value}})
}

export default class ReChart extends Component {
    render() {
      const data = mapData(this.props.data)
      console.log(data);
        return (
          <div>
            <LineChart data={data} width={180} height={120}>
              <Line type="monotone" dataKey="value" dot={false} isAnimationActive={true} stroke="#8884d8" strokeWidth={2} />
              <Tooltip cursor={false} isAnimationActive={false}/>
            </LineChart>
            <div>{average(this.props.data)} {this.props.units}</div>
          </div>
        );
    }
}
