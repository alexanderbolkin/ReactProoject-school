import React, {Component} from 'react';
import WidgetComponent from "../../../components/Widget";
import SchoolDataService from '../../../services/SchoolDataService';
class FormsPage extends Component 
{
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.addSchoolDataService = new SchoolDataService();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addSchoolDataService.sendData(this.state.value);
    this.props.history.push(`${process.env.PUBLIC_URL}/schoolDatas`);
  }

  render() {
    return (
      <div className="content-wrapper container-fluid px-5 mb-4 trans-03-in-out">
        <div className="row">
          <div className="col-lg-12 mb-2 mt-5">
            <WidgetComponent header='General Item' className='shadow-01' moreLink='#!' excerpt='When you create the new school, you should write more correctly.First of all,before click Add button,You have to check spells of text'>
              <p>
                You can create new schools in this page. More and more schoools are crated in this page and you will see a lot of common datas through it.
              </p>
            </WidgetComponent>
          </div>
          <div className="col-lg-12 mb-3">
            <WidgetComponent header='Save New Schooldatas' className='shadow-01 mb-4' excerpt='More schools can also be created with the this page.'>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                  <label htmlFor="school_id">School Name</label>
                  <select className="form-control" id="school_id" name="school_id">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label htmlFor="year">Year</label>
                    <select className="form-control" id="year" name="year">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="month">Month</label>
                      <select className="form-control" id="month" name="month">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="week">Week</label>
                      <select className="form-control" id="week" name="week">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="elect_eur" className="col-form-label">Elect_Eur</label>
                  <input type="text" className="form-control" name="elect_eur" id="elect_eur" placeholder="Elect_Eur"/>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="elect_kwh" className="col-form-label">Elect_kwh</label>
                  <input type="text" className="form-control" name="elect_kwh" id="elect_kwh" placeholder="Elect_kwh"/>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="heating_eur" className="col-form-label">Heating_Eur</label>
                  <input type="text" className="form-control" id="heating_eur" placeholder="Heating_Eur"/>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="heating_kwh" className="col-form-label">Heating_Kwh</label>
                  <input type="text" className="form-control" id="heating_kwh" placeholder="Heating_Kwh"/>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="water_eur" className="col-form-label">Water_Eur</label>
                  <input type="text" className="form-control" id="water_eur" placeholder="Water_Eur"/>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="water_litre" className="col-form-label">Water_Litre</label>
                  <input type="text" className="form-control" id="water_litre" placeholder="Water_Litre"/>
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

export default FormsPage;
