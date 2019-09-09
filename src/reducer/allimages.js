const INITIAL_STATE = {
    images: [],
    allimages:[],
    fvt:[],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_IMAGES_SUCCESS':
                return Object.assign({}, state, { images: action.payload });
            
        case 'FETCH_IMAGES_FAILURE':
                return Object.assign({}, state, { images: [] });

        case 'FETCH_ALL_SUCCESS':
                return Object.assign({}, state, { allimages: action.payload });
           
        case 'FETCH_ALL_FAILURE':
                return Object.assign({}, state, { allimages: [] });

        case 'ADD_SUCCESS':
            let x=[]
            state.fvt.push(action.payload.data)
            x=[...state.fvt]
            return Object.assign({}, state, { fvt: x});

        case 'REMOVE_SUCCESS':
            let y=[]
           y = state.fvt.filter(item => {
            return item.id !== action.payload.data.id
            })
            return Object.assign({}, state, { fvt: y});

        default:
            return state;
    }
}

