import React,{Component} from 'react';

function max(commits) {
  if (!commits) return 0
  return _.max(commits.map((commit) => commit.value))
}

function last(commits) {
  if (!commits) return 0
  return commits.pop().value
}

export default class ChartStats extends Component {

    render() {
      const latest = last(this.props.data)
      const best   = max(this.props.data)
        return (
          <div className="row">
            <div className="col-xs-6 col-sm-6 text-center align-middle">
              <h4>Latest</h4>
              {latest}
            </div>
            <div className="col-xs-6 col-sm-6 text-center align-middle">
              <h4>Best</h4>
              {best}
            </div>
          </div>
        );
    }
}
