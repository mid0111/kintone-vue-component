export function getSlot(vm, name = 'default', data, optional) {
  if (vm.$scopedSlots[name]) {
    return vm.$scopedSlots[name];
  } else if (vm.$slots[name] && (!data || optional)) {
    return vm.$slots[name];
  }
  return undefined;
}
