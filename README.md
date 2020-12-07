# test-load-funds

A program that accepts or declines attempts to load funds into customers' accounts based on the following limits:

- A maximum of $5,000 can be loaded per day.
- A maximum of $20,000 can be loaded per week.
- A maximum of 3 loads can be performed per day, regardless of the amount.

## Installation

```sh
git clone https://github.com/sgtpep/test-load-funds.git
cd test-load-funds
npm i
```

## Usage

Process loads line-by-line from `input.txt` (by default) and output results to stdout:

```sh
./load-funds
```

Process loads line-by-line from `input-file` and output results to stdout:

```sh
./load-funds input-file
```

Process loads line-by-line from `input-file` and write results to `output-file`:

```sh
./load-funds input-file output-file
```

## Scripts

- `npm run typecheck` — Perform type checking.
- `npm run lint` — Run lint checks.
- `npm run format` — Format code.
- `npm run test` — Run tests.
- `npm run check` — Run all the above scripts.

## Comments

- An experimental ESM-compatible `ts-node` script is used to run TypeScript code without transpilation.
- Complexity: speed — _O(1)_; memory — _O(1)_ (best case) and _O(n)_ (worst case), because of previously observed item ids stored in-memory.
- Added nominal types to some primitive values (like ids, amounts, etc.) to distinguish them from basic types. See https://basarat.gitbook.io/typescript/main-1/nominaltyping, https://github.com/Microsoft/TypeScript/issues/202 for details.
- Functions `isSameDay` and `isSameISOWeek` from `date-fns` package could be used to simplify dealing with dates.
