import React, { Suspense, useCallback, useEffect } from "react";
import { Engine, Container } from "tsparticles-engine";
import { BLANK_THEME, getDefaultTheme, getTheme, Theme } from "./core";
// import butterchurn, { ButterchurnVisualizer } from "butterchurn";
// import butterchurnPresets from "butterchurn-presets";
const Particles = React.lazy(() => import("react-particles"));

// individual handlers
// function AudioThemeWrapper({ children, theme }: { children: React.ReactNode; theme: Theme }) {
//   // on mount, start the audio
//   let [actualVis, setActualVis] = React.useState<ButterchurnVisualizer | null>(null);
//   let render = () => {
//     if (actualVis) {
//       actualVis.render();
//     }
//     console.log("rendering", actualVis)
//     requestAnimationFrame(render);
//   }

//   useEffect(() => {
//     if (actualVis) {
//       return
//     }

//     window.player.on("play", () => {
//       let canvas = document.getElementById("audio-canvas") as HTMLCanvasElement;
//       let ac = window.player.audio_context!
//       canvas.width = 1713;
//       canvas.height = 857;

//       let visualizer = butterchurn.createVisualizer(ac, canvas, {
//         // 1713 857
//         width: 1713,
//         height: 857,
//       });
//       const presets = butterchurnPresets.getPresets();
//       const preset = presets['martin - chain breaker'];

//       visualizer.loadPreset(preset, 0.0); // 2nd argument is the number of seconds to blend presets
//       setActualVis(visualizer);
//       visualizer.connectAudio(window.player.audio_node);
//       visualizer.launchSongTitleAnim("hi")
//       setInterval(() => {
//         visualizer.render();
//       }, 1000 / 60);
//     })
//     window.player.on("pause", () => {
//       // visualizer.disconnectAudio();
//     })
//   }, [render, actualVis]);

//   return <div className="w-full h-full">
//     <canvas id="audio-canvas" className="w-full h-full"></canvas>
//     {children}
//   </div>
// }

function ParticlesThemeWrapper({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: Theme;
}) {
  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    const tsp = await import("tsparticles");
    await tsp.loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      // do something ig
      // actually, WTF CAN I DO HERE
    },
    []
  );

  return (
    <div className="w-full h-full">
      <Suspense>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={theme.options[0]}
        ></Particles>
      </Suspense>
      {children}
    </div>
  );
}

function BackgroundThemeWrapper({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: Theme;
}) {
  // TODO: this!!
  return (
    <div className="w-full h-full" style={theme.options[0]}>
      {children}
    </div>
  );
}

function TailwindThemeWrapper({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: Theme;
}) {
  // join the list of classes
  const compiled = theme.options.join(" ");
  return <div className={`w-full h-full ${compiled}`}>{children}</div>;
}

function DynamicThemeWrapper({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: Theme;
}) {
  let [actualTheme, setActualTheme] = React.useState<Theme>(BLANK_THEME);
  useEffect(() => {
    setActualTheme(BLANK_THEME);
    // alright, let's call the function
    let result = theme.options[0]();
    if (result instanceof Promise) {
      result.then((theme) => {
        setActualTheme(getTheme(theme));
      });
    } else {
      setActualTheme(getTheme(result));
    }
  }, [theme]);

  return <ThemeWrapper theme={actualTheme}>{children}</ThemeWrapper>;
}

function FallbackThemeWrapper({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: Theme;
}) {
  // do stuff
  return (
    <BackgroundThemeWrapper theme={BLANK_THEME}>
      {children}
    </BackgroundThemeWrapper>
  );
}

// provides the themes!

export function ThemeWrapper({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: Theme;
}) {
  switch (theme.type) {
    // case "audio":
    //   return <AudioThemeWrapper theme={theme}>{children}</AudioThemeWrapper>
    case "particles":
      return (
        <ParticlesThemeWrapper theme={theme}>{children}</ParticlesThemeWrapper>
      );
    case "background":
      return (
        <BackgroundThemeWrapper theme={theme}>
          {children}
        </BackgroundThemeWrapper>
      );
    case "tailwind":
      return (
        <TailwindThemeWrapper theme={theme}>{children}</TailwindThemeWrapper>
      );
    case "dynamic":
      return (
        <DynamicThemeWrapper theme={theme}>{children}</DynamicThemeWrapper>
      );
    default:
      return (
        <FallbackThemeWrapper theme={theme}>{children}</FallbackThemeWrapper>
      );
  }
}

export function BrowserThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  // alright, let's get the theme from localStorage
  // let theme = getTheme(localStorage.getItem("theme") || "");
  const [theme, setTheme] = React.useState<Theme>(getTheme("OLED Lover"));

  useEffect(() => {
    // set the theme
    let themeFromStorage =
      localStorage.getItem("theme") || getDefaultTheme().name;
    setTheme(getTheme(themeFromStorage));

    // add the event listener (for other tabs)
    window.addEventListener("storage", (e) => {
      if (e.key === "theme") {
        setTheme(getTheme(e.newValue || ""));
      }
    });

    // add the event listener (for this tab)
    // custom event for when the theme changes
    window.addEventListener("theme-change", (e) => {
      // @ts-expect-error
      setTheme(getTheme(e.detail.theme));
    });

    // remove the event listeners
    return () => {
      window.removeEventListener("storage", () => {});
      window.removeEventListener("theme-change", () => {});
    };
  }, []);

  return <ThemeWrapper theme={theme}>{children}</ThemeWrapper>;
}
