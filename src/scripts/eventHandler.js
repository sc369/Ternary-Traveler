import entryManager from "./entryManager"
import createPOIObject from "./createObject"
import createHTML from "./createHTML";

const eventHandler = {
    addPOI: () => {
        const button = document.querySelector("#button_add_POI")
        button.addEventListener("click", () => {
            const name = document.querySelector("#POI_name_input").value
            const desc = document.querySelector("#POI_desc_input").value
            const placeId = document.querySelector("#place_select").selectedIndex
            if (placeId > 0 && desc !== "" && name !== "") {
                const obj = createPOIObject(name, desc, placeId)
                entryManager.postPOI(obj).then((postedObj) => {
                    //get same object with place embedded
                    entryManager.getPOI(postedObj.id).then((objWithPlace) => {
                        createHTML.createPOI(objWithPlace)
                    })
                })
            } else if (placeId <= 0) {
                window.alert("Please select a place")
            } else if (desc === "") {
                window.alert("Please enter a description")
            } else if (name === "") {
                window.alert("Please enter a name")
            }
        })

    },
    deletePOI: () => {
        const output = document.querySelector("#output")
        output.addEventListener("click", (event) => {
            const clickedId = event.target.id.split("--")[1]
            if (event.target.id.startsWith("delete_button")) {
                console.log(clickedId)
                const POI = document.getElementById(`POI--${clickedId}`)
                const nameHeader = document.getElementById(`name--${clickedId}`)
                if (window.confirm(`Do you want to delete ${nameHeader.textContent}?`)) {
                    entryManager.deletePOI(clickedId)
                    POI.parentElement.removeChild(POI)

                }
            }
        })
    }

}
export default eventHandler