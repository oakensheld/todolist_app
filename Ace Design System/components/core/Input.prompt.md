Text input with optional label, hint, leading/trailing icons, and a focus ring.

```jsx
<Input label="List name" value={v} onChange={setV} placeholder="e.g. CS 201" />
<Input iconLeft={<i data-lucide="search" />} placeholder="Search tasks" />
<Input label="Email" invalid hint="Enter a valid email" value={e} onChange={setE} />
```

Sizes `sm | md | lg`. Focus shows the brand blue ring; `invalid` turns the border and hint red.
