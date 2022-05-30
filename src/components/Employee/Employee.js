import React from 'react';
import './Employee.css';

class Employee extends React.Component {
  constructor(props) {
    super(props)
    this.state = {    
      color1: '',
      color2: '',
      color3: '',
      color4: '',
      
    }
  }
  render() {
    return (
      <div className="col-md-11 center">
        <div className="row">
          <div className="col-md-11">
           
            <input type="text" className="form-control" placeholder='Name'
              id="name" value={this.props.name} style={{color: this.props.color1, borderColor: this.props.color1}}
              onChange={this.props.handleChangeName} required />
          </div><br/><br/>
          <div className="col-md-11">
           
            <input type="text" className="form-control" id="surname" placeholder='Surname'
              value={this.props.surname} style={{color: this.props.color2, borderColor: this.props.color2}}
              onChange={this.props.handleChangeSurname} required />
          </div><br/><br/>
          <div className="col-md-11">
           
            <input type="text" className="form-control" id="username" placeholder='Username'
              value={this.props.username} style={{color: this.props.color3, borderColor: this.props.color3}}
              onChange={this.props.handleChangeUsername} required />
          </div><br/><br/>
          <div className="col-md-11">
           
            <input type="email" className="form-control" id="email" placeholder='Email'
              value={this.props.email} style={{color: this.props.color4, borderColor: this.props.color4}}
              onChange={this.props.handleChangeEmail} required />
          </div><br/><br/>
          <div className="col-md-11">
           
            <input type="tel" className="form-control" id="phone" placeholder='Phone'
              value={this.props.phone} style={{color: this.props.color, borderColor: this.props.color}}
              onChange={this.props.handleChangePhone} />
          </div><br/><br/>

          <div className="col-md-11">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="access"
               checked={this.props.access}
               onChange={this.props.handleChangeAccess}  />
              <label className="form-check-label" htmlFor="access">
                Access allowed
              </label>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

Employee.propTypes = {};

Employee.defaultProps = {};

export default Employee;
