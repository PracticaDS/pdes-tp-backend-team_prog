const successResponse = result => ({
  type: 'SUCCESS',
  status: 200,
  result,
})

const errorResponse = result => ({
  type: 'ERROR',
  status: 400,
  result,
})

export const mapController = promise => {
  return promise
    .then(result => {
      return successResponse(result)
    })
    .catch(result => {
      return errorResponse(result)
    })
}
