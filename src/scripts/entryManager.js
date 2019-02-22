const entryManager = {

  getPOIs: () => {
    return fetch("http://127.0.0.1:8088/interests?_expand=place")
      .then(res => res.json())
  },

  getPOI: (id) => {
    return fetch(`http://127.0.0.1:8088/interests/${id}?_expand=place`)
      .then(res => res.json())
  },

  deletePOI: (id) => {
    return fetch(`http://127.0.0.1:8088/interests/${id}`, {
      method: "DELETE",
    })
  },

  postPOI: (POIObject) => {
    return fetch("http://127.0.0.1:8088/interests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(POIObject)
    })
      .then(res => res.json())
  },

  getPlaces: () => {
    return fetch("http://127.0.0.1:8088/places")
      .then(res => res.json())

  }
}

export default entryManager