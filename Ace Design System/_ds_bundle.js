/* @ds-bundle: {"format":3,"namespace":"AceDesignSystem_db6642","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"ProgressBar","sourcePath":"components/core/ProgressBar.jsx"},{"name":"ProgressRing","sourcePath":"components/core/ProgressRing.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"d01140de6f71","components/core/Badge.jsx":"5e055c85c223","components/core/Button.jsx":"3477bde2f91b","components/core/Card.jsx":"9d63f32b5515","components/core/Checkbox.jsx":"e6fcf0c8f585","components/core/IconButton.jsx":"88ef6bf36087","components/core/Input.jsx":"c9ca228dae0c","components/core/ProgressBar.jsx":"3538e9b14d77","components/core/ProgressRing.jsx":"33cf86a8b474","components/core/Switch.jsx":"3c2fee8ffb80","components/core/Tabs.jsx":"dfea1ea38c21","ui_kits/mobile/PhoneFrame.jsx":"103b43d64183","ui_kits/mobile/TodayScreen.jsx":"5d5d064803ce","ui_kits/web/Sidebar.jsx":"d671b108b6f8","ui_kits/web/TaskRow.jsx":"357dc6db9b79","ui_kits/web/TodayView.jsx":"9d8c4a96aae6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AceDesignSystem_db6642 = window.AceDesignSystem_db6642 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 56
};
const palette = [['#EEF4FD', 'var(--blue-700)'], ['#F1EEFE', 'var(--violet-600)'], ['#FDF4E2', 'var(--amber-600)'], ['#E8F6EF', 'var(--green-600)']];
function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase() || '?';
}
function Avatar({
  name = '',
  src,
  size = 'md',
  style = {},
  ...rest
}) {
  const dim = sizes[size] || sizes.md;
  const idx = name ? name.charCodeAt(0) % palette.length : 0;
  const [bg, fg] = palette[idx];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      flex: 'none',
      borderRadius: 'var(--radius-full)',
      overflow: 'hidden',
      background: bg,
      color: fg,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-bold)',
      fontSize: dim * 0.4,
      letterSpacing: '-0.01em',
      userSelect: 'none',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  neutral: {
    bg: 'var(--ink-100)',
    fg: 'var(--ink-700)'
  },
  primary: {
    bg: 'var(--blue-50)',
    fg: 'var(--blue-700)'
  },
  success: {
    bg: 'var(--green-50)',
    fg: 'var(--green-600)'
  },
  warning: {
    bg: 'var(--amber-50)',
    fg: 'var(--amber-600)'
  },
  danger: {
    bg: 'var(--red-50)',
    fg: 'var(--red-600)'
  },
  study: {
    bg: 'var(--cat-study-bg)',
    fg: 'var(--blue-700)'
  },
  project: {
    bg: 'var(--cat-project-bg)',
    fg: 'var(--violet-600)'
  },
  interview: {
    bg: 'var(--cat-interview-bg)',
    fg: 'var(--amber-600)'
  },
  personal: {
    bg: 'var(--cat-personal-bg)',
    fg: 'var(--green-600)'
  }
};
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  size = 'md',
  style = {},
  ...rest
}) {
  const t = tones[tone] || tones.neutral;
  const small = size === 'sm';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: small ? 20 : 24,
      padding: small ? '0 8px' : '0 10px',
      background: t.bg,
      color: t.fg,
      borderRadius: 'var(--radius-full)',
      fontFamily: 'var(--font-sans)',
      fontSize: small ? 'var(--text-2xs)' : 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-snug)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor',
      flex: 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    height: 32,
    padding: '0 12px',
    fontSize: 14,
    gap: 6
  },
  md: {
    height: 40,
    padding: '0 16px',
    fontSize: 15,
    gap: 8
  },
  lg: {
    height: 48,
    padding: '0 22px',
    fontSize: 16,
    gap: 8
  }
};
const palettes = {
  primary: {
    background: 'var(--color-primary)',
    color: 'var(--text-on-primary)',
    border: '1px solid transparent',
    hoverBg: 'var(--color-primary-hover)',
    activeBg: 'var(--color-primary-active)'
  },
  secondary: {
    background: 'var(--surface-card)',
    color: 'var(--text-strong)',
    border: '1px solid var(--border-default)',
    hoverBg: 'var(--surface-hover)',
    activeBg: 'var(--ink-100)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-body)',
    border: '1px solid transparent',
    hoverBg: 'var(--ink-100)',
    activeBg: 'var(--ink-200)'
  },
  danger: {
    background: 'var(--danger)',
    color: '#fff',
    border: '1px solid transparent',
    hoverBg: 'var(--red-600)',
    activeBg: 'var(--red-600)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const s = sizes[size] || sizes.md;
  const p = palettes[variant] || palettes.primary;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const bg = disabled ? p.background : active ? p.activeBg : hover ? p.hoverBg : p.background;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      fontSize: s.fontSize,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1,
      letterSpacing: 'var(--tracking-snug)',
      background: bg,
      color: p.color,
      border: p.border,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background 120ms ease, transform 80ms ease',
      transform: active && !disabled ? 'scale(0.98)' : 'scale(1)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  padding = 'var(--space-5)',
  interactive = false,
  elevation = 'sm',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const shadows = {
    none: 'none',
    xs: 'var(--shadow-xs)',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)'
  };
  const base = shadows[elevation] ?? shadows.sm;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: interactive && hover ? 'var(--shadow-md)' : base,
      transform: interactive && hover ? 'translateY(-2px)' : 'translateY(0)',
      transition: 'box-shadow 160ms ease, transform 160ms ease',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 18,
  md: 20,
  lg: 24
};
function Checkbox({
  checked = false,
  onChange,
  label,
  size = 'md',
  disabled = false,
  color = 'var(--color-primary)',
  style = {},
  ...rest
}) {
  const dim = sizes[size] || sizes.md;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      userSelect: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      flex: 'none',
      borderRadius: 'var(--radius-sm)',
      background: checked ? color : 'var(--surface-card)',
      border: checked ? `1px solid ${color}` : `1.5px solid ${hover ? 'var(--border-strong)' : 'var(--border-default)'}`,
      transition: 'background 120ms ease, border-color 120ms ease',
      boxShadow: checked ? 'none' : 'var(--shadow-xs)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: dim * 0.62,
    height: dim * 0.62,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      textDecoration: checked ? 'line-through' : 'none',
      color: checked ? 'var(--text-faint)' : 'var(--text-body)',
      transition: 'color 120ms ease'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 32,
  md: 40,
  lg: 48
};
const iconSizes = {
  sm: 16,
  md: 18,
  lg: 20
};
function IconButton({
  children,
  label,
  size = 'md',
  variant = 'ghost',
  disabled = false,
  active = false,
  style = {},
  ...rest
}) {
  const dim = sizes[size] || sizes.md;
  const [hover, setHover] = React.useState(false);
  const filled = variant === 'filled';
  const bg = filled ? hover ? 'var(--color-primary-hover)' : 'var(--color-primary)' : active ? 'var(--blue-50)' : hover ? 'var(--ink-100)' : 'transparent';
  const color = filled ? '#fff' : active ? 'var(--color-primary)' : 'var(--text-body)';
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      flex: 'none',
      background: bg,
      color,
      border: variant === 'outline' ? '1px solid var(--border-default)' : '1px solid transparent',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background 120ms ease, color 120ms ease',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: iconSizes[size],
      height: iconSizes[size]
    }
  }, children));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    height: 36,
    fontSize: 14,
    padding: '0 12px'
  },
  md: {
    height: 42,
    fontSize: 15,
    padding: '0 14px'
  },
  lg: {
    height: 48,
    fontSize: 16,
    padding: '0 16px'
  }
};
function Input({
  value,
  onChange,
  placeholder,
  type = 'text',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  disabled = false,
  invalid = false,
  label,
  hint,
  style = {},
  ...rest
}) {
  const s = sizes[size] || sizes.md;
  const [focus, setFocus] = React.useState(false);
  const borderColor = invalid ? 'var(--danger)' : focus ? 'var(--border-focus)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: s.height,
      padding: s.padding,
      background: disabled ? 'var(--ink-100)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--shadow-focus)' : 'var(--shadow-xs)',
      transition: 'border-color 120ms ease, box-shadow 120ms ease',
      opacity: disabled ? 0.6 : 1
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-faint)',
      width: 18,
      height: 18
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontSize: s.fontSize,
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, rest)), iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-faint)',
      width: 18,
      height: 18
    }
  }, iconRight)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: invalid ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProgressBar({
  value = 0,
  max = 100,
  color = 'var(--color-primary)',
  height = 8,
  showLabel = false,
  style = {},
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height,
      background: 'var(--ink-200)',
      borderRadius: 'var(--radius-full)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      background: color,
      borderRadius: 'var(--radius-full)',
      transition: 'width 320ms cubic-bezier(0.4,0,0.2,1)'
    }
  })), showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-muted)',
      minWidth: 38,
      textAlign: 'right'
    }
  }, Math.round(pct), "%"));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/core/ProgressRing.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProgressRing({
  value = 0,
  max = 100,
  size = 56,
  stroke = 6,
  color = 'var(--color-primary)',
  label,
  style = {},
  ...rest
}) {
  const pct = Math.max(0, Math.min(1, value / max));
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: size,
      height: size,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--ink-200)",
    strokeWidth: stroke
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeDasharray: c,
    strokeDashoffset: c * (1 - pct),
    style: {
      transition: 'stroke-dashoffset 420ms cubic-bezier(0.4,0,0.2,1)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: size * 0.26,
      color: 'var(--text-strong)'
    }
  }, label != null ? label : `${Math.round(pct * 100)}%`));
}
Object.assign(__ds_scope, { ProgressRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProgressRing.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked = false,
  onChange,
  disabled = false,
  size = 'md',
  label,
  style = {},
  ...rest
}) {
  const dims = size === 'sm' ? {
    w: 36,
    h: 20,
    k: 14
  } : {
    w: 44,
    h: 24,
    k: 18
  };
  const control = /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": checked,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      flex: 'none',
      width: dims.w,
      height: dims.h,
      padding: 3,
      borderRadius: 'var(--radius-full)',
      background: checked ? 'var(--color-primary)' : 'var(--ink-300)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background 160ms ease'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: dims.k,
      height: dims.k,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transform: `translateX(${checked ? dims.w - dims.k - 6 : 0}px)`,
      transition: 'transform 160ms cubic-bezier(0.34,1.56,0.64,1)'
    }
  }));
  if (!label) return React.cloneElement(control, {
    style: {
      ...control.props.style,
      ...style
    }
  });
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      ...style
    }
  }, rest), control, label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  style = {},
  ...rest
}) {
  const pill = variant === 'pill';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: pill ? 4 : 4,
      padding: pill ? 4 : 0,
      background: pill ? 'var(--surface-sunken)' : 'transparent',
      borderRadius: pill ? 'var(--radius-md)' : 0,
      borderBottom: pill ? 'none' : '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), items.map(it => {
    const key = typeof it === 'string' ? it : it.value;
    const label = typeof it === 'string' ? it : it.label;
    const count = typeof it === 'string' ? null : it.count;
    const selected = key === value;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      role: "tab",
      "aria-selected": selected,
      onClick: () => onChange && onChange(key),
      style: pill ? {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        height: 32,
        padding: '0 14px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-sm)',
        background: selected ? 'var(--surface-card)' : 'transparent',
        color: selected ? 'var(--text-strong)' : 'var(--text-muted)',
        boxShadow: selected ? 'var(--shadow-xs)' : 'none',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--weight-semibold)',
        fontFamily: 'var(--font-sans)',
        transition: 'all 120ms ease'
      } : {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        height: 40,
        padding: '0 4px',
        marginBottom: -1,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        borderBottom: `2px solid ${selected ? 'var(--color-primary)' : 'transparent'}`,
        color: selected ? 'var(--text-strong)' : 'var(--text-muted)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--weight-semibold)',
        fontFamily: 'var(--font-sans)',
        transition: 'color 120ms ease'
      }
    }, label, count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-2xs)',
        fontWeight: 'var(--weight-bold)',
        color: selected ? 'var(--color-primary)' : 'var(--text-faint)',
        background: selected ? 'var(--blue-50)' : 'var(--ink-100)',
        borderRadius: 'var(--radius-full)',
        padding: '2px 7px',
        lineHeight: 1
      }
    }, count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/PhoneFrame.jsx
try { (() => {
// Ace mobile UI kit — iPhone bezel + status bar + home indicator
function PhoneFrame({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 844,
      flex: 'none',
      position: 'relative',
      background: '#000',
      borderRadius: 54,
      padding: 5,
      boxSizing: 'border-box',
      boxShadow: '0 32px 70px rgba(20,22,26,0.28)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: 'var(--surface-page)',
      borderRadius: 49,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 54,
      flex: 'none',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      padding: '0 28px 8px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--text-strong)',
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "signal",
    style: {
      width: 16,
      height: 16
    }
  }), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "wifi",
    style: {
      width: 16,
      height: 16
    }
  }), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "battery-full",
    style: {
      width: 20,
      height: 16
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 124,
      height: 35,
      background: '#000',
      borderRadius: 20,
      zIndex: 10
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 8,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 134,
      height: 5,
      background: 'var(--ink-900)',
      borderRadius: 3,
      opacity: 0.85,
      zIndex: 20
    }
  })));
}
window.PhoneFrame = PhoneFrame;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/PhoneFrame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/TodayScreen.jsx
try { (() => {
// Ace mobile UI kit — Today screen content (header, progress, task list, tab bar, add sheet)
function TodayScreen({
  tasks,
  onToggle,
  onAdd,
  tab,
  onTab
}) {
  const {
    Checkbox,
    Badge,
    ProgressRing,
    Button,
    Input
  } = window.AceDesignSystem_db6642;
  const [adding, setAdding] = React.useState(false);
  const [draft, setDraft] = React.useState('');
  const catColor = {
    study: 'var(--cat-study)',
    project: 'var(--cat-project)',
    interview: 'var(--cat-interview)',
    personal: 'var(--cat-personal)'
  };
  const done = tasks.filter(t => t.done).length;
  const groups = [{
    key: 'Morning',
    items: tasks.filter(t => t.slot === 'am')
  }, {
    key: 'Afternoon',
    items: tasks.filter(t => t.slot === 'pm')
  }];
  const submit = () => {
    if (draft.trim()) {
      onAdd(draft.trim());
      setDraft('');
      setAdding(false);
    }
  };
  const tabs = [['today', 'Today', 'sun'], ['calendar', 'Calendar', 'calendar-days'], ['prep', 'Prep', 'briefcase'], ['you', 'You', 'user']];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflow: 'auto',
      padding: '4px 20px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 0 16px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--cat-study)'
    }
  }, "Mon \xB7 Jun 22"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '2px 0 0',
      fontSize: 30,
      fontWeight: 800,
      letterSpacing: '-0.02em'
    }
  }, "Today")), /*#__PURE__*/React.createElement(ProgressRing, {
    value: done,
    max: tasks.length || 1,
    size: 52
  })), groups.map(g => g.items.length > 0 && /*#__PURE__*/React.createElement("div", {
    key: g.key,
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      margin: '0 0 8px 2px'
    }
  }, g.key), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)'
    }
  }, g.items.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 16px',
      borderBottom: i < g.items.length - 1 ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: t.done,
    onChange: () => onToggle(t.id),
    color: catColor[t.cat]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      color: t.done ? 'var(--text-faint)' : 'var(--text-strong)',
      textDecoration: t.done ? 'line-through' : 'none'
    }
  }, t.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: t.cat,
    dot: true,
    size: "sm"
  }, t.list), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, t.due))))))))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setAdding(true),
    "aria-label": "Add task",
    style: {
      position: 'absolute',
      right: 20,
      bottom: 92,
      width: 56,
      height: 56,
      borderRadius: 28,
      background: 'var(--color-primary)',
      border: 'none',
      color: '#fff',
      cursor: 'pointer',
      boxShadow: '0 10px 24px rgba(42,111,219,0.42)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 30
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "plus",
    style: {
      width: 26,
      height: 26
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 84,
      paddingBottom: 20,
      background: 'rgba(255,255,255,0.86)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      zIndex: 25
    }
  }, tabs.map(([id, label, icon]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => onTab(id),
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 3,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: tab === id ? 'var(--color-primary)' : 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 22,
      height: 22
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 600
    }
  }, label)))), adding && /*#__PURE__*/React.createElement("div", {
    onClick: () => setAdding(false),
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(20,22,26,0.4)',
      zIndex: 40,
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      background: 'var(--surface-card)',
      borderRadius: '24px 24px 0 0',
      padding: '20px 20px 36px',
      boxShadow: 'var(--shadow-xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 4,
      borderRadius: 2,
      background: 'var(--ink-300)',
      margin: '0 auto 18px'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 14px',
      fontSize: 20,
      fontWeight: 700
    }
  }, "New task"), /*#__PURE__*/React.createElement(Input, {
    value: draft,
    onChange: setDraft,
    placeholder: "What do you need to do?",
    autoFocus: true,
    onKeyDown: e => e.key === 'Enter' && submit()
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 14
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    block: true,
    onClick: submit
  }, "Add to Today"))));
}
window.TodayScreen = TodayScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/TodayScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Sidebar.jsx
try { (() => {
// Ace web UI kit — left navigation sidebar
function Sidebar({
  active,
  onNavigate,
  lists,
  activeList
}) {
  const {
    Avatar,
    Badge
  } = window.AceDesignSystem_db6642;
  const nav = [{
    id: 'today',
    label: 'Today',
    icon: 'sun',
    count: 5
  }, {
    id: 'upcoming',
    label: 'Upcoming',
    icon: 'calendar-days'
  }, {
    id: 'all',
    label: 'All tasks',
    icon: 'list-checks'
  }, {
    id: 'interviews',
    label: 'Interview prep',
    icon: 'briefcase'
  }];
  const catColor = {
    study: 'var(--cat-study)',
    project: 'var(--cat-project)',
    interview: 'var(--cat-interview)',
    personal: 'var(--cat-personal)'
  };
  const item = selected => ({
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    height: 38,
    padding: '0 10px',
    borderRadius: 'var(--radius-md)',
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: selected ? 700 : 500,
    color: selected ? 'var(--color-primary)' : 'var(--text-body)',
    background: selected ? 'var(--blue-50)' : 'transparent'
  });
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 248,
      flex: 'none',
      height: '100%',
      boxSizing: 'border-box',
      background: 'var(--surface-card)',
      borderRight: '1px solid var(--border-subtle)',
      display: 'flex',
      flexDirection: 'column',
      padding: '16px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '4px 8px 18px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    width: "30",
    height: "30",
    alt: "Ace"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)'
    }
  }, "Ace")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("div", {
    key: n.id,
    style: item(active === n.id),
    onClick: () => onNavigate(n.id)
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": n.icon,
    style: {
      width: 18,
      height: 18
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, n.label), n.count != null && /*#__PURE__*/React.createElement(Badge, {
    tone: active === n.id ? 'primary' : 'neutral',
    size: "sm"
  }, n.count)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      margin: '22px 10px 8px'
    }
  }, "Lists"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, lists.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.id,
    style: item(activeList === l.id && active === 'list'),
    onClick: () => onNavigate('list', l.id)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: 3,
      background: catColor[l.cat],
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, l.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-faint)'
    }
  }, l.open)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 8px',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Maya Chen",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, "Maya Chen"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, "Junior \xB7 CS")), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "settings",
    style: {
      width: 16,
      height: 16,
      color: 'var(--text-faint)'
    }
  })));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/TaskRow.jsx
try { (() => {
// Ace web UI kit — a single task row
function TaskRow({
  task,
  onToggle
}) {
  const {
    Checkbox,
    Badge
  } = window.AceDesignSystem_db6642;
  const [hover, setHover] = React.useState(false);
  const catColor = {
    study: 'var(--cat-study)',
    project: 'var(--cat-project)',
    interview: 'var(--cat-interview)',
    personal: 'var(--cat-personal)'
  };
  const catTone = {
    study: 'study',
    project: 'project',
    interview: 'interview',
    personal: 'personal'
  };
  const overdue = task.overdue && !task.done;
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 14px',
      background: hover ? 'var(--surface-hover)' : 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)',
      transition: 'background 120ms ease'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: task.done,
    onChange: () => onToggle(task.id),
    color: catColor[task.cat]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: task.done ? 'var(--text-faint)' : 'var(--text-strong)',
      textDecoration: task.done ? 'line-through' : 'none'
    }
  }, task.title), task.note && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, task.note)), /*#__PURE__*/React.createElement(Badge, {
    tone: catTone[task.cat],
    dot: true
  }, task.list), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      minWidth: 88,
      justifyContent: 'flex-end',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 500,
      color: overdue ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": overdue ? 'alert-circle' : 'clock',
    style: {
      width: 13,
      height: 13
    }
  }), task.due), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "grip-vertical",
    style: {
      width: 16,
      height: 16,
      color: 'var(--ink-300)',
      opacity: hover ? 1 : 0
    }
  }));
}
window.TaskRow = TaskRow;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/TaskRow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/TodayView.jsx
try { (() => {
// Ace web UI kit — Today view: header, quick-add, grouped task list, right rail
function TodayView({
  tasks,
  onToggle,
  onAdd,
  filter,
  onFilter
}) {
  const {
    Button,
    Input,
    Tabs,
    ProgressRing,
    ProgressBar,
    Card,
    Badge
  } = window.AceDesignSystem_db6642;
  const [draft, setDraft] = React.useState('');
  const visible = tasks.filter(t => filter === 'all' ? true : filter === 'done' ? t.done : !t.done);
  const done = tasks.filter(t => t.done).length;
  const submit = () => {
    if (draft.trim()) {
      onAdd(draft.trim());
      setDraft('');
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flex: 1,
      minWidth: 0,
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 32px 0',
      maxWidth: 760,
      width: '100%',
      margin: '0 auto',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--cat-study)'
    }
  }, "Monday \xB7 Jun 22"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '4px 0 0',
      fontSize: 34,
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)'
    }
  }, "Today's focus")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, done, " of ", tasks.length, " done")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      margin: '20px 0 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    value: draft,
    onChange: setDraft,
    placeholder: "Add a task and press Enter\u2026",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "plus"
    }),
    onKeyDown: e => e.key === 'Enter' && submit()
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: submit
  }, "Add")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '14px 0 6px'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: filter,
    onChange: onFilter,
    items: [{
      value: 'open',
      label: 'To do',
      count: tasks.filter(t => !t.done).length
    }, {
      value: 'done',
      label: 'Done',
      count: done
    }, {
      value: 'all',
      label: 'All'
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      width: '100%',
      margin: '0 auto',
      padding: '0 32px 40px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "0",
    style: {
      overflow: 'hidden'
    }
  }, visible.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 0',
      textAlign: 'center',
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check-check",
    style: {
      width: 28,
      height: 28
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 15
    }
  }, "Nothing here \u2014 nice work.")) : visible.map(t => /*#__PURE__*/React.createElement(TaskRow, {
    key: t.id,
    task: t,
    onToggle: onToggle
  }))))), /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 300,
      flex: 'none',
      borderLeft: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)',
      padding: 24,
      boxSizing: 'border-box',
      overflow: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(ProgressRing, {
    value: done,
    max: tasks.length || 1,
    size: 64
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "Daily goal"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, tasks.length - done, " tasks to go"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      margin: '0 0 12px'
    }
  }, "By category"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [['Study', 'var(--cat-study)', 4, 6], ['Project', 'var(--cat-project)', 1, 3], ['Interview', 'var(--cat-interview)', 2, 4]].map(([n, c, v, m]) => /*#__PURE__*/React.createElement("div", {
    key: n
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)',
      fontWeight: 500
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-muted)'
    }
  }, v, "/", m)), /*#__PURE__*/React.createElement(ProgressBar, {
    value: v,
    max: m,
    color: c,
    height: 6
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      background: 'var(--cat-interview-bg)',
      borderRadius: 'var(--radius-lg)',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "interview",
    dot: true
  }, "Interview"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '10px 0 2px'
    }
  }, "Google \xB7 Phone screen"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-body)'
    }
  }, "Thursday, 2:00 PM"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--cat-interview)',
      marginTop: 8
    }
  }, "in 3 days"))));
}
window.TodayView = TodayView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/TodayView.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.ProgressRing = __ds_scope.ProgressRing;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
