<img width="2730" height="1536" alt="Gemini_Generated_Image_chuxc5chuxc5chux" src="https://github.com/user-attachments/assets/a1b32627-9899-45fc-a4c3-518498217b0e" />
<img width="1672" height="941" alt="हिंदी सौरमंडल अंतरिक्ष पोस्टर" src="https://github.com/user-attachments/assets/d651e7f2-cf2f-40f9-b44d-f1c4e76857b2" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/bd8bc479-0019-47c2-8534-b27b49d170f5" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/42b3a8f0-74f6-483c-980a-ef9c08ec01bf" />



# 🌌 SolarSphere / Source Urja

A production-ready, interactive web application and cosmic/cloud explorer designed to showcase modern web development and DevOps automation workflows.

🔗 **Live Demo:** [https://solarsphere.onrender.com](https://solarsphere.onrender.com)
📂 **GitHub Repository:** [https://github.com/jyotirajput2112/SolarSphere](https://github.com/jyotirajput2112/SolarSphere)

---

## 🚀 Project Overview
SolarSphere is an interactive platform where users can input numbers (1 to 7) to explore detailed guides on planetary systems and infrastructure components. Beyond its clean frontend, this project is built to demonstrate end-to-end containerization, automated CI/CD pipelines, and cloud deployment practices.

---

## 🛠️ Tech Stack & Tools
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Containerization:** Docker (`nginx:alpine` web server)
- **CI/CD Automation:** GitHub Actions (`deploy.yml`)
- **Cloud Hosting:** Render Platform

---

## 🏗️ Architecture & Deployment Flow

```mermaid
graph TD
    A[Local Development <br> VS Code] -->|Code Push| B(GitHub Repository)
    B -->|Trigger Workflow| C[GitHub Actions <br> CI/CD Pipeline]
    C -->|Build & Package| D[Docker Container <br> Nginx Server]
    D -->|Automated Deploy| E[Render Cloud Platform <br> Live Hosting]
    E -->|Access App| F[Live User <br> solarsphere.onrender.com]

    style A fill:#f9f,stroke:#333,stroke-width:2px
    style C fill:#bbf,stroke:#333,stroke-width:2px
    style E fill:#bfb,stroke:#333,stroke-width:2px

How to Run Locally
1 Clone the Repository:
git clone [https://github.com/jyotirajput2112/SolarSphere.git](https://github.com/jyotirajput2112/SolarSphere.git)
cd SolarSphere

2 Run using Docker:
docker build -t solarsphere .
docker run -p 8080:80 solarsphere

3 

