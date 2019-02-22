import entryManager from "./entryManager"
import createHTML from "./createHTML"
import eventHandler from "./eventHandler"

entryManager.getPOIs().then((interests) => {
  interests.forEach(obj => {
    createHTML.createPOI(obj)
  })
  console.log(interests)
})
entryManager.getPlaces().then((places) => {
  createHTML.createPlaces(places)
  entryManager.getPOIs().then((interests) => {
    interests.forEach(obj => {
      createHTML.createPOI(obj)
    })
  })
})

eventHandler()