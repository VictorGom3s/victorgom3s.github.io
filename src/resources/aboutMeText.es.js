const text = `
  class Victor {
    constructor() {
      this.nombre = "Victor Gomes Sampaio";
      this.localizacion = "Americana, São Paulo";
    }
    
    formacionAcademica() {
      return [
        { "2018 - 2022": "Análisis y Desarrollo de Sistemas, UNICAMP" },
        { "2016 - 2017": "Técnico en Informática, ETEC Polivalente de Americana" }
      ]
    }
    
    experienciaProfesional() {
      return [
        { "Abr/2021 – Ahora": "Desarrollador Full-Stack, Kyte App" },
        { "Oct/2019 – Jun/2020": "Pasantía en Desarrollo Web Back-End, Hybriun Desenvolvimento" },
        { "Nov/2018 – Abr/2019": "Pasantía en Desarrollo Web Full-Stack, Tráfego Soluções Integradas" },
        { "Ago/2016 – Dic/2017": "Aprendiz de Asistente Administrativo, FAM – Faculdade de Americana" }      
      ]
    }
    
    habilidades() {
      return
        [
          "HTML", "CSS", "Sass", "JavaScript", "Node.js",
          "Express.js", "TypeScript", "MongoDB", "Sequelize/Mongoose",
          "MySQL/MariaDB", "Git/GitHub", "Linux", "React", "React Native",
          "Estructuras de Datos", "Programación Orientada a Objetos",
          "Pruebas Automatizadas", "Cypress"
        ] 
    }
    
    idiomas() {
      return [
        {"Portugués": "Nativo"},
        {"Inglés": "Avanzado"}     
      ] 
    }
  }
`;

export default text;
