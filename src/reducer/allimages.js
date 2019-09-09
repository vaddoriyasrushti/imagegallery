const INITIAL_STATE = {
    images: [],
    allimages:[],
    fvt:[],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_IMAGES_SUCCESS':
            return { ...state, images: action.payload }
            
        case 'FETCH_IMAGES_FAILURE':
                return { ...state, images: [] }

        case 'FETCH_ALL_SUCCESS':
                return { ...state, allimages: action.payload }
           
        case 'FETCH_ALL_FAILURE':
                return { ...state, allimages: [] }

        case 'ADD_SUCCESS':
            let x=[]
            const { data } = action.payload

            state.fvt.push(data)
            console.log('....',{ ...state, fvt: x })

            x=[...state.fvt]
            return { ...state, fvt: x }

        case 'REMOVE_SUCCESS':
            let y=[]
           y = state.fvt.filter(item => {
               const { data } = action.payload
                return item.id !== data.id
            })
            return { ...state, fvt: y }

        default:
            return state;
    }
}

