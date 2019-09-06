import { createSelector } from 'reselect'
export const selectimages = createSelector(
    state => state.allimages.images,
    images => images
)
// export const selectallimages = createSelector(
//     state => state.images.allimages,
//     allimages => allimages
// )

