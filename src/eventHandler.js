import entryManager from "./entryManager"
import createPOIObject from "./createObject"
import createHTML from "./createHTML";

const eventHandler = () => {
    const button = document.querySelector("#button_add_POI")
    button.addEventListener("click", () => {
        const name = document.querySelector("#POI_name_input").value
        const desc = document.querySelector("#POI_desc_input").value
        const placeId = document.querySelector("#place_select").selectedIndex
        const obj = createPOIObject(name, desc, placeId)
        entryManager.postPOI(obj).then((postedObj) => {
            console.log(postedObj)


        })

    })

}

export default eventHandler