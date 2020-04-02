# ruty

Ruty is a simple URI route builder.

## Installation

```sh
npm i ruty
```

## Usage

```js
const routes = {
  home: route("/").build(),
  users: route("/users").build(),
  userById: route("/user/:id").build<
    { id: number },
    { created: boolean; sort: "asc" | "desc" }
  >()
}

routes.home()
// '/'
routes.users()
// '/users'
routes.userById({ id: 123 })
// '/user/123'
routes.userById({ id: 123 }, { created: true, sort: "desc" })
// '/user/123?created&sort=desc'
```
