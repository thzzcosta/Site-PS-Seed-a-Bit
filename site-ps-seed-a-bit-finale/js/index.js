const questions = [
  {
    question: "A Seed a Bit paga algum tipo de contraprestação aos membros?",
    answer:
      "Por lei, membros de uma empresa júnior são impedidos de receber qualquer tipo de contraprestação pelos seus serviços, o ganho real que a EJ proporciona é a vivência do meio empresarial que possibilita o exercício do conhecimento prático.",
  },
  {
    question: "Alunos de todos os cursos de graduação podem participar?",
    answer:
      "Sim. Alunos de todos os cursos de graduação da unidade sede da UFRPE, podem se inscrever.",
  },
  {
    question: "Qual a carga horária mínima que um membro deve cumprir?",
    answer:
      "A carga horária mínima semanal são de 10 horas, e pode ser cumprida quase que integralmente de maneira remota.",
  },
  {
    question: "É preciso saber programar?",
    answer:
      "Não necessariamente, a Seed a Bit possui áreas de Backoffice onde as atividades não exigem a necessidade de programação, no entanto o papel da Empresa Júnior como instrumento de divulgação de conhecimento tenta trazer para todos, ao menos noções básicas do desenvolvimento de software.",
  },
  {
    question: "A partir de qual período é possível ingressar na Seed a Bit?",
    answer:
      "Não existe periodização mínima para o ingresso, apenas é necessário ter compromisso e muita vontade de aprender.",
  },
  {
    question: "Ainda tem alguma dúvida?",
    answer:
      "Entre em contato com a gente pelo email <span class=\"span-bold\">processo.seletivo@seedabit.org.br</span>.",
  },
];

const card1 = document.querySelector("#duvidas-frequentes__card--1");
const card2 = document.querySelector("#duvidas-frequentes__card--2");
var position = 0;
card1.children[0].innerHTML = questions[position].question;
card1.children[1].innerHTML = questions[position].answer;
card2.children[0].innerHTML = questions[position + 1].question;
card2.children[1].innerHTML = questions[position + 1].answer;
var timeout, timeout2, containsAnimation, vw, limit;

function moveCards(toRight) {
  containsAnimation = card1.classList.contains("duvidas-frequentes__card--animation");
  vw = document.documentElement.clientWidth;
  limit = vw <= 980 ? questions.length : questions.length - 1;
  if (toRight && position + 1 < limit) {
    position++;
    if (containsAnimation) {
      card1.classList.remove("duvidas-frequentes__card--animation");
      card2.classList.remove("duvidas-frequentes__card--animation");
      clearTimeout(timeout2);
    }
    card1.classList.toggle("duvidas-frequentes__card--animation");
    card2.classList.toggle("duvidas-frequentes__card--animation");
    timeout = setTimeout(() => {
      card1.children[0].innerHTML = questions[position].question;
      card1.children[1].innerHTML = questions[position].answer;
      card2.children[0].innerHTML = questions[position + 1]
        ? questions[position + 1].question
        : questions[position].question;
      card2.children[1].innerHTML = questions[position + 1]
        ? questions[position + 1].answer
        : questions[position].answer;
    }, 350);
    timeout2 = setTimeout(() => {
      card1.classList.toggle("duvidas-frequentes__card--animation");
      card2.classList.toggle("duvidas-frequentes__card--animation");
    }, 700);
  }
  if (!toRight && position - 1 >= 0) {
    position--;
    if (containsAnimation) {
      card1.classList.remove("duvidas-frequentes__card--animation");
      card2.classList.remove("duvidas-frequentes__card--animation");
      clearTimeout(timeout2);
    }
    card1.classList.toggle("duvidas-frequentes__card--animation");
    card2.classList.toggle("duvidas-frequentes__card--animation");
    timeout = setTimeout(() => {
      card1.children[0].innerHTML = questions[position].question;
      card1.children[1].innerHTML = questions[position].answer;
      card2.children[0].innerHTML = questions[position + 1].question;
      card2.children[1].innerHTML = questions[position + 1].answer;
    }, 350);
    timeout2 = setTimeout(() => {
      card1.classList.toggle("duvidas-frequentes__card--animation");
      card2.classList.toggle("duvidas-frequentes__card--animation");
    }, 700);
  }
}
