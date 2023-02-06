declare module "butterchurn" {
  export default class Butterchurn {
    static createVisualizer(
      audioContext: AudioContext,
      canvas: HTMLCanvasElement,
      options?: ButterchurnOptions
    ): ButterchurnVisualizer;
  }
  class ButterchurnVisualizer {
    constructor(audioContext: any, canvas: any, opts: any);
    loseGLContext(): void;
    connectAudio(audioNode: any): void;
    disconnectAudio(audioNode: any): void;
    static overrideDefaultVars(baseValsDefaults: any, baseVals: any): {};
    createQVars(): {};
    createTVars(): {};
    createPerFramePool(baseVals: any): {};
    createPerPixelPool(baseVals: any): {};
    createCustomShapePerFramePool(baseVals: any): {};
    createCustomWavePerFramePool(baseVals: any): {};
    static makeShapeResetPool(pool: any, variables: any, idx: any): any;
    static base64ToArrayBuffer(base64: any): ArrayBufferLike;
    loadPreset(presetMap: any, blendTime?: number): Promise<void>;
    loadWASMPreset(preset: any, blendTime: any): Promise<void>;
    loadJSPreset(preset: any, blendTime: any): void;
    loadExtraImages(imageData: any): void;
    setRendererSize(width: any, height: any, opts?: {}): void;
    setInternalMeshSize(width: any, height: any): void;
    setOutputAA(useAA: any): void;
    setCanvas(canvas: any): void;
    render(opts?: any): any;
    launchSongTitleAnim(text: any): void;
    toDataURL(): any;
    warpBufferToDataURL(): any;
  }
}
