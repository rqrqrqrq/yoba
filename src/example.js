export default (a: number, b: number): number => a + b;

export function mapThroughObject<T>(f: (x: any) => T, o: Object): T[] {
  return Object.keys(o).map(key => f(o[key]));
}
