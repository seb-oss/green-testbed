export function testbedUrl(path: string): string {
  const baseRaw = process.env.TESTBED_URL as string | undefined;
  if (!baseRaw) throw new Error("TESTBED_URL is not set");

  const base = baseRaw.endsWith("/") ? baseRaw.slice(0, -1) : baseRaw;
  const baseWithGreen = base.endsWith("/green-testbed")
    ? base
    : `${base}/green-testbed`;

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseWithGreen}${normalizedPath}`;
}
