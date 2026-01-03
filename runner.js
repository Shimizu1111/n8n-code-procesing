// @ts-check

/**
 * @template TIn, TOut
 * @typedef {{
 *   name?: string;
 *   now?: Date;
 *   input?: TIn;
 *   log?: (...args: any[]) => void;
 * }} RunContext
 */

/**
 * @template TIn, TOut
 * @typedef {(ctx: RunContext<TIn, TOut>) => (TOut | Promise<TOut>)} Handler
 */

/**
 * 汎用Runner
 * @template TIn, TOut
 * @param {RunContext<TIn, TOut>} ctx
 * @param {Handler<TIn, TOut>} handler
 * @returns {Promise<TOut>}
 */
export async function run(ctx, handler) {
  const log = ctx.log ?? console.log;
  const now = ctx.now ?? new Date();

  log(`\n=== RUN${ctx.name ? `: ${ctx.name}` : ""} ===`);
  log(`now: ${now.toISOString()}`);

  return handler({ ...ctx, now, log });
}
