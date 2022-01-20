import '../css/components.css'
// import webpacklogo from '../assets/img/webpack-logo.png'

export const saludar = (nombre) => {

  const h1 = `<h1>Hola ${nombre}</h1>`

  document.querySelector('#app').insertAdjacentHTML('beforeend', h1)

  /*
  const img = `<img src=${webpacklogo} alt='logo' />`
  document.querySelector('#app').insertAdjacentHTML('beforeend', img)
  */


}