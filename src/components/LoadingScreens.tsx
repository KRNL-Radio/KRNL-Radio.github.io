import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ICON = solid("compact-disc")

export function LargeLoading() {
  return (
    <div className="text-white">
      <div className="flex flex-col items-center justify-center p-4">
        <FontAwesomeIcon icon={ICON} className="text-9xl animate-spin select-none pointer-events-none" />
        <h1 className="text-4xl font-bold">Spinning some tunes...</h1>
        <h2 className="text-2xl font-bold">Now loading...</h2>
      </div>
    </div>
  );
}

export function SmallLoading() {
  return (
    <div className="text-white">
      <div className="flex flex-col items-center justify-center p-4">
        <FontAwesomeIcon icon={ICON} className="text-6xl animate-spin select-none pointer-events-none" />
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    </div>
  )
}

export function TinyLoading() {
  return (
    <div className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500">
      <FontAwesomeIcon icon={ICON} className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
      Loading...
    </div>
  )
}
