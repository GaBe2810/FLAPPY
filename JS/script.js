const canvas = document.getElementById('canvas').getContext('2d')


let bg = new Bg(0,0,500,900,'IMG/kitty_fundo.jpg')
let bg2 = new Bg(500,0,500,900,'IMG/kitty_fundo.jpg') 

    function draw(){
        bg.draw()
        bg2.draw()

    }

    function uptade(){
        bg.move(10, -500, 0)
    }

    function main(){
        canvas.clearRect(0,0,500,900)
        uptade()
        draw()
    }

    setInterval(main, 100)