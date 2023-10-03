import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from "./sounds.js"

export function toggleRunning(){
   state.isRunning = document.documentElement.classList.toggle('running') 

    timer.countdonw()
    sounds.buttonPressAudio.play()
}

export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updatDisplay()

    sounds.buttonPressAudio.play()
}

export function set(){
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()
}

export function musicTree(){  
 
        sounds.bgFloresta.play()
        
        let selected = el.buttonTree.classList.contains('secondary')
        if(selected) {
          sounds.bgFloresta.pause()
        } 
        
        el.buttonTree.classList.toggle('secondary')
    
}

export function musicCloud(){   
    
    sounds.bgChuva.play()
    
    let selected = el.buttonCloud.classList.contains('secondary')
    if(selected) {
      sounds.bgChuva.pause()
    } 
    
    el.buttonCloud.classList.toggle('secondary')
}

export function musicStorefront(){   
    
        sounds.bgCafeteria.play()
        
        let selected = el.buttonStorefront.classList.contains('secondary')
        if(selected) {
          sounds.bgCafeteria.pause()
        } 
        
        el.buttonStorefront.classList.toggle('secondary')
}

export function musicFire(){  
    
        sounds.bgLareira.play()
        
        let selected = el.buttonFire.classList.contains('secondary')
        if(selected) {
          sounds.bgLareira.pause()
        } 
        
        el.buttonFire.classList.toggle('secondary')
}