
const fetch = require("isomorphic-unfetch");
const querystring = require("querystring")

class Textng {
    constructor(config) {
      this.api_key = config.api_key;
      this.sender= config.sender;
      this.basePath = "https://api.textng.xyz";
    }

    request(endpoint = "", options = {}) {

        let url = this.basePath + endpoint
      
        let headers = {
          'key': this.api_key,
          'sender':this.sender,
          'Content-type': 'application/json'
        }
      
        let config = {
          ...options,
          ...headers
        }
      
      
        return fetch(url, config).then(r => {
          if (r.ok) {
            return r.json()
          }
          throw new Error(r)
        })
      }

    sendSMS(options) {
        let qs = options ? "?" + querystring.stringify(options) : ""
      
        let url = "/sendsms" + qs
        let config = {
          method: 'GET'
        }
        return this.request(url, config)
      }
  }
  