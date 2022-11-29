/**
 * @brief
 * Divides the raw data into 3 categories: position, velocity, and temperature
 * @param {Array} rawData - Raw data from the database
 * @returns {Array} - Array of 3 arrays, each containing the data for a category
 */
const DataEntries = (rawData) => {
  // initial states
  let longitudeArray = []
  let latitudeArray = []
  let velocityArray = []
  let temperatureArray = []

  // if there is data, then divide it into 3 categories
  try {
    if (rawData) {
      rawData.forEach((entry) => {
        longitudeArray.push(entry.longitude)
        latitudeArray.push(entry.latitude)
        velocityArray.push(entry.speed)
        temperatureArray.push(entry.temperature)
      })
    }
  } catch (error) {
    console.log("error: ", error)
  }

  return { longitudeArray, latitudeArray, velocityArray, temperatureArray }
}

export default DataEntries
