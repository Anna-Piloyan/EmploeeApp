import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Employee from '../Employee/Employee';
import '../RegisterForm/RegisterForm.css';


class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      surname: '',
      username: '',
      email: '',
      phone: '',
      access: false,
      nameValid: true,
      surnameValid: true,
      usernameValid: true,
      emailValid: true,
      phoneValid: true
    }
    this.SubmitRegister = this.SubmitRegister.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeSurname = this.handleChangeSurname.bind(this)
    this.handleChangeUsername = this.handleChangeUsername.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePhone = this.handleChangePhone.bind(this)
    this.handleChangeAccess = this.handleChangeAccess.bind(this)

  }


  handleChangeName(e) {
    if (e.target.value.match("^[A-Z]{1}[a-z]{1,20}$") != null)
      this.setState({ name: e.target.value, nameValid: true });
    else
      this.setState({ name: e.target.value, nameValid: false });
  }
  handleChangeSurname(e) {
    if (e.target.value.match("^[A-Z]{1}[a-z]{1,20}$") != null)
      this.setState({ surname: e.target.value, surnameValid: true });
    else
      this.setState({ surname: e.target.value, surnameValid: false });
  }
  handleChangeUsername(e) {
    if (e.target.value.match("^[a-z]{4,20}$") != null)
      this.setState({ username: e.target.value, usernameValid: true });
    else
      this.setState({ username: e.target.value, usernameValid: false });
  }
  handleChangeEmail(e) {
    if (e.target.value.match('^[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.[A-Za-z]+$') != null)
      this.setState({ email: e.target.value, emailValid: true });
    else
      this.setState({ email: e.target.value, emailValid: false });
  }
  handleChangePhone(e) {
    if (e.target.value.match('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{3})(?: *x(\\d+))?\\s*$') != null)
      this.setState({ phone: e.target.value, phoneValid: true });
    else
      this.setState({ phone: e.target.value, phoneValid: false });
  }
  handleChangeAccess(e) {
    this.setState({ access: e.target.checked })
  }

  SubmitRegister(e) {

    e.preventDefault()
    if (this.state.nameValid === true && this.state.surnameValid === true &&
      this.state.usernameValid === true) {

      let newEmployee = {
        id: uuidv4(),
        name: this.state.name,
        surname: this.state.surname,
        username: this.state.username,
        email: this.state.email,
        phone: this.state.phone,
        access: this.state.access.toString(),
        hired_since: new Date().toLocaleString()
      }
      this.props.onItemAdd(newEmployee)
      this.setState({
        name: '',
        surname: '',
        username: '',
        email: '',
        phone: '',
        access: false
      })
    }
    else{
      alert("Something WRONG!!!\nPlease, check all fields!")
    }
  }
  render() {

    var nameColor = this.state.nameValid === true ? "green" : "red";
    var surnameColor = this.state.surnameValid === true ? "green" : "red";
    var usernameColor = this.state.usernameValid === true ? "green" : "red";
    var emailColor = this.state.emailValid === true ? "green" : "red";
    return (

      <form className="row g-3 d-flex justify-content-center" onSubmit={this.SubmitRegister}>
        <h4>Employee Form</h4>
        <Employee
          color1={nameColor}
          color2={surnameColor}
          color3={usernameColor}
          color4={emailColor}
          name={this.state.name}
          surname={this.state.surname}
          username={this.state.username}
          email={this.state.email}
          phone={this.state.phone}
          access={this.state.access}
          handleChangeName={this.handleChangeName}
          handleChangeSurname={this.handleChangeSurname}
          handleChangeUsername={this.handleChangeUsername}
          handleChangeEmail={this.handleChangeEmail}
          handleChangePhone={this.handleChangePhone}
          handleChangeAccess={this.handleChangeAccess} />
        <div className="col-12 d-flex justify-content-center">
          <input type="submit" className="btn btn-success" value="Submit" />
        </div>
      </form>
    )
  }
}




export default RegisterForm;
