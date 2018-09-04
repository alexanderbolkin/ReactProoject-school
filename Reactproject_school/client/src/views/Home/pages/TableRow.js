import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import  userService  from '../../../services/userService';
class TableRow extends Component 
{
  constructor(props) 
  {
      super(props);
      this.adduserService = new userService();
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) 
  {
    event.preventDefault();
    this.adduserService.deleteData(this.props.obj._id);
    window.location.reload();
  }

  render() 
  {
    // const apis = this.state.users.map((item, i)
    return (
            <tr key={this.props.obj._id}>
            <td> {this.props.obj.firstName}</td>
            <td> {this.props.obj.lastName}</td>
            <td> {this.props.obj.username}</td>
            <td> {this.props.obj.email}</td>
            <td>
                <Link to={`/edit/${this.props.obj._id}`} className="btn btn-primary">Edit</Link>
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
export default TableRow;


