# 💼 Frontend development showcase/portfolio
As a student at Lexicon in a crash frontend dev course I set out to create a showcase/portfolio with my accumulated knowledge about HTML/CSS(Tailwind) Typescript/React/Nextjs.
With this repository a connected [project plan](https://github.com/users/fnelin/projects/5) is available for transparent workflow showcase.<br>
### ❔ About Lexicon Frontend development crash course
The Lexicon Frontend dev crash course is a hands-on program designed to prepare for modern Frontend development roles. The training spans the full development lifecycle, from foundational HTML and CSS to building advanced applications with TypeScript, Node.js, JavaScript and React. Advanced AI assistance will be clearly marked within the code if such has been utilized from either Codepen and/or Copilot.<br>
### 🔍 Key areas of focus:
+ HTML & CSS: Semantic HTML, CSS modules, Tailwind, Flexbox, CSS Grid, responsive design, accessibility
+ Version Control & Agile Methods: Git, GitHub, SCRUM, agile workflows
+ TypeScript: ECMAScript standards, modular code structure, DOM manipulation, event handling, REST and GraphQL APIs
+ React: Next.js, SPA development, component architecture, state management, routing, forms, and commonly used React libraries
## 📖 Instructions and workflow
Instructions (in swedish) for the project can be found [here](https://github.com/Lexicon-Utbildning-Front-end-2025-2026/individuellt-arbete).<br>
Detailed workflow can be found in the [project plan](https://github.com/users/fnelin/projects/5) while an overview look like this:
- [X] 🎨 Create plan, wireframe and moc
- [X] 🛠️ Research requirements, define scope & select toolset
- [X] ✔️ Project greenlit by teachers/mentors
- [X] 📋 Userstories created and translated into backlog tasks
- [X] 🖼️ Install project and framework
- [ ] 🏃 Sprint 1 - Backend & architecture
- [ ] 🏃 Sprint 2 - Layout & UI components
- [ ] 🏃 Sprint 3 - CRUD, accessibility & verification
- [ ] 📜 Presentation, demo and feedback
- [ ] 🍾 Project completed
- [ ] ♻️ Retrospective
- [ ] 👷 Continued work and updates as knowledgebase grows

## 💭 Pitch & Moc
A site to collect all the various types of reviews that I keep writing on different sites. Mostly for my own sake for memory help about things I've encountered, seen, experienced etc.

### 🧱 Requirements, scope and toolset:
+ <strong>Functional</strong>
  + Responsive design for desktop, tablet and mobile viewers
  + Semantic html and accessability.
  + Basic header and footer. ?Navigation
  + A mellow colorschema
  + Reviews are presented as cards on main page and links to details. ?Modals
  + Ability to save, edit, delete reviews and categories
  + Each review can be categorised with one or several labels
+ <strong>Technical</strong>
  + As much server side rendering as possible
  + Techstack consisting of HTML / Tailwind(CSS) / Typescript / NextJS / Storage
  + Storage ~~could be JSON file,~~ SQLite ~~or PostgreSQL~~ with ~~either~~ Prisma ~~or Drizzler~~ as ORM
  + Simple database design created at [dbdiagram.io](https://dbdiagram.io/d/portfolioFE-69a2a405a3f0aa31e1602d78)
+ <strong>AI usage </strong>
  + Chatgpt & Deepseek used for inspiration, database seed
  + Copilot used within code editor VSCode for faster repetitive work
  + Codepen mainly for adhoc unit testing and functional debugging
+ <strong>Limited scope</strong>
  + User profile handling will not be implemented
  + Limited search/filtering in base version.
  + Database designed for future additions, fex commenting and re-reviews.
  + All resources be local, no use of cloud service or third party cookies
### 🧭 Interface & Database design
Rough design templates representing thoughtprocess of the interface.<br>
Colors represent elements and not the actual colorschema.
<table>
  <tr>
    <td align="center" valign="top" width="270">
      <strong>Desktop</strong><br>
      <img src="./planning/images/screen_desktop.png" width="270">
    </td>
    <td align="center" valign="top" width="198">
      <strong>Tablet</strong><br>
      <img src="./planning/images/screen_tablet.png" width="200">
    </td>
    <td align="center" valign="top" width="125">
      <strong>Mobile</strong><br>
      <img src="./planning/images/screen_mobile.png" width="125">
    </td>
  </tr>
  <tr>
    <td align="center" valign="top" colspan="3">
      <strong>Database design</strong><br>
      <img src="./planning/images/erd.png" width="500">
    </td>
  </tr>
</table>

## Project Structure

### Architecture & backend

Folder structure of the project:
```
root/
├── app/
│   ├── (routes)/           # Routes for pages and slugs
│   ├── @modal/             # Route for modals
│   └── generated/prisma    # Generated prisma client information
│
├── components/             
│   ├── ui/                 # Reusable elements (Button, Input, Card)
│   └── feature/            # Feature-specific components (ReviewCard, etc.)
│
├── lib/                    # Shared application functions 
│   └── db/                 # Shared database functions 
│
├── prisma/                 # Prisma client information and schema
│
├── db/                     # Development database
│
├── public/                 # Resources for publication
│   └── images              # Images for publication
├── planning/               # Project documentation & mocs
├── types/                  # Types & interfaces
└── node_modules/           # Generated by the system
```

Database model for prisma
```
model reviews {
  id              String   @id @default(cuid())
  titel           String
  ingress         String
  body            String
  score           Int
  mainmedia       String
  category        category @relation(fields: [category_id], references: [id])
  category_id     String
  original_review String
  published       Boolean? @default(false)
  updatedAt       DateTime @updatedAt
  createdAt       DateTime @default(now())
}

model category {
  id            String @id @default(cuid())
  category_name String
  reviews       reviews[]
  }
```

> [!NOTE]
> 🚧 **More to come**. 🚧 <br>
> This readme will be a living object with more details coming as they form and the project progress.

# 🏅 About the author
Former MCSD SQLServer developer who ventured into economics, finance and marketing before coming back as modern frontend developer with fullstack insights. <br>
Other skills include but are not limited to analytical and business-oriented IT economist with experience in portfolio governance, budgeting, financial workflows and administration. Combines strong technical capabilities with a background in system development, databases, and BI. Skilled at driving structured ways of working, enabling informed decision making through clear analysis and acting as the link between IT and a broader organization.
## 📧 Contact
E-mail: fredrik.nelin(@)outlook.com<br>
LinkedIn: https://www.linkedin.com/in/fnelin/en<br>
Project link: https://github.com/fnelin/portfolioFE