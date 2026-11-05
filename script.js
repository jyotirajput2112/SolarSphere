function searchCosmicData() {
    const num = document.getElementById('userInput').value;
    const box = document.getElementById('content-box');

    if (num === '1') {
        box.innerHTML = `
            <h2>☀️ 1. Saurmandal Overview</h2>
            <div class="emoji-icon">🪐 🌍 ☀️</div>
            <p><b>Cosmic Detail:</b> Hamara solar system Suraj ke charo taraf vyavasthit roop se orbit karta hai.</p>
            <div class="tech-stack">
                <b>DevOps Mapping (Terraform):</b> Infrastructure as Code (IaC) ke zariye pure cloud environment ko automate aur manage karna.
            </div>
        `;
    } else if (num === '2') {
        box.innerHTML = `
            <h2>✨ 2. Chamkila Shukr Grah (Venus)</h2>
            <div class="emoji-icon">🌟</div>
            <p><b>Cosmic Detail:</b> Yeh saurmandal ka sabse chamkila aur garam grah hai.</p>
            <div class="tech-stack">
                <b>AWS Mapping (S3 Bucket):</b> Static assets, images, aur backups ko secure cloud storage par store karne ke liye Amazon S3 ka use hota hai.
            </div>
        `;
    } else if (num === '3') {
        box.innerHTML = `
            <h2>🌍 3. Hamari Prithvi (Earth)</h2>
            <div class="emoji-icon">🌍</div>
            <p><b>Cosmic Detail:</b> Yahi ekmatra grah hai jahan jeevan aur active ecosystems moujud hain.</p>
            <div class="tech-stack">
                <b>AWS Mapping (EC2 & Nginx):</b> Production web traffic ko handle karne ke liye AWS EC2 instance par Docker container aur Nginx web server deploy kiya jata hai.
            </div>
        `;
    } else if (num === '4') {
        box.innerHTML = `
            <h2>🔴 4. Lal Mangal Grah (Mars)</h2>
            <div class="emoji-icon">🟠</div>
            <p><b>Cosmic Detail:</b> Red Planet jise iron oxide ki wajah se pehchana jata hai.</p>
            <div class="tech-stack">
                <b>AWS Mapping (CloudWatch):</b> Server logs, performance metrics, aur system health ko real-time monitor karne ke liye AWS CloudWatch use hota hai.
            </div>
        `;
    } else if (num === '5') {
        box.innerHTML = `
            <h2>🪐 5. Vishal Brihaspati Grah (Jupiter)</h2>
            <div class="emoji-icon">🪐</div>
            <p><b>Cosmic Detail:</b> Saurmandal ka sabse bada gas giant grah.</p>
            <div class="tech-stack">
                <b>AWS Mapping (VPC & Subnets):</b> Secure networking, public/private subnets, aur internet gateways ke liye AWS Virtual Private Cloud (VPC) design kiya jata hai.
            </div>
        `;
    } else if (num === '6') {
        box.innerHTML = `
            <h2>💫 6. Chhalledar Shani Grah (Saturn)</h2>
            <div class="emoji-icon">🪐✨</div>
            <p><b>Cosmic Detail:</b> Apne sundar icy rings ke liye poori duniya mein prasiddh hai.</p>
            <div class="tech-stack">
                <b>DevOps Mapping (GitHub Actions):</b> Code push hote hi automatic build, test, aur deployment pipeline run karne ke liye CI/CD automation.
            </div>
        `;
    } else if (num === '7') {
        box.innerHTML = `
            <h2>🌕 7. Chandrama (Moon)</h2>
            <div class="emoji-icon">🌕</div>
            <p><b>Cosmic Detail:</b> Prithvi ka prakritik upgrah jo raat ko roshni deta hai.</p>
            <div class="tech-stack">
                <b>AWS Mapping (IAM Roles & Policies):</b> Least privilege access control aur secure resource permissions manage karne ke liye AWS Identity and Access Management.
            </div>
        `;
    } else {
        box.innerHTML = `
            <h3 style="color: #ff4d4d; text-align: center;">Galat Input!</h3>
            <p style="text-align: center;">Kripya 1 se lekar 7 tak ke beech ka hi koi number enter karein.</p>
        `;
    }
}