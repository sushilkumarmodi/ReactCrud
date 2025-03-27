export default function AppReducer(state, action){
    switch(action.type){
        case 'ADD_EMPLOYEE':
            return{
                ...state, employees: [...state.employees, action.payload]
            };
        
        default:
            return state;
    }
}