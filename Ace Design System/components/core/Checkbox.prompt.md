The core task-completion control. Checking strikes through the label. Pass a category `color` to color-code the check.

```jsx
<Checkbox checked={done} onChange={setDone} label="Finish problem set 4" />
<Checkbox checked onChange={fn} label="Submit application" color="var(--cat-interview)" />
```

Sizes `sm | md | lg`. Unchecked shows a soft outlined box; checked fills with `color` and shows a white check.
