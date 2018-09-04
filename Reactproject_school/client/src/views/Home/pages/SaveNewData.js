import React, {Component} from 'react';
import WidgetComponent from "../../../components/Widget";
import SchoolDataService from '../../../services/SchoolDataService';
import { authHeader } from '../../../helpers/auth-header';

class SaveNewData extends Component 
{
    constructor(props) 
    {
        super(props);
            
        this.state = {
                schools:[],
                schoolData:{_id: '',year: '',week: '',month: '',elect_eur: '',elect_kwh: '',heating_eur: '',heating_kwh: '',water_eur: '',water_litres: ''},
                months:
                        [
                            {id:1,month:'Jan'},{id:2,month:'Feb'},{id:3,month:'Mar'},{id:4,month:'Apr'},
                            {id:5,month:'May'},{id:6,month:'June'},{id:7,month:'July'},{id:8,month:'Aug'},
                            {id:9,month:'Sep'},{id:10,month:'Oct'},{id:11,month:'Nob'},{id:12,month:'Dec'}
                        ],
                        value: '0'
                };
            
                this.onSaveSubmit = this.onSaveSubmit.bind(this);
                this.onChange = this.onChange.bind(this);
                
                this.requestOptions ={
                                        method: 'GET',
                                        headers: authHeader()
                                    };
        }

    componentWillMount() 
      {
        this.loadSchoolByIdData();
      }
    
      loadSchoolByIdData() 
      {
        // + this.props.match.params.id
        fetch('http://localhost:3003/api/schools', this.requestOptions)
        
        //   .then(response => response.json())
            .then(response => response.data)
            .then(response => {this.setState({ school: response })
                    console.log(this.state.school);
            });
      }

        getYears()
        {
            var years = [];
            var i = 0;
            for (let year = 2000; year < 2020; year++) {
                years[i] = year;
                i++;
            }      
            return years.map(function(year, i) {
                return <option value={year} key={i}>{year}</option>;
            })
        }
        
        getWeeks()
        {
            var weeks = [];
            var i = 0;
        for (let week = 1; week <= 54; week++) 
        {
            weeks[i] = week;
            i++;
        }      
        return weeks.map(function(week, i) 
        {
            return <option value={week} key={i}>{week}</option>;
        })
        
    }

    onChange(event) 
    {
        const schoolData = Object.assign({}, this.state.schoolData);
        schoolData[event.target.name] = event.target.value;
        this.setState({schoolData: schoolData});
        this.setState({value: event.target.value});
        // console.log(this.state.schoolData);
    }
    
      
    handleChange(event) 
    {
        this.setState({value: event.target.value});
    }
    
    onSaveSubmit(e) 
    {
        e.preventDefault();
        const { schoolName, school} = this.state.school;
        const { dispatch } = this.props;
        this.save(this.state.schoolData);
    }
    
    save(data) 
    {
        console.log('====in here==========')
        console.log(data);
        const requestOptions = 
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ data })
        };
        return fetch('http://127.0.0.1:3003/api/schools/statistics', requestOptions)
          .then(response => {
            this.props.history.push("/");
        })
    
    }
    
    render(){
        const schoolData= this.state.schoolData;
        
        const school = this.state.schools.map(function (item, i) 
        {
          return 
            <option value={item._id} id={item._id} key={i+1} className="nav-item">
                    {item.schoolName}
            </option>
        })

        const month = this.state.months.map(function (item, i) 
        {
          return <option value={item.id}  key={item.id} className="nav-item">
                {item.month}
          </option>
        }) 
        
        return (
          <div className="content-wrapper container-fluid px-5 mb-4 trans-03-in-out">
            <div className="row">
              <div className="col-lg-12 mb-2 mt-5">
                <WidgetComponent header='General Item' className='shadow-01' moreLink='#!' excerpt='When you create the new school, you should write more correctly.First of all,before click Add button,You have to check spells of text'>
                  
                </WidgetComponent>
              </div>
              <div className="col-lg-12 mb-3">
                <WidgetComponent header='Save New Schooldatas' className='shadow-01 mb-4' excerpt='More schools can also be created with the this page.'>
                <form onSubmit={this.onSaveSubmit}>
                  <div className="form-group">
                      <label htmlFor="school_id">School Name</label>
                      <select className="form-control" name="_id" value={schoolData._id}  onChange={this.onChange} required>
                        <option value='0'>Choose</option>
                                        {school}
                      </select>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-4">
                      <label htmlFor="year">Year</label>
                        <select className="form-control" name="year" value={schoolData.year}  onChange={this.onChange}>
                            <option value='0'>Choose</option>
                                        {this.getYears()}
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="month">Month</label>
                            <select className="form-control" name="month"  value={schoolData.month}  onChange={this.onChange}>
                                <option value='0'>Choose</option>
                                               {month}
                            </select>
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="week">Week</label>
                            <select className="form-control" name="week"  value={schoolData.week}  onChange={this.onChange}>
                                <option value='0'>Choose</option>
                                                {this.getWeeks()}
                            </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="elect_eur" className="col-form-label">Elect_Eur</label>
                      <input type="text"  onChange={this.onChange}  value={schoolData.elect_eur}
                                    name="elect_eur"  className="form-control" placeholder="Electro euro" required/>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="elect_kwh" className="col-form-label">Elect_kwh</label>
                      <input type="text"  onChange={this.onChange}   value={schoolData.elect_kwh}
                                    name="elect_kwh"  className="form-control" placeholder="Electro Kwh" required/>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="heating_eur" className="col-form-label">Heating_Eur</label>
                      <input type="text"  onChange={this.onChange}    value={schoolData.heating_eur}
                                    name="heating_eur"  className="form-control" placeholder="Heating euro" required/>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="heating_kwh" className="col-form-label">Heating_Kwh</label>
                      <input type="text"  onChange={this.onChange}  value={schoolData.heating_kwh}
                                    name="heating_kwh"  className="form-control" placeholder="Heating Kwh" required/>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="water_eur" className="col-form-label">Water_Eur</label>
                      <input type="text"  onChange={this.onChange}  value={schoolData.water_eur}
                                    name="water_eur"  className="form-control" placeholder="Water euro" required/>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="water_litres" className="col-form-label">Water_Litre</label>
                      <input type="text"  onChange={this.onChange}  value={schoolData.water_litres}
                                    name="water_litres"  className="form-control" placeholder="Water_litres" required/>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">Save</button>
                  </form>
                </WidgetComponent>
              </div>
            </div>
          </div>
          );
        }

      
    }

export default SaveNewData;
