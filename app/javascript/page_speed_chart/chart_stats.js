import React,{Component} from 'react';

function max(commits) {
  if (!commits) return 0
  return _.max(commits.map((commit) => commit.value))
}

function last(commits) {
  if (!commits) return 0

  console.log('last', commits[-1]);
  return commits[commits.length - 1].value
}

export default class ChartStats extends Component {

    render() {
      console.log(this.props.data);
      const latest = last(this.props.data)
      const best   = max(this.props.data)
        return (
          <div className="row mt-3">
              <div className="col-sm-3 offset-sm-2 text-center align-middle">
                <div className="card">
                  <div className="card-header text-center">
                    Latest
                    <h5>{latest}</h5>
                  </div>
                </div>
              </div>
              <div className="offset-sm-2 col-sm-3 offset-sm-2 text-center align-middle">
                <div className="card">
                  <div className="card-header text-center">
                    Best
                    <h5>{best}</h5>
                  </div>
                </div>
              </div>
          </div>
        );
    }
}
