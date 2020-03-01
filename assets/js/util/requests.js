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
 * Get all admins account from API
 */
export const adminGetAccounts = () => {
    return fetch('/api/manage/account')
        .then(res => res.json())
}

/**
 * Send create account request to the API
 * @param {object} data 
 */
export const adminCreateAccount = (data) => {
    return postRequest('/api/manage/account', data)
        .then(res => res.json())
}

/**
 * Send delete account request to the API
 * @param {string} id admin ID
 */
export const adminDeleteAccount = (id) => {
    return deleteRequest('/api/manage/account', {id})
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
 * Get all courses from the API
 */
export const adminGetAllCourses = () => {
    return fetch('/api/manage/courses')
        .then(res => res.json())
}

/**
 * Send create course Request to API
 * @param {object} data request object
 */
export const adminCreateCourse = (data) => {
    return postRequest('/api/manage/courses', data)
        .then(res => res.json())
}

/**
 * send remove course request to the API.
 * @param {object} data 
 */
export const adminRemoveCourse = (data) => {
    return deleteRequest('/api/manage/courses', data)
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

/**
 * An Helper function to setup Fetch for DELETE request.
 * @param {string} url 
 * @param {object} data 
 */
function deleteRequest(url, data) {
    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
}