import axios from "axios"

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: "5647c77d1dfe45748e2264959dba6d7d"
    }
})