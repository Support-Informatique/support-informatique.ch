# Company Website

This repository hosts the codebase for our company's website. Our website provides an engaging platform for potential clients and partners to learn about our team, our services, and our successful projects. 

## 🧑‍💻 Technologies

The project is built using the following technologies:

![React](https://img.shields.io/badge/-React-43B7F9?logo=react&logoColor=white&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white&style=for-the-badge)
![ViteJS](https://img.shields.io/badge/-ViteJS-FFA800?logo=vite&logoColor=white&style=for-the-badge)


## 💼 Features

1. **Why Us** - In this section, we highlight our value proposition, and why potential clients should choose our services.
2. **Our Team** - A showcase of our team members along with their unique avatars. This helps to establish a personal connection with visitors.
3. **Our Clients** - We take pride in showcasing the logos of our esteemed clients as a testament to our quality services.
4. **Our Services** - Here, we elaborate on the range of services we offer - from full-stack web development to IT support.
5. **Our Projects** - This section showcases some of our most noteworthy projects, demonstrating our technical proficiency and ability to deliver results.


## 🔄 Continuous Integration / Continuous Deployment (CI/CD)

We follow the best practices for CI/CD using GitHub Actions.

### Linting Check

Every push to the `main` branch triggers a linting check using the `npm run lint` command. This helps in maintaining a clean, error-free codebase.

![lint](https://github.com/Support-Informatique/support-informatique.ch/actions/workflows/lint.yml/badge.svg)

### Automatic Deployment

Any push to the `prod` branch triggers an automatic deployment to our live site. Before the deployment, we also run a `npm run lint` command to ensure that the production version is error-free and ready for deployment.

![deploy](https://github.com/Support-Informatique/support-informatique.ch/actions/workflows/deploy.yml/badge.svg)

## 📖 License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.
