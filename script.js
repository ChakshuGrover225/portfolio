function zoom() {
            document.body.style.zoom = "100%" 
        }


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
            image: 'resource/project-images/pneumonia/photo.jpg',
            headline: 'Correlation Analysis between Pneumonia and Covid-19 Image Feature using Chest X-Rays',
            highlights: ['Medical Diagnosis','Transfer Learning','Computer Vision','Statistical Analysis'],
            readme: '',
            description: 'This research project aims to analyze the correlation between pneumonia and Covid-19 by leveraging chest X-ray images. By utilizing transfer learning techniques by identifying common features and patterns in the images that can help in understanding the relationship between these two respiratory conditions.'
        },
        {
            image: 'resource/project-images/spacex-project/image.jpg',
            headline: 'SpaceX Falcon-9 Success Prediction and Cost Estimation',
            readme: 'https://github.com/ChakshuGrover225/SpaceX-Falcon9-Launch-Mission-Success-Prediction---EDA/blob/main/README.md',
            description: 'Built an ML-based system using airline historical fare data to predict optimal purchase windows. Achieved 19% cost savings over random purchase strategy.',
            highlights: ['Machine Learning','Statistical Modeling','Python','EDA'] 
        },
        {
            image: 'resource/project-images/LLM based customer support agent/photo.jpg',
            headline: 'Fine Tuned LLM for Customer Support in E-commerce',
            highlights: ['LLM','Data preprocessing','API Integration', 'Data Generation'],
            readme: 'https://github.com/ChakshuGrover225/SpaceX-Falcon9-Launch-Mission-Success-Prediction---EDA/blob/main/README.md',
            description: 'Developed a customer support response agent to respond low complex queries by fine-tuning a Large Language Model on custom Dataset, enhancing response accuracy, optimizing response time on higher Complex queries, and reduced load on existing Customer response Team.'
        },
        {
            image: 'resource/project-images/kyc ocr/photo.webp',
            headline: 'OCR Based Document Information Extraction System and KYC System',
            highlights: ['Computer Vision','Image Processing','OCR','Flask API'],
            readme: '',
            description: 'Developed an OCR-based document information extraction system to automate data extraction from various documents. The system utilizes advanced image processing techniques and OCR technology to accurately extract relevant information, reducing manual effort and improving efficiency in document handling.'
        }
        
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


