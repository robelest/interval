import "clsx";
import { s as spread_props, f as attributes, g as clsx, j as bind_props, k as derived, p as props_id, e as attr, l as attr_class, m as stringify, n as ensure_array_like } from "../../../chunks/index2.js";
import { p as page, g as goto } from "../../../chunks/index3.js";
import { D as DialogRootState, a as DialogCloseState, b as DialogContentState, B as Button, c as Dialog_title$1, d as Dialog_overlay$1, s as setFilterContext } from "../../../chunks/filters.svelte.js";
import { I as Icon, c as cn, i as isFunction, n as noop, b as boxWith, a as createId, m as mergeProps, F as Focus_scope, E as Escape_layer, D as Dismissible_layer, T as Text_selection_layer, S as Scroll_lock, s as simpleBox, w as watch, e as executeCallbacks, C as Context, d as attachRef, f as DOMContext, u as useId, g as createBitsAttrs, h as useIntervals, j as useLiveQuery, k as StatusIcon, P as Portal, l as StatusLabels, o as PriorityIcon, p as PriorityLabels, q as Status, r as Priority } from "../../../chunks/PriorityIcon.js";
import { M as on } from "../../../chunks/events.js";
import { e as escape_html } from "../../../chunks/context.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/state.svelte.js";
function Arrow_left($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["path", { "d": "m12 19-7-7 7-7" }],
      ["path", { "d": "M19 12H5" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "arrow-left" },
      /**
       * @component @name ArrowLeft
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTIgMTktNy03IDctNyIgLz4KICA8cGF0aCBkPSJNMTkgMTJINSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/arrow-left
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Plus($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [["path", { "d": "M5 12h14" }], ["path", { "d": "M12 5v14" }]];
    Icon($$renderer2, spread_props([
      { name: "plus" },
      /**
       * @component @name Plus
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSAxMmgxNCIgLz4KICA8cGF0aCBkPSJNMTIgNXYxNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/plus
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Search($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["path", { "d": "m21 21-4.34-4.34" }],
      ["circle", { "cx": "11", "cy": "11", "r": "8" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "search" },
      /**
       * @component @name Search
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMjEgMjEtNC4zNC00LjM0IiAvPgogIDxjaXJjbGUgY3g9IjExIiBjeT0iMTEiIHI9IjgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/search
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Sliders_horizontal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["path", { "d": "M10 5H3" }],
      ["path", { "d": "M12 19H3" }],
      ["path", { "d": "M14 3v4" }],
      ["path", { "d": "M16 17v4" }],
      ["path", { "d": "M21 12h-9" }],
      ["path", { "d": "M21 19h-5" }],
      ["path", { "d": "M21 5h-7" }],
      ["path", { "d": "M8 10v4" }],
      ["path", { "d": "M8 12H3" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "sliders-horizontal" },
      /**
       * @component @name SlidersHorizontal
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAgNUgzIiAvPgogIDxwYXRoIGQ9Ik0xMiAxOUgzIiAvPgogIDxwYXRoIGQ9Ik0xNCAzdjQiIC8+CiAgPHBhdGggZD0iTTE2IDE3djQiIC8+CiAgPHBhdGggZD0iTTIxIDEyaC05IiAvPgogIDxwYXRoIGQ9Ik0yMSAxOWgtNSIgLz4KICA8cGF0aCBkPSJNMjEgNWgtNyIgLz4KICA8cGF0aCBkPSJNOCAxMHY0IiAvPgogIDxwYXRoIGQ9Ik04IDEySDMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/sliders-horizontal
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function X($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["path", { "d": "M18 6 6 18" }],
      ["path", { "d": "m6 6 12 12" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "x" },
      /**
       * @component @name X
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTggNiA2IDE4IiAvPgogIDxwYXRoIGQ9Im02IDYgMTIgMTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/x
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Input($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      value = void 0,
      type,
      files = void 0,
      class: className,
      "data-slot": dataSlot = "input",
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    if (type === "file") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<input${attributes(
        {
          "data-slot": dataSlot,
          class: clsx(cn("selection:bg-primary dark:bg-input/30 selection:text-primary-foreground border-input ring-offset-background placeholder:text-muted-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 pt-1.5 text-sm font-medium shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className)),
          type: "file",
          ...restProps
        },
        void 0,
        void 0,
        void 0,
        4
      )}/>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<input${attributes(
        {
          "data-slot": dataSlot,
          class: clsx(cn("border-input bg-background selection:bg-primary dark:bg-input/30 selection:text-primary-foreground ring-offset-background placeholder:text-muted-foreground flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className)),
          type,
          value,
          ...restProps
        },
        void 0,
        void 0,
        void 0,
        4
      )}/>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref, value, files });
  });
}
function extract(value, defaultValue) {
  if (isFunction(value)) {
    const getter = value;
    const gotten = getter();
    if (gotten === void 0) return defaultValue;
    return gotten;
  }
  if (value === void 0) return defaultValue;
  return value;
}
function useDebounce(callback, wait) {
  let context = null;
  const wait$ = extract(wait, 250);
  function debounced(...args) {
    if (context) {
      if (context.timeout) {
        clearTimeout(context.timeout);
      }
    } else {
      let resolve;
      let reject;
      const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });
      context = { timeout: null, runner: null, promise, resolve, reject };
    }
    context.runner = async () => {
      if (!context) return;
      const ctx = context;
      context = null;
      try {
        ctx.resolve(await callback.apply(this, args));
      } catch (error) {
        ctx.reject(error);
      }
    };
    context.timeout = setTimeout(context.runner, wait$);
    return context.promise;
  }
  debounced.cancel = async () => {
    if (!context || context.timeout === null) {
      await new Promise((resolve) => setTimeout(resolve, 0));
      if (!context || context.timeout === null) return;
    }
    clearTimeout(context.timeout);
    context.reject("Cancelled");
    context = null;
  };
  debounced.runScheduledNow = async () => {
    if (!context || !context.timeout) {
      await new Promise((resolve) => setTimeout(resolve, 0));
      if (!context || !context.timeout) return;
    }
    clearTimeout(context.timeout);
    context.timeout = null;
    await context.runner?.();
  };
  Object.defineProperty(debounced, "pending", {
    enumerable: true,
    get() {
      return !!context?.timeout;
    }
  });
  return debounced;
}
class IsMounted {
  #isMounted = false;
  constructor() {
  }
  get current() {
    return this.#isMounted;
  }
}
class Previous {
  #previousCallback = () => void 0;
  #previous = derived(() => this.#previousCallback());
  constructor(getter, initialValue) {
    let actualPrevious = void 0;
    if (initialValue !== void 0) actualPrevious = initialValue;
    this.#previousCallback = () => {
      try {
        return actualPrevious;
      } finally {
        actualPrevious = getter();
      }
    };
  }
  get current() {
    return this.#previous();
  }
}
function Dialog$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      open = false,
      onOpenChange = noop,
      onOpenChangeComplete = noop,
      children
    } = $$props;
    DialogRootState.create({
      variant: boxWith(() => "dialog"),
      open: boxWith(() => open, (v) => {
        open = v;
        onOpenChange(v);
      }),
      onOpenChangeComplete: boxWith(() => onOpenChangeComplete)
    });
    children?.($$renderer2);
    $$renderer2.push(`<!---->`);
    bind_props($$props, { open });
  });
}
function Dialog_close($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      children,
      child,
      id = createId(uid),
      ref = null,
      disabled = false,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const closeState = DialogCloseState.create({
      variant: boxWith(() => "close"),
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v),
      disabled: boxWith(() => Boolean(disabled))
    });
    const mergedProps = mergeProps(restProps, closeState.props);
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2, { props: mergedProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<button${attributes({ ...mergedProps })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></button>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Dialog_content$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      children,
      child,
      ref = null,
      forceMount = false,
      onCloseAutoFocus = noop,
      onOpenAutoFocus = noop,
      onEscapeKeydown = noop,
      onInteractOutside = noop,
      trapFocus = true,
      preventScroll = true,
      restoreScrollDelay = null,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const contentState = DialogContentState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v)
    });
    const mergedProps = mergeProps(restProps, contentState.props);
    if (contentState.shouldRender || forceMount) {
      $$renderer2.push("<!--[-->");
      {
        let focusScope = function($$renderer3, { props: focusScopeProps }) {
          Escape_layer($$renderer3, spread_props([
            mergedProps,
            {
              enabled: contentState.root.opts.open.current,
              ref: contentState.opts.ref,
              onEscapeKeydown: (e) => {
                onEscapeKeydown(e);
                if (e.defaultPrevented) return;
                contentState.root.handleClose();
              },
              children: ($$renderer4) => {
                Dismissible_layer($$renderer4, spread_props([
                  mergedProps,
                  {
                    ref: contentState.opts.ref,
                    enabled: contentState.root.opts.open.current,
                    onInteractOutside: (e) => {
                      onInteractOutside(e);
                      if (e.defaultPrevented) return;
                      contentState.root.handleClose();
                    },
                    children: ($$renderer5) => {
                      Text_selection_layer($$renderer5, spread_props([
                        mergedProps,
                        {
                          ref: contentState.opts.ref,
                          enabled: contentState.root.opts.open.current,
                          children: ($$renderer6) => {
                            if (child) {
                              $$renderer6.push("<!--[-->");
                              if (contentState.root.opts.open.current) {
                                $$renderer6.push("<!--[-->");
                                Scroll_lock($$renderer6, { preventScroll, restoreScrollDelay });
                              } else {
                                $$renderer6.push("<!--[!-->");
                              }
                              $$renderer6.push(`<!--]--> `);
                              child($$renderer6, {
                                props: mergeProps(mergedProps, focusScopeProps),
                                ...contentState.snippetProps
                              });
                              $$renderer6.push(`<!---->`);
                            } else {
                              $$renderer6.push("<!--[!-->");
                              Scroll_lock($$renderer6, { preventScroll });
                              $$renderer6.push(`<!----> <div${attributes({ ...mergeProps(mergedProps, focusScopeProps) })}>`);
                              children?.($$renderer6);
                              $$renderer6.push(`<!----></div>`);
                            }
                            $$renderer6.push(`<!--]-->`);
                          },
                          $$slots: { default: true }
                        }
                      ]));
                    },
                    $$slots: { default: true }
                  }
                ]));
              },
              $$slots: { default: true }
            }
          ]));
        };
        Focus_scope($$renderer2, {
          ref: contentState.opts.ref,
          loop: true,
          trapFocus,
          enabled: contentState.root.opts.open.current,
          onOpenAutoFocus,
          onCloseAutoFocus,
          focusScope
        });
      }
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
class SvelteResizeObserver {
  #node;
  #onResize;
  constructor(node, onResize) {
    this.#node = node;
    this.#onResize = onResize;
    this.handler = this.handler.bind(this);
  }
  handler() {
    let rAF = 0;
    const _node = this.#node();
    if (!_node) return;
    const resizeObserver = new ResizeObserver(() => {
      cancelAnimationFrame(rAF);
      rAF = window.requestAnimationFrame(this.#onResize);
    });
    resizeObserver.observe(_node);
    return () => {
      window.cancelAnimationFrame(rAF);
      resizeObserver.unobserve(_node);
    };
  }
}
class StateMachine {
  state;
  #machine;
  constructor(initialState, machine) {
    this.state = simpleBox(initialState);
    this.#machine = machine;
    this.dispatch = this.dispatch.bind(this);
  }
  #reducer(event) {
    const nextState = this.#machine[this.state.current][event];
    return nextState ?? this.state.current;
  }
  dispatch(event) {
    this.state.current = this.#reducer(event);
  }
}
const presenceMachine = {
  mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
  unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
  unmounted: { MOUNT: "mounted" }
};
class Presence {
  opts;
  prevAnimationNameState = "none";
  styles = {};
  initialStatus;
  previousPresent;
  machine;
  present;
  constructor(opts) {
    this.opts = opts;
    this.present = this.opts.open;
    this.initialStatus = opts.open.current ? "mounted" : "unmounted";
    this.previousPresent = new Previous(() => this.present.current);
    this.machine = new StateMachine(this.initialStatus, presenceMachine);
    this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
    this.handleAnimationStart = this.handleAnimationStart.bind(this);
    watchPresenceChange(this);
    watchStatusChange(this);
    watchRefChange(this);
  }
  /**
   * Triggering an ANIMATION_OUT during an ANIMATION_IN will fire an `animationcancel`
   * event for ANIMATION_IN after we have entered `unmountSuspended` state. So, we
   * make sure we only trigger ANIMATION_END for the currently active animation.
   */
  handleAnimationEnd(event) {
    if (!this.opts.ref.current) return;
    const currAnimationName = getAnimationName(this.opts.ref.current);
    const isCurrentAnimation = currAnimationName.includes(event.animationName) || currAnimationName === "none";
    if (event.target === this.opts.ref.current && isCurrentAnimation) {
      this.machine.dispatch("ANIMATION_END");
    }
  }
  handleAnimationStart(event) {
    if (!this.opts.ref.current) return;
    if (event.target === this.opts.ref.current) {
      this.prevAnimationNameState = getAnimationName(this.opts.ref.current);
    }
  }
  #isPresent = derived(() => {
    return ["mounted", "unmountSuspended"].includes(this.machine.state.current);
  });
  get isPresent() {
    return this.#isPresent();
  }
  set isPresent($$value) {
    return this.#isPresent($$value);
  }
}
function watchPresenceChange(state) {
  watch(() => state.present.current, () => {
    if (!state.opts.ref.current) return;
    const hasPresentChanged = state.present.current !== state.previousPresent.current;
    if (!hasPresentChanged) return;
    const prevAnimationName = state.prevAnimationNameState;
    const currAnimationName = getAnimationName(state.opts.ref.current);
    if (state.present.current) {
      state.machine.dispatch("MOUNT");
    } else if (currAnimationName === "none" || state.styles.display === "none") {
      state.machine.dispatch("UNMOUNT");
    } else {
      const isAnimating = prevAnimationName !== currAnimationName;
      if (state.previousPresent.current && isAnimating) {
        state.machine.dispatch("ANIMATION_OUT");
      } else {
        state.machine.dispatch("UNMOUNT");
      }
    }
  });
}
function watchStatusChange(state) {
  watch(() => state.machine.state.current, () => {
    if (!state.opts.ref.current) return;
    const currAnimationName = getAnimationName(state.opts.ref.current);
    state.prevAnimationNameState = state.machine.state.current === "mounted" ? currAnimationName : "none";
  });
}
function watchRefChange(state) {
  watch(() => state.opts.ref.current, () => {
    if (!state.opts.ref.current) return;
    state.styles = getComputedStyle(state.opts.ref.current);
    return executeCallbacks(on(state.opts.ref.current, "animationstart", state.handleAnimationStart), on(state.opts.ref.current, "animationcancel", state.handleAnimationEnd), on(state.opts.ref.current, "animationend", state.handleAnimationEnd));
  });
}
function getAnimationName(node) {
  return node ? getComputedStyle(node).animationName || "none" : "none";
}
function Presence_layer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { open, forceMount, presence, ref } = $$props;
    const presenceState = new Presence({ open: boxWith(() => open), ref });
    if (forceMount || open || presenceState.isPresent) {
      $$renderer2.push("<!--[-->");
      presence?.($$renderer2, { present: presenceState.isPresent });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}
const scrollAreaAttrs = createBitsAttrs({
  component: "scroll-area",
  parts: ["root", "viewport", "corner", "thumb", "scrollbar"]
});
const ScrollAreaRootContext = new Context("ScrollArea.Root");
const ScrollAreaScrollbarContext = new Context("ScrollArea.Scrollbar");
const ScrollAreaScrollbarVisibleContext = new Context("ScrollArea.ScrollbarVisible");
const ScrollAreaScrollbarAxisContext = new Context("ScrollArea.ScrollbarAxis");
const ScrollAreaScrollbarSharedContext = new Context("ScrollArea.ScrollbarShared");
class ScrollAreaRootState {
  static create(opts) {
    return ScrollAreaRootContext.set(new ScrollAreaRootState(opts));
  }
  opts;
  attachment;
  scrollAreaNode = null;
  viewportNode = null;
  contentNode = null;
  scrollbarXNode = null;
  scrollbarYNode = null;
  cornerWidth = 0;
  cornerHeight = 0;
  scrollbarXEnabled = false;
  scrollbarYEnabled = false;
  domContext;
  constructor(opts) {
    this.opts = opts;
    this.attachment = attachRef(opts.ref, (v) => this.scrollAreaNode = v);
    this.domContext = new DOMContext(opts.ref);
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    dir: this.opts.dir.current,
    style: {
      position: "relative",
      "--bits-scroll-area-corner-height": `${this.cornerHeight}px`,
      "--bits-scroll-area-corner-width": `${this.cornerWidth}px`
    },
    [scrollAreaAttrs.root]: "",
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class ScrollAreaViewportState {
  static create(opts) {
    return new ScrollAreaViewportState(opts, ScrollAreaRootContext.get());
  }
  opts;
  root;
  attachment;
  #contentId = simpleBox(useId());
  #contentRef = simpleBox(null);
  contentAttachment = attachRef(this.#contentRef, (v) => this.root.contentNode = v);
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(opts.ref, (v) => this.root.viewportNode = v);
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    style: {
      overflowX: this.root.scrollbarXEnabled ? "scroll" : "hidden",
      overflowY: this.root.scrollbarYEnabled ? "scroll" : "hidden"
    },
    [scrollAreaAttrs.viewport]: "",
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
  #contentProps = derived(() => ({
    id: this.#contentId.current,
    "data-scroll-area-content": "",
    style: {
      minWidth: this.root.scrollbarXEnabled ? "fit-content" : void 0
    },
    ...this.contentAttachment
  }));
  get contentProps() {
    return this.#contentProps();
  }
  set contentProps($$value) {
    return this.#contentProps($$value);
  }
}
class ScrollAreaScrollbarState {
  static create(opts) {
    return ScrollAreaScrollbarContext.set(new ScrollAreaScrollbarState(opts, ScrollAreaRootContext.get()));
  }
  opts;
  root;
  #isHorizontal = derived(() => this.opts.orientation.current === "horizontal");
  get isHorizontal() {
    return this.#isHorizontal();
  }
  set isHorizontal($$value) {
    return this.#isHorizontal($$value);
  }
  hasThumb = false;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    watch(() => this.isHorizontal, (isHorizontal) => {
      if (isHorizontal) {
        this.root.scrollbarXEnabled = true;
        return () => {
          this.root.scrollbarXEnabled = false;
        };
      } else {
        this.root.scrollbarYEnabled = true;
        return () => {
          this.root.scrollbarYEnabled = false;
        };
      }
    });
  }
}
class ScrollAreaScrollbarHoverState {
  static create() {
    return new ScrollAreaScrollbarHoverState(ScrollAreaScrollbarContext.get());
  }
  scrollbar;
  root;
  isVisible = false;
  constructor(scrollbar) {
    this.scrollbar = scrollbar;
    this.root = scrollbar.root;
  }
  #props = derived(() => ({ "data-state": this.isVisible ? "visible" : "hidden" }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class ScrollAreaScrollbarScrollState {
  static create() {
    return new ScrollAreaScrollbarScrollState(ScrollAreaScrollbarContext.get());
  }
  scrollbar;
  root;
  machine = new StateMachine("hidden", {
    hidden: { SCROLL: "scrolling" },
    scrolling: { SCROLL_END: "idle", POINTER_ENTER: "interacting" },
    interacting: { SCROLL: "interacting", POINTER_LEAVE: "idle" },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  #isHidden = derived(() => this.machine.state.current === "hidden");
  get isHidden() {
    return this.#isHidden();
  }
  set isHidden($$value) {
    return this.#isHidden($$value);
  }
  constructor(scrollbar) {
    this.scrollbar = scrollbar;
    this.root = scrollbar.root;
    useDebounce(() => this.machine.dispatch("SCROLL_END"), 100);
    this.onpointerenter = this.onpointerenter.bind(this);
    this.onpointerleave = this.onpointerleave.bind(this);
  }
  onpointerenter(_) {
    this.machine.dispatch("POINTER_ENTER");
  }
  onpointerleave(_) {
    this.machine.dispatch("POINTER_LEAVE");
  }
  #props = derived(() => ({
    "data-state": this.machine.state.current === "hidden" ? "hidden" : "visible",
    onpointerenter: this.onpointerenter,
    onpointerleave: this.onpointerleave
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class ScrollAreaScrollbarAutoState {
  static create() {
    return new ScrollAreaScrollbarAutoState(ScrollAreaScrollbarContext.get());
  }
  scrollbar;
  root;
  isVisible = false;
  constructor(scrollbar) {
    this.scrollbar = scrollbar;
    this.root = scrollbar.root;
    const handleResize = useDebounce(
      () => {
        const viewportNode = this.root.viewportNode;
        if (!viewportNode) return;
        const isOverflowX = viewportNode.offsetWidth < viewportNode.scrollWidth;
        const isOverflowY = viewportNode.offsetHeight < viewportNode.scrollHeight;
        this.isVisible = this.scrollbar.isHorizontal ? isOverflowX : isOverflowY;
      },
      10
    );
    new SvelteResizeObserver(() => this.root.viewportNode, handleResize);
    new SvelteResizeObserver(() => this.root.contentNode, handleResize);
  }
  #props = derived(() => ({ "data-state": this.isVisible ? "visible" : "hidden" }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class ScrollAreaScrollbarVisibleState {
  static create() {
    return ScrollAreaScrollbarVisibleContext.set(new ScrollAreaScrollbarVisibleState(ScrollAreaScrollbarContext.get()));
  }
  scrollbar;
  root;
  thumbNode = null;
  pointerOffset = 0;
  sizes = {
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  };
  #thumbRatio = derived(() => getThumbRatio(this.sizes.viewport, this.sizes.content));
  get thumbRatio() {
    return this.#thumbRatio();
  }
  set thumbRatio($$value) {
    return this.#thumbRatio($$value);
  }
  #hasThumb = derived(() => Boolean(this.thumbRatio > 0 && this.thumbRatio < 1));
  get hasThumb() {
    return this.#hasThumb();
  }
  set hasThumb($$value) {
    return this.#hasThumb($$value);
  }
  prevTransformStyle = "";
  constructor(scrollbar) {
    this.scrollbar = scrollbar;
    this.root = scrollbar.root;
  }
  setSizes(sizes) {
    this.sizes = sizes;
  }
  getScrollPosition(pointerPos, dir) {
    return getScrollPositionFromPointer({
      pointerPos,
      pointerOffset: this.pointerOffset,
      sizes: this.sizes,
      dir
    });
  }
  onThumbPointerUp() {
    this.pointerOffset = 0;
  }
  onThumbPointerDown(pointerPos) {
    this.pointerOffset = pointerPos;
  }
  xOnThumbPositionChange() {
    if (!(this.root.viewportNode && this.thumbNode)) return;
    const scrollPos = this.root.viewportNode.scrollLeft;
    const offset = getThumbOffsetFromScroll({
      scrollPos,
      sizes: this.sizes,
      dir: this.root.opts.dir.current
    });
    const transformStyle = `translate3d(${offset}px, 0, 0)`;
    this.thumbNode.style.transform = transformStyle;
    this.prevTransformStyle = transformStyle;
  }
  xOnWheelScroll(scrollPos) {
    if (!this.root.viewportNode) return;
    this.root.viewportNode.scrollLeft = scrollPos;
  }
  xOnDragScroll(pointerPos) {
    if (!this.root.viewportNode) return;
    this.root.viewportNode.scrollLeft = this.getScrollPosition(pointerPos, this.root.opts.dir.current);
  }
  yOnThumbPositionChange() {
    if (!(this.root.viewportNode && this.thumbNode)) return;
    const scrollPos = this.root.viewportNode.scrollTop;
    const offset = getThumbOffsetFromScroll({ scrollPos, sizes: this.sizes });
    const transformStyle = `translate3d(0, ${offset}px, 0)`;
    this.thumbNode.style.transform = transformStyle;
    this.prevTransformStyle = transformStyle;
  }
  yOnWheelScroll(scrollPos) {
    if (!this.root.viewportNode) return;
    this.root.viewportNode.scrollTop = scrollPos;
  }
  yOnDragScroll(pointerPos) {
    if (!this.root.viewportNode) return;
    this.root.viewportNode.scrollTop = this.getScrollPosition(pointerPos, this.root.opts.dir.current);
  }
}
class ScrollAreaScrollbarXState {
  static create(opts) {
    return ScrollAreaScrollbarAxisContext.set(new ScrollAreaScrollbarXState(opts, ScrollAreaScrollbarVisibleContext.get()));
  }
  opts;
  scrollbarVis;
  root;
  scrollbar;
  attachment;
  computedStyle;
  constructor(opts, scrollbarVis) {
    this.opts = opts;
    this.scrollbarVis = scrollbarVis;
    this.root = scrollbarVis.root;
    this.scrollbar = scrollbarVis.scrollbar;
    this.attachment = attachRef(this.scrollbar.opts.ref, (v) => this.root.scrollbarXNode = v);
  }
  onThumbPointerDown = (pointerPos) => {
    this.scrollbarVis.onThumbPointerDown(pointerPos.x);
  };
  onDragScroll = (pointerPos) => {
    this.scrollbarVis.xOnDragScroll(pointerPos.x);
  };
  onThumbPointerUp = () => {
    this.scrollbarVis.onThumbPointerUp();
  };
  onThumbPositionChange = () => {
    this.scrollbarVis.xOnThumbPositionChange();
  };
  onWheelScroll = (e, maxScrollPos) => {
    if (!this.root.viewportNode) return;
    const scrollPos = this.root.viewportNode.scrollLeft + e.deltaX;
    this.scrollbarVis.xOnWheelScroll(scrollPos);
    if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
      e.preventDefault();
    }
  };
  onResize = () => {
    if (!(this.scrollbar.opts.ref.current && this.root.viewportNode && this.computedStyle)) return;
    this.scrollbarVis.setSizes({
      content: this.root.viewportNode.scrollWidth,
      viewport: this.root.viewportNode.offsetWidth,
      scrollbar: {
        size: this.scrollbar.opts.ref.current.clientWidth,
        paddingStart: toInt(this.computedStyle.paddingLeft),
        paddingEnd: toInt(this.computedStyle.paddingRight)
      }
    });
  };
  #thumbSize = derived(() => {
    return getThumbSize(this.scrollbarVis.sizes);
  });
  get thumbSize() {
    return this.#thumbSize();
  }
  set thumbSize($$value) {
    return this.#thumbSize($$value);
  }
  #props = derived(() => ({
    id: this.scrollbar.opts.id.current,
    "data-orientation": "horizontal",
    style: {
      bottom: 0,
      left: this.root.opts.dir.current === "rtl" ? "var(--bits-scroll-area-corner-width)" : 0,
      right: this.root.opts.dir.current === "ltr" ? "var(--bits-scroll-area-corner-width)" : 0,
      "--bits-scroll-area-thumb-width": `${this.thumbSize}px`
    },
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class ScrollAreaScrollbarYState {
  static create(opts) {
    return ScrollAreaScrollbarAxisContext.set(new ScrollAreaScrollbarYState(opts, ScrollAreaScrollbarVisibleContext.get()));
  }
  opts;
  scrollbarVis;
  root;
  scrollbar;
  attachment;
  computedStyle;
  constructor(opts, scrollbarVis) {
    this.opts = opts;
    this.scrollbarVis = scrollbarVis;
    this.root = scrollbarVis.root;
    this.scrollbar = scrollbarVis.scrollbar;
    this.attachment = attachRef(this.scrollbar.opts.ref, (v) => this.root.scrollbarYNode = v);
    this.onThumbPointerDown = this.onThumbPointerDown.bind(this);
    this.onDragScroll = this.onDragScroll.bind(this);
    this.onThumbPointerUp = this.onThumbPointerUp.bind(this);
    this.onThumbPositionChange = this.onThumbPositionChange.bind(this);
    this.onWheelScroll = this.onWheelScroll.bind(this);
    this.onResize = this.onResize.bind(this);
  }
  onThumbPointerDown(pointerPos) {
    this.scrollbarVis.onThumbPointerDown(pointerPos.y);
  }
  onDragScroll(pointerPos) {
    this.scrollbarVis.yOnDragScroll(pointerPos.y);
  }
  onThumbPointerUp() {
    this.scrollbarVis.onThumbPointerUp();
  }
  onThumbPositionChange() {
    this.scrollbarVis.yOnThumbPositionChange();
  }
  onWheelScroll(e, maxScrollPos) {
    if (!this.root.viewportNode) return;
    const scrollPos = this.root.viewportNode.scrollTop + e.deltaY;
    this.scrollbarVis.yOnWheelScroll(scrollPos);
    if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
      e.preventDefault();
    }
  }
  onResize() {
    if (!(this.scrollbar.opts.ref.current && this.root.viewportNode && this.computedStyle)) return;
    this.scrollbarVis.setSizes({
      content: this.root.viewportNode.scrollHeight,
      viewport: this.root.viewportNode.offsetHeight,
      scrollbar: {
        size: this.scrollbar.opts.ref.current.clientHeight,
        paddingStart: toInt(this.computedStyle.paddingTop),
        paddingEnd: toInt(this.computedStyle.paddingBottom)
      }
    });
  }
  #thumbSize = derived(() => {
    return getThumbSize(this.scrollbarVis.sizes);
  });
  get thumbSize() {
    return this.#thumbSize();
  }
  set thumbSize($$value) {
    return this.#thumbSize($$value);
  }
  #props = derived(() => ({
    id: this.scrollbar.opts.id.current,
    "data-orientation": "vertical",
    style: {
      top: 0,
      right: this.root.opts.dir.current === "ltr" ? 0 : void 0,
      left: this.root.opts.dir.current === "rtl" ? 0 : void 0,
      bottom: "var(--bits-scroll-area-corner-height)",
      "--bits-scroll-area-thumb-height": `${this.thumbSize}px`
    },
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class ScrollAreaScrollbarSharedState {
  static create() {
    return ScrollAreaScrollbarSharedContext.set(new ScrollAreaScrollbarSharedState(ScrollAreaScrollbarAxisContext.get()));
  }
  scrollbarState;
  root;
  scrollbarVis;
  scrollbar;
  rect = null;
  prevWebkitUserSelect = "";
  handleResize;
  handleThumbPositionChange;
  handleWheelScroll;
  handleThumbPointerDown;
  handleThumbPointerUp;
  #maxScrollPos = derived(() => this.scrollbarVis.sizes.content - this.scrollbarVis.sizes.viewport);
  get maxScrollPos() {
    return this.#maxScrollPos();
  }
  set maxScrollPos($$value) {
    return this.#maxScrollPos($$value);
  }
  constructor(scrollbarState) {
    this.scrollbarState = scrollbarState;
    this.root = scrollbarState.root;
    this.scrollbarVis = scrollbarState.scrollbarVis;
    this.scrollbar = scrollbarState.scrollbarVis.scrollbar;
    this.handleResize = useDebounce(() => this.scrollbarState.onResize(), 10);
    this.handleThumbPositionChange = this.scrollbarState.onThumbPositionChange;
    this.handleWheelScroll = this.scrollbarState.onWheelScroll;
    this.handleThumbPointerDown = this.scrollbarState.onThumbPointerDown;
    this.handleThumbPointerUp = this.scrollbarState.onThumbPointerUp;
    new SvelteResizeObserver(() => this.scrollbar.opts.ref.current, this.handleResize);
    new SvelteResizeObserver(() => this.root.contentNode, this.handleResize);
    this.onpointerdown = this.onpointerdown.bind(this);
    this.onpointermove = this.onpointermove.bind(this);
    this.onpointerup = this.onpointerup.bind(this);
  }
  handleDragScroll(e) {
    if (!this.rect) return;
    const x = e.clientX - this.rect.left;
    const y = e.clientY - this.rect.top;
    this.scrollbarState.onDragScroll({ x, y });
  }
  onpointerdown(e) {
    if (e.button !== 0) return;
    const target = e.target;
    target.setPointerCapture(e.pointerId);
    this.rect = this.scrollbar.opts.ref.current?.getBoundingClientRect() ?? null;
    this.prevWebkitUserSelect = this.root.domContext.getDocument().body.style.webkitUserSelect;
    this.root.domContext.getDocument().body.style.webkitUserSelect = "none";
    if (this.root.viewportNode) this.root.viewportNode.style.scrollBehavior = "auto";
    this.handleDragScroll(e);
  }
  onpointermove(e) {
    this.handleDragScroll(e);
  }
  onpointerup(e) {
    const target = e.target;
    if (target.hasPointerCapture(e.pointerId)) {
      target.releasePointerCapture(e.pointerId);
    }
    this.root.domContext.getDocument().body.style.webkitUserSelect = this.prevWebkitUserSelect;
    if (this.root.viewportNode) this.root.viewportNode.style.scrollBehavior = "";
    this.rect = null;
  }
  #props = derived(() => mergeProps({
    ...this.scrollbarState.props,
    style: { position: "absolute", ...this.scrollbarState.props.style },
    [scrollAreaAttrs.scrollbar]: "",
    onpointerdown: this.onpointerdown,
    onpointermove: this.onpointermove,
    onpointerup: this.onpointerup
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class ScrollAreaThumbImplState {
  static create(opts) {
    return new ScrollAreaThumbImplState(opts, ScrollAreaScrollbarSharedContext.get());
  }
  opts;
  scrollbarState;
  attachment;
  #root;
  #removeUnlinkedScrollListener;
  #debounceScrollEnd = useDebounce(
    () => {
      if (this.#removeUnlinkedScrollListener) {
        this.#removeUnlinkedScrollListener();
        this.#removeUnlinkedScrollListener = void 0;
      }
    },
    100
  );
  constructor(opts, scrollbarState) {
    this.opts = opts;
    this.scrollbarState = scrollbarState;
    this.#root = scrollbarState.root;
    this.attachment = attachRef(this.opts.ref, (v) => this.scrollbarState.scrollbarVis.thumbNode = v);
    this.onpointerdowncapture = this.onpointerdowncapture.bind(this);
    this.onpointerup = this.onpointerup.bind(this);
  }
  onpointerdowncapture(e) {
    const thumb = e.target;
    if (!thumb) return;
    const thumbRect = thumb.getBoundingClientRect();
    const x = e.clientX - thumbRect.left;
    const y = e.clientY - thumbRect.top;
    this.scrollbarState.handleThumbPointerDown({ x, y });
  }
  onpointerup(_) {
    this.scrollbarState.handleThumbPointerUp();
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    "data-state": this.scrollbarState.scrollbarVis.hasThumb ? "visible" : "hidden",
    style: {
      width: "var(--bits-scroll-area-thumb-width)",
      height: "var(--bits-scroll-area-thumb-height)",
      transform: this.scrollbarState.scrollbarVis.prevTransformStyle
    },
    onpointerdowncapture: this.onpointerdowncapture,
    onpointerup: this.onpointerup,
    [scrollAreaAttrs.thumb]: "",
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class ScrollAreaCornerImplState {
  static create(opts) {
    return new ScrollAreaCornerImplState(opts, ScrollAreaRootContext.get());
  }
  opts;
  root;
  attachment;
  #width = 0;
  #height = 0;
  #hasSize = derived(() => Boolean(this.#width && this.#height));
  get hasSize() {
    return this.#hasSize();
  }
  set hasSize($$value) {
    return this.#hasSize($$value);
  }
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(this.opts.ref);
    new SvelteResizeObserver(() => this.root.scrollbarXNode, () => {
      const height = this.root.scrollbarXNode?.offsetHeight || 0;
      this.root.cornerHeight = height;
      this.#height = height;
    });
    new SvelteResizeObserver(() => this.root.scrollbarYNode, () => {
      const width = this.root.scrollbarYNode?.offsetWidth || 0;
      this.root.cornerWidth = width;
      this.#width = width;
    });
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    style: {
      width: this.#width,
      height: this.#height,
      position: "absolute",
      right: this.root.opts.dir.current === "ltr" ? 0 : void 0,
      left: this.root.opts.dir.current === "rtl" ? 0 : void 0,
      bottom: 0
    },
    [scrollAreaAttrs.corner]: "",
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
function toInt(value) {
  return value ? Number.parseInt(value, 10) : 0;
}
function getThumbRatio(viewportSize, contentSize) {
  const ratio = viewportSize / contentSize;
  return Number.isNaN(ratio) ? 0 : ratio;
}
function getThumbSize(sizes) {
  const ratio = getThumbRatio(sizes.viewport, sizes.content);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
  return Math.max(thumbSize, 18);
}
function getScrollPositionFromPointer({ pointerPos, pointerOffset, sizes, dir = "ltr" }) {
  const thumbSizePx = getThumbSize(sizes);
  const thumbCenter = thumbSizePx / 2;
  const offset = pointerOffset || thumbCenter;
  const thumbOffsetFromEnd = thumbSizePx - offset;
  const minPointerPos = sizes.scrollbar.paddingStart + offset;
  const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
  const maxScrollPos = sizes.content - sizes.viewport;
  const scrollRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const interpolate = linearScale([minPointerPos, maxPointerPos], scrollRange);
  return interpolate(pointerPos);
}
function getThumbOffsetFromScroll({ scrollPos, sizes, dir = "ltr" }) {
  const thumbSizePx = getThumbSize(sizes);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const scrollbar = sizes.scrollbar.size - scrollbarPadding;
  const maxScrollPos = sizes.content - sizes.viewport;
  const maxThumbPos = scrollbar - thumbSizePx;
  const scrollClampRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const scrollWithoutMomentum = clamp(scrollPos, scrollClampRange[0], scrollClampRange[1]);
  const interpolate = linearScale([0, maxScrollPos], [0, maxThumbPos]);
  return interpolate(scrollWithoutMomentum);
}
function linearScale(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1]) return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}
function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
  return scrollPos > 0 && scrollPos < maxScrollPos;
}
function Scroll_area$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      ref = null,
      id = createId(uid),
      type = "hover",
      dir = "ltr",
      scrollHideDelay = 600,
      children,
      child,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const rootState = ScrollAreaRootState.create({
      type: boxWith(() => type),
      dir: boxWith(() => dir),
      scrollHideDelay: boxWith(() => scrollHideDelay),
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v)
    });
    const mergedProps = mergeProps(restProps, rootState.props);
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2, { props: mergedProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div${attributes({ ...mergedProps })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Scroll_area_viewport($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      ref = null,
      id = createId(uid),
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const viewportState = ScrollAreaViewportState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v)
    });
    const mergedProps = mergeProps(restProps, viewportState.props);
    const mergedContentProps = mergeProps({}, viewportState.contentProps);
    $$renderer2.push(`<div${attributes({ ...mergedProps })}><div${attributes({ ...mergedContentProps })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div></div>`);
    bind_props($$props, { ref });
  });
}
function Scroll_area_scrollbar_shared($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { child, children, $$slots, $$events, ...restProps } = $$props;
    const scrollbarSharedState = ScrollAreaScrollbarSharedState.create();
    const mergedProps = mergeProps(restProps, scrollbarSharedState.props);
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2, { props: mergedProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div${attributes({ ...mergedProps })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Scroll_area_scrollbar_x($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...restProps } = $$props;
    const isMounted = new IsMounted();
    const scrollbarXState = ScrollAreaScrollbarXState.create({ mounted: boxWith(() => isMounted.current) });
    const mergedProps = mergeProps(restProps, scrollbarXState.props);
    Scroll_area_scrollbar_shared($$renderer2, spread_props([mergedProps]));
  });
}
function Scroll_area_scrollbar_y($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...restProps } = $$props;
    const isMounted = new IsMounted();
    const scrollbarYState = ScrollAreaScrollbarYState.create({ mounted: boxWith(() => isMounted.current) });
    const mergedProps = mergeProps(restProps, scrollbarYState.props);
    Scroll_area_scrollbar_shared($$renderer2, spread_props([mergedProps]));
  });
}
function Scroll_area_scrollbar_visible($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...restProps } = $$props;
    const scrollbarVisibleState = ScrollAreaScrollbarVisibleState.create();
    if (scrollbarVisibleState.scrollbar.opts.orientation.current === "horizontal") {
      $$renderer2.push("<!--[-->");
      Scroll_area_scrollbar_x($$renderer2, spread_props([restProps]));
    } else {
      $$renderer2.push("<!--[!-->");
      Scroll_area_scrollbar_y($$renderer2, spread_props([restProps]));
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Scroll_area_scrollbar_auto($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { forceMount = false, $$slots, $$events, ...restProps } = $$props;
    const scrollbarAutoState = ScrollAreaScrollbarAutoState.create();
    const mergedProps = mergeProps(restProps, scrollbarAutoState.props);
    {
      let presence = function($$renderer3) {
        Scroll_area_scrollbar_visible($$renderer3, spread_props([mergedProps]));
      };
      Presence_layer($$renderer2, {
        open: forceMount || scrollbarAutoState.isVisible,
        ref: scrollbarAutoState.scrollbar.opts.ref,
        presence
      });
    }
  });
}
function Scroll_area_scrollbar_scroll($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { forceMount = false, $$slots, $$events, ...restProps } = $$props;
    const scrollbarScrollState = ScrollAreaScrollbarScrollState.create();
    const mergedProps = mergeProps(restProps, scrollbarScrollState.props);
    {
      let presence = function($$renderer3) {
        Scroll_area_scrollbar_visible($$renderer3, spread_props([mergedProps]));
      };
      Presence_layer($$renderer2, spread_props([
        mergedProps,
        {
          open: forceMount || !scrollbarScrollState.isHidden,
          ref: scrollbarScrollState.scrollbar.opts.ref,
          presence,
          $$slots: { presence: true }
        }
      ]));
    }
  });
}
function Scroll_area_scrollbar_hover($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { forceMount = false, $$slots, $$events, ...restProps } = $$props;
    const scrollbarHoverState = ScrollAreaScrollbarHoverState.create();
    const scrollbarAutoState = ScrollAreaScrollbarAutoState.create();
    const mergedProps = mergeProps(restProps, scrollbarHoverState.props, scrollbarAutoState.props, {
      "data-state": scrollbarHoverState.isVisible ? "visible" : "hidden"
    });
    const open = forceMount || scrollbarHoverState.isVisible && scrollbarAutoState.isVisible;
    {
      let presence = function($$renderer3) {
        Scroll_area_scrollbar_visible($$renderer3, spread_props([mergedProps]));
      };
      Presence_layer($$renderer2, {
        open,
        ref: scrollbarAutoState.scrollbar.opts.ref,
        presence
      });
    }
  });
}
function Scroll_area_scrollbar$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      ref = null,
      id = createId(uid),
      orientation,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const scrollbarState = ScrollAreaScrollbarState.create({
      orientation: boxWith(() => orientation),
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v)
    });
    const type = scrollbarState.root.opts.type.current;
    if (type === "hover") {
      $$renderer2.push("<!--[-->");
      Scroll_area_scrollbar_hover($$renderer2, spread_props([restProps, { id }]));
    } else {
      $$renderer2.push("<!--[!-->");
      if (type === "scroll") {
        $$renderer2.push("<!--[-->");
        Scroll_area_scrollbar_scroll($$renderer2, spread_props([restProps, { id }]));
      } else {
        $$renderer2.push("<!--[!-->");
        if (type === "auto") {
          $$renderer2.push("<!--[-->");
          Scroll_area_scrollbar_auto($$renderer2, spread_props([restProps, { id }]));
        } else {
          $$renderer2.push("<!--[!-->");
          if (type === "always") {
            $$renderer2.push("<!--[-->");
            Scroll_area_scrollbar_visible($$renderer2, spread_props([restProps, { id }]));
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Scroll_area_thumb_impl($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      id,
      child,
      children,
      present,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const isMounted = new IsMounted();
    const thumbState = ScrollAreaThumbImplState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v),
      mounted: boxWith(() => isMounted.current)
    });
    const mergedProps = mergeProps(restProps, thumbState.props, { style: { hidden: !present } });
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2, { props: mergedProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div${attributes({ ...mergedProps })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Scroll_area_thumb($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      ref = null,
      forceMount = false,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const scrollbarState = ScrollAreaScrollbarVisibleContext.get();
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      {
        let presence = function($$renderer4, { present }) {
          Scroll_area_thumb_impl($$renderer4, spread_props([
            restProps,
            {
              id,
              present,
              get ref() {
                return ref;
              },
              set ref($$value) {
                ref = $$value;
                $$settled = false;
              }
            }
          ]));
        };
        Presence_layer($$renderer3, {
          open: forceMount || scrollbarState.hasThumb,
          ref: scrollbarState.scrollbar.opts.ref,
          presence
        });
      }
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref });
  });
}
function Scroll_area_corner_impl($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      id,
      children,
      child,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const cornerState = ScrollAreaCornerImplState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v)
    });
    const mergedProps = mergeProps(restProps, cornerState.props);
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2, { props: mergedProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div${attributes({ ...mergedProps })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Scroll_area_corner($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      ref = null,
      id = createId(uid),
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const scrollAreaState = ScrollAreaRootContext.get();
    const hasBothScrollbarsVisible = Boolean(scrollAreaState.scrollbarXNode && scrollAreaState.scrollbarYNode);
    const hasCorner = scrollAreaState.opts.type.current !== "scroll" && hasBothScrollbarsVisible;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      if (hasCorner) {
        $$renderer3.push("<!--[-->");
        Scroll_area_corner_impl($$renderer3, spread_props([
          restProps,
          {
            id,
            get ref() {
              return ref;
            },
            set ref($$value) {
              ref = $$value;
              $$settled = false;
            }
          }
        ]));
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]-->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref });
  });
}
function Scroll_area_scrollbar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      orientation = "vertical",
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Scroll_area_scrollbar$1($$renderer3, spread_props([
        {
          "data-slot": "scroll-area-scrollbar",
          orientation,
          class: cn("flex touch-none p-px transition-colors select-none", orientation === "vertical" && "h-full w-2.5 border-s border-s-transparent", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent", className)
        },
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          },
          children: ($$renderer4) => {
            children?.($$renderer4);
            $$renderer4.push(`<!----> <!---->`);
            Scroll_area_thumb($$renderer4, {
              "data-slot": "scroll-area-thumb",
              class: "bg-border relative flex-1 rounded-full"
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        }
      ]));
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref });
  });
}
function Scroll_area($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      viewportRef = null,
      class: className,
      orientation = "vertical",
      scrollbarXClasses = "",
      scrollbarYClasses = "",
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Scroll_area$1($$renderer3, spread_props([
        { "data-slot": "scroll-area", class: cn("relative", className) },
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          },
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Scroll_area_viewport($$renderer4, {
              "data-slot": "scroll-area-viewport",
              class: "ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1",
              get ref() {
                return viewportRef;
              },
              set ref($$value) {
                viewportRef = $$value;
                $$settled = false;
              },
              children: ($$renderer5) => {
                children?.($$renderer5);
                $$renderer5.push(`<!---->`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            if (orientation === "vertical" || orientation === "both") {
              $$renderer4.push("<!--[-->");
              Scroll_area_scrollbar($$renderer4, { orientation: "vertical", class: scrollbarYClasses });
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--> `);
            if (orientation === "horizontal" || orientation === "both") {
              $$renderer4.push("<!--[-->");
              Scroll_area_scrollbar($$renderer4, { orientation: "horizontal", class: scrollbarXClasses });
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--> <!---->`);
            Scroll_area_corner($$renderer4, {});
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        }
      ]));
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref, viewportRef });
  });
}
function StarIcon($$renderer, $$props) {
  const { size = 24, class: className = "", animate = false } = $$props;
  $$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg"${attr("width", size)}${attr("height", size)} viewBox="0 0 32 32"${attr_class(`star-icon ${stringify(animate ? "star-icon-animate" : "")} ${stringify(className)}`)} aria-hidden="true"><title>Notebook star icon</title><g stroke="currentColor" stroke-width="1.5" fill="none"><rect x="5" y="5" width="22" height="22"></rect><rect x="8" y="8" width="16" height="16"></rect><line x1="5" y1="5" x2="8" y2="8"></line><line x1="27" y1="5" x2="24" y2="8"></line><line x1="27" y1="27" x2="24" y2="24"></line><line x1="5" y1="27" x2="8" y2="24"></line><g transform="rotate(45 16 16)"><rect x="5" y="5" width="22" height="22"></rect><rect x="8" y="8" width="16" height="16"></rect><line x1="5" y1="5" x2="8" y2="8"></line><line x1="27" y1="5" x2="24" y2="8"></line><line x1="27" y1="27" x2="24" y2="24"></line><line x1="5" y1="27" x2="8" y2="24"></line></g></g></svg>`);
}
function Sidebar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { onsearchopen, onfilteropen, hasActiveFilters = false } = $$props;
    const collection = useIntervals();
    const intervalsQuery = useLiveQuery(collection);
    let editingId = null;
    let editTitle = "";
    const intervals = intervalsQuery.data ?? [];
    const sortedIntervals = [...intervals].filter((i) => typeof i.id === "string" && i.id.length > 0).sort((a, b) => b.updatedAt - a.updatedAt);
    const activeId = page.params.id;
    function createInterval() {
      const id = crypto.randomUUID();
      const now = Date.now();
      collection.insert({
        id,
        title: "New Interval",
        description: { type: "doc", content: [] },
        status: "backlog",
        priority: "none",
        createdAt: now,
        updatedAt: now
      });
    }
    function saveRename(id) {
      if (editTitle.trim()) {
        collection.update(id, (draft) => {
          draft.title = editTitle.trim();
          draft.updatedAt = Date.now();
        });
      }
      editingId = null;
    }
    function handleKeydown(e, id) {
      if (e.key === "Enter") saveRename(id);
      if (e.key === "Escape") editingId = null;
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<aside class="hidden md:flex w-[var(--sidebar-width)] min-w-[var(--sidebar-width)] h-screen sticky top-0 flex-col bg-sidebar overflow-hidden"><div class="flex items-center justify-between px-3 py-3 border-b border-sidebar-border"><a href="/intervals" class="flex items-center gap-2 font-display text-base font-normal text-sidebar-foreground no-underline">`);
      StarIcon($$renderer3, { size: 18 });
      $$renderer3.push(`<!----> <span>Interval</span></a> <div class="flex items-center gap-1">`);
      Button($$renderer3, {
        variant: "ghost",
        size: "icon",
        onclick: onsearchopen,
        "aria-label": "Search intervals",
        children: ($$renderer4) => {
          Search($$renderer4, { class: "w-4 h-4" });
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      Button($$renderer3, {
        variant: "ghost",
        size: "icon",
        onclick: onfilteropen,
        "aria-label": "Filter intervals",
        class: hasActiveFilters ? "text-primary" : "",
        children: ($$renderer4) => {
          Sliders_horizontal($$renderer4, { class: "w-4 h-4" });
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----></div></div> <div class="p-2">`);
      Button($$renderer3, {
        variant: "outline",
        class: "w-full justify-start gap-2",
        onclick: createInterval,
        children: ($$renderer4) => {
          Plus($$renderer4, { class: "w-4 h-4" });
          $$renderer4.push(`<!----> <span>New Interval</span>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----></div> `);
      Scroll_area($$renderer3, {
        class: "flex-1",
        children: ($$renderer4) => {
          $$renderer4.push(`<nav class="p-1">`);
          if (intervalsQuery.isLoading) {
            $$renderer4.push("<!--[-->");
            $$renderer4.push(`<div class="space-y-2 p-2"><div class="h-8 w-full bg-muted animate-pulse rounded"></div> <div class="h-8 w-3/4 bg-muted animate-pulse rounded"></div> <div class="h-8 w-4/5 bg-muted animate-pulse rounded"></div></div>`);
          } else {
            $$renderer4.push("<!--[!-->");
            if (sortedIntervals.length === 0) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<div class="flex flex-col items-center justify-center py-8 px-3 text-muted-foreground text-center text-sm">`);
              StatusIcon($$renderer4, { status: "backlog", size: 24, class: "mb-2 opacity-30" });
              $$renderer4.push(`<!----> <p class="m-0">No intervals yet</p> <p class="m-0 text-xs opacity-60">Create your first interval</p></div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push(`<ul class="list-none m-0 p-0 flex flex-col"><!--[-->`);
              const each_array = ensure_array_like(sortedIntervals);
              for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                let interval = each_array[$$index];
                $$renderer4.push(`<li>`);
                if (editingId === interval.id) {
                  $$renderer4.push("<!--[-->");
                  $$renderer4.push(`<div class="flex items-center gap-2 px-3 py-2 bg-muted">`);
                  StatusIcon($$renderer4, { status: interval.status, size: 14, class: "shrink-0" });
                  $$renderer4.push(`<!----> `);
                  Input($$renderer4, {
                    type: "text",
                    onblur: () => saveRename(interval.id),
                    onkeydown: (e) => handleKeydown(e, interval.id),
                    class: "flex-1 h-6 text-sm p-1",
                    get value() {
                      return editTitle;
                    },
                    set value($$value) {
                      editTitle = $$value;
                      $$settled = false;
                    }
                  });
                  $$renderer4.push(`<!----></div>`);
                } else {
                  $$renderer4.push("<!--[!-->");
                  $$renderer4.push(`<a${attr("href", `/intervals/${stringify(interval.id)}`)}${attr_class(`group flex items-center gap-2 px-3 py-2 text-sm no-underline transition-colors ${stringify(activeId === interval.id ? "bg-muted text-foreground border-l-2 border-sidebar-accent" : "text-muted-foreground hover:bg-muted hover:text-foreground border-l-2 border-transparent")}`)}>`);
                  StatusIcon($$renderer4, { status: interval.status, size: 14, class: "shrink-0" });
                  $$renderer4.push(`<!----> <button type="button" class="flex-1 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap text-left bg-transparent border-none p-0 font-inherit text-inherit cursor-pointer">${escape_html(interval.title || "Untitled")}</button></a>`);
                }
                $$renderer4.push(`<!--]--></li>`);
              }
              $$renderer4.push(`<!--]--></ul>`);
            }
            $$renderer4.push(`<!--]-->`);
          }
          $$renderer4.push(`<!--]--></nav>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----></aside>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
function MobileActionBar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { onsearchopen, onfilteropen, hasActiveFilters = false } = $$props;
    const collection = useIntervals();
    function createInterval() {
      const id = crypto.randomUUID();
      const now = Date.now();
      collection.insert({
        id,
        title: "New Interval",
        description: { type: "doc", content: [] },
        status: "backlog",
        priority: "none",
        createdAt: now,
        updatedAt: now
      });
      goto();
    }
    $$renderer2.push(`<div class="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 md:hidden pb-[env(safe-area-inset-bottom)]"><div class="flex items-center gap-1 bg-card border border-border shadow-lg p-1">`);
    Button($$renderer2, {
      variant: "ghost",
      size: "icon",
      onclick: () => goto(),
      "aria-label": "Back to intervals",
      class: "h-10 w-10",
      children: ($$renderer3) => {
        Arrow_left($$renderer3, { class: "w-5 h-5" });
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> <div class="w-px h-6 bg-border"></div> `);
    Button($$renderer2, {
      variant: "ghost",
      size: "icon",
      onclick: onsearchopen,
      "aria-label": "Search intervals",
      class: "h-10 w-10",
      children: ($$renderer3) => {
        Search($$renderer3, { class: "w-5 h-5" });
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> <div class="w-px h-6 bg-border"></div> `);
    Button($$renderer2, {
      variant: "ghost",
      size: "icon",
      onclick: onfilteropen,
      "aria-label": "Filter intervals",
      class: cn("h-10 w-10", hasActiveFilters && "text-primary"),
      children: ($$renderer3) => {
        Sliders_horizontal($$renderer3, { class: "w-5 h-5" });
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> <div class="w-px h-6 bg-border"></div> `);
    Button($$renderer2, {
      variant: "ghost",
      size: "icon",
      onclick: createInterval,
      "aria-label": "New interval",
      class: "h-10 w-10",
      children: ($$renderer3) => {
        Plus($$renderer3, { class: "w-5 h-5" });
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div></div>`);
  });
}
function KeyboardShortcuts($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    useIntervals();
  });
}
function Dialog($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { open = false, $$slots, $$events, ...restProps } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Dialog$1($$renderer3, spread_props([
        restProps,
        {
          get open() {
            return open;
          },
          set open($$value) {
            open = $$value;
            $$settled = false;
          }
        }
      ]));
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { open });
  });
}
function Dialog_portal($$renderer, $$props) {
  let { $$slots, $$events, ...restProps } = $$props;
  $$renderer.push(`<!---->`);
  Portal($$renderer, spread_props([restProps]));
  $$renderer.push(`<!---->`);
}
function Dialog_title($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Dialog_title$1($$renderer3, spread_props([
        {
          "data-slot": "dialog-title",
          class: cn("text-lg leading-none font-semibold", className)
        },
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          }
        }
      ]));
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref });
  });
}
function Dialog_header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<div${attributes({
      "data-slot": "dialog-header",
      class: clsx(cn("flex flex-col gap-2 text-center sm:text-start", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}
function Dialog_overlay($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Dialog_overlay$1($$renderer3, spread_props([
        {
          "data-slot": "dialog-overlay",
          class: cn("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className)
        },
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          }
        }
      ]));
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref });
  });
}
function Dialog_content($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      portalProps,
      children,
      showCloseButton = true,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Dialog_portal($$renderer3, spread_props([
        portalProps,
        {
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Dialog_overlay($$renderer4, {});
            $$renderer4.push(`<!----> <!---->`);
            Dialog_content$1($$renderer4, spread_props([
              {
                "data-slot": "dialog-content",
                class: cn("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed start-[50%] top-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className)
              },
              restProps,
              {
                get ref() {
                  return ref;
                },
                set ref($$value) {
                  ref = $$value;
                  $$settled = false;
                },
                children: ($$renderer5) => {
                  children?.($$renderer5);
                  $$renderer5.push(`<!----> `);
                  if (showCloseButton) {
                    $$renderer5.push("<!--[-->");
                    $$renderer5.push(`<!---->`);
                    Dialog_close($$renderer5, {
                      class: "ring-offset-background focus:ring-ring absolute end-4 top-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                      children: ($$renderer6) => {
                        X($$renderer6, {});
                        $$renderer6.push(`<!----> <span class="sr-only">Close</span>`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push(`<!---->`);
                  } else {
                    $$renderer5.push("<!--[!-->");
                  }
                  $$renderer5.push(`<!--]-->`);
                },
                $$slots: { default: true }
              }
            ]));
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        }
      ]));
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref });
  });
}
function SearchPanel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { open = void 0, onclose } = $$props;
    const collection = useIntervals();
    const intervalsQuery = useLiveQuery(collection);
    let query = "";
    let selectedIndex = -1;
    let inputRef = null;
    const intervals = intervalsQuery.data ?? [];
    const results = () => {
      const sorted = [...intervals].sort((a, b) => b.updatedAt - a.updatedAt);
      if (!query.trim()) {
        return sorted.slice(0, 10);
      }
      const q = query.toLowerCase();
      return sorted.filter((i) => i.title?.toLowerCase().includes(q)).slice(0, 20);
    };
    function createInterval() {
      const id = crypto.randomUUID();
      const now = Date.now();
      collection.insert({
        id,
        title: "New Interval",
        description: { type: "doc", content: [] },
        status: "backlog",
        priority: "none",
        createdAt: now,
        updatedAt: now
      });
      goto();
      onclose();
    }
    function handleSelect(id) {
      goto();
      onclose();
    }
    function handleKeyDown(e) {
      const list = results();
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          selectedIndex = Math.min(selectedIndex + 1, list.length - 1);
          break;
        case "ArrowUp":
          e.preventDefault();
          selectedIndex = Math.max(selectedIndex - 1, -1);
          break;
        case "Enter":
          e.preventDefault();
          if (selectedIndex === -1) {
            createInterval();
          } else if (list[selectedIndex]) {
            handleSelect(list[selectedIndex].id);
          }
          break;
      }
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Dialog($$renderer3, {
        onOpenChange: (o) => !o && onclose(),
        get open() {
          return open;
        },
        set open($$value) {
          open = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Dialog_content($$renderer4, {
            class: "w-[85vw] max-w-[85vw] sm:max-w-[520px] h-auto max-h-[80vh] sm:max-h-[85vh] p-0 gap-0 rounded-none",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Dialog_header($$renderer5, {
                class: "sr-only",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Dialog_title($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->Search intervals`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <div class="flex items-center gap-3 px-4 py-3 border-b border-border">`);
              Search($$renderer5, { class: "w-4 h-4 text-muted-foreground shrink-0" });
              $$renderer5.push(`<!----> `);
              Input($$renderer5, {
                type: "text",
                onkeydown: handleKeyDown,
                placeholder: "Search intervals...",
                class: "border-0 p-0 h-auto text-sm focus-visible:ring-0 focus-visible:ring-offset-0",
                get ref() {
                  return inputRef;
                },
                set ref($$value) {
                  inputRef = $$value;
                  $$settled = false;
                },
                get value() {
                  return query;
                },
                set value($$value) {
                  query = $$value;
                  $$settled = false;
                }
              });
              $$renderer5.push(`<!----> <button type="button" class="sm:hidden text-sm text-muted-foreground hover:text-foreground">Cancel</button></div> `);
              Scroll_area($$renderer5, {
                class: "flex-1 sm:max-h-[400px]",
                children: ($$renderer6) => {
                  $$renderer6.push(`<div class="p-1"><button type="button"${attr_class(clsx(cn("w-full flex items-center gap-3 py-2.5 px-3 text-left cursor-pointer", "transition-colors hover:bg-muted hover:text-foreground border-l-2 border-transparent", selectedIndex === -1 && "bg-muted text-foreground border-l-2 border-sidebar-accent")))}>`);
                  Plus($$renderer6, { class: "w-4 h-4 shrink-0 text-primary" });
                  $$renderer6.push(`<!----> <span class="text-sm font-medium">New Interval</span> <span class="ml-auto text-xs text-muted-foreground">⌥N</span></button> `);
                  if (results().length > 0) {
                    $$renderer6.push("<!--[-->");
                    $$renderer6.push(`<div class="h-px bg-border my-1"></div>`);
                  } else {
                    $$renderer6.push("<!--[!-->");
                  }
                  $$renderer6.push(`<!--]--> `);
                  if (results().length === 0 && query.trim()) {
                    $$renderer6.push("<!--[-->");
                    $$renderer6.push(`<div class="py-6 text-center text-muted-foreground text-sm"><p>No intervals found for "${escape_html(query)}"</p></div>`);
                  } else {
                    $$renderer6.push("<!--[!-->");
                    $$renderer6.push(`<!--[-->`);
                    const each_array = ensure_array_like(results());
                    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
                      let interval = each_array[index];
                      $$renderer6.push(`<button type="button"${attr_class(clsx(cn("w-full flex items-center gap-3 py-2.5 px-3 text-left group cursor-pointer", "transition-colors hover:bg-muted hover:text-foreground border-l-2 border-transparent", index === selectedIndex && "bg-muted text-foreground border-l-2 border-sidebar-accent")))}>`);
                      StatusIcon($$renderer6, { status: interval.status, size: 14, class: "shrink-0" });
                      $$renderer6.push(`<!----> <div class="flex-1 min-w-0"><span class="block text-sm font-medium truncate">${escape_html(interval.title || "Untitled")}</span></div></button>`);
                    }
                    $$renderer6.push(`<!--]-->`);
                  }
                  $$renderer6.push(`<!--]--> `);
                  if (results().length === 0 && !query.trim()) {
                    $$renderer6.push("<!--[-->");
                    $$renderer6.push(`<div class="py-6 text-center text-muted-foreground text-sm"><p>No intervals yet</p> <p class="mt-1 text-xs">Create your first interval above</p></div>`);
                  } else {
                    $$renderer6.push("<!--[!-->");
                  }
                  $$renderer6.push(`<!--]--></div>`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <div class="hidden sm:flex items-center justify-center gap-4 px-4 py-2 border-t border-border text-xs text-muted-foreground"><span><kbd class="px-1.5 py-0.5 mx-0.5 font-mono text-[0.6875rem] bg-background border border-border rounded-sm">↑↓</kbd> navigate</span> <span><kbd class="px-1.5 py-0.5 mx-0.5 font-mono text-[0.6875rem] bg-background border border-border rounded-sm">↵</kbd> select</span> <span><kbd class="px-1.5 py-0.5 mx-0.5 font-mono text-[0.6875rem] bg-background border border-border rounded-sm">esc</kbd> close</span></div>`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { open });
  });
}
function FilterDialog($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      open = void 0,
      onclose,
      statusFilter,
      priorityFilter,
      onstatuschange,
      onprioritychange
    } = $$props;
    let selectedSection = "status";
    let selectedIndex = 0;
    const statusOptions = Object.values(Status);
    const priorityOptions = Object.values(Priority);
    const hasFilters = statusFilter !== null || priorityFilter !== null;
    function handleClearFilters() {
      onstatuschange(null);
      onprioritychange(null);
    }
    function handleKeyDown(e) {
      const currentOptions = selectedSection === "status" ? statusOptions : priorityOptions;
      const optionsCount = currentOptions.length + 1;
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          selectedIndex = Math.min(selectedIndex + 1, optionsCount - 1);
          break;
        case "ArrowUp":
          e.preventDefault();
          selectedIndex = Math.max(selectedIndex - 1, 0);
          break;
        case "Tab":
          e.preventDefault();
          selectedSection = selectedSection === "status" ? "priority" : "status";
          selectedIndex = 0;
          break;
        case "Enter":
          e.preventDefault();
          if (selectedSection === "status") {
            if (selectedIndex === 0) {
              onstatuschange(null);
            } else {
              onstatuschange(statusOptions[selectedIndex - 1]);
            }
          } else {
            if (selectedIndex === 0) {
              onprioritychange(null);
            } else {
              onprioritychange(priorityOptions[selectedIndex - 1]);
            }
          }
          break;
      }
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Dialog($$renderer3, {
        onOpenChange: (o) => !o && onclose(),
        get open() {
          return open;
        },
        set open($$value) {
          open = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Dialog_content($$renderer4, {
            class: "w-[85vw] max-w-[85vw] sm:max-w-[400px] h-auto max-h-[80vh] sm:max-h-[85vh] p-0 gap-0 rounded-none",
            onkeydown: handleKeyDown,
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Dialog_header($$renderer5, {
                class: "sr-only",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Dialog_title($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->Filter intervals`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <div class="flex items-center justify-between gap-3 px-4 py-3 border-b border-border"><div class="flex items-center gap-2">`);
              Sliders_horizontal($$renderer5, { class: "w-4 h-4 text-muted-foreground shrink-0" });
              $$renderer5.push(`<!----> <span class="text-sm font-medium">Filters</span></div> <div class="flex items-center gap-2">`);
              if (hasFilters) {
                $$renderer5.push("<!--[-->");
                Button($$renderer5, {
                  variant: "ghost",
                  size: "sm",
                  onclick: handleClearFilters,
                  class: "text-muted-foreground h-7 px-2",
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->Clear all`);
                  },
                  $$slots: { default: true }
                });
              } else {
                $$renderer5.push("<!--[!-->");
              }
              $$renderer5.push(`<!--]--> <button type="button" class="sm:hidden text-sm text-muted-foreground hover:text-foreground">Done</button></div></div> `);
              Scroll_area($$renderer5, {
                class: "flex-1 sm:max-h-[400px]",
                children: ($$renderer6) => {
                  $$renderer6.push(`<div class="p-1"><div class="mb-2"><div class="px-3 py-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</div> <button type="button"${attr_class(clsx(cn("w-full flex items-center gap-3 py-2 px-3 text-left cursor-pointer", "transition-colors hover:bg-muted hover:text-foreground border-l-2 border-transparent", selectedSection === "status" && selectedIndex === 0 && "bg-muted text-foreground border-l-2 border-sidebar-accent", statusFilter === null && !(selectedSection === "status" && selectedIndex === 0) && "text-primary")))}><span class="text-sm">All statuses</span> `);
                  if (statusFilter === null) {
                    $$renderer6.push("<!--[-->");
                    $$renderer6.push(`<span class="ml-auto">`);
                    X($$renderer6, { class: "w-3.5 h-3.5 text-muted-foreground" });
                    $$renderer6.push(`<!----></span>`);
                  } else {
                    $$renderer6.push("<!--[!-->");
                  }
                  $$renderer6.push(`<!--]--></button> <!--[-->`);
                  const each_array = ensure_array_like(statusOptions);
                  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
                    let status = each_array[index];
                    $$renderer6.push(`<button type="button"${attr_class(clsx(cn("w-full flex items-center gap-3 py-2 px-3 text-left cursor-pointer", "transition-colors hover:bg-muted hover:text-foreground border-l-2 border-transparent", selectedSection === "status" && selectedIndex === index + 1 && "bg-muted text-foreground border-l-2 border-sidebar-accent", statusFilter === status && !(selectedSection === "status" && selectedIndex === index + 1) && "text-primary")))}>`);
                    StatusIcon($$renderer6, { status, size: 14, class: "shrink-0" });
                    $$renderer6.push(`<!----> <span class="text-sm">${escape_html(StatusLabels[status])}</span> `);
                    if (statusFilter === status) {
                      $$renderer6.push("<!--[-->");
                      $$renderer6.push(`<span class="ml-auto">`);
                      X($$renderer6, { class: "w-3.5 h-3.5 text-muted-foreground" });
                      $$renderer6.push(`<!----></span>`);
                    } else {
                      $$renderer6.push("<!--[!-->");
                    }
                    $$renderer6.push(`<!--]--></button>`);
                  }
                  $$renderer6.push(`<!--]--></div> <div class="h-px bg-border my-2"></div> <div><div class="px-3 py-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider">Priority</div> <button type="button"${attr_class(clsx(cn("w-full flex items-center gap-3 py-2 px-3 text-left cursor-pointer", "transition-colors hover:bg-muted hover:text-foreground border-l-2 border-transparent", selectedSection === "priority" && selectedIndex === 0 && "bg-muted text-foreground border-l-2 border-sidebar-accent", priorityFilter === null && !(selectedSection === "priority" && selectedIndex === 0) && "text-primary")))}><span class="text-sm">All priorities</span> `);
                  if (priorityFilter === null) {
                    $$renderer6.push("<!--[-->");
                    $$renderer6.push(`<span class="ml-auto">`);
                    X($$renderer6, { class: "w-3.5 h-3.5 text-muted-foreground" });
                    $$renderer6.push(`<!----></span>`);
                  } else {
                    $$renderer6.push("<!--[!-->");
                  }
                  $$renderer6.push(`<!--]--></button> <!--[-->`);
                  const each_array_1 = ensure_array_like(priorityOptions);
                  for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
                    let priority = each_array_1[index];
                    $$renderer6.push(`<button type="button"${attr_class(clsx(cn("w-full flex items-center gap-3 py-2 px-3 text-left cursor-pointer", "transition-colors hover:bg-muted hover:text-foreground border-l-2 border-transparent", selectedSection === "priority" && selectedIndex === index + 1 && "bg-muted text-foreground border-l-2 border-sidebar-accent", priorityFilter === priority && !(selectedSection === "priority" && selectedIndex === index + 1) && "text-primary")))}>`);
                    PriorityIcon($$renderer6, { priority, size: 14, class: "shrink-0" });
                    $$renderer6.push(`<!----> <span class="text-sm">${escape_html(PriorityLabels[priority])}</span> `);
                    if (priorityFilter === priority) {
                      $$renderer6.push("<!--[-->");
                      $$renderer6.push(`<span class="ml-auto">`);
                      X($$renderer6, { class: "w-3.5 h-3.5 text-muted-foreground" });
                      $$renderer6.push(`<!----></span>`);
                    } else {
                      $$renderer6.push("<!--[!-->");
                    }
                    $$renderer6.push(`<!--]--></button>`);
                  }
                  $$renderer6.push(`<!--]--></div></div>`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <div class="hidden sm:flex items-center justify-center gap-4 px-4 py-2 border-t border-border text-xs text-muted-foreground"><span><kbd class="px-1.5 py-0.5 mx-0.5 font-mono text-[0.6875rem] bg-background border border-border rounded-sm">↑↓</kbd> navigate</span> <span><kbd class="px-1.5 py-0.5 mx-0.5 font-mono text-[0.6875rem] bg-background border border-border rounded-sm">tab</kbd> switch section</span> <span><kbd class="px-1.5 py-0.5 mx-0.5 font-mono text-[0.6875rem] bg-background border border-border rounded-sm">esc</kbd> close</span></div>`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { open });
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children } = $$props;
    let searchOpen = false;
    let filterOpen = false;
    let statusFilter = null;
    let priorityFilter = null;
    const hasActiveFilters = statusFilter !== null || priorityFilter !== null;
    setFilterContext({
      get statusFilter() {
        return statusFilter;
      },
      get priorityFilter() {
        return priorityFilter;
      }
    });
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="app-layout">`);
      Sidebar($$renderer3, {
        onsearchopen: () => searchOpen = true,
        onfilteropen: () => filterOpen = true,
        hasActiveFilters
      });
      $$renderer3.push(`<!----> <main class="main-content">`);
      children($$renderer3);
      $$renderer3.push(`<!----></main> `);
      KeyboardShortcuts($$renderer3);
      $$renderer3.push(`<!----> `);
      SearchPanel($$renderer3, {
        onclose: () => searchOpen = false,
        get open() {
          return searchOpen;
        },
        set open($$value) {
          searchOpen = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      FilterDialog($$renderer3, {
        onclose: () => filterOpen = false,
        statusFilter,
        priorityFilter,
        onstatuschange: (s) => statusFilter = s,
        onprioritychange: (p) => priorityFilter = p,
        get open() {
          return filterOpen;
        },
        set open($$value) {
          filterOpen = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      MobileActionBar($$renderer3, {
        onsearchopen: () => searchOpen = true,
        onfilteropen: () => filterOpen = true,
        hasActiveFilters
      });
      $$renderer3.push(`<!----></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
export {
  _layout as default
};
