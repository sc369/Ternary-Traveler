const createHTML = {

  //   createElement: (el) => {
  //     const element = document.createElement(el)
  //     console.log(element)
  //   }
  // }
  // createHTML.createElement("p")


  createElementWithText: (el, text, id, className) => {
    const element = document.createElement(el)
    const T = document.createTextNode(text)
    element.setAttribute("id", id)
    element.setAttribute("class", className)
    element.appendChild(T)
    return element
  },

  createPOI: (obj) => {
    const fragment = document.createDocumentFragment()
    const POIDiv = document.createElement("div")
    POIDiv.setAttribute("id", `POI--${obj.id}`)
    POIDiv.setAttribute("class", "POI")
    const name = createHTML.createElementWithText("h3", obj.name)
    const desc = createHTML.createElementWithText("p", obj.description)
    const place = createHTML.createElementWithText("p", obj.place.name)
    POIDiv.appendChild(name)
    POIDiv.appendChild(desc)
    POIDiv.appendChild(place)
    fragment.appendChild(POIDiv)
    document.querySelector("#output").appendChild(fragment)
  }
}

export default createHTML








