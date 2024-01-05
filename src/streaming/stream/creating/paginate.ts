import { Stream, Option } from "effect"

// $ExpectType Stream<never, never, number>
const stream = Stream.paginate(0, (n) => [
  n,
  n < 3 ? Option.some(n + 1) : Option.none()
])