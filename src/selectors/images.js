import { createSelector } from 'reselect'
export const selectimages = createSelector(
    state => state.allimages.images,
    images => images
)
export const selectallimages = createSelector(
    state => state.allimages.allimages,
    allimages => allimages
)

