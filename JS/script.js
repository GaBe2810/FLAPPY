const canvas = document.getElementById('canvas').getContext('2d')


let bg = new Bg(0,0,500,900,'IMG/kitty_fundo.jpg')
let bg2 = new Bg(500,0,500,900,'IMG/kitty_fundo.jpg') 
let ground = new Ground(0,700,500,200,'IMG/ground.png')
let ground2 = new Ground(500,700,500,200,'IMG/ground.png') 
let bird = new Bird (50,400,63,51, 'IMG/bird0.png')
//let bird = new Bird (50,400,63,51, 'IMG/kitty.gif')

document.addEventListener('click', function(e){
    bird.y -= 5
})

    function draw(){
        bg.draw()
        bg2.draw()
        ground.draw()
        ground2.draw()
        bird.draw()
    }

    function uptade(){
        bg.move(1, -500, 0)
        bg2.move(1, 0, 500)
        ground.move(2, -500, 0)
        ground2.move(2, 0, 500)
        bird.animacao (1,4, 'bird')
    }

    function main(){
        canvas.clearRect(0,0,500,900)
        uptade()
        draw()
        requestAnimationFrame(main)
    }

main()