const createPOIObject = (name, desc, placeId) => {

  const POI = {
    name: name,
    description: desc,
    placeId: placeId,

  }
  return POI
}

export default createPOIObject

