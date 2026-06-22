Tab switcher. `underline` for primary content sections; `pill` (segmented, sunken track) for compact filters like Today / Upcoming / Done.

```jsx
<Tabs value={tab} onChange={setTab} items={[
  {value:'today', label:'Today', count:5},
  {value:'upcoming', label:'Upcoming'},
  {value:'done', label:'Done'},
]} />
<Tabs variant="pill" value={v} onChange={setV} items={['List','Board','Calendar']} />
```

Items can be strings or `{value,label,count}`. Selected tab shows brand-blue underline (or raised pill).
