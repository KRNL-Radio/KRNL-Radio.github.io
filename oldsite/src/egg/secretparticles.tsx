import { Suspense } from "react";
import { BrowserThemeWrapper } from "../themes/wrapper";
import { LargeLoading } from "../components/LoadingScreens";

function SecretParticles() {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-grow w-full">
        <Suspense fallback={LargeLoading()}>
          <BrowserThemeWrapper>
            <div></div>
          </BrowserThemeWrapper>
        </Suspense>
      </div>
    </div>
  );
}

export default SecretParticles;
