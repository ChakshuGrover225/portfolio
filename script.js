function scrollToSection(sectionId) {
            const target = document.getElementById(sectionId);
            const yOffset = -80; // adjust as needed (negative = scroll before section)
            const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });
        }





    /*
            {
                image: ''               ,
                heading: ''             ,
                description: ''         ,
            },
            
    */

        const skills = [
            {
                image: 'resource/skills/statistics.png', 
                heading: 'Statistical Modelling',
                description: 'Build robust statistical models, perform hypothesis testing, and deliver actionable insights for data-driven decision making'
            },

            {
                image: 'resource/skills/mlops.svg',
                heading: 'MLOps & ML Infrastructure',
                description: 'Design scalable ML pipelines, automate deployment, monitoring, and versioning for reliable production-ready AI solutions.'
            },
            
            {
                image: 'resource/skills/flask.jpg'               ,
                heading: 'End-to-End API Building'             ,
                description: 'Develop secure, scalable APIs that expose ML models for real-time inference and seamless system integration.'         ,
            },
            
            {
                image: 'resource/skills/machine learning.jpg'               ,
                heading: 'Deep Learning Models'             ,
                description: 'Design, train, and optimize deep learning architectures for classification, prediction, and advanced pattern recognition.'         ,
            },

            {
                image: 'resource/skills/computer vision.jpg'               ,
                heading: 'Computer Vision / Image Processing'             ,
                description: 'Develop custom vision solutions for object detection, image enhancement, OCR, and facial recognition with high accuracy.'         ,
            },

            {
                image: 'resource/skills/data generation.jpeg'               ,
                heading: 'Data Generation (Real & Synthetic)'             ,
                description: 'Create synthetic data pipelines and augment real datasets to enhance model training and generalization.'         ,
            },

            {
                image: 'resource/skills/time series.png'               ,
                heading: 'Time Series Forecasting with Deep Learning'             ,
                description: 'Apply advanced RNNs, LSTMs, and Transformers to predict future trends and demand with time series data.'         ,
            },

            {
                image: 'resource/skills/LLM.png'               ,
                heading: 'LLM Fine-Tuning & Optimization'             ,
                description: 'Fine-tune large language models for domain-specific tasks while optimizing latency, cost, and accuracy'         ,
            },
            
            {
                image: 'resource/skills/privacy.jpg'               ,
                heading: 'Privacy-Preserving AI'             ,
                description: 'Implement federated learning and differential privacy to build secure, compliant, and ethical AI systems.'         ,
            },

            {
                image: 'resource/skills/etl.avif'               ,
                heading: 'Scalable Data Pipelines'             ,
                description: 'Build ETL/ELT pipelines for batch and streaming data, enabling efficient ingestion and transformation at scale.'         ,
            },


            
        ]

        const container = document.getElementById('skillsGrid');

        skills.forEach(skill => {
            container.innerHTML += `
            <div class="skill-item">
                <div class="skill-image">
                <img src="${skill.image}" alt="${skill.heading}">
                </div>
                <h3 class="skill-heading">${skill.heading}</h3>
                <p class="skill-description">${skill.description}</p>
            </div>
            `;
        });

















    /*
        {
            image: '',
            headline: '',
            highlights: [],
            readme: '',
            description: ''
        }
    */

    const projects = [
        {
            image: 'resource/project-images/spacex-project/image.jpg',
            headline: 'SpaceX Falcon-9 Success Prediction and Cost Estimation',
            readme: 'https://github.com/ChakshuGrover225/SpaceX-Falcon9-Launch-Mission-Success-Prediction---EDA/blob/main/README.md',
            description: 'Built an ML-based system using airline historical fare data to predict optimal purchase windows. Achieved 19% cost savings over random purchase strategy.',
            highlights: ['Machine Learning','Statistical Modeling','Python','EDA'] 
        },
        {
            image: 'resource/project-images/Airline-ticket-pricing/image.jpg',
            headline: 'E-commerce Dashboard',
            highlights: ['React','Node.js','API Integration'],
            readme: 'https://github.com/ChakshuGrover225/SpaceX-Falcon9-Launch-Mission-Success-Prediction---EDA/blob/main/README.md',
            description: 'Developed a real-time e-commerce dashboard with product tracking, analytics, and admin panel. Used MongoDB, Node.js, and Chart.js.'
        },
        
    ];

    const project_container = document.getElementById('projects-container');

    projects.forEach(project => {
    // ✅ safe: default to empty array if highlights missing
    const highlightsHTML = (project.highlights || [])
        .map(h => `<span class="highlight">${h}</span>`)
        .join('');

    const projectHTML = `
        <div class="project-item">
            <div class="project-image" style="background-image: url('${project.image}')">
            </div>
            <div class="project-content">
                <div class="project-headline">
                    ${project.headline} 
                    <span class="project-readme"><a href="${project.readme}" target="_blank">More</a></span>
                </div>

                
                <div class="project-highlights">${highlightsHTML}</div>

                <div class="project-description">${project.description}</div>
            </div>
        </div>
    `;
    // Better than innerHTML += (doesn't reparse whole container)
    project_container.insertAdjacentHTML('beforeend', projectHTML);
    });


