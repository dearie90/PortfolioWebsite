const paragraphAvond4daagse = "The current project I am working on is Avond4daagse. "+
"In this Project I am working on a website as part of a team for a Dutch national sportsevent foundation."+
"This website is going to be a monolithic solution that multiple branches of the foundation can use to manage their participants, thier workers and volunteers."+
"It will be written with the .NET API using REACT to form a single page application."+
"An SQL database will be used to support the website alongside the .NET API ORM."+
"Azure will e used to host and deploy the website and database."+
"Our team is going to be using SCRUM to manage the project and will be using Github as version control and collaboration tool.";

const pragraphBuurtbewonerWebsite  = "The buurtbewoner website is a project I worked on in a previous year at the Hague university."+
  "This project was a group assignment where we had to make a website for a local coummunity."+
  "The website entailed a messaging and posting forum for the community members to communicate with each other and voice thier concerns."+
  "This website was created in .NET RAZOR in combination with AJAX and C#. The database was created in SQL and hosted on Azure."+
  "The project was managed through SCRUM and with the help of github for version control and collaboration.";

const pragraphUnityGame = "The unity game is a game project I worked on during my minor in the hague univeersity of applied sciences in Zoetermeer."+
"The game that me and my team were assigned to make was a platformer with both story and action game elements."+
"During this project I learned to 3d model, apply and create textures, materials, animations, learned of State-Machines, learned about the Entity Componenet paradigm,"+
"learned about gpu and shader optimization, and learned how to set up multithreaded tasks and game systems.";

const tags = [
  "website", 
  "team", 
  "monolithic", 
  "git", 
  "github", 
  "Scrum", 
  "SQL", 
  "mySQL", 
  "REACT", 
  "database", 
  "ORM", 
  "Azure", 
  "Unity", 
  "textures", 
  "materials", 
  "animations"
];

function boldMatchingTags(paragraph, tags) {
  // Put all array members of the tags array to lowercase to make the search case insensitive
  let lowerTags = tags.map(tag => tag.toLowerCase());
  
  let words = paragraph.split(" ");
  let newParagraph = "";

  for (let i = 0; i < words.length; i++) {
    let tempWord = words[i];

    // Check before and after the word for punctuation and remove it temporarily
    let match = tempWord.match(/^([^a-zA-Z0-9]*)(.*?)([^a-zA-Z0-9]*)$/);

    let prefix = match[1];
    let coreWord = match[2];
    let suffix = match[3];

    if (lowerTags.includes(coreWord.toLowerCase())) {
      coreWord = "<b>" + coreWord + "</b>";
    }

    // Add back the punctuation temporarily removed fromt he word
    let reconstructedWord = prefix + coreWord + suffix;

    if (newParagraph === "") {
      newParagraph = reconstructedWord;
    } else {
      newParagraph = newParagraph + " " + reconstructedWord;
    }
  }

  return newParagraph;
}