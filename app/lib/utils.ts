export function extractJSON(raw: string) {
    const dataStart = raw.indexOf('{');
    const dataEnd = raw.lastIndexOf('}');
    return raw.slice(dataStart, dataEnd + 1);
}