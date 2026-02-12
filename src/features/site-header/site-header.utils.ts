export function isNavItemCurrent(currentPath: string, href: string): boolean {
  const normalizedPath = currentPath.replace(/\/$/, "") || "/";
  if (normalizedPath === href) return true;
  return href !== "/" && normalizedPath.startsWith(`${href}/`);
}
