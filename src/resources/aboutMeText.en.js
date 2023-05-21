const text = `
  class Victor {
    constructor() {
      this.name = "Victor Gomes Sampaio";
      this.location = "Americana, São Paulo";
    }
    
    academicBackground() {
      return [
        { "2018 - 2022": "Systems Analysis and Development, UNICAMP" },
        { "2016 - 2017": "IT Technician, ETEC Polivalente de Americana" }
      ]
    }
    
    professionalExperience() {
      return [
        { "Apr/2021 – Now": "Full-Stack Developer, Kyte App" },
        { "Oct/2019 – Jun/2020": "Back-End Web Development Internship, Hybriun Desenvolvimento" },
        { "Nov/2018 – Apr/2019": "Full-Stack Web Development Internship, Tráfego Soluções Integradas" },
        { "Aug/2016 – Dec/2017": "Administrative Assistant Apprentice, FAM – Faculdade de Americana" }      
      ]
    }
    
    skills() {
      return
        [
          "HTML", "CSS", "Sass", "JavaScript", "Node.js",
          "Express.js", "TypeScript", "MongoDB", "Sequelize/Mongoose",
          "MySQL/MariaDB", "Git/GitHub", "Linux", "React", "React Native",
          "Data Structures", "Object-Oriented Programming",
          "Automated Testing", "Cypress"
        ] 
    }
    
    languages() {
      return [
        {"Portuguese": "Native"},
        {"English": "Advanced"}     
      ] 
    }
  }
`;

export default text;
