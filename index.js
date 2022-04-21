//CallBck Hell

let Count = 10
const Timer = document.querySelector('.TimeShow')

setTimeout(() => {
  Timer.innerText = 9
  setTimeout(() => {
    Timer.innerText = 8
    setTimeout(() => {
      Timer.innerText = 7
      setTimeout(() => {
        Timer.innerText = 6
        setTimeout(()=>{
         Timer.innerText=5
         setTimeout(()=>{
             Timer.innerText=4
            setTimeout(()=>{
                Timer.innerText=3
                setTimeout(()=>{
                    Timer.innerText=2
                    setTimeout(()=>{
                        Timer.innerText=1
                        setTimeout(()=>{
                            Timer.innerText=0
                            setTimeout(()=>{
                                Timer.innerText="Happy New Year"
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
         },1000)
        },1000)
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000)
