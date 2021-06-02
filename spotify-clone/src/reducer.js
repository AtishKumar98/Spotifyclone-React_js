
export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    items: null, 
    // token: "BQCtajOIv-ZS-T9zkaQvDhTV8k-xZ5BhMgxnWjTfugOn7riK6w…Zm1HqIw6h8LUQyEoTudwl8eBIKT949KFMCCpxOMbGjvf7rSDh", 
    
};
const reducer = (state, action) =>{
        console.log(action);
            switch(action.type){
                    case 'SET_USER':
                    return{
                    ...state,
                    user: action.user
                    };
                    case 'SET_TOKEN':
                    return{
                    ...state,
                     token: action.token
                    };
                    case 'SET_PLAYLISTS':
                    return {
                     ...state,
                     playlists: action.playlists
                     };
                     case 'SET_DISCOVER_WEEKLY':
                         return {
                             ...state,
                             discover_weekly:action.discover_weekly,
                         }
                default:
                    return state;
        }
    

}
export default reducer;