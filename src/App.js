import React from 'react'
import { HashRouter,Route } from 'react-router-dom'
import Nav from './components/nav/Nav'
import './App.css'
import Home from './components/home/Home'
// import Demo from './components/three/Demo'
// import Demo1 from './components/three/Demo1'
import Product from './components/product/Product'
import Product1 from './components/product/Product1'
import Bed from './components/bed/Bed'
import Chair from './components/chair/Chair'
import Clothes from './components/clothes/Clothes'
import Media from './components/media/Media'
import Our from './components/our/Our'
import About from './components/about/About'
const hoc = (Com) => {
  return (
    <>
      <Nav />
      <Com />
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Route exact path='/' component={Home} />
      <Route path='/home' component={Home} />
      <Route path='/product' component={Product} />
      <Route path='/product1' component={Product1} />
      <Route path='/bed' component={Bed} />
      <Route path='/chair' component={Chair} />
      <Route path='/clothes' component={Clothes} />
      <Route path='/media' component={Media} />
      <Route path='/our' component={Our} />
      <Route path='/about' component={About} />
    </HashRouter>
  )
}

