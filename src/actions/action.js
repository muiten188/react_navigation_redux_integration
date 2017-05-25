// router action
export function pushAction(route) {
    debugger;
  return {
    type:"Push",
    route
  }
}
export function popAction() {
  return {
    type:"Pop"
  }
}