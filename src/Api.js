const mapi = process.env.REACT_APP_API_URL
export const getGame = (id) =>
  fetch(`${mapi}/keys/${id}`)
    .then(res =>
      res.ok ? res.json() : Promise.reject("Failed to get something useful")
    )
    .then(apiData => {
      return apiData
    });

export const checkAuth = (password) =>
  fetch(`${mapi}/auth`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({ password })
    })
    .then(res => res.ok);
