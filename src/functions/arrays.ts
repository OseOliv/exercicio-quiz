export function embaralhar(elementos: any[]): any[] {
    return elementos.sort(() => Math.random() - Math.random());
}