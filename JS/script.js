const canvas = document.getElementById('canvas').getContext('2d')


let bg = new obj(0,0,500,900,'IMG/kitty_fundo.jpg') 

    function draw(){
        bg.draw

    }

    function uptade(){

    }

    function main(){
        canvas.clearRect(0,0,500,900)
        uptade()
        draw()
    }

    setInterval(main, 100)