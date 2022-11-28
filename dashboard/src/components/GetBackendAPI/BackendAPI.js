import { useEffect, useState } from "react"

/**
 * @brief
 * Uses an API way of getting data from the backend server.
 */
export default function BackendAPI() {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  let dataArray = new Object()

  useEffect(() => {
    async function fetchAPI() {
      try {
        const fetchURL = `http://127.0.0.1:3000`
        const res = await fetch(fetchURL)
        const data = await res.json()

        console.log(data)
        setData(data)
        setIsPending(false)
      } catch (err) {
        setIsPending(false)
        console.log("error: " + err)
      }
    }
    fetchAPI()
  }, [])

  for (let i = 0; i < data.length; i++) {
    dataArray[i] = data[i]
  }

  return dataArray
}
