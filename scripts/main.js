const coursesData = [
  {
    id: 1,
    title: "Full-Stack",
    description: "Você já tá na trilha. Essa formação é a base, cobrindo desde HTML/CSS até React e Node de forma introdutória."
  },
  {
    id: 2,
    title: "Inglês para Devs",
    description: "Mesmo sendo curta, é fundamental para entender documentações, participar de comunidades e se comunicar globalmente. Vale fazer logo no início para não atrapalhar os estudos futuros."
  },
  {
    id: 3,
    title: "ReactJS",
    description: "Aprofunda o front-end que você já tocou no Full-Stack, explorando recursos modernos do React e Next.js."
  },
  {
    id: 4,
    title: "Node.js",
    description: "Agora é hora de fortalecer o backend. Essa formação vai detalhar a criação de APIs e arquiteturas mais robustas, complementando o que você aprendeu na formação Full-Stack."
  },
  {
    id: 5,
    title: "DevOps",
    description: "Depois de desenvolver, é importante saber como colocar sua aplicação no ar e gerenciar infraestrutura. Essa formação mostra o ciclo completo de deploy, monitoramento e escalabilidade."
  },
  {
    id: 6,
    title: "React Native",
    description: "A transição para mobile fica mais suave quando você já domina React. Essa formação utiliza a base do React para criar apps iOS/Android."
  },
  {
    id: 7,
    title: "Android com Kotlin",
    description: "Se a ideia for explorar o desenvolvimento nativo, essa é a porta de entrada para o universo Android, diversificando suas habilidades mobile."
  },
  {
    id: 8,
    title: "iOS com Swift",
    description: "Com o Android já no bolso, explorar o desenvolvimento nativo para iOS complementa sua formação mobile, te deixando apto para as duas grandes plataformas."
  },
  {
    id: 9,
    title: "PHP",
    description: "Volta ao universo web, mas com outro ecossistema. Aprender Laravel amplia o leque de frameworks que você domina e te mostra outra abordagem no desenvolvimento backend."
  },
  {
    id: 10,
    title: "Python",
    description: "Versátil e cada vez mais requisitado, o Python abre portas para web, automação e análise de dados – além de ser base para o futuro na área de IA."
  },
  {
    id: 11,
    title: "Java",
    description: "Para mergulhar no desenvolvimento enterprise, o Java (com Spring Boot) é uma referência sólida em sistemas robustos e escaláveis."
  },
  {
    id: 12,
    title: "C#",
    description: "Outra linguagem forte para o ambiente corporativo, especialmente com o ecossistema .NET. Uma ótima alternativa ao Java para sistemas enterprise."
  },
  {
    id: 13,
    title: "Go",
    description: "Focado em performance e sistemas concorrentes, o Go é ideal para quem quer construir aplicações cloud-native de alta performance."
  },
  {
    id: 14,
    title: "Desenvolvimento de IA",
    description: "Com uma base sólida em várias linguagens e práticas, é hora de explorar a criação e deploy de modelos de machine learning."
  },
  {
    id: 15,
    title: "IA para Devs",
    description: "Finalizando, essa formação traz a aplicação prática da IA – integrando LLMs e outras ferramentas em suas aplicações, colocando a teoria em ação."
  }
];

const coursesList = document.getElementById('courses-list');

// Cria e adiciona os cards dos cursos
coursesData.forEach(course => {
  const courseCard = document.createElement('div');
  courseCard.className = 'course-card';
  courseCard.id = `course-${course.id}`;

  courseCard.innerHTML = `
    <div class="course-title">
      <div class="title-wrapper">
        <span class="course-number">${course.id}</span>
        ${course.title}
      </div>
      <button class="toggle-btn">↓</button>
    </div>
    <div class="course-description">
      ${course.description}
    </div>
  `;

  coursesList.appendChild(courseCard);

  // Adiciona o evento para expandir/contrair a descrição
  courseCard.addEventListener('click', () => {
    courseCard.classList.toggle('expanded');
  });
});

// Expande automaticamente o primeiro card após meio segundo
setTimeout(() => {
  document.getElementById('course-1').classList.add('expanded');
}, 500);
