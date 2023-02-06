// import { ClickMode, SizeMode } from "tsparticles-engine";
import type { ISourceOptions } from "tsparticles-engine";

export const FOUNTAIN_THEME: ISourceOptions = {
  fpsLimit: 120,
  fullScreen: false,
  particles: {
    bounce: {
      vertical: {
        value: {
          min: 0.75,
          max: 0.85,
        },
      },
    },
    color: {
      value: [
        "#3998D0",
        "#2EB6AF",
        "#A9BD33",
        "#FEC73B",
        "#F89930",
        "#F45623",
        "#D62E32",
        "#EB586E",
        "#9952CF",
      ],
    },
    number: {
      value: 0,
    },
    destroy: {
      mode: "split",
      split: {
        count: 2,
        factor: {
          value: {
            min: 1.1,
            max: 2,
          },
        },
        rate: {
          value: {
            min: 2,
            max: 3,
          },
        },
      },
    },
    opacity: {
      value: 0.5,
    },
    size: {
      value: {
        min: 10,
        max: 20,
      },
    },
    move: {
      enable: true,
      gravity: {
        enable: true,
        maxSpeed: 50,
      },
      speed: {
        min: 10,
        max: 20,
      },
      direction: "none",
      random: false,
      straight: false,
      outModes: {
        bottom: "split",
        default: "bounce",
        top: "none",
      },
      trail: {
        enable: true,
        fillColor: "#fff",
        length: 3,
      },
    },
  },
  detectRetina: true,
  background: {
    color: "#fff",
  },
  emitters: {
    direction: "top",
    life: {
      count: 0,
      duration: 0.15,
      delay: 3,
    },
    rate: {
      delay: 0.1,
      quantity: 5,
    },
    size: {
      width: 0,
      height: 0,
    },
  },
};

// export const HEXAGON_THEME: ISourceOptions = hex

export const FIRE_THEME: ISourceOptions = {
  fpsLimit: 120,
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  particles: {
    number: {
      value: 80 * 3,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: ["#fdcf58", "#757676", "#f27d0c", "#800909", "#f07f13"],
    },
    opacity: {
      value: { min: 0.1, max: 0.5 },
    },
    size: {
      value: { min: 1, max: 3 },
    },
    move: {
      enable: true,
      speed: 6,
      random: false,
    },
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
  },
  background: {
    image: "radial-gradient(#4a0000, #000)",
  },
};

export const SNOW_THEME: ISourceOptions = {
  fpsLimit: 120,
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  background: {
    color: "#0d47a1",
  },
  detectRetina: true,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: true,
        mode: "repulse",
      },
      onHover: {
        enable: true,
        mode: "bubble",
      },
      resize: {
        enable: true,
        delay: 0,
      },
    },
  },
  particles: {
    move: {
      direction: "bottom",
      enable: true,
      random: false,
      straight: false,
    },
    opacity: {
      value: { min: 0.1, max: 0.5 },
    },
    size: {
      value: { min: 1, max: 10 },
    },
    wobble: {
      distance: 20,
      enable: true,
      speed: {
        min: -5,
        max: 5,
      },
    },
  },
};
