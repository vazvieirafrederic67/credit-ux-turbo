import { Controller } from 'stimulus';




/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="contact" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
export default class extends Controller {

    connect(){
        this.myParentFunction()
    }  

    myParentFunction(){
        var bootstrap = require('bootstrap');
        
        var myCarousel = document.querySelector('#carouselExampleSlidesOnly')
        var carousel = new bootstrap.Carousel(myCarousel, {
            interval: 3000,
            wrap: true,
        })
    }
  }
