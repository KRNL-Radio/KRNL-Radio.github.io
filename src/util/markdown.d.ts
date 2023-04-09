declare module "*.md" {
  const value: string; // markdown is just a string
  export default value;
}

declare module "*.mp3" {
  const value: string; // mp3 is just a string
  export default value;
}

// honestly don't care what's in this, just that it exists.
// stuff outside my control deals with this.
declare module "remark-remove-comments";
