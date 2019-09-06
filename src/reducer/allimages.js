const INITIAL_STATE = {
    images: [],
    allimages:[],
}

export default (state = INITIAL_STATE, action) => {
    console.log("type",action.type)
    switch (action.type) {
        case 'FETCH_IMAGES_SUCCESS':
                return Object.assign({}, state, { images: action.payload });
            
        case 'FETCH_IMAGES_FAILURE':
                return Object.assign({}, state, { images: [] });
        case 'FETCH_ALL_SUCCESS':
            console.log(action.payload)
                return Object.assign({}, state, { allimages: action.payload });
           
        case 'FETCH_ALL_FAILURE':
                return Object.assign({}, state, { allimages: [] });
          
        default:
            return state;
    }
}

