const api = "/api/v1";

const headers = {
    'Accept': 'application/json',
};

export const getBandwidth = () =>
    fetch(`${api}/bandwidth`, {headers})
        .then(res => res.json())

export const getImages = () =>
    fetch(`${api}/images`, {headers})
        .then(res => res.json())


export function getInitialData() {
    return Promise.all([
        getBandwidth(),
        getImages()
    ]).then(([bandwidths, images]) => ({
        bandwidths,
        images
    }))

}