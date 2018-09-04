import axios from 'axios';

class userService 
{
  sendData(data) {
    axios.post('http://localhost:3003/user/add', {user: data})
    .then(res => this.setState({ users: res.data }))
    .catch(err => console.log(err))
  }

  updateData(data, id){
    axios.post('http://localhost:3003/user/update/'+id, {user: data})
    .then(res => this.setState({ users: res.data }))
    .catch(err => console.log(err))
  }

  deleteData(id)
  {
    // const apis = this.state.users.map((item, i)
    axios.delete('http://localhost:3003/user/delete/'+id ,{ method: 'delete' }, this.requestOptions)
    .then(response => { this.props.history.push("/")})
    .then().catch(err => console.log(err))
  }
}

export default userService;