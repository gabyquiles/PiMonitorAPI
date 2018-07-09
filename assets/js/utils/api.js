const api = "/api/v1";

const headers = {
    'Accept': 'application/json',
};

export const getBandwidth = () =>
    fetch(`${api}/bandwidth`, {headers})
        .then(res => res.json())