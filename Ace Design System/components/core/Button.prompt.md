Brand-styled button — the main clickable action; primary for the single most important action per view, secondary/ghost for everything else.

```jsx
<Button variant="primary" size="md" onClick={save}>Add task</Button>
<Button variant="secondary" iconLeft={<i data-lucide="plus" />}>New list</Button>
<Button variant="ghost" size="sm">Cancel</Button>
<Button variant="danger">Delete</Button>
```

Variants: `primary` (blue fill), `secondary` (outlined), `ghost` (text), `danger` (red). Sizes `sm | md | lg`. `block` stretches full width. Hover darkens fill / tints ghost; press scales to 0.98.
