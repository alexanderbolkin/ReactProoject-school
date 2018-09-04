import React, {Component} from 'react';

class LogoComponent extends Component {
  render() {
    return (
      <div className="logo px-4 pb-2">
        <a>
          <div className="text-center text-nowrap">
            <i className="fa fa-spin fa-play-circle rounded-circle" aria-hidden="true"/>
            <h3 className="project-title">SchoolManagement</h3>
            <p className="text-muted">
              <small>Alex.01/09/2018</small>
            </p>
          </div>
        </a>
      </div>
    );
  }
}

export default LogoComponent;
