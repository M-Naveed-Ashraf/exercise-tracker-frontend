import axios from 'axios'
export const AddTask = (Name, Description, Activity_Type, Duration, Task_Date) => {
    // const getDateAsId = async () =>{
    //     return new Date().getTime().toString();
    // }

    return (dispatch) => {
        const data = {
            title: Name
        }
        
        axios
          .post('https://excercise-tracker-fp.herokuapp.com/addNewTask', data)
          .then( (res)=> {
            console.log(res);
            dispatch(addTaskSuccess(data));
          })
          .catch(error => {
            // error.message is the error message
            console.log(error.message);
          })
    }
      

    
}

export const addTaskSuccess = (data) => {
    return {
        type: "Add_Task",
        payLoad: data
    }
}