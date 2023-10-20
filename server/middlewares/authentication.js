const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')

const auth = (req, res, next) => {
  const authHeaders = req.headers.authorization
  if (!authHeaders || !authHeaders.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Authentication Invalid")
  }

  const token = authHeaders.split(' ')[1]

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    const user = {
      userId: payload.userId,
      name: payload.name
    }
    req.user = user
    next()
  } catch (error) {
    throw new UnauthenticatedError("Authentication Invalid")
  }
}

module.exports = auth