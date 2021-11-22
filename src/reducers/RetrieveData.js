const initialData = {
    list: []
};

const RetrieveData = (state=initialData, actions) => {
    switch (actions.type) {
        case 'Retrieve_All':
                    
            const { res } = actions.payLoad;

            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        data: res
                    }
                ]
            }
            default: return state;
    }
}   


export default RetrieveData