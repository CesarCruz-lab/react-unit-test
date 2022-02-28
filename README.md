# React Teste

## Todo

- [x] Testing DOM;
  - [x] debug;
  - [x] rerender with the new prop;
- [x] Firing events;
- [x] Testing async actions;
- [ ] Mocking API calls (msw);
- [ ] Spies;
- [ ] Context (wrapper on render);

## Initial guide

```sh
# yarn create vite
```

```sh
✔ Project name: react-unit-test
? Select a framework:
    vanilla
    vue
❯   react
    preact
    lit
    svelte

✔ Project name: … red
✔ Select a framework: › react
? Select a variant: › - Use arrow-keys. Return to submit.
    react
❯   react-ts

```

&nbsp;

## Run project

```sh
# yarn dev

$ vite
Pre-bundling dependencies:
  react
  react-dom
  react/jsx-dev-runtime
(this will be run only when your dependencies or config have changed)

  vite v2.8.4 dev server running at:

  > Local: http://localhost:3000/
  > Network: use `--host` to expose

  ready in 285ms.

```

&nbsp;

## Instalation in Project

```sh
# yarn add jest -D
```

```sh
# yarn add @types/jest -D
```

```sh
# yarn jest --init

yarn run v1.22.17
warning ../../../package.json: No license field
$ /home/cesar/Projetos/Decode/red/node_modules/.bin/jest --init

The following questions will help Jest to create a suitable configuration for your project

? Would you like to use Jest when running "test" script in "package.json"? › (Y/n)

...

✔ Would you like to use Jest when running "test" script in "package.json"? … yes
✔ Would you like to use Typescript for the configuration file? … yes
✔ Choose the test environment that will be used for testing › jsdom (browser-like)
✔ Do you want Jest to add coverage reports? … no
✔ Which provider should be used to instrument code for coverage? › v8
✔ Automatically clear mock calls, instances and results before every test? … yes
```

```sh
yarn add ts-node -D
```

&nbsp;

## Initial test example

```ts
test('sum', () => {
    expect(1 + 1).toBe(2)
})
```

```sh
# yarn test
$ jest
 PASS  src/App.spec.tsx
  ✓ sum (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.574 s, estimated 1 s
Ran all test suites.
Done in 2.40s.
```

&nbsp;

## Configure Jest for testing in ReactJS

&nbsp;

Intalation

```sh
# yarn add @swc/core @swc/jest -D
```

Edit file ```jest.config.ts```

```ts
transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
            decorators: true,
          },
          keepClassNames: true,
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
            react: {
              runtime: 'automatic',
            },
          },
        },
        module: {
          type: 'es6',
          noInterop: false,
        },
      },
    ],
  },
```

Adding ```testing-library```

```sh
# yarn add @testing-library/react/ @testing-library/jest-dom @testing-library/user-event -D
```

## Notes

### Render methods

- ```getByText```

```ts
test('example', () => {
  const { getByText } = render(<App />)

  expect(getByText('Hello World')).toBeTruthy()
})
```

This method return error case not found the value

- ```queryByText```

```ts
test('example', () => {
  const { queryByText } = render(<App />)

  expect(queryByText('Hello World')).toBeTruthy()
})
```

This method does not result in an error if the element is not found
