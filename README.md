  **Basic example, client-side components.**

![1_Mr6lSXDC7ypxyqJbEW46ng](https://github.com/deceser/template-next-ts/assets/101974867/69f355b1-e01f-4d79-b8b5-434edb954ee3)


**Nesting rules:**

- You can't import a server component inside a client component
- It is possible to forward server components to client components as children

![0_M2HXYaFMhZMtTfNK](https://github.com/deceser/template-next-ts/assets/101974867/e2e5633d-038e-4b29-a9ce-6b1c758fee8d)


**Use client components when:**

- Need to use hooks
- When you need event handlers for custom actions
- When using the browser API
- When class bean is used

**Use server components when:**

- You get data via server API
- When you need direct access to backend resources
- When sensetive information is used (API keys, tokens, etc.)
- When heavy dependencies are used
