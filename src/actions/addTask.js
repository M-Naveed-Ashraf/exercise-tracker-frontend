export const AddTask = (Name, Description, Activity_Type, Duration, Task_Date) => {
    const getDateAsId = () =>{
        return new Date().getTime().toString();
    }

    return {
        type: "Add_Task",
        payLoad: {
            Id: getDateAsId(),
            Name: Name,
            Description: Description,
            Activity_Type: Activity_Type,
            Duration: Duration, 
            Task_Date: Task_Date
        }
    }
}