/*Deepseek generated function for building searchparameters*/
export function buildHref(searchParams: Record<string, string>, overrides: Record<string, string>) {
    const params = new URLSearchParams(searchParams)
    Object.entries(overrides).forEach(([key, value]) => params.set(key, value))
    return `?${params.toString()}`
}