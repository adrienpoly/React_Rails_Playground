import React,{Component} from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash'

function average(data){
  return _.round(_.sum(data) / data.length, 1)
}

export default class Chart extends Component {
    render() {
        return (
          <div>
            <Sparklines data={this.props.data} width={180} height={120}>
              <SparklinesLine color={this.props.color} />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(this.props.data)} {this.props.units}</div>
          </div>
        );
    }
}
