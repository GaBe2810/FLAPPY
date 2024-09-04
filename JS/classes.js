class obj{
    quadro = 0
    tempo = 0
    constructor (x,y,largura,altura,imagem){
        this.x = x
        this.y = y
        this.largura = largura
        this.altura = altura
        this.imagem = imagem
    }
    draw(){
        let img = new Image()
        img.src = this.imagem
        canvas.drawImage(img,this.x,this.y,this.largura,this.altura)
    }
    animacao(velocidade,limite,nomeImg){
        this.tempo+=1
        if(this.tempo >= velocidade){
            this.tempo = 0
            this.quadro += 1
        }
        if(this.quadro >= limite){
            this.quadro = 0
        }

        this.imagem = 'IMG/' + nomeImg + this.quadro + '.png'
    }
} 

class Bg extends obj{
    move(velocidade, limite, posicao){
        this.x -= velocidade
        if (this.x < limite){
            this.x = posicao
        }
    }
}

class Ground extends Bg{
    
}
class Bird extends obj{
    velocidade = 2
    gravidade = 1
    move(){
        if(this.velocidade < 10){
            this.velocidade += this.gravidade
        }
        this.y += this.velocidade
    }
    limite(){
        if(this.y >= 660){
            this.y = 660
        }
        else if(this.y <= 0){
            this.y = 0
        }
    }
}