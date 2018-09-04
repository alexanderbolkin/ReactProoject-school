import React, { Component } from 'react';
import WidgetComponent from "../../../components/Widget";
import { Button, ButtonGroup } from 'reactstrap';
import axios from 'axios';
import TableRow from '../pages/TableRow';

class TablesPage extends Component 
{
  constructor(props) 
  {
    super(props);
    this.state = { value: '', users: [] };
  }
  componentWillMount() 
  {
    axios.get('http://127.0.0.1:3003/user')

      .then(response => 
      {
        this.setState({ users: response.data.data.docs });
      })
      .catch(function (error) 
      {
        console.log(error);
      });
  }

  tableData() 
  {
    if (this.state.users instanceof Array) 
    {
      return this.state.users.map(function (object, i) 
      {
        return <TableRow obj={object} key={i} />;
      })
    }
  }
  render() 
  {
    return (
      <div className="content-wrapper container-fluid px-5 mb-4 trans-03-in-out mt-5">

        <div className="row">
          <div className="col-lg-12 mb-3 mt-2">
            <WidgetComponent header='General Item' className='shadow-01 mt-2' moreLink='#!' excerpt='When you create the new school, you should write more correctly.First of all,before click Add button,You have to check spells of text.'>
              <p className="col-lg-12 mb-3 mt-2">You can create new schools in this page. More and more schoools are crated in this page and you will see a lot of common datas through it.
              </p>
            </WidgetComponent>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mb-5 mt-5">
            <WidgetComponent header='User List table' className='shadow-01' excerpt='User List.'>
              <table className="table table-bordered mt-3">
                <thead>
                  <tr>
                    {/* <th>#</th> */}
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.tableData()
                  }

                </tbody>
              </table>
            </WidgetComponent>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12  mt-5"></div>
        </div>

      </div>
    );
  }
}

export default TablesPage;
