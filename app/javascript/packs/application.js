// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import approves from "../images/cacho_approves.jpg"
import declines from "../images/cacho_declines.jpg"


import './src/application.scss'

const _calculateAge = (birthday) => { // birthday is a date
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

$(document).ready(function() {
  $('button').click(function() {
    $(this).html(`<img src="${declines}" style="max-width: 40px;max-height: 40px;"/>`)
    $(this).addClass('btn-outline-danger')
    $(this).removeClass('btn-primary')
  })

  var years = _calculateAge(new Date('12/17/1993'))

  $(`#${years}`).click(function() {
    $(this).html(`<img src="${approves}" style="max-width: 40px;max-height: 40px;"/>`)
    $(this).addClass('btn-outline-success')
    $(this).removeClass('btn-outline-danger')
    $(this).removeClass('btn-primary')
  })
})

document.addEventListener('turbolinks:load', function() {
  gtag('config', 'UA-156013346-1')
});