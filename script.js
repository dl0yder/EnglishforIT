const glossary = [
    {
        term: "Algorithm",
        definition: "A process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer.",
        image: "assets/algorithm.png"
    },
    {
        term: "API (Application Programming Interface)",
        definition: "A set of functions and procedures allowing the creation of applications that access the features or data of an operating system, application, or other service.",
        image: "assets/api.png"
    },
    {
        term: "Bug",
        definition: "An error, flaw or fault in a computer program or system that causes it to produce an incorrect or unexpected result, or to behave in unintended ways.",
        image: "assets/bug.png"
    },
    {
        term: "Cloud Computing",
        definition: "The practice of using a network of remote servers hosted on the Internet to store, manage, and process data, rather than a local server or a personal computer.",
        image: "assets/cloud-computing.png"
    },
    {
        term: "CPU (Central Processing Unit)",
        definition: "The electronic circuitry within a computer that executes instructions that make up a computer program.",
        image: "assets/cpu.png"
    },
    {
        term: "CSS (Cascading Style Sheets)",
        definition: "A style sheet language used for describing the presentation of a document written in a markup language like HTML.",
        image: "assets/css.png"
    },
    {
        term: "Database",
        definition: "An organized collection of data, generally stored and accessed electronically from a computer system.",
        image: "assets/database.png"
    },
    {
        term: "DNS (Domain Name System)",
        definition: "The hierarchical and decentralized naming system used to identify computers, services, and other resources reachable through the Internet or other Internet Protocol (IP) networks.",
        image: "assets/dns.png"
    },
    {
        term: "Firewall",
        definition: "A network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules.",
        image: "assets/firewall.png"
    },
    {
        term: "Git",
        definition: "A distributed version-control system for tracking changes in source code during software development.",
        image: "assets/git.png"
    },
    {
        term: "HTML (Hypertext Markup Language)",
        definition: "The standard markup language for documents designed to be displayed in a web browser.",
        image: "assets/html.png"
    },
    {
        term: "HTTP (Hypertext Transfer Protocol)",
        definition: "An application protocol for distributed, collaborative, hypermedia information systems.",
        image: "assets/http.png"
    },
    {
        term: "IDE (Integrated Development Environment)",
        definition: "A software application that provides comprehensive facilities to computer programmers for software development.",
        image: "assets/ide.png"
    },
    {
        term: "IP Address (Internet Protocol Address)",
        definition: "A numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication.",
        image: "assets/ip-address.png"
    },
    {
        term: "JavaScript",
        definition: "A programming language that conforms to the ECMAScript specification.",
        image: "assets/javascript.png"
    },
    {
        term: "Kernel",
        definition: "A computer program at the core of a computer's operating system that has complete control over everything in the system.",
        image: "assets/kernel.png"
    },
    {
        term: "Operating System (OS)",
        definition: "System software that manages computer hardware, software resources, and provides common services for computer programs.",
        image: "assets/os.png"
    },
    {
        term: "RAM (Random Access Memory)",
        definition: "A form of computer memory that can be read and changed in any order, typically used to store working data and machine code.",
        image: "assets/ram.png"
    },
    {
        term: "SDK (Software Development Kit)",
        definition: "A collection of software development tools in one installable package.",
        image: "assets/sdk.png"
    },
    {
        term: "SQL (Structured Query Language)",
        definition: "A domain-specific language used in programming and designed for managing data held in a relational database management system.",
        image: "assets/sql.png"
    }
];

const glossaryContainer = document.querySelector(".glossary-container");

glossary.forEach(term => {
    const termElement = document.createElement("div");
    termElement.classList.add("glossary-term");

    const image = document.createElement("img");
    image.src = term.image;
    image.alt = term.term;

    const termName = document.createElement("h3");
    termName.textContent = term.term;

    const definition = document.createElement("p");
    definition.textContent = term.definition;

    termElement.appendChild(image);
    termElement.appendChild(termName);
    termElement.appendChild(definition);

    glossaryContainer.appendChild(termElement);
});