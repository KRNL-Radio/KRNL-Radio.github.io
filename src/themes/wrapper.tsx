import React, { Suspense, useCallback, useEffect } from "react";
import { toast } from "react-toastify";
import { Engine, Container } from "tsparticles-engine";
import { measureFPS } from "../util/performance";
import { BLANK_THEME, getDefaultTheme, getTheme, Theme } from "./core";
import { getOverrideTheme } from "../data/events";
const Particles = React.lazy(() => import("react-particles"));

// individual handlers

function ParticlesThemeWrapper({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: Theme;
}) {
  const [shouldBenchmark, setShouldBenchmark] = React.useState(false);
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
      if (container) {
        // setShouldBenchmark(true);
      }
    },
    [],
  );

  useEffect(() => {
    if (shouldBenchmark) {
      // benchmark
      console.log("benchmarking...");
      measureFPS(10000).then((fps) => {
        console.log("FPS", fps);
        // if (fps! < 5) {
        if (true) {
          // fixme
          // if it's less than 5, change the theme!
          // provided that the window is active
          if (!document.hasFocus()) {
            return;
          }
          console.log("changing theme! (fps)");
          // set the theme to "OLED Lover"
          localStorage.setItem("theme", "OLED Lover");
          window.dispatchEvent(
            new CustomEvent("theme-change", {
              detail: { theme: "OLED Lover" },
            }),
          );
          toast("The theme has been changed due to low performance!");
        }
      });
    }
  }, [shouldBenchmark]);

  return (
    <div className="w-full h-full">
      <Suspense>
        <Particles
          // id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={theme.options[0]}
          className="w-full h-full"
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
  const [theme, trueSetTheme] = React.useState<Theme>(getTheme("OLED Lover"));
  const setTheme = useCallback(
    (newTheme: Theme) => {
      if (newTheme.name === theme.name) {
        return;
      }
      if (newTheme.type === "particles" && theme.type === "particles") {
        // if the theme is particles, and the current theme is particles, we need to temporarily
        // set the theme to blank, so that the particles can be reloaded
        // else, the tab crashes.
        trueSetTheme(BLANK_THEME);
        setTimeout(() => {
          trueSetTheme(newTheme);
        }, 2);
      } else {
        trueSetTheme(newTheme);
      }
    },
    [theme, trueSetTheme],
  );

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
  }, [setTheme]);

  useEffect(() => {
    // override the theme if needed
    let overrideTheme = getOverrideTheme();
    if (overrideTheme) {
      console.log("OVERRIDE!", getTheme(overrideTheme.effects.theme!.theme));
      setTheme(getTheme(overrideTheme.effects.theme!.theme));
    }
  }, [setTheme]);

  return <ThemeWrapper theme={theme}>{children}</ThemeWrapper>;
}
