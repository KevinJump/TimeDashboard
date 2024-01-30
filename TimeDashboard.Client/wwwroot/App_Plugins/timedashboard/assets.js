const a = [
  {
    type: "dashboard",
    name: "timedashboard",
    alias: "timedashboard.dashboard",
    elementName: "timedashboard-dashboard",
    js: () => import("./dashboard.element-WhpPzXjV.js"),
    weight: -10,
    meta: {
      label: "TimeDashboard",
      pathname: "timedashboard"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: "Umb.Section.Content"
      }
    ]
  }
], e = [...a], o = [
  {
    type: "globalContext",
    alias: "time.context",
    name: "Time context",
    js: () => import("./time.context-2WucrG8V.js")
  }
], s = [...o], i = (n, t) => {
  t.registerMany([
    ...s,
    ...e
  ]);
};
export {
  i as onInit
};
//# sourceMappingURL=assets.js.map
