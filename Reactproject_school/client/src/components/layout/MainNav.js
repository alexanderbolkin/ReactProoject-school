import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Collapse } from 'reactstrap';
import { authHeader } from '../../helpers/auth-header';
class MainNavComponent extends Component {
  constructor(props) 
  {
    super(props);
    this.state = { showNavItem: { root: 0, sub: 0 },
    schools:[]
  };
  // console.log('schools');
    this .requestOptions = {
      method:'GET',
      headers:authHeader()
    };
  }
  componentWillMount() 
  {
    this.loadSchoolName();
  }
  loadSchoolName() 
  {
    fetch('http://127.0.0.1:3003/school/getAll', { method: 'get' }, this.requestOptions)
      .then(response => response.json())
      //.then(response => response.data)
      .then(response => {
        this.setState({ schools: response.data })
        console.log('================================')
      });
  }


  menuToggle(e) 
  {
    let navRoot = +e.currentTarget.dataset.navRoot || 0;
    let navSub = +e.currentTarget.dataset.navSub || 0;

    if (this.state.showNavItem.root === navRoot && navSub === 0) {
      this.setState({ showNavItem: { root: 0, sub: 0 } });
    } else if (this.state.showNavItem.sub >= navSub) {
      this.setState({ showNavItem: { root: navRoot, sub: --navSub } });
    } else {
      this.setState({ showNavItem: { root: navRoot, sub: navSub } });
    }
  }

  render() 
  {
    const lists = this.state.schools.map(function (item, i)
    {
      return <li key={item._id} className="nav-item">
        <Link className="nav-link" to={`/school/${item._id}`} >
          <i className="fa fa-id-card" aria-hidden="true" />
          <span className="d-none d-lg-inline">{item.schoolName}</span>
        </Link>
      </li>
    })
    return (
      <nav className="sidebar-nav">
        <div className="mb-1 text-uppercase d-none d-lg-block text-muted">
          <small>School Datas</small>
        </div>
        <ul id="sidebarNav" className="nav nav-dark flex-column">
          <li className="nav-item">
            <Link className="nav-link" to={`${process.env.PUBLIC_URL}/dashboard`}>
              <i className="fa fa-tachometer" aria-hidden="true"/>
              <span className="d-none d-lg-inline">Dashboards</span>
            </Link>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link" to={`${process.env.PUBLIC_URL}/schoolAdd` }>
              <i className="fa fa-list" aria-hidden="true"/>
              <span className="d-none d-lg-inline">Add School</span>
              <Badge color="success" className='text-uppercase float-right d-none d-lg-block'>New</Badge>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to={`${process.env.PUBLIC_URL}/saveNewData`}>
              <i className="fa fa-id-card" aria-hidden="true"/>
              <span className="d-none d-lg-inline">SaveNewSchoolData </span>
            </Link>
          </li>

          <div className="mt-4 mb-1 text-uppercase d-none d-lg-block text-muted">
            <small className="userlist">User List</small>
          </div>
          <li className="nav-item">
            <Link className="nav-link" to={`${process.env.PUBLIC_URL}/tables`}>
              <i className="fa fa-table" aria-hidden="true"/>
              <span className="d-none d-lg-inline">Users</span>
            </Link>
          </li>


          <li className="nav-item">
            <Link className="nav-link" to={`${process.env.PUBLIC_URL}/grid`}>
              <i className="fa fa-th" aria-hidden="true"/>
              <span className="d-none d-lg-inline">Deleted User</span>
              <Badge color="danger" className='text-uppercase float-right d-none d-lg-block'>Hot</Badge>
            </Link>
          </li>
        </ul>
        
        <div className="mt-4 mb-1 text-uppercase d-none d-lg-block text-muted">
          <small>Others</small>
        </div>
        <ul className="nav nav-dark flex-column">
          <li className="nav-item">
            <a className="nav-link" onClick={this.menuToggle.bind(this)} aria-expanded={this.state.showNavItem.root === 2}
               data-nav-root="2">
              <i className="fa fa-files-o" aria-hidden="true"/>
              <span className="d-none d-lg-inline">Account</span>
            </a>
            <Collapse isOpen={this.state.showNavItem.root === 2} tag="ul" className="nav flex-column bg-dark">
              <li className="nav-item">
                <Link className="nav-link nav-level-1" to={`${process.env.PUBLIC_URL}/login`}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-level-1" to={`${process.env.PUBLIC_URL}/404`}>404 Error</Link>
              </li>
            </Collapse>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`${process.env.PUBLIC_URL}/charts`}>
              <i className="fa fa-pie-chart" aria-hidden="true"/>
              <span className="d-none d-lg-inline">Charts</span>
            </Link>
          </li>
        </ul>
        <div className="mt-4 mb-1 text-uppercase d-none d-lg-block text-muted">
          <small>schools</small>
        </div>

        <ul className="nav nav-dark flex-column">
          <li className="nav-item">
              <a className="nav-link" onClick={this.menuToggle.bind(this)} aria-expanded={this.state.showNavItem.root === 1}
                data-nav-root="1">
                <i className="fa fa-sitemap" aria-hidden="true"/>
                {/* <span className="d-none d-lg-inline">mmmm</span> */}
                <span className="d-none d-lg-inline">{lists}</span>
              </a>
              <Collapse isOpen={this.state.showNavItem.root === 1} tag="ul" className="nav flex-column bg-dark">
                <li className="nav-item">
                  <Link className="nav-link nav-level-1" to={`${process.env.PUBLIC_URL}/SchoolDatas`}>
                    <i className="fa fa-table" aria-hidden="true"/>
                    <span className="d-none d-lg-inline">SchoolDatas</span>
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link" to={`${process.env.PUBLIC_URL}/charts`}>
                    <i className="fa fa-pie-chart" aria-hidden="true"/>
                    <span className="d-none d-lg-inline">Charts</span>
                  </Link>
                </li>
              </Collapse>
            </li>
              
        </ul>
      </nav>
    );
  }
}


export default MainNavComponent;
