const createPOIObject = (name, desc, placeId) => {

  const POI = {
    name: name,
    description: desc,
    placeId: placeId,
    reviewText: ""
  }
  return POI
}

export default createPOIObject

