const NODE_ENV = String(process.env.NODE_ENV) || 'development'
const isDev = NODE_ENV === 'development'

const USERS_COUNT = Number(process.env.USERS_COUNT)

if (!USERS_COUNT) {
    throw new Error('Don`t have a environment!')
}

export default () => ({
    PORT: parseInt(process.env.PORt, 10) || 3000,
    HOST: String(process.env.HOST) || 'localhost',
    NODE_ENV,
    isDev,
    USERS_COUNT,
})
