import React,{Component} from 'react';

function max(commits, divider) {
  if (!commits) return 0
  return Math.round(_.max(commits.map((commit) => commit.value)) / divider)
}

function last(commits, divider) {
  if (!commits) return 0
  return Math.round(commits[commits.length - 1].value / divider)
}

export default class ChartStats extends Component {

    render() {
      const divider = this.props.divider || 1
      const unit  = this.props.unit || ''
      const latest = last(this.props.data, divider)
      const best   = max(this.props.data, divider)
        return (
          <div className="row mt-3">
            <div className="offset-sm-2 col-sm-3 offset-sm-2 text-center align-middle">
              <div className="card">
                <div className="card-header text-center">
                  Best
                  <h5>{best} {unit}</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-3 offset-sm-2 text-center align-middle">
              <div className="card">
                <div className="card-header text-center">
                  Latest
                  <h5>{latest} {unit}</h5>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
