var particles = {
    fpsLimit: 160,
    particles: {
        number: {
            value: 500,
            density: {
                enable: true,
                area: 100
            }
        },
        color: {
            value: "#fff009"
        },
        shape: {
            type: "star"
        },
        opacity: {
            value: 0.91,
            random: {
                enable: true,
                minimumValue: 0.1
            },
            animation: {
                enable: true,
                speed: 10,
                minimumValue: 60,
                sync: false
            }
        },
        size: {
            value: 3,
            random: {
                enable: true,
                minimumValue: 1
            }
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: true
        }
    }
};

tsParticles.load("tsparticles", particles);
