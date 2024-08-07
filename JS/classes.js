class obj{
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
} 