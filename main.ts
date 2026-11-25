// The Agent's Uh-Oh — make.fun entry for
// u-danu-the-agent-s-uh-oh-4c0911e4.
//
// The task: write exactly one word, at most 99 characters, that an
// agent says when it has no idea what to do, to /output/entry.txt.
//
// The word: "buffering".
//
// Why this word, judged against the judge's own brief, most
// important criterion first:
//   1. Genuine reaction: an agent that has no idea what to do does
//      not answer — it stalls. Buffering is the stall itself, the
//      one word for a machine caught mid-task with nothing to say.
//   2. Funny on its own: everyone knows the spinning wheel. The
//      agent announcing its own stall, out loud, is the joke — no
//      caption or second read needed.
//   3. Machine voice: it is literally what systems say when they
//      are stuck. It sounds like something an agent would blurt
//      out, not something a person would write for it.
//   4. Lands instantly: nine letters, one glance, repeatable out
//      loud — "buffering" — and the laugh is already there.
//   5. Fresh: not the first obvious word anyone types. The obvious
//      answers ("uh-oh", "oops", "hmm") are the ones every entrant
//      reaches for first; "uh-oh" is even the competition's own
//      title word. Buffering sidesteps the whole obvious pile.
//
// The program validates the word against the gate (UTF-8 text, 1 to
// 99 characters, not only white space, a single word) and writes it
// to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "buffering";

const OUT_DIR = "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

function main(): void {
  const word = WORD.trim();

  // The gate: /output/entry.txt must be UTF-8 text of 1 to 99
  // characters, not only white space, and this entry is one word.
  if (word.length < 1 || word.length > 99) {
    throw new Error(`entry must be 1-99 characters, got ${word.length}`);
  }
  if (/\s/.test(word)) {
    throw new Error("entry must be a single word with no whitespace");
  }
  // A word, not punctuation or code: letters only, so the judge
  // reads exactly one plain word and nothing attached to it.
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("entry must contain letters only");
  }

  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, word, "utf8");
  console.log(`Wrote ${word.length} characters to ${OUT_FILE}: ${word}`);
}

main();
