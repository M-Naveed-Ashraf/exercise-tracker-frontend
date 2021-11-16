// input data from todo component comes in data parameter
export const AddToDo = (data) => {
    return {
        type: "Add_ToDo",
        payLoad: {
            id: new Date().getTime.toString(),
            data : data,
        }
    }
}

export const DeleteToDo = () => {
    return {
        tye: "Delete_ToDo"
    }
}

export const RemoveAll = () => {
    return {
        tye: "Remove-All"
    }
}