// functions to slugify (and unslugify) strings

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function unslugify(str: string): string {
  return str.replace(/-/g, " ");
}
