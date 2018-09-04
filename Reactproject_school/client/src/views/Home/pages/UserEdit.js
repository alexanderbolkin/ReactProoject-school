import React, {Component} from 'react';
import WidgetComponent from "../../../components/Widget";
import { authHeader } from "../../../helpers/auth-header";
// import  userService  from '../../../services/userService';
class UserEditPage extends Component 
{
  constructor(props) 
  {
      super(props);
      this.state = {
      user: {
              username: '',
              email: '',
      }
    };
    this.onEditSubmit = this.onEditSubmit.bind(this);
    // this.adduserService = new userService();
    this.requestOptions = {
      method: 'GET',
      headers: authHeader()
    };
  }
  onEditSubmit(event) 
  {
    event.preventDefault();
    // this.adduserService.editUser(this.props.obj._id);
  }
  componentDidMount() 
  {
    this.loadeditUser();
  }

  loadeditUser() 
  {
    
    fetch('http://127.0.0.1:3003/user/' + this.props.match.params.id, this.requestOptions)

      .then(response => response.json())
      .then(response => {
                  this.setState({ user: response.data })
      });
      console.log(this.setState.user);
  }

  onChange = (e) => {
    const state = this.state.user
    state[e.target.name] = e.target.value;
    this.setState({ user: state });
  }

  onEditSubmit(e) {
    e.preventDefault();
    const { username, email } = this.state.user;
    const { dispatch } = this.props;
    if (username && email) 
    {
      this.edit(username, email);
    }
  }

  edit(username, email) 
  {
    const requestOptions = {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ username, email })
      
    };
    // console.log(this.state.user);
    return fetch('http://127.0.0.1:3003/user/update/'+this.props.match.params.id, requestOptions)
      .then(response => {
        this.props.history.push("/tables");
        // console.log(this.state.user.username);
      
      })
  }

  render() {
    return(
      <div className="content-wrapper container-fluid px-5 mb-4 trans-03-in-out">
        <div className="row">
          <div className="col-lg-12 mb-2 mt-5">
            <WidgetComponent header='General Item' className='shadow-01' moreLink='#!' excerpt='When you create the new school, you should write more correctly.First of all,before click Add button,You have to check spells of text'>
              
            </WidgetComponent>
          </div>
          <div className="col-lg-12 mb-3">
            <WidgetComponent header='Edit Schooldatas' className='shadow-01 mb-4' excerpt='More schools can also be created with the this page.'>
              <form className="container" onSubmit={this.onEditSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationCustom01">User Name</label>
                    <input type="text" className="form-control" placeholder="UserName" name="username" onChange={this.onChange} value={this.state.user.username} required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationCustom02">Email</label>
                    <input type="text" className="form-control" placeholder="Email" onChange={this.onChange} name="email" value={this.state.user.email} required />
                  </div>
                </div>
                <button className="btn btn-primary" type="submit">Update</button>
              </form>
            </WidgetComponent>
          </div>
        </div>

        <h3 className="fw-200 pb-3 pt-3">Caution !</h3>
        <div className="row">
          <div className="col-lg-6">
            <WidgetComponent header='General Item' className='shadow-01' moreLink='#!' excerpt='When you create the new school, you should write more correctly.First of all,before click Add button,You have to check spells of text'>

            </WidgetComponent>
          </div>
          <div className="col-lg-6">
            <WidgetComponent header='Special Item' className='shadow-01 widget-dark bg-dark' moreLink='#!' excerpt='After click Add button, before you want to see the other pages, you have to check the created school in above . 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'>
            </WidgetComponent>
          </div>
        </div>
      </div> 
      
    );
  }
}
export default UserEditPage;
