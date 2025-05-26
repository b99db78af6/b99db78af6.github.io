// This script initializes the particles.js effect
// You can customize the particles config here.
// This is a standard configuration from the particles.js demo.
particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 80, // Number of particles
      "density": {
        "enable": true,
        "value_area": 800 // Density area
      }
    },
    "color": {
      "value": "#ffffff" // Particle color
    },
    "shape": {
      "type": "circle", // Particle shape
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.5, // Particle opacity
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3, // Particle size
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150, // Distance to link particles
      "color": "#ffffff", // Link color
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6, // Particle movement speed
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab" // Interaction mode on hover (grab, bubble, repulse)
      },
      "onclick": {
        "enable": true,
        "mode": "push" // Interaction mode on click (push, remove, bubble, repulse)
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});