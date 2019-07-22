import React, { Component } from 'react'
import Banner from './../module/banner'
import { Button } from 'antd-mobile'

class Index extends Component{
  render(){
    return (
      <>
        <Banner />
        <Button type="primary">primary</Button>
      </>
    )
  }
}

export default Index