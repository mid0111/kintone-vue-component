<template>
  <div class="components">
    <h3>basic</h3>
    <k-table :headers="headers" :items="items" />
    <h3>slot</h3>
    <k-table :headers="slotHeaders" :items="items">
      <template v-slot:header>
        <th :colspan="slotHeaders.length">カスタムヘッダ</th>
      </template>
      <template v-slot:default="slotProps">
        <td width="80">{{ slotProps.item['no'] }}</td>
        <td>{{ slotProps.item['name'] }}</td>
        <td>{{ slotProps.item['group'] }}</td>
        <td width="40">
          <k-icon-button
            type="close"
            color="blue"
            size="small"
            @click="onClick(slotProps.index)"
          />
        </td>
      </template>
    </k-table>
  </div>
</template>

<script>
import KTable from '../components/KTable.vue';
import KIconButton from '../components/KIconButton.vue';

export default {
  components: {
    KIconButton,
    KTable
  },

  data() {
    const headers = [
      {
        label: '社員番号',
        name: 'no',
        width: 80
      },
      {
        label: '名前',
        name: 'name'
      },
      {
        label: '所属',
        name: 'group'
      }
    ];
    return {
      headers,
      slotHeaders: headers.concat({ width: 20 }),
      items: [
        {
          name: '田中太郎',
          no: '2012001',
          group: '総務部'
        },
        {
          name: '田中次郎',
          no: '2012002',
          group: 'システム部'
        },
        {
          name: '田中三郎',
          no: '2012003',
          group: '営業部'
        }
      ]
    };
  },

  methods: {
    onClick(index) {
      alert(`${this.items[index].name} is selected.`);
    }
  }
};
</script>
