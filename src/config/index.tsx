const allConfig = {
    development: {
        apiRoot: 'https://safenpm.herokuapp.com'
        // apiRoot: 'http://localhost:12180'
    },
    production: {
        apiRoot: 'https://safenpm.herokuapp.com'
    }
};


const env = (process.env.NODE_ENV || 'development') as 'development' | 'production'
const config = allConfig[env]

export {
    config
}