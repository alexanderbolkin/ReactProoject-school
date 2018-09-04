import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import SchoolDataService from '../../../services/SchoolDataService';

class SchoolTableDatas extends Component {

  constructor(props) {
      super(props);
      this.addSchoolDataService = new SchoolDataService();
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addSchoolDataService.deleteData(this.props.obj._id);
  }

  render() 
  {
    return (
        <tr>
          <td>{this.props.obj._id}</td>
          <td>{this.props.obj.school_id}</td>
          <td>{this.props.obj.year}</td>
          <td>{this.props.obj.month}</td>
          <td>{this.props.obj.week}</td>
          <td>{this.props.obj.elect_eur}</td>
          <td>{this.props.obj.elect_kwh}</td>
          <td>{this.props.obj.heating_eur}</td>
          <td>{this.props.obj.heating_kwh}</td>
          <td>{this.props.obj.water_eur}</td>
          <td>{this.props.obj.water_litres}</td>
          <td>
          <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <form onSubmit={this.handleSubmit}>
              <input type="submit" value="Delete" className="btn btn-danger"/>
            </form>
          </td>
        </tr>
    );
  }
}

export default SchoolTableDatas;
