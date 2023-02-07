//tsc
interface Member {
    user : {
        id: string;
        pass: string;
    }
}
//store 항목
let initialState :Member = {
    user : {
        id: "heun3316",
        pass: "hyun7212"
    }
}
const Login = (state = initialState, action : any) => {
    switch(action.type){
        default:
            return state;
    }
};

export default Login;