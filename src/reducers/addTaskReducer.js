const initialData = {
    list: []
};


const AddTaskReducer = (state=initialData, actions) => {
    switch (actions.type) {
        case 'Add_Task':
            
            const { Name, description, Activity_Type, Duration, Task_Date} = actions.payLoad;

            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        // Id: Id,
                        Name: Name,
                        Description: description,
                        Activity_Type: Activity_Type,
                        Duration: Duration,
                        Task_Date: Task_Date
                    }
                ]
            }
        default: return state;
    }
}

export default AddTaskReducer