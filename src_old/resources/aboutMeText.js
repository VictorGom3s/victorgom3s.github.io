const text = `
  class Victor {
    constructor() {
      this.nome = "Victor Gomes Sampaio";
      this.local = "Americana, São Paulo";
    }
    
    formacaoAcademica(){
      return [
        { "2018 - Agora": "Análise e Desenvolvimento de Sistemas, UNICAMP" },
        { "2016 - 2017": "Técnico em Informática, ETEC Polivalente de Americana" }
      ]
    }
    
    experienciaProfissional(){
      return [
        { "Abr/2021 – Agora": "Desenvolvedor Full-Stack, Kyte App" },
        { "Out/2019 – Jun/2020": "Estágio em Desenvolvimento Web Back-End, Hybriun Desenvolvimento" },
        { "Nov/2018 – Abr/2019": "Estágio em Desenvolvimento Web Full-Stack, Tráfego Soluções Integradas" },
        { "Ago/2016 – Dez/2017": "Auxiliar Administrativo Aprendiz, FAM – Faculdade de Americana" }      
      ]
    }
    
    habilidades(){
      return
        [
          "HTML", "CSS", "Sass", "JavaScript", "Node.js",
          "Express.js", "TypeScript", "MongoDB", "Sequelize/Mongoose",
          "MySQL/MariaDB", "Git/GitHub", "Linux", "React", "React Native",
          "Estruturas de Dados", "Programação Orientada a Objetos",
          "Testes Automatizados", "Cypress"
        ] 
    }
    
    idiomas(){
      return [
        {"Português": "Nativo"},
        {"Inglês": "Avançado"}     
      ] 
    }
  }
`;

export default text;
