// After coping this code , go to the place of import and make the raact particles z-index -1 and the rest 0 or 1.
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react"; // Importing the Particles component and initParticlesEngine from tsParticles React wrapper
import { loadSlim } from "@tsparticles/slim"; // Importing the slim version of tsParticles to reduce bundle size

/**
 * App component renders the particle system and handles its configuration and initialization.
 */
const ReactParticles= () => {
    const [init, setInit] = useState(false);  // State to track if the particles are initialized

    /**
     * useEffect hook to initialize the tsParticles engine when the component mounts.
     * The particles are only initialized once on the app's lifecycle.
     */
    useEffect(() => {
        // Initialize the particles engine, and load the slim version of the particles package
        initParticlesEngine(async (engine) => {
            // Load the slim version of the tsParticles library
            await loadSlim(engine);
        }).then(() => {
            // Once the engine is initialized and particles are loaded, set the init state to true
            setInit(true);
        });
    }, []);  // Empty dependency array ensures this effect runs only once after the initial render

    /**
     * Callback function that runs when particles have been successfully loaded.
     * This function can be used for debugging or further configuration.
     * @param {Object} container - The container of the particle system.
     */
    const particlesLoaded = (container) => {
        console.log(container);  // Logs the particles container to the console for debugging
    };

    /**
     * Particle configuration options using useMemo to optimize performance.
     * These settings define the particle's appearance, movement, interactivity, and more.
     */
    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: "#FDFDFD",  // Background color of the particles canvas (blue shade)
                },
            },
            fpsLimit: 120,  // Limit the frames per second for better performance
            interactivity: {
                events: {
                    onClick: {
                        enable: true,  // Enable interactivity on click
                        mode: "push",  // On click, push new particles into the canvas
                    },
                    onHover: {
                        enable: true,  // Enable interactivity on hover
                        mode: "repulse",  // On hover, repel the particles
                    },
                },
                modes: {
                    push: {
                        quantity: 4,  // Number of particles to add on each click
                    },
                    repulse: {
                        distance: 200,  // The distance the particles will move away from the mouse when hovered
                        duration: 0.4,  // Duration of the repulsion effect
                    },
                },
            },
            particles: {
                color: {
                    value: "#D4AF37",  // Color of the particles (white)
                },
                links: {
                    color: "#D4AF37",  // Color of the links connecting particles (white)
                    distance: 150,  // Distance between linked particles
                    enable: true,  // Enable the links between particles
                    opacity: 0.5,  // Opacity of the links
                    width: 1,  // Width of the links
                },
                move: {
                    direction: "none",  // No specific direction for the particle movement
                    enable: true,  // Enable movement of particles
                    outModes: {
                        default: "bounce",  // Particles bounce back when they hit the edge
                    },
                    random: false,  // Disable random particle movement
                    speed: 6,  // Set the movement speed of the particles
                    straight: false,  // Disable straight-line movement of particles
                },
                number: {
                    density: {
                        enable: true,  // Enable density-based particle generation
                    },
                    value: 80,  // Number of particles on screen at a time
                },
                opacity: {
                    value: 0.5,  // Set the opacity of the particles
                },
                shape: {
                    type: "circle",  // Shape of the particles (circle)
                },
                size: {
                    value: { min: 1, max: 5 },  // Size range of the particles
                },
            },
            detectRetina: true,  // Detect and optimize for retina (high DPI) displays
        }),
        []  // Empty dependency array ensures this configuration is computed once
    );

    // Conditional rendering: If the particles are initialized (init is true), render the Particles component
    if (init) {
        return (
            <div>
                <Particles id="tsparticles"  // Unique ID for the particles container
                    particlesLoaded={particlesLoaded}  // Callback when the particles are fully loaded
                    options={options}  // Particle configuration passed as options
                />


            </div>

        );
    }

    // If particles are not yet initialized, return an empty fragment
    return <></>;
};

export default ReactParticles;
