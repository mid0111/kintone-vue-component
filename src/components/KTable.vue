<template>
  <div
    class="k-table"
    :class="{ 'k-table--fixed-header': fixedHeader }"
    :style="[heightStyle]"
  >
    <table :style="tableStyle">
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
  </div>
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
    },
    fixedHeader: {
      type: Boolean,
      default: false,
      required: false
    },
    height: {
      type: Number,
      default: undefined,
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
    },

    heightStyle() {
      let height = this.height;
      if (this.fixedHeader && !height) {
        height = 300;
      }
      return { height: height + 'px' };
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
  border-width: 1px 0;
  border-style: solid;
  border-color: #e3e7e8;
}

.k-table table {
  display: table;
  font-size: 14px;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}

.k-table thead {
  display: table-header-group;
}

.k-table.k-table--fixed-header {
  overflow-y: auto;
}

.k-table.k-table--fixed-header thead th {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;

  background: #fff;
  box-shadow: inset 0 -1px 0 #e3e7e8;
  border-bottom: 0 !important;
}

.k-table tr {
  display: table-row;
}

.k-table th,
.k-table td {
  display: table-cell;
  border-width: 0 1px 1px;
  border-style: solid;
  border-color: #e3e7e8;
  text-align: left;
}
.k-table tr:last-child td {
  border-bottom-width: 0;
}

.k-table tr:nth-child(2n) {
  background-color: #f5f5f5;
}

.k-table th {
  padding: 16px 24px;
}

.k-table td {
  vertical-align: top;
  padding: 16px 24px;
}

.k-table tbody {
  display: table-row-group;
}
</style>
