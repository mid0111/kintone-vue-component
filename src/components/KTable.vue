<template>
  <table class="k-table" :style="tableStyle">
    <thead class="k-table-thead">
      <tr class="k-table-tr">
        <slot name="header" v-if="getSlot('header')"></slot>
        <th
          v-else
          v-for="(header, index) in headers"
          :key="`header-${index}`"
          class="k-table-th"
          :width="header.width"
        >
          <div v-if="header" class="k-header-label">{{ header.label }}</div>
        </th>
      </tr>
    </thead>

    <tbody class="k-table-tbody">
      <tr
        v-for="(item, rowIndex) in items"
        :key="`row-${rowIndex}`"
        class="k-table-tr"
      >
        <slot v-if="getSlot('default')" :item="item"></slot>
        <td
          class="k-table-td"
          v-else
          v-for="(header, headerIndex) in headers"
          :key="`row-header-${headerIndex}`"
        >
          {{ item[header.name] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { getSlot } from '../util/helpers';

export default {
  props: {
    headers: {
      type: Array,
      default: () => [],
      required: false
    },
    items: {
      type: Array,
      default: () => [],
      required: false
    },
    visible: {
      type: Boolean,
      default: true,
      required: false
    }
  },

  computed: {
    tableStyle() {
      return [
        {
          display: this.visible ? 'table' : 'none'
        }
      ];
    }
  },

  methods: {
    getSlot(name) {
      return getSlot(this, name);
    }
  }
};
</script>

<style lang="css" scoped>
.k-table {
  display: table;
  font-size: 14px;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}

.k-table thead {
  display: table-header-group;
}

.k-table tr {
  display: table-row;
}

.k-table th,
.k-table td {
  display: table-cell;
  text-align: left;
}

.k-table tr:nth-child(2n) {
  background-color: #f5f5f5;
}

.k-table tr {
  border-color: #e3e7e8;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
}
.k-table tr:first-child {
  border-top-width: 1px;
}

.k-table th {
  border-color: #e3e7e8;
  border-width: 0;
  border-right-width: 1px;
  border-style: solid;
  padding: 16px 24px;
}
.k-table tr th:first-child {
  border-left-width: 1px;
}

.k-table td {
  border-color: #e3e7e8;
  border-width: 0;
  border-style: solid;
  border-right-width: 1px;
  vertical-align: top;
  padding: 16px 24px;
}
.k-table tr td:first-child {
  border-left-width: 1px;
}

.k-table tbody {
  display: table-row-group;
}
</style>
