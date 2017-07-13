export default (a: number, b: number): number => a + b;

export function mapThroughObject<Input, Output>(
  f: (x: Input) => Output,
  o: { [x: string]: Input },
): Output[] {
  return Object.keys(o).map((key: string): Output => f(o[key]));
}
