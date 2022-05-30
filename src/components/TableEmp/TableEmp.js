import React from 'react';
import '../TableEmp/TableEmp.css';

class EmployeeApp extends React.Component {
  constructor(props) {
    super(props)
    this.state =
    {
      tableRows: [],
      values: [],
    }
  }

  render() {
    return (
      <div className="app-container">
        <table className="table table-striped">
          <thead>
            <tr>
              {this.props.tableRows.map((header, index) => {
                return <th key={index}>{header}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {this.props.values.map((value, index) => {
              value[0] = index + 1;
              return (
                <tr key={index}>
                  {value.map((val, i) => {
                    return <td key={i}>{val}</td>;
                  })}
                </tr>
              );
            })}

          </tbody>
        </table>
      </div>
    )
  }
}

EmployeeApp.propTypes = {};

EmployeeApp.defaultProps = {};

export default EmployeeApp;
