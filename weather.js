const request = require('postman-request')

const forecast = (area, callback) => {
    const data = {
        url: `http://api.weatherstack.com/current?access_key=646a0cb10447c00d647eaa67e719c3af&query=${area}`,
        json: true, 
    }
    request(data, (error, response, body) => {
        console.log(body)
        if(error) {
            callback('Services are not avaliable!', undefined)
        } else if(response.body.error) {
            callback('Area is not avaliable', undefined)
        } else {
            callback(undefined, body)
        }
    })
}

forecast('nasdadsads', (error, res) => {
    console.log('Error:', error)
    console.log('Res', res)
})