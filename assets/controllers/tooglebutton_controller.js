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
        var x = document.getElementById("navDemo"),
        y = document.getElementById("toggle-button");

        y.addEventListener('click', () => {
            
            if (x.className.indexOf("w3-show") == -1) {
                x.className += " w3-show";
            } else { 
                x.className = x.className.replace(" w3-show", "");
            }
        });

    }
   
  }
