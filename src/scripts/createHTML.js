const createHTML = {

  createElementWithText: (el, text, id, className) => {
    const element = document.createElement(el)
    const T = document.createTextNode(text)
    element.setAttribute("id", id)
    element.setAttribute("class", className)
    element.appendChild(T)
    return element
  },

  createPOI: (obj) => {
    console.log(obj)
    const fragment = document.createDocumentFragment()
    const POIDiv = document.createElement("div")
    POIDiv.setAttribute("id", `POI--${obj.id}`)
    POIDiv.setAttribute("class", "POI")
    const name = createHTML.createElementWithText("h5", obj.name, `name--${obj.id}`, "name")
    const desc = createHTML.createElementWithText("p", obj.description, `desc--${obj.id}`, "desc")
    POIDiv.appendChild(name)
    POIDiv.appendChild(desc)
    const deleteButton = document.createElement("button")
    deleteButton.setAttribute("id", `delete_button--${obj.id}`)
    deleteButton.setAttribute("class", "delete_button")
    deleteButton.textContent = "Delete"
    POIDiv.appendChild(deleteButton)
    fragment.appendChild(POIDiv)
    const place = document.querySelector(`#place--${obj.place.id}`)
    if (place) {
      document.querySelector(`#place--${obj.place.id}`).appendChild(fragment)
    }
  },

  createPlaces: (placesArray) => {
    console.log(placesArray)
    const placeSelect = document.querySelector("#place_select")
    placesArray.forEach(place => {
      placeSelect.innerHTML += `<option id = place_option--${place.id}>${place.name}</option>`
      const placeSection = document.createElement("section")
      placeSection.setAttribute("id", `place--${place.id}`)
      const placeName = createHTML.createElementWithText("h1", place.name, `place_name--${place.id}`, "place_name")
      document.querySelector("#output").appendChild(placeSection)
      console.log(place.visa_required)
      if (place.visa_required === true) {
        placeName.classList.add("visa_required")
        placeName.innerHTML += " (visa required)"
      }
      placeSection.appendChild(placeName)
    })

  }

}
export default createHTML








