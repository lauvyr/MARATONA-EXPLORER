const elementResposta = document.querySelector("#answer")
const inputQuestion = document.querySelector ("#inputQuestion")
const buttonQuestion = document.querySelector ("#buttonQuestion")

const answers = [
          "Certeza!",
        "Não tenho tanta certeza.",
        "É decididamente assim.",
        "Não conte com isso.",
        "Sem dúvidas!",
        "Pergunte novamente mais tarde.",
        "Sim, definitivamente!",
        "Minha resposta é não.",
        "Você pode contar com isso.",
        "Melhor eu não te dizer agora.",
        "A meu ver, sim.",
        "Minhas fontes dizem não.",
        "Provavelmente.",
        "Não é possível prever agora.",
        "Perspectiva boa.",
        "As perspectivas não são tão boas.",
        "Sim.",
        "Concentre-se e pergunte novamente.",
        "Sinais apontam que sim.",
     ]
     
      function  askQuestion() {

          if(inputQuestion.value == "") {
          alert("Ask your question")
          return
      }
      
      buttonQuestion.setAttribute("disabled", true)

      const question = "<div>" + inputQuestion.value + "</div>"


        const totalResp = answers.length
        const numAleat = Math.floor(Math.random() * totalResp)

        console.log(answers[numAleat])
        elementResposta.innerHTML = question + answers [numAleat]

        elementResposta.style.opacity = 1

        setTimeout(function() {
        elementResposta.style.opacity = 0;
        buttonQuestion.removeAttribute('disabled')
      }, 2000);
     }
