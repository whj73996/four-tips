import './app3.css'
import $ from 'jquery'

const $square = $('#app3 .square')
$square.on('mouseover', () => {
  $square.toggleClass('move')
})