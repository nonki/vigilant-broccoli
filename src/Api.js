const API_BASE = process.env.REACT_APP_API_URL
const fetchJSON = path =>
  fetch(`${API_BASE}${path}`).then(res =>
    res.ok
      ? res.json()
      : Promise.reject({
          status: res.status,
          statusText: res.statusText,
          error: "Request failed"
        })
  )

export const getGames = () => fetchJSON('/keys')
export const getGame = (id, secret) => fetchJSON(`/keys/${id}?secret=${secret}`)
export const checkAuth = (password) =>
  fetch(`${API_BASE}/auth`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({ password })
    })
    .then(res => res.ok ? res.json() : false);
