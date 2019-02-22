import entryManager from "./entryManager"
import createHTML from "./createHTML"

entryManager.getPOIs().then((interests) => {
  interests.forEach(obj => {
    createHTML.createPOI(obj)
  })
  console.log(interests)


})