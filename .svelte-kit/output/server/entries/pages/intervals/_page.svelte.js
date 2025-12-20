import { s as spread_props, j as bind_props, p as props_id, f as attributes, g as clsx, n as ensure_array_like } from "../../../chunks/index2.js";
import { D as DialogRootState, e as DialogActionState, A as AlertDialogCancelState, b as DialogContentState, f as DialogDescriptionState, c as Dialog_title, g as buttonVariants, d as Dialog_overlay, B as Button, h as getFilterContext } from "../../../chunks/filters.svelte.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import { e as escape_html } from "../../../chunks/context.js";
import "clsx";
import "@sveltejs/kit/internal/server";
import "../../../chunks/state.svelte.js";
import { I as Icon, n as noop, b as boxWith, a as createId, m as mergeProps, F as Focus_scope, E as Escape_layer, D as Dismissible_layer, T as Text_selection_layer, S as Scroll_lock, t as afterSleep, P as Portal, c as cn, h as useIntervals, k as StatusIcon, o as PriorityIcon, q as Status, r as Priority, l as StatusLabels, p as PriorityLabels, j as useLiveQuery } from "../../../chunks/PriorityIcon.js";
import { D as Dropdown_menu, a as Dropdown_menu_trigger, b as Dropdown_menu_content, c as Dropdown_menu_radio_group, d as Dropdown_menu_radio_item } from "../../../chunks/dropdown-menu-trigger.js";
import { prose } from "@trestleinc/replicate/client";
function Trash_2($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["path", { "d": "M10 11v6" }],
      ["path", { "d": "M14 11v6" }],
      ["path", { "d": "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }],
      ["path", { "d": "M3 6h18" }],
      ["path", { "d": "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "trash-2" },
      /**
       * @component @name Trash2
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAgMTF2NiIgLz4KICA8cGF0aCBkPSJNMTQgMTF2NiIgLz4KICA8cGF0aCBkPSJNMTkgNnYxNGEyIDIgMCAwIDEtMiAySDdhMiAyIDAgMCAxLTItMlY2IiAvPgogIDxwYXRoIGQ9Ik0zIDZoMTgiIC8+CiAgPHBhdGggZD0iTTggNlY0YTIgMiAwIDAgMSAyLTJoNGEyIDIgMCAwIDEgMiAydjIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/trash-2
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
function Alert_dialog$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      open = false,
      onOpenChange = noop,
      onOpenChangeComplete = noop,
      children
    } = $$props;
    DialogRootState.create({
      variant: boxWith(() => "alert-dialog"),
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
function Alert_dialog_action$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      children,
      child,
      id = createId(uid),
      ref = null,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const actionState = DialogActionState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v)
    });
    const mergedProps = mergeProps(restProps, actionState.props);
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
function Alert_dialog_cancel$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      ref = null,
      children,
      child,
      disabled = false,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const cancelState = AlertDialogCancelState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v),
      disabled: boxWith(() => Boolean(disabled))
    });
    const mergedProps = mergeProps(restProps, cancelState.props);
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
function Alert_dialog_content$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      children,
      child,
      ref = null,
      forceMount = false,
      interactOutsideBehavior = "ignore",
      onCloseAutoFocus = noop,
      onEscapeKeydown = noop,
      onOpenAutoFocus = noop,
      onInteractOutside = noop,
      preventScroll = true,
      trapFocus = true,
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
                    interactOutsideBehavior,
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
          onCloseAutoFocus,
          onOpenAutoFocus: (e) => {
            onOpenAutoFocus(e);
            if (e.defaultPrevented) return;
            e.preventDefault();
            afterSleep(0, () => contentState.opts.ref.current?.focus());
          },
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
function Dialog_description($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      children,
      child,
      ref = null,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const descriptionState = DialogDescriptionState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v)
    });
    const mergedProps = mergeProps(restProps, descriptionState.props);
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
function Alert_dialog($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { open = false, $$slots, $$events, ...restProps } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Alert_dialog$1($$renderer3, spread_props([
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
function Alert_dialog_portal($$renderer, $$props) {
  let { $$slots, $$events, ...restProps } = $$props;
  $$renderer.push(`<!---->`);
  Portal($$renderer, spread_props([restProps]));
  $$renderer.push(`<!---->`);
}
function Alert_dialog_title($$renderer, $$props) {
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
      Dialog_title($$renderer3, spread_props([
        {
          "data-slot": "alert-dialog-title",
          class: cn("text-lg font-semibold", className)
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
function Alert_dialog_action($$renderer, $$props) {
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
      Alert_dialog_action$1($$renderer3, spread_props([
        {
          "data-slot": "alert-dialog-action",
          class: cn(buttonVariants(), className)
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
function Alert_dialog_cancel($$renderer, $$props) {
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
      Alert_dialog_cancel$1($$renderer3, spread_props([
        {
          "data-slot": "alert-dialog-cancel",
          class: cn(buttonVariants({ variant: "outline" }), className)
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
function Alert_dialog_footer($$renderer, $$props) {
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
      "data-slot": "alert-dialog-footer",
      class: clsx(cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}
function Alert_dialog_header($$renderer, $$props) {
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
      "data-slot": "alert-dialog-header",
      class: clsx(cn("flex flex-col gap-2 text-center sm:text-start", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}
function Alert_dialog_overlay($$renderer, $$props) {
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
      Dialog_overlay($$renderer3, spread_props([
        {
          "data-slot": "alert-dialog-overlay",
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
function Alert_dialog_content($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      portalProps,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Alert_dialog_portal($$renderer3, spread_props([
        portalProps,
        {
          children: ($$renderer4) => {
            Alert_dialog_overlay($$renderer4, {});
            $$renderer4.push(`<!----> <!---->`);
            Alert_dialog_content$1($$renderer4, spread_props([
              {
                "data-slot": "alert-dialog-content",
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
                }
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
function Alert_dialog_description($$renderer, $$props) {
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
      Dialog_description($$renderer3, spread_props([
        {
          "data-slot": "alert-dialog-description",
          class: cn("text-muted-foreground text-sm", className)
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
function IntervalRow($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { interval } = $$props;
    const collection = useIntervals();
    let showDeleteConfirm = false;
    const statusOptions = Object.values(Status);
    const priorityOptions = Object.values(Priority);
    const preview = () => {
      if (!interval.description) return "";
      try {
        const text = prose.extract(interval.description);
        return text.slice(0, 100) + (text.length > 100 ? "..." : "");
      } catch {
        return "";
      }
    };
    function handleStatusChange(newStatus) {
      collection.update(interval.id, (draft) => {
        draft.status = newStatus;
        draft.updatedAt = Date.now();
      });
    }
    function handlePriorityChange(newPriority) {
      collection.update(interval.id, (draft) => {
        draft.priority = newPriority;
        draft.updatedAt = Date.now();
      });
    }
    function handleDeleteClick(e) {
      e.preventDefault();
      e.stopPropagation();
      showDeleteConfirm = true;
    }
    function handleConfirmDelete() {
      collection.delete(interval.id);
      showDeleteConfirm = false;
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="group flex items-center gap-3 px-6 py-3 border-b border-border transition-colors hover:bg-muted"><!---->`);
      Dropdown_menu($$renderer3, {
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Dropdown_menu_trigger($$renderer4, {
            class: "flex items-center rounded-sm hover:bg-muted transition-colors shrink-0",
            children: ($$renderer5) => {
              StatusIcon($$renderer5, { status: interval.status, size: 14 });
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> <!---->`);
          Dropdown_menu_content($$renderer4, {
            align: "start",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Dropdown_menu_radio_group($$renderer5, {
                value: interval.status,
                onValueChange: handleStatusChange,
                children: ($$renderer6) => {
                  $$renderer6.push(`<!--[-->`);
                  const each_array = ensure_array_like(statusOptions);
                  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                    let status = each_array[$$index];
                    $$renderer6.push(`<!---->`);
                    Dropdown_menu_radio_item($$renderer6, {
                      value: status,
                      children: ($$renderer7) => {
                        StatusIcon($$renderer7, { status, size: 14 });
                        $$renderer7.push(`<!----> <span class="ml-2">${escape_html(StatusLabels[status])}</span>`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer6.push(`<!---->`);
                  }
                  $$renderer6.push(`<!--]-->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> <button type="button" class="flex-1 min-w-0 flex flex-col gap-0.5 text-left cursor-pointer bg-transparent border-none p-0"><span class="text-sm font-medium truncate">${escape_html(interval.title || "Untitled")}</span> `);
      if (preview()) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<span class="text-xs text-muted-foreground truncate">${escape_html(preview())}</span>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--></button> <!---->`);
      Dropdown_menu($$renderer3, {
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Dropdown_menu_trigger($$renderer4, {
            class: "flex items-center rounded-sm hover:bg-muted transition-colors shrink-0",
            children: ($$renderer5) => {
              PriorityIcon($$renderer5, { priority: interval.priority, size: 14 });
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> <!---->`);
          Dropdown_menu_content($$renderer4, {
            align: "end",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Dropdown_menu_radio_group($$renderer5, {
                value: interval.priority,
                onValueChange: handlePriorityChange,
                children: ($$renderer6) => {
                  $$renderer6.push(`<!--[-->`);
                  const each_array_1 = ensure_array_like(priorityOptions);
                  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                    let priority = each_array_1[$$index_1];
                    $$renderer6.push(`<!---->`);
                    Dropdown_menu_radio_item($$renderer6, {
                      value: priority,
                      children: ($$renderer7) => {
                        PriorityIcon($$renderer7, { priority, size: 14 });
                        $$renderer7.push(`<!----> <span class="ml-2">${escape_html(PriorityLabels[priority])}</span>`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer6.push(`<!---->`);
                  }
                  $$renderer6.push(`<!--]-->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      Button($$renderer3, {
        variant: "ghost",
        size: "icon-xs",
        onclick: handleDeleteClick,
        class: "opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive hover:bg-destructive/10 shrink-0",
        title: "Delete interval",
        children: ($$renderer4) => {
          Trash_2($$renderer4, { class: "w-3.5 h-3.5" });
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----></div> <!---->`);
      Alert_dialog($$renderer3, {
        get open() {
          return showDeleteConfirm;
        },
        set open($$value) {
          showDeleteConfirm = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Alert_dialog_content($$renderer4, {
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Alert_dialog_header($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Alert_dialog_title($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->Delete interval?`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Alert_dialog_description($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->"${escape_html(interval.title || "Untitled")}" will be permanently deleted. This action cannot be undone.`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!---->`);
              Alert_dialog_footer($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Alert_dialog_cancel($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->Cancel`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Alert_dialog_action($$renderer6, {
                    onclick: handleConfirmDelete,
                    class: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->Delete`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!---->`);
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
  });
}
function Skeleton($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<div${attributes({
      "data-slot": "skeleton",
      class: clsx(cn("bg-accent animate-pulse rounded-md", className)),
      ...restProps
    })}></div>`);
    bind_props($$props, { ref });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const collection = useIntervals();
    const intervalsQuery = useLiveQuery(collection);
    const filters = getFilterContext();
    const intervals = intervalsQuery.data ?? [];
    const filteredIntervals = () => {
      let result = [...intervals];
      if (filters.statusFilter) {
        result = result.filter((interval) => interval.status === filters.statusFilter);
      }
      if (filters.priorityFilter) {
        result = result.filter((interval) => interval.priority === filters.priorityFilter);
      }
      result.sort((a, b) => b.updatedAt - a.updatedAt);
      return result;
    };
    $$renderer2.push(`<div class="flex-1 flex flex-col min-h-0">`);
    if (intervalsQuery.isLoading) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex flex-col"><!--[-->`);
      const each_array = ensure_array_like(Array(5));
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        each_array[i];
        $$renderer2.push(`<div class="flex items-center gap-3 px-6 py-3">`);
        Skeleton($$renderer2, { class: "w-5 h-5 rounded-full" });
        $$renderer2.push(`<!----> `);
        Skeleton($$renderer2, { class: "h-4 flex-1" });
        $$renderer2.push(`<!----> `);
        Skeleton($$renderer2, { class: "h-4 w-16" });
        $$renderer2.push(`<!----></div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (filteredIntervals().length === 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="flex flex-col items-center justify-center py-16 text-muted-foreground text-center">`);
        if (intervals.length === 0) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="m-0">No intervals yet</p> <p class="text-xs opacity-60 mt-1">Press <kbd class="inline-block px-1.5 py-0.5 mx-0.5 font-mono text-[0.6875rem] bg-background border border-border rounded-sm">⌥</kbd> <kbd class="inline-block px-1.5 py-0.5 mx-0.5 font-mono text-[0.6875rem] bg-background border border-border rounded-sm">N</kbd> to create your first interval</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<p class="m-0">No intervals match your filters</p>`);
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<div class="flex-1 overflow-auto"><div class="flex flex-col"><!--[-->`);
        const each_array_1 = ensure_array_like(filteredIntervals());
        for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
          let interval = each_array_1[$$index_1];
          IntervalRow($$renderer2, { interval });
        }
        $$renderer2.push(`<!--]--></div></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
export {
  _page as default
};
