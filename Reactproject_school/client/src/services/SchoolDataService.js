import axios from 'axios';

class SchoolDataService
{
  // sendSchool(data) 
  // {
  //   axios.post('http://localhost:3003/school/add', {school: data})
  //   .then(res => this.setState({ schools: res.data }))
  //   .catch(err => console.log(err))
  // }  
  sendData(data) {
    axios.post('http://localhost:3003/schooldata/add', {schooldata: data})
    .then(res => this.setState({ schooldatas: res.data }))
    .catch(err => console.log(err))
  }

  updateData(data, id){
    axios.post('http://localhost:3003/schooldatas/update/'+id, {schooldata: data})
    .then(res => this.setState({ schooldatas: res.data }))
    .catch(err => console.log(err))
  }

  deleteData(id){
    axios.delete('http://localhost:3003/schooldatas/delete/'+id)
    .then().catch(err => console.log(err))
  }
}

export default SchoolDataService;