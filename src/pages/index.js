import React from "react"
import ReactDOM from 'react-dom'
import Header from "../components/Header"
import Card from '@material-ui/core/Card'
import '../assets/styles/index.css'

export default () => (
  <div style={{ margin: `5rem auto` }}>
    <Header />
    <Card style={{ margin: 160, padding: "25px", height: '200px', width: '600px', zIndex: 9999 }}>
      <h1>Our Vision</h1>
      Conduct world-class research & Nurture world-class researchers
    </Card>
    <img src={require('../assets/img/data_circle_1.jpg')} className="App-logo"/>
  </div>
)
