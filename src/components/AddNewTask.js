import React from 'react'

function AddNewTask() {
    return (
    <form>
      <div>
            {/* Add New Task */}
            <div className="add-task-container ml-4 mt-5 mb-5">
              <div className="task-heading col-lg-12 align-items-center">
                <h1 className="modal-title">Add New Task</h1>
              </div>
              <div className="row no-gutters mt-2">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      {/* <img src="" alt="profile picture"> */}
                      <form action="POST">
                        <h3>Task Details:</h3>
                        <section>
                          <div className="form-group row">
                          <label htmlFor="userName" className="col-sm-3 col-form-lable mt-3">Name:</label>
                            <div className="col-sm-9 mt-3">
                              <input type="text" className="form-control" id="userName" minLength="4" maxLength="16" />
                            </div>
                            <label htmlFor="userAge" className="col-sm-3 col-form-lable mt-3">Age:</label>
                            <div className="col-sm-9 mt-3">
                              <input type="number" className="form-control" id="userAge" min="18" max="100" />
                            </div>
                            <label htmlFor="userGender" className="col-sm-3 col-form-label mt-3">Gender:</label>
                            <div className="col-sm-9 mt-3">
                              {/* <input type="text" className="form-control" id="userGender" /> */}
                              <input type="radio" id="userGender"  name= "gender" value="male" />
                              <label htmlFor="userGender">Male</label> <br />
                              <input type="radio" id="userGender" name="gender" value="female" />
                              <label htmlFor="userGender">Female</label><br />
                            </div>
                            <label htmlFor="userWeight" className="col-sm-3 col-form-lable mt-3">Weight (kgs):</label>
                            <div className="col-sm-9 mt-3">
                              <input type="number" className="form-control" id="userWeight" min="25" max="200"/>
                            </div>
                            <label htmlFor="userHeight" className="col-sm-3 col-form-lable mt-3">Height (cms):</label>
                            <div className="col-sm-9 mt-3">
                              <input type="number" className="form-control" id="userHeight" min="25" max="300" /> <br />
                            </div>
                          </div>
                        </section>
                        <section>
                          <div className="form-group row">
                            <label htmlFor="userTasks" className="col-sm-3 col-form-lable">Select Task:</label>
                            <div className="col-sm-9">
                              <select id="userTasks" name="userTasks" className="w-100">
                                <option value selected="selected" className="text-grey">Please Select</option>
                                <option value="Walking">Walking</option>
                                <option value="Running">Running</option>
                                <option value="Riding">Riding</option>
                                <option value="Cycling">Cycling</option>
                                <option value="Swimming">Swimming</option>
                                <option value="Hiking">Hiking</option>
                              </select>
                            </div>
                            <label htmlFor="userDesc" className="col-sm-3 col-form-lable mt-3">Description:</label>
                            {/* <label htmlfor="userDes">Description:</label> */}
                            <textarea className="col-sm-9 col-form-lable mt-3" id="description" name="description" rows="4" cols="50" minLength="10" maxLength="100">
                             
                            </textarea>
                          </div>
                        </section>
                        <section>
                            <div className="row">
                                <label for="userDuration" className="col-sm-3 col-form-lable mt-3">Duration:</label>
                                <div className="col-sm-9 mt-3">
                                <label for="userDuration" className="col-sm-3 col-form-lable mt-3">From:</label>
                                <input type="time"  id="userAge" />
                                <label for="userDuration" className="col-sm-3 col-form-lable mt-3">To:</label>
                                <input type="time"  id="userAge" />
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="form-group row">
                                <label for="userDate" className="col-sm-3 col-form-lable mt-3">Date:</label>
                                <div className="col-sm-9 mt-3">
                                <input type="date" className="form-control" id="userAge" />
                                </div>
                            </div>
                        </section> <br />
                        <div className="row no-gutters justify-content-end">
                          <button className="btn">Submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Add New Task */}
        </div> 
    </form> 
    )};


export default AddNewTask
