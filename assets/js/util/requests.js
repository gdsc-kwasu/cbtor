/**
 * Synchronize User's score to the API endpoint.
 * 
 * @param {string} url 
 * @param {object} data 
 */
export const syncResult = (url, data) => {
    return postRequest(url, data)
        .then(res => res.json())
}

/**
 * Get the user's score from the API
 */
export const getUserScores = () => {
    return fetch('/api/scores')
        .then(res => res.json())
}

/**
 * send generated coupon credit to the server API.
 * @param {array} coupon array of coupon objects.
 */
export const adminCreateCoupon = (coupon) => {
    return postRequest('/api/manage/credit', coupon)
        .then(res => res.json())
}

/**
 * Helper function to setup Fetch for POST request.
 * 
 * @param {string} url API endpoint URL
 * @param {*} data data to sent
 */
function postRequest(url, data) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
}