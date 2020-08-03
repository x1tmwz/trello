const customFetch = (url, method = "GET", data, token, params) => {
    if (params) {
        let query = "";
        const paramsKeys = Object.keys(params);
        paramsKeys.forEach((param, index) => {
            if (paramsKeys.length === 1 || paramsKeys.length === index + 1) {
                return query += param + "=" + params[param];
            }
            return query += param + "=" + params[param] + "&";


        })
        url = url + "?" + query
    }
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + token

        },
    })
}

export default customFetch;