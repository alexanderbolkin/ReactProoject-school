import axios from 'axios';

class SchoolService 
{
  sendData(data) {
    axios.post('http://localhost:3003/school/create', {schoolName: data})
    .then(res => this.setState({ school: res.data }))
    .catch(err => console.log(err))
  }

  updateData(data, id){
    axios.post('http://localhost:3003/school/update/'+id, {school: data})
    .then(res => this.setState({ schools: res.data }))
    .catch(err => console.log(err))
  }

  deleteData(id){
    axios.delete('http://localhost:3003/school/delete/'+id)
    .then().catch(err => console.log(err))
  }
}

export default SchoolService;