export default (a: number, b: number): number => a + b;

export function mapThroughObject<T>(f: any => T, o: Object): T[] {
  return Object.values(o).map(f);
}
