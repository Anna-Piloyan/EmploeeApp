import React from 'react';
import Papa from 'papaparse';
import Dialog from '../Dialog/Dialog';
import RegisterForm from '../RegisterForm/RegisterForm';
import TableEmp from '../TableEmp/TableEmp';
import '../EmployeeApp/EmployeeApp.css';

class EmployeeApp extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [],
            tableRows: [],
            values: [],
            dialogActive: false
           
        };
        this.changeHandler = this.changeHandler.bind(this)
        this.getData = this.getData.bind(this);
        this.addItem = this.addItem.bind(this)
        this.handleClick = this.handleClick.bind(this);
        console.log("Data")
    }

    addItem(newEmployee) {
        const newArr = Object.values(newEmployee).map(value => value)
        this.state.values.unshift(newArr);
        this.setState({values: this.state.values})
        return this.state.values;
    }
  
    getData(result) {
        this.setState({ data: result.data });
        const rowsArray = [];
        const valuesArray = [];
        result.data.map((d) => {
            rowsArray.push(Object.keys(d));
            valuesArray.push(Object.values(d));
            return d;
        });
        this.setState({ tableRows: rowsArray[0] });
        this.setState({ values: valuesArray });

    }

    changeHandler(e) {
        Papa.parse(e.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: this.getData
        });
    }
    handleClick(){
        this.setState(prevState => ({
            dialogActive: !prevState.dialogActive
          }));
     }
    render() {
        return (
            <div className="employee-app">
                <div>
                <button className="btn btn-success float-sm-start" onClick={() => this.setState({ dialogActive: true })}>Add Empoyee</button>
                <input className='btn-success float-sm-end form-control' id="file"type="file" name="file" onChange={this.changeHandler} accept=".csv" /> <br /><br />
                </div>
                <TableEmp tableRows={this.state.tableRows} values={this.state.values}/>
                <Dialog active = {this.state.dialogActive} setActive = {this.handleClick}>
                    <RegisterForm onItemAdd={this.addItem} />
                </Dialog>
            </div>
        );
    }
}

EmployeeApp.propTypes = {};

EmployeeApp.defaultProps = {};

export default EmployeeApp;
