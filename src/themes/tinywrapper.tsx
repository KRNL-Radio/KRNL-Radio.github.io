import React from "react";
import { TinyTheme, toTailwind } from "./core";
// import butterchurn, { ButterchurnVisualizer } from "butterchurn";
// import butterchurnPresets from "butterchurn-presets";
function BackgroundTinyThemeWrapper({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: TinyTheme;
}) {
  let styles = theme.css_options!;
  // if styles is a function, call it
  if (typeof styles === "function") {
    styles = styles();
  }
  return (
    <div className="w-full h-full" style={styles}>
      {children}
    </div>
  );
}

function TailwindTinyThemeWrapper({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: TinyTheme;
}) {
  // join the list of classes
  const compiled = (
    theme.tailwind_options || ["to-purple-900", "from-purple-700"]
  ).join(" ");
  const direction = toTailwind(theme.tw_small_direction || "r");
  return (
    <div className={`w-full h-full ${direction} ${compiled}`}>{children}</div>
  );
}

function FallbackTinyThemeWrapper({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: TinyTheme;
}) {
  // do stuff
  return (
    // <BackgroundThemeWrapper theme={BLANK_THEME}>
    //   {children}
    // </BackgroundThemeWrapper>
    <div className="w-full h-full bg-gradient-to-r to-purple-900 from-purple-700">
      {children}
    </div>
  );
}

// provides the themes!

export function TinyThemeWrapper({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: TinyTheme;
}) {
  switch (theme.type) {
    // case "audio":
    //   return <AudioThemeWrapper theme={theme}>{children}</AudioThemeWrapper>
    case "css":
      return (
        <BackgroundTinyThemeWrapper theme={theme}>
          {children}
        </BackgroundTinyThemeWrapper>
      );
    case "tailwind":
      return (
        <TailwindTinyThemeWrapper theme={theme}>
          {children}
        </TailwindTinyThemeWrapper>
      );
    default:
      return (
        <FallbackTinyThemeWrapper theme={theme}>
          {children}
        </FallbackTinyThemeWrapper>
      );
  }
}
