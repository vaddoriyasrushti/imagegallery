import reducer from './allimages'

import * as types from '../action'
const state = {
    images: [],
          allimages: [],
          fvt: []
}
describe('todos reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(
        {
          images: [],
          allimages: [],
          fvt: []
        }
      )
    })

    
    it('should handle "FETCH_IMAGES_SUCCESS" action', () => {
          const mockData = [{
            albumId:1,
            id:1,
            title:"accusamus beatae ad facilis cum similique qui sunt",
            url:"https://via.placeholder.com/600/92c952",
            thumbnailUrl:"https://via.placeholder.com/150/92c952"
           }];
         expect(reducer({}, { type: "FETCH_IMAGES_SUCCESS", json: mockData }))
           .toEqual({ images: undefined })
    })
  
    it('should handle FETCH_IMAGES_FAILURE', () => {
        expect(
          reducer({}, {
            type: types.FETCH_IMAGES_FAILURE,
            text: 'Run the tests'
          })
        ).toEqual({images:[]})
    })

    it('should handle "FETCH_ALL_SUCCESS" action', () => {
        const mockData = [{
          albumId:1,
          id:1,
          title:"accusamus beatae ad facilis cum similique qui sunt",
          url:"https://via.placeholder.com/600/92c952",
          thumbnailUrl:"https://via.placeholder.com/150/92c952"
         }];
       expect(reducer({}, { type: "FETCH_ALL_SUCCESS", json: mockData }))
         .toEqual({ allimages: undefined })
    })

    it('should handle FETCH_ALL_FAILURE', () => {
        expect(
          reducer({}, {
            type: types.FETCH_ALL_FAILURE,
            text: 'Run the tests'
          })
        ).toEqual({allimages:[]})
    })

    it('should handle "ADD_SUCCESS" action', () => {
           const mockData = {data:{}}
          expect(reducer(state, { type: "ADD_SUCCESS", payload: mockData }))
         .toEqual({ images: [], allimages: [], fvt: [{}] } )
    })

    it('should handle "REMOVE_SUCCESS" action', () => {
        const mockData = {data:{}}
       expect(reducer(state, { type: "REMOVE_SUCCESS", payload: mockData }))
      .toEqual({ images: [], allimages: [], fvt: [] } )
 })

})