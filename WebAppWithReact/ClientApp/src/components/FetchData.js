import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
      this.state = {
          forecasts: [],
          loading: true,
          modalTitle: "",
          EmployeeName: "",
          EmployeeId: 0,
      };
  }

  componentDidMount() {
      this.refreshList();
    }

    changeEmployeeName = (e) => {
        this.setState({EmployeeName: e.target.value });
    }

    addClick() {
        this.setState({
            modalTitle: "Add Employee",
            EmployeeId: 0,
            EmployeeName: ""
        });
    }
    editClick(emp) {
        this.setState({
            modalTitle: "Edit Employee",
            EmployeeId: emp.employeeId,
            EmployeeName: emp.employeeName
        });
    }
    refreshList() {
        fetch('weatherforecast')
            .then(response => response.json())
            .then(data => {
                this.setState({ forecasts: data});
            });
    }
    populateWeatherData() {
        //fetch('weatherforecast')
        //    .then(response => response.json())
        //    .then(data => {
        //        this.setState({ forecasts: data});
        //    });

      const response = fetch('weatherforecast');
      const data = response.json();
      this.setState({ forecasts: data, loading: false });
    }

  static renderForecastsTable(forecasts) {
      return (

      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>EmployeeName</th>
            <th>Birthday</th>
            <th>Position</th>
            <th>Gender</th>
            <th>Decree</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(emp =>
            <tr key={emp.employeeId}>
              <td>{emp.employeeId}</td>
              <td>{emp.birthday}</td>
              <td>{emp.position}</td>
              <td>{emp.gender}</td>
              <td>{emp.decree}</td>
              <td>
                 <button type="button"
                     className="btn btn-light mr-1"
                     data-bs-toggle="modal"
                     data-bs-target="#exampleModal"
                     onClick={()=>this.editClick(emp)}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                         <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                         <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                     </svg>
                 </button>

                 <button type="button"
                     className="btn btn-light mr-1"
                     onClick={() => this.deleteClick(emp.employeeId)}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                         <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                     </svg>
                 </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    //var contents = this.state.loading
    //  ? <p><em>Loading...</em></p>
    //  : FetchData.renderForecastsTable(this.state.forecasts);

      const {
        forecasts,
        modalTitle,
        EmployeeId,
        EmployeeName
      } = this.state;

    return (
      <div>
          <button type="button"
              className="btn btn-primary m-2 float-end"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => this.addClick()}>
              Add Employee
          </button>
        <h1 id="tabelLabel" >Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
            {/*{contents}*/}

            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>EmployeeName</th>
                        <th>Birthday</th>
                        <th>Position</th>
                        <th>Gender</th>
                        <th>Decree</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map(emp =>
                        <tr key={emp.employeeId}>
                            <td>{emp.employeeName}</td>
                            <td>{emp.birthday}</td>
                            <td>{emp.position}</td>
                            <td>{emp.gender}</td>
                            <td>{emp.decree}</td>
                            <td>
                                <button type="button"
                                    className="btn btn-light mr-1"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() => this.editClick(emp)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                    </svg>
                                </button>

                                <button type="button"
                                    className="btn btn-light mr-1"
                                    onClick={() => this.deleteClick(emp.employeeId)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{modalTitle}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                            ></button>
                        </div>

                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text">EmployeeName</span>
                                <input type="text" className="form-control"
                                    value={EmployeeName}
                                    onChange={this.changeEmployeeName} />
                            </div>

                            {EmployeeId == 0 ?
                                <button type="button"
                                    className="btn btn-primary float-start"
                                >Create</button>
                                : null}

                            {EmployeeId != 0 ?
                                <button type="button"
                                    className="btn btn-primary float-start"
                                >Update</button>
                                : null}

                        </div>

                    </div>
                </div>
            </div>
      </div>
      );
    }
}
