const canvas = document.getElementById('canvas').getContext('2d')


let bg = new Bg(0,0,500,900,'IMG/kitty_fundo.jpg')
let bg2 = new Bg(500,0,500,900,'IMG/kitty_fundo.jpg') 
let ground = new Bg(0,700,500,200,'IMG/ground.png')
let ground2 = new Bg(0,700,500,200,'IMG/ground.png') 

    function draw(){
        bg.draw()
        bg2.draw()
        ground.draw()
        ground2.draw()
    }

    function uptade(){
        bg.move(10, -500, 0)
        bg2.move(10, 0, 500)
        ground.move(10, -500, 0)
        ground2.move(10, 0, 485)
    }

    function main(){
        canvas.clearRect(0,0,500,900)
        uptade()
        draw()
    }

    setInterval(main, 100)