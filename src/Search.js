import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios';
import Cake from './Cake';
import { Row, Spin } from 'antd';

const Search = () => {
  var [query, setQuery] = useSearchParams()
  var text = query.get("q")
  var [loading, setLoading] = useState(true)
  var [matchedCakes, setAllMatchedCakes] = useState()
  console.log("text = ", text)
  function applyLoader() {
    const interval = setInterval(() => {
      setLoading(false)
    }, 2000)
  }
  useEffect(() => {
    applyLoader()
    axios({
      url: "http://apibyauw.eu-4.evennode.com/api" + "/searchcakes?q=" + text,
      method: "get"
    }).then(
      (response) => {
        setAllMatchedCakes(response.data.data);
        console.log("all cakes = ", matchedCakes)
      }, (error) => {
        console.log("no cakes data found", error)
      }
    )
  }, [])
  return (
    <>
      <Spin spinning={loading} size="large" />
      {(!loading) && <div>
        <h1>Search Component</h1>
        <Row>
          {
            matchedCakes?.map((each) => {
              return <Cake data={each} />
            })
          }
        </Row>
      </div>}
    </>
  )
}

export default Search