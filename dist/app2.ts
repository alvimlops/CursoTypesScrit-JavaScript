//nome da classe
class Carro {

    //nome 
    private modelo:string
    private numeroDePortas: number
    private velocidade: number = 0

    //construtor, responsavel por receber os parametrso recebido em Instanciação 
    constructor(modelo: string,numeroDePortas: number ){
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }


    //metodos
    public acelerar(): void {
        this.velocidade = this.velocidade + 10
    }

    public parar():void{
        this.velocidade = 0
    }

    public velocidadeAtual(): number{
        return this.velocidade
    }
}

//Instanciação da Classe
let carroA = new Carro('fiat', 3)
console.log(carroA)