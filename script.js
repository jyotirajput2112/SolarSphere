function searchCosmicData() {
    const num = document.getElementById('userInput').value;
    const box = document.getElementById('content-box');

    if (num === '1') {
        box.innerHTML = `
            <h2>☀️ 1. Solar System Overview</h2>
            <div class="emoji-icon">🪐 🌍 ☀️</div>
            <div class="section-title">Cosmic Architecture & Scope:</div>
            <p>Represents the macro-level planetary ecosystem governed by solar gravity, acting as the foundation of celestial mechanics.</p>
            <div class="tech-stack">
                <b>DevOps & Infrastructure Mapping (Terraform IaC):</b><br>
                • <b>What it does:</b> Automates cloud infrastructure provisioning across multi-region environments.<br>
                • <b>Use Case:</b> Declaring cloud resources (VPCs, EC2, Security Groups) as code for reproducible, consistent deployments.
            </div>
        `;
    } else if (num === '2') {
        box.innerHTML = `
            <h2>✨ 2. Venus (Shukr) - The Brightest Planet</h2>
            <div class="emoji-icon">🌟</div>
            <div class="section-title">Cosmic Characteristics:</div>
            <p>The hottest and brightest terrestrial planet in our solar system, characterized by a dense greenhouse atmosphere.</p>
            <div class="tech-stack">
                <b>AWS Service Mapping (Amazon S3):</b><br>
                • <b>What it does:</b> Provides highly durable, scalable object storage for static files, media assets, and backups.<br>
                • <b>Use Case:</b> Hosting static web assets, frontend builds, and storing automated infrastructure state files securely.
            </div>
        `;
    } else if (num === '3') {
        box.innerHTML = `
            <h2>🌍 3. Earth (Prithvi) - Our Home</h2>
            <div class="emoji-icon">🌍</div>
            <div class="section-title">Cosmic Characteristics:</div>
            <p>The only known celestial body supporting active ecosystems, liquid water, and biological life.</p>
            <div class="tech-stack">
                <b>AWS Service & Container Mapping (EC2 & Nginx):</b><br>
                • <b>What it does:</b> Runs virtual server instances coupled with high-performance web servers inside Docker containers.<br>
                • <b>Use Case:</b> Serving production-grade web applications and handling incoming client HTTP/HTTPS traffic reliably.
            </div>
        `;
    } else if (num === '4') {
        box.innerHTML = `
            <h2>🔴 4. Mars (Mangal) - The Red Planet</h2>
            <div class="emoji-icon">🟠</div>
            <div class="section-title">Cosmic Characteristics:</div>
            <p>A dusty, cold desert world with a very thin atmosphere, rich in iron oxide giving it a distinctive red hue.</p>
            <div class="tech-stack">
                <b>AWS Monitoring Mapping (Amazon CloudWatch):</b><br>
                • <b>What it does:</b> Collects monitoring and operational data in the form of logs, metrics, and automated alarms.<br>
                • <b>Use Case:</b> Real-time system health tracking, tracking server error rates, and triggering alerts on infrastructure failures.
            </div>
        `;
    } else if (num === '5') {
        box.innerHTML = `
            <h2>🪐 5. Jupiter (Brihaspati) - The Gas Giant</h2>
            <div class="emoji-icon">🪐</div>
            <div class="section-title">Cosmic Characteristics:</div>
            <p>The largest planet in our solar system, massive in scale, featuring dynamic storm systems like the Great Red Spot.</p>
            <div class="tech-stack">
                <b>AWS Network Mapping (Amazon VPC & Subnets):</b><br>
                • <b>What it does:</b> Isolates cloud resources within a virtual private network with customizable public/private routing.<br>
                • <b>Use Case:</b> Segregating public-facing web servers from private backend databases for enterprise security.
            </div>
        `;
    } else if (num === '6') {
        box.innerHTML = `
            <h2>💫 6. Saturn (Shani) - The Ringed Planet</h2>
            <div class="emoji-icon">🪐✨</div>
            <div class="section-title">Cosmic Characteristics:</div>
            <p>Famed for its complex, extensive system of icy rings orbiting majestically around its equatorial plane.</p>
            <div class="tech-stack">
                <b>DevOps Automation Mapping (GitHub Actions CI/CD):</b><br>
                • <b>What it does:</b> Automates software build, testing, and deployment pipelines directly upon code commits.<br>
                • <b>Use Case:</b> Ensuring seamless continuous delivery from code repository to live cloud production environments.
            </div>
        `;
    } else if (num === '7') {
        box.innerHTML = `
            <h2>🌕 7. The Moon (Chandrama) - Natural Satellite</h2>
            <div class="emoji-icon">🌕</div>
            <div class="section-title">Cosmic Characteristics:</div>
            <p>Earth's sole natural satellite, stabilizing planetary axial tilt and influencing tidal rhythms.</p>
            <div class="tech-stack">
                <b>AWS Security Mapping (AWS IAM Roles & Policies):</b><br>
                • <b>What it does:</b> Manages fine-grained access control and secure permissions for AWS services and users.<br>
                • <b>Use Case:</b> Enforcing the principle of least privilege, ensuring secure authentication and authorization across cloud components.
            </div>
        `;
    } else {
        box.innerHTML = `
            <h2 style="color: #ff4d4d; text-align: center;">⚠️ Invalid Input</h2>
            <p style="text-align: center;">Please enter a valid number between 1 and 7 to explore cosmic and DevOps architecture.</p>
        `;
    }
}