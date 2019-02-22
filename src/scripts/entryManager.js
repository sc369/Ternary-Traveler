const entryManager = {

  getPOIs: () => {
    return fetch("http://127.0.0.1:8088/interests?_expand=place")
      .then(res => res.json())
  }
}

export default entryManager