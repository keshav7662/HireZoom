const errorHandler = (res, error) => {
    console.log(error)
    res.status(500).json({
        error: 'Internal Server Error!'
    })
}

module.exports = errorHandler