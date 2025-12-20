import { n as ensure_array_like } from "../../../../chunks/index2.js";
import { p as page } from "../../../../chunks/index3.js";
import { h as useIntervals, k as StatusIcon, l as StatusLabels, o as PriorityIcon, p as PriorityLabels, q as Status, r as Priority, B as onDestroy, j as useLiveQuery } from "../../../../chunks/PriorityIcon.js";
import { D as Dropdown_menu, a as Dropdown_menu_trigger, b as Dropdown_menu_content, c as Dropdown_menu_radio_group, d as Dropdown_menu_radio_item } from "../../../../chunks/dropdown-menu-trigger.js";
import "clsx";
import { e as escape_html } from "../../../../chunks/context.js";
function IntervalProperties($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { interval } = $$props;
    const collection = useIntervals();
    const statusOptions = Object.values(Status);
    const priorityOptions = Object.values(Priority);
    const createdDate = new Date(interval.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
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
    $$renderer2.push(`<div class="p-4 space-y-4"><h3 class="font-display text-sm font-normal text-muted-foreground uppercase tracking-wide">Properties</h3> <div class="space-y-1"><span class="text-xs text-muted-foreground">Status</span> <!---->`);
    Dropdown_menu($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->`);
        Dropdown_menu_trigger($$renderer3, {
          class: "flex items-center gap-2 w-full px-2 py-1.5 text-sm text-left rounded-sm hover:bg-muted transition-colors",
          children: ($$renderer4) => {
            StatusIcon($$renderer4, { status: interval.status, size: 14 });
            $$renderer4.push(`<!----> <span>${escape_html(StatusLabels[interval.status])}</span>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> <!---->`);
        Dropdown_menu_content($$renderer3, {
          align: "start",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Dropdown_menu_radio_group($$renderer4, {
              value: interval.status,
              onValueChange: handleStatusChange,
              children: ($$renderer5) => {
                $$renderer5.push(`<!--[-->`);
                const each_array = ensure_array_like(statusOptions);
                for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                  let status = each_array[$$index];
                  $$renderer5.push(`<!---->`);
                  Dropdown_menu_radio_item($$renderer5, {
                    value: status,
                    children: ($$renderer6) => {
                      StatusIcon($$renderer6, { status, size: 14 });
                      $$renderer6.push(`<!----> <span class="ml-2">${escape_html(StatusLabels[status])}</span>`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!---->`);
                }
                $$renderer5.push(`<!--]-->`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div> <div class="space-y-1"><span class="text-xs text-muted-foreground">Priority</span> <!---->`);
    Dropdown_menu($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->`);
        Dropdown_menu_trigger($$renderer3, {
          class: "flex items-center gap-2 w-full px-2 py-1.5 text-sm text-left rounded-sm hover:bg-muted transition-colors",
          children: ($$renderer4) => {
            PriorityIcon($$renderer4, { priority: interval.priority, size: 14 });
            $$renderer4.push(`<!----> <span>${escape_html(PriorityLabels[interval.priority])}</span>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> <!---->`);
        Dropdown_menu_content($$renderer3, {
          align: "start",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Dropdown_menu_radio_group($$renderer4, {
              value: interval.priority,
              onValueChange: handlePriorityChange,
              children: ($$renderer5) => {
                $$renderer5.push(`<!--[-->`);
                const each_array_1 = ensure_array_like(priorityOptions);
                for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                  let priority = each_array_1[$$index_1];
                  $$renderer5.push(`<!---->`);
                  Dropdown_menu_radio_item($$renderer5, {
                    value: priority,
                    children: ($$renderer6) => {
                      PriorityIcon($$renderer6, { priority, size: 14 });
                      $$renderer6.push(`<!----> <span class="ml-2">${escape_html(PriorityLabels[priority])}</span>`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!---->`);
                }
                $$renderer5.push(`<!--]-->`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div> <div class="space-y-1"><span class="text-xs text-muted-foreground">Created</span> <span class="block text-sm text-foreground">${escape_html(createdDate)}</span></div></div>`);
  });
}
function IntervalEditor($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { interval } = $$props;
    useIntervals();
    interval.title;
    onDestroy(() => {
    });
    {
      $$renderer2.push("<!--[!-->");
      {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="editor-loading" aria-live="polite" aria-busy="true"><div class="editor-loading-spinner"></div> <p>Loading editor...</p></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const collection = useIntervals();
    const id = page.params.id;
    const intervalsQuery = useLiveQuery(collection);
    const interval = (intervalsQuery.data ?? []).find((i) => i.id === id) ?? null;
    const statusOptions = Object.values(Status);
    const priorityOptions = Object.values(Priority);
    function handleStatusChange(newStatus) {
      if (interval) {
        collection.update(interval.id, (draft) => {
          draft.status = newStatus;
          draft.updatedAt = Date.now();
        });
      }
    }
    function handlePriorityChange(newPriority) {
      if (interval) {
        collection.update(interval.id, (draft) => {
          draft.priority = newPriority;
          draft.updatedAt = Date.now();
        });
      }
    }
    if (intervalsQuery.isLoading) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex-1 flex items-center justify-center"><div class="editor-loading" aria-live="polite" aria-busy="true"><div class="editor-loading-spinner"></div> <p>Loading...</p></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (!interval) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="flex-1 flex items-center justify-center"><div class="text-center text-muted-foreground"><p>Interval not found</p></div></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<div class="flex-1 flex overflow-hidden"><div class="flex-1 overflow-auto"><div class="flex items-center gap-2 px-4 py-3 border-b border-border lg:hidden"><!---->`);
        Dropdown_menu($$renderer2, {
          children: ($$renderer3) => {
            $$renderer3.push(`<!---->`);
            Dropdown_menu_trigger($$renderer3, {
              class: "flex items-center gap-2 px-2 py-1.5 text-sm rounded-sm hover:bg-muted transition-colors",
              children: ($$renderer4) => {
                StatusIcon($$renderer4, { status: interval.status, size: 14 });
                $$renderer4.push(`<!----> <span>${escape_html(StatusLabels[interval.status])}</span>`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!----> <!---->`);
            Dropdown_menu_content($$renderer3, {
              align: "start",
              children: ($$renderer4) => {
                $$renderer4.push(`<!---->`);
                Dropdown_menu_radio_group($$renderer4, {
                  value: interval.status,
                  onValueChange: handleStatusChange,
                  children: ($$renderer5) => {
                    $$renderer5.push(`<!--[-->`);
                    const each_array = ensure_array_like(statusOptions);
                    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                      let status = each_array[$$index];
                      $$renderer5.push(`<!---->`);
                      Dropdown_menu_radio_item($$renderer5, {
                        value: status,
                        children: ($$renderer6) => {
                          StatusIcon($$renderer6, { status, size: 14 });
                          $$renderer6.push(`<!----> <span class="ml-2">${escape_html(StatusLabels[status])}</span>`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer5.push(`<!---->`);
                    }
                    $$renderer5.push(`<!--]-->`);
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!---->`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer2.push(`<!----> <!---->`);
        Dropdown_menu($$renderer2, {
          children: ($$renderer3) => {
            $$renderer3.push(`<!---->`);
            Dropdown_menu_trigger($$renderer3, {
              class: "flex items-center gap-2 px-2 py-1.5 text-sm rounded-sm hover:bg-muted transition-colors",
              children: ($$renderer4) => {
                PriorityIcon($$renderer4, { priority: interval.priority, size: 14 });
                $$renderer4.push(`<!----> <span>${escape_html(PriorityLabels[interval.priority])}</span>`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!----> <!---->`);
            Dropdown_menu_content($$renderer3, {
              align: "start",
              children: ($$renderer4) => {
                $$renderer4.push(`<!---->`);
                Dropdown_menu_radio_group($$renderer4, {
                  value: interval.priority,
                  onValueChange: handlePriorityChange,
                  children: ($$renderer5) => {
                    $$renderer5.push(`<!--[-->`);
                    const each_array_1 = ensure_array_like(priorityOptions);
                    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                      let priority = each_array_1[$$index_1];
                      $$renderer5.push(`<!---->`);
                      Dropdown_menu_radio_item($$renderer5, {
                        value: priority,
                        children: ($$renderer6) => {
                          PriorityIcon($$renderer6, { priority, size: 14 });
                          $$renderer6.push(`<!----> <span class="ml-2">${escape_html(PriorityLabels[priority])}</span>`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer5.push(`<!---->`);
                    }
                    $$renderer5.push(`<!--]-->`);
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!---->`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer2.push(`<!----></div> `);
        if (id) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<!---->`);
          {
            IntervalEditor($$renderer2, { interval });
          }
          $$renderer2.push(`<!---->`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div> <aside class="hidden lg:block w-64 shrink-0 border-l border-border overflow-auto bg-card">`);
        IntervalProperties($$renderer2, { interval });
        $$renderer2.push(`<!----></aside></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  _page as default
};
