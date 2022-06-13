# HTML
	HyperText Markup Language
		- Hiper texto = Ex; links que podemos colocar nos textos;
		- Markup = marcação (tags; atributos);
		- Linguagem = modo de escrita;

# URL= UNIVERSAL RESOURCE LOCATOR

# HTTPS = HYPER TEXT TRANSFER PROTOCOL SECURE

	h1 (section heading) -> Os elementos HTML <h1> – <h6> representam seis níveis de título de seção.
	p -> paragraph.
https://gist.githubusercontent.com/maykbrito/0acdf4ce919838ffed50915a31fc5b23/raw/6f4dd01ec3116428ec4c99255944cb9ac7927590/cristal-ball.svg <- link aula

https://emojipedia-us.s3.amazonaws.com/source/skype/289/crystal-ball_1f52e.png <- minha img

## REVISAO ##

<img src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/crystal-ball_1f52e.png" alt="crystal ball image">
<h1>I will reveal your destiny!</h1>
<p>Click on ask question for your destiny to be reveal.</p>
<input type="text" placeholder="Enter your question" />
<button>Ask question</button>
====================================================================

# CSS
	Cascading Style Sheets (folha de estilo de cascata)
		- Apresentação visual para o cliente;
		- Estilos para o HTML;
	
# Declaração
		- Seletor;
		- Propriedade e valor;
	
# Conceitos
		- Cascata -> o ultimo elemento sempre será o dominante, ordem dos atributos, sempre leva em conta a especificidade ;
		- Especificidade -> especificação do conteúdo ;
		- Box model -> dimensões, tudo são caixas, <div> é uma box;
		- Display block vs inline
		Block = sempre colocar um elemento anterior e outro elemento próximo;
		Inline = elemento um ao lado do outro naturalmente.
	
		Sans-serif = fontes sem tracejo.
		
	Fazer um comentário fora do código
	NO HTML   <!-- COMENTÁRIO --> 
	NO CSS   /*
	
	SUDO ELEMENTS
		hover
		
    	##IMPORTANTE##
		box-sizing: border-box;
  ====================================================================
  # JavaScript
```js
// 1. Variáveis
// let estaChovendo = true
// const meuNome = "Mayk"

// 2. Tipos de Dados 
  // String
  // ""
  // ''
  
  // Number
  // 12 - Integer (+ -)
  // 3.2 - Float (+ - )
  // Boolean
  // true ou false
  // const maiorDeDezoito = false
  // undefined - indefinido

// 3. Operadores
  // Atribuição (ex: =)
  // atribui valor
  // let n1 = 12
  // let n2 = 3 
  // Aritméticos (ex: * / + - )
  // calculos matemáticos simples
  // Concatenação de String (+)
  // Comparação (ex: > < == )
  // transforma a expressão em true ou false
  // const maiorQue = 1 > 2 // false
  // const igualA = 1 == 1 // true
// 4. Condicional (if/else)
  // const idade = 18
  // const maiorDeDezoito = idade >= 18 
  // if(maiorDeDezoito) {
  //   alert("Pode tirar carteira de motorista")
  // } else {
  //   alert("Não pode tirar")
  // }
// 5. Estrutura de dados
  // Array - Vetor - Lista
  // Array -----         0     1    2  3
  // const temperaturas = [23.3, 32.2, 1, 5]
  // Object
  // const pessoa = {
  //   nome: "Mayk",
  //   idade: 38,
  //   filhos: ["K", "E", "J", "L", "G"]
  // }
  // console.log(pessoa.filhos[3])
// 6. Function
  // 1. Criação 
  // function nomeDaFuncao() {
  //   console.log('código da função')
  // }
  // 2. Execução
  // nomeDaFuncao()

  // Parâmetros
  // function soma(a, b) {
  //   console.log(a + b)
  // }
  // soma(34, 45)
  // soma(90, 54)
  // Retorno
  // function soma(a, b) {
  //   return a + b
  // }
  // const multiplica = soma(2, 2) * 4
  // console.log(multiplica)
  // console.log(soma(2, 2))

// 7. Extensões da linguagem (ex.: Math, Date ...)
// Math.random()
// Math.floor(1.2)
// Math.ceil(1.2)
// 8. DOM - Document Object Model 
  
  // window
  // window.alert("alerta")
  // document
  // document.write("texto")
  // manipular elementos
  // document.documentElement.style.background = "black"
```
