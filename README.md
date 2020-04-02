# ruty

Ruty is a simple URL route builder, that [support typing route params and queries string with TypeScript](#typescript).

#### Motivation

_Whether I am working in the frontend or backend, I always define a set of URLs wether for API endpoints or page URLs. Therefore, instead of having all these URLs routes spread out within multiple files, I prefer to have them defined in one file then reference them where I need them. Also, using TypeScript I prefere to have my URLs routes params and queries string typed. **That's the reason I created**_ **`ruty`** _**, a tiny library that allow me to define routes with their params and queries strings.**_

## Installation

```sh
npm i ruty
```

## Usage

```js
import { route } from "ruty";

const routes = {
  home: route("/").build(),
  users: route("/users").build(),
  userById: route("/user/:id?created&sort").build()
};

routes.home();
// '/'
routes.users();
// '/users'
routes.userById({ id: 123 });
// '/user/123'
routes.userById({ id: 123, created: true, sort: "desc" });
// '/user/123?created&sort=desc'
```

## TypeScript

You can type your route params and queries string with TypeScript by adding generics to the `build` method as shown below:

```js
import { route } from 'ruty'

const routes = {
  userById: route("/user/:id?created&sort").build<
    { id: number, created: boolean, sort: "asc" | "desc" }
  >()
}

routes.userById({ id: 123, created: true, sort: "desc" })
// '/user/123?created&sort=desc'
```

Then you will have autocomplete suggestions and type assertion:

![TypeScript example](.github/typescript.gif)

## Development

If you want to contribute to development please follow these instructions:

1.  Clone this repo.
2.  Install dependencies with `npm i`.
3.  Add your changes, make sure to include tests.

Tests can be run with `npm t`.

---

<center>
<small>

Made with love by [@rmariuzzo](https://github.com/rmariuzzo) and [contributors](https://github.com/rmariuzzo/ruty/graphs/contributors).

</small>
</center>
