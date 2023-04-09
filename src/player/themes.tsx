// import { ClickMode, SizeMode } from "tsparticles-engine";
import {
  IParticlesOptions,
  IRangeValue,
  ISourceOptions,
  RangeValue,
  RecursivePartial,
  rgbToHsl,
  setRangeValue,
  stringToRgb,
} from "tsparticles-engine";
import { curvesPathName } from "tsparticles-path-curves";
import LeafSVG from "../assets/leaf.svg";
import RabbitSVG from "../assets/rabbit.svg";

export const SEA_ANEMONE_THEME: ISourceOptions = {
  fpsLimit: 120,
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  particles: {
    color: {
      value: "#FF0000",
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "destroy",
      },
      path: {
        clamp: false,
        enable: true,
        delay: {
          value: 0,
        },
        generator: curvesPathName,
      },
      random: false,
      speed: 2,
      straight: false,
      trail: {
        fillColor: "#000",
        length: 30,
        enable: true,
      },
    },
    number: {
      value: 0,
      limit: 300,
    },
    opacity: {
      value: 1,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 10 },
      animation: {
        count: 1,
        startValue: "min",
        enable: true,
        speed: 10,
        sync: true,
      },
    },
  },
  background: {
    color: "#000",
  },
  detectRetina: true,
  emitters: {
    direction: "none",
    rate: {
      quantity: 10,
      delay: 0.3,
    },
    size: {
      width: 0,
      height: 0,
      mode: "precise",
    },
    spawnColor: {
      value: "#ff0000",
      animation: {
        h: {
          enable: true,
          offset: {
            min: -1.4,
            max: 1.4,
          },
          speed: 5,
          sync: false,
        },
        l: {
          enable: true,
          offset: {
            min: 20,
            max: 80,
          },
          speed: 0,
          sync: false,
        },
      },
    },
    position: {
      x: 50,
      y: 50,
    },
  },
};

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
        fillColor: "#000",
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

export const SPRING_THEME: ISourceOptions = {
  fpsLimit: 120,
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  background: {
    color: "#65a7de",
  },
  detectRetina: true,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: true,
        mode: "repulse",
      },
    },
  },
  particles: {
    move: {
      direction: "bottom-left",
      enable: true,
      random: false,
      straight: false,
    },
    rotate: {
      value: {
        min: 0,
        max: 360,
      },
      animation: {
        enable: true,
        speed: 10,
      },
      direction: "random",
    },
    tilt: {
      value: {
        min: 0,
        max: 360,
      },
      animation: {
        enable: true,
        speed: 10,
      },
      direction: "random",
      enable: true,
    },
    roll: {
      darken: {
        enable: true,
        value: 5,
      },
      enable: true,
      speed: {
        min: 10,
        max: 35,
      },
    },
    opacity: {
      value: 1,
    },
    color: {
      value: ["#fcc9b9", "#ffb3ff", "#ff99ff"],
    },
    size: {
      value: { min: 1, max: 10 }, // TODO: adjust?
    },
    wobble: {
      // TODO: adjust?
      distance: 20,
      enable: false,
      speed: {
        min: -5,
        max: 5,
      },
    },
    shape: {
      type: ["image"], // TODO: replace!
      image: {
        src: LeafSVG,
        replace_color: true,
      },
    },
  },
};

const fixRange = (value: IRangeValue, min: number, max: number): RangeValue => {
  const diffSMax = value.max > max ? value.max - max : 0;
  let res = setRangeValue(value);

  if (diffSMax) {
    res = setRangeValue(value.min - diffSMax, max);
  }

  const diffSMin = value.min < min ? value.min : 0;

  if (diffSMin) {
    res = setRangeValue(0, value.max + diffSMin);
  }

  return res;
};

const fireworksOptions: RecursivePartial<IParticlesOptions>[] = [
  "#ff595e",
  "#ffca3a",
  "#8ac926",
  "#1982c4",
  "#6a4c93",
]
  .map((color) => {
    const rgb = stringToRgb(color);

    if (!rgb) {
      return undefined;
    }

    const hsl = rgbToHsl(rgb),
      sRange = fixRange({ min: hsl.s - 30, max: hsl.s + 30 }, 0, 100),
      lRange = fixRange({ min: hsl.l - 30, max: hsl.l + 30 }, 0, 100);

    return {
      color: {
        value: {
          h: hsl.h,
          s: sRange,
          l: lRange,
        },
      },
      stroke: {
        width: 0,
      },
      number: {
        value: 0,
      },
      opacity: {
        value: {
          min: 0.1,
          max: 1,
        },
        animation: {
          enable: true,
          speed: 0.7,
          sync: false,
          startValue: "max",
          destroy: "min",
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 2 },
        animation: {
          enable: true,
          speed: 5,
          count: 1,
          sync: false,
          startValue: "min",
          destroy: "none",
        },
      },
      life: {
        count: 1,
        duration: {
          value: {
            min: 1,
            max: 2,
          },
        },
      },
      move: {
        decay: { min: 0.075, max: 0.1 },
        enable: true,
        gravity: {
          enable: true,
          inverse: false,
          acceleration: 5,
        },
        speed: { min: 5, max: 15 },
        direction: "none",
        outModes: "destroy",
      },
    } as RecursivePartial<IParticlesOptions>;
  })
  .filter((t) => t !== undefined) as RecursivePartial<IParticlesOptions>[];

export const FIREWORKS_THEME: ISourceOptions = {
  detectRetina: true,
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  background: {
    color: "#000",
  },
  fpsLimit: 120,
  emitters: {
    direction: "top",
    life: {
      count: 0,
      duration: 0.1,
      delay: 0.1,
    },
    rate: {
      // delay: 0.05,
      delay: 0.1,
      quantity: 1,
    },
    size: {
      width: 100,
      height: 0,
    },
    position: {
      y: 100,
      x: 50,
    },
  },
  particles: {
    number: {
      value: 0,
      limit: 5000,
    },
    destroy: {
      mode: "split",
      bounds: {
        top: { min: 10, max: 30 },
      },
      split: {
        sizeOffset: false,
        count: 1,
        factor: {
          value: 0.333333,
        },
        rate: {
          value: { min: 75, max: 150 },
        },
        particles: fireworksOptions,
      },
    },
    life: {
      count: 1,
    },
    shape: {
      type: "line",
    },
    size: {
      value: {
        min: 0.1,
        max: 50,
      },
      animation: {
        enable: true,
        sync: true,
        speed: 90,
        startValue: "max",
        destroy: "min",
      },
    },
    stroke: {
      color: {
        value: "#ffffff",
      },
      width: 1,
    },
    rotate: {
      path: true,
    },
    move: {
      enable: true,
      gravity: {
        acceleration: 15,
        enable: true,
        inverse: true,
        maxSpeed: 100,
      },
      speed: {
        min: 10,
        max: 20,
      },
      outModes: {
        default: "destroy",
        top: "none",
      },
      trail: {
        fillColor: "#000",
        enable: true,
        length: 10,
      },
    },
  },
};

export const RABBIT_THEME: ISourceOptions = {
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
      value: ["#ffffff"],
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
    size: {
      value: {
        min: 10,
        max: 20,
      },
    },
    shape: {
      type: ["image"], // TODO: replace!
      image: {
        src: RabbitSVG,
        replace_color: true,
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
        fillColor: "#000",
        length: 1.5,
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
