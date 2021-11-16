const initialData = {
    list: []
    // complete: false,
};

const TodoReducer = (state=initialData, actions) => {
    switch(actions.type) {
        case "Add_ToDo" :
            const {id, data} = actions.payLoad;

            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
        default: return state;
    }
}


export default TodoReducer;