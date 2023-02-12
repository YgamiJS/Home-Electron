import axios from 'axios'

export default class Servise {
  static async getAll(limit, page, url) {
    const response = await axios.get(url, {
      params: {
        _limit: limit,
        _page: page
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
        'Access-Control-Max-Age': '0',
        'Content-Security-Policy': 'default-src *; connect-src *; script-src *; object-src *;',
        'X-Content-Security-Policy': 'default-src *; connect-src *; script-src *; object-src *;',
        'X-Webkit-CSP':
          "default-src *; connect-src *; script-src 'unsafe-inline' 'unsafe-eval' *; object-src *;"
      }
    })

    return response
  }
}
