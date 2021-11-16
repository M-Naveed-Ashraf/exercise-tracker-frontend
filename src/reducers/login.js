const initialData = {
    list: [{
        userName: 'abc',
        password: '123'
    },
{
    userName: 'ab',
    password: '12'
}]
};

const LoginReducer = (state=initialData, actions) => {
    switch (actions.type) {
        case "Add_User":
            const {userName, password} = actions.payLoad;

            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        userName: userName,
                        password: password
                    }
                ]
            }

    
        default: return state;
    }
}


export default LoginReducer