<template>
  <div class="k-dropdown-container">
    <div class="k-dropdown-sub-container">
      <div class="k-dropdown-outer" @click="toggleShowItems">
        <div class="k-dropdown" :class="{ 'k-dropdown-disable': disabled }">
          <div class="k-dropdown-selected">
            <span class="k-dropdown-selected-name">
              <span class="k-dropdown-selected-label">{{ selected }}</span>
              <span class="icon-arrow-down">
                <svg>
                  <path :d="mdiChevronDown" />
                </svg>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div :style="[displayStyle]" class="k-list-outer">
        <k-item
          v-for="(item, i) in items"
          :key="i"
          :selected="value === item.value"
          :label="item.label"
          :value="item.value"
          @click="onClickItem"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mdiChevronDown } from '@mdi/js';
import KItem from './KItem.vue';

export interface Item {
  label: string;
  value: string | number | null;
}
@Component({
  components: {
    KItem
  }
})
export default class KDropdown extends Vue {
  @Prop({ default: () => [] }) items!: Array<Item>;
  @Prop({ default: null }) value?: string;
  @Prop({ default: false }) disabled?: boolean;

  mdiChevronDown = mdiChevronDown;
  visibleItems = false;

  get selected() {
    let index = -1;
    this.items &&
      this.items.forEach((item: Item, i: number) => {
        if (item.value === this.value) {
          index = i;
        }
      });

    if (index === -1) {
      return '';
    }
    return this.items[index].label;
  }

  get displayStyle() {
    return this.visibleItems && !this.disabled
      ? { display: 'block' }
      : { display: 'none' };
  }

  toggleShowItems() {
    this.visibleItems = !this.visibleItems;
  }

  onClickItem(value: Item['value']) {
    this.$emit('input', value);
    this.visibleItems = false;
  }
}
</script>

<style scoped>
.k-dropdown-container,
.k-dropdown-sub-container,
.k-dropdown-outer {
  display: inline-block;
  height: 40px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.k-dropdown {
  position: relative;
  display: inline-block;
  overflow: hidden;
  box-sizing: border-box;
  border: 1px solid #e3e7e8;
  background-color: #f7f9fa;
  box-shadow: 1px 1px 1px #fff inset;
  color: #3498db;
  text-overflow: ellipsis;
}
.k-dropdown:hover {
  background-color: #f4f7f8;
  cursor: pointer;
}
.k-dropdown.k-dropdown-disable,
.k-dropdown.k-dropdown-disable:hover {
  cursor: not-allowed;
  border: none;
  background-color: #dbdcdd;
}
.k-dropdown.k-dropdown-disable .k-dropdown-selected-name {
  color: #888;
}
.k-dropdown-selected {
  width: 139px;
  height: 38px;
  padding-right: 39px;
}
.k-dropdown-selected-name {
  color: #3498db;
  font-size: 14px;
  line-height: 38px;
}
.k-dropdown-selected-label {
  padding-left: 24px;
  width: 114px;
  height: 38px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.k-dropdown-selected-name .icon-arrow-down {
  position: absolute;
}
.k-dropdown-selected-name .icon-arrow-down svg {
  width: 24px;
  height: 24px;
  padding: 0 7px;
  vertical-align: middle;
}
.k-dropdown-selected-name .icon-arrow-down svg path {
  fill: #3498db;
}
.k-dropdown.k-dropdown-disable
  .k-dropdown-selected-name
  .icon-arrow-down
  svg
  path {
  fill: #888;
}
.k-dropdown-sub-container .k-list-outer {
  position: absolute;
  overflow-y: auto;
  max-height: 400px;
  min-width: 280px;
  z-index: 2000;
  padding: 8px 0;
}
.k-dropdown-sub-container .k-list-outer .k-list-item {
  padding: 8px 16px 8px 25px;
}
.k-dropdown-sub-container .k-list-outer .k-list-item-selected {
  padding: 8px 16px 8px 8px;
}

.k-list-outer {
  margin-top: -6px;
  padding: 12px 0 0 0;
  border: 1px solid #e3e7e8;
  background-color: #fff;
  box-shadow: 1px 1px 12px #f5f5f5 inset, -1px -1px 12px #f5f5f5 inset;
  line-height: 1;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
