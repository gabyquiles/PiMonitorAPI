import {createSelector} from 'reselect'

const getBandwidths = (state) => state.bandwidths

function scaleBandwidthToMbps(bandwidth) {
    return Math.round(bandwidth / 10000) / 100
}

export const getSimplifiedBandwidths = createSelector(
    [getBandwidths],
    (bandwidths) => {
        return (
            Object.values(bandwidths).map(({id, date, download, upload}) => {
                    return ({
                        id,
                        date,
                        download: scaleBandwidthToMbps(download),
                        upload: scaleBandwidthToMbps(upload)
                    })
                }
            ).sort((a, b) => {
                return b.date - a.date
            })
        )
    }
)

export const getLastBandwidth = createSelector(
    [getSimplifiedBandwidths],
    (bandwidths) => {
        return bandwidths[0]
    }
)