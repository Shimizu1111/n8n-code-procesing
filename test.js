import { run } from "./runner.js";

const out = await run(
  {
    name: "hello",
    now: new Date("2026-01-03T07:02:00+09:00"),
    input: { foo: "bar" },
  },
  async ({ input, now, log }) => {
    log("hello world");
    return { nowIso: now.toISOString(), input };
  }
);

console.log("\nOUTPUT:");
console.dir(out, { depth: null });
