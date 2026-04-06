import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export const Project = () => {
    const [emblaRef] = useEmblaCarousel({ align: 'start' });

    const progressPoints = [
        {
            title: '1. Research',
            text: 'Defined our target audience, conducted literature review and market research, conduct user interviews'
        },
        {
            title: '2. Wireframing',
            text: 'Designed layout and userflow for interactive educational modules and AI support features'
        },
        {
            title: '3. Prototype',
            text: 'Built interactive prototype to demonstrate webapp flow and the potential user experience'
        },
        {
            title: '4. Concept Validation',
            text: 'Recruited users and guided them through our prototype to learn more about what they would like to see'
        },
        {
            title: '5. Initial Iteration',
            text: 'Refine wireframe and prototype based on user feedback'
        },
        {
            title: '6. Web Development',
            text: 'Turning our prototype into a functional webapp with our key features'
        },
        {
            title: '7. Usability Test',
            text: 'Identify common pain points, if the AI Agent and learning modules are useful, and overall functionality'
        },
        {
            title: '8. Wrap-Up',
            text: 'Apply user feedback, present final product, provide documentation to pass off CyberAware'
        }
    ];

    return(
        <section id='projects'>
            <div className='capstone'>
                <h1 className='header'>
                    INFO Capstone - CyberAware
                </h1>
                <h2 className='description'>
                    A multi-service application designed to support cybersecurity education, awareness, and safe digital practices. The system is composed of a frontend client, backend API, supporting infrastructure, and a machine learning service. <b>Looking for enterprises willing to adopt CyberAware for their onboarding process</b>
                </h2>

                <h1 className='header'>Process</h1>
                <div className='embla' ref={emblaRef}>
                    <div className='embla__container'>
                        {progressPoints.map((point, index) => (
                            <div className='embla__slide' key={index}>
                                <div className={`progress-card ${index < 5 ? 'green-card' : ''}`}>
                                    <h3>{point.title}</h3>
                                    <p>{point.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='takeaways'>
                    <h1 className='header'>Takeaways + Next Steps</h1>
                    <h2><b>Primary Contribution:</b> Led in conducting research and recruiting users, supported in design + prototype, <b>lead in developing interactive learning modules</b></h2>
                    <h3>Some key takeaways for me are <b>the importance of defining roles within a team, how cruicial it is to recruit users that match your design audience (this carries significantly to data analytics), and UX Design choices that will transfer to data visualizations</b>.
                    Our next steps will be to complete the rest of the process that we laid out and launch a product that could potentially be adopted by different enterprises</h3>
                </div>
                <div className='video-card'>
                                <iframe
                                    width="100%"
                                    height="500"
                                    src="https://www.youtube.com/embed/AmcwmQbZhJQ"
                                    title="CyberAware Demo"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                </div>
            </div>

        </section>
    )
}