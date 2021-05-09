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
        var bootstrap = require('bootstrap');
        this.myParentFunction(bootstrap)
    }  

    myParentFunction(bootstrap){
        
        
        
        var myCarousel = document.querySelector('#carousel')
        var carousel = new bootstrap.Carousel(myCarousel, {
            interval: 6000,
            wrap: true,
            pause: false,
            touch: true,
            keyboard: false,
            ride: false,
            slide: true,
            cycle: true
        })

    }
  }
