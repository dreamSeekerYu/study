<template>
  <div class="home">
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :fixed-header="true"
      max-height="260px"
      :line-numbers="true"
      :select-options="{ enabled: true }"
      :row-style-class="rowStyleClassFn"
      compactMode
      :pagination-options="{
        enabled: true,
        mode: 'records',
        perPage: 5,
        position: 'bottom',
        perPageDropdown: [3, 7, 9],
        dropdownAllowAll: false,
        setCurrentPage: 2,
        nextLabel: 'next',
        prevLabel: 'prev',
        rowsPerPageLabel: 'Rows per page',
        ofLabel: 'of',
        pageLabel: 'page', // for 'pages' mode
        allLabel: 'All'
      }"
    >
      <div slot="table-actions">
        <button>表头右上角的操作按钮插槽</button>
      </div>
      <div slot="table-actions-bottom">
        <button>表尾的操作按钮插槽</button>
      </div>

      <div slot="emptystate">
        没有展示在页面上
      </div>
      <!-- 自定义标题 -->
      <template slot="table-column" slot-scope="props">
        <span v-if="props.column.label == 'Name'">
          <i class="fa fa-address-book"></i> 自定义标题
        </span>
        <span v-else>
          {{ props.column.label }}
        </span>
      </template>
      <!-- 自定义模板 自定义行 -->
      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'age'">
          <span style="font-weight: bold; color: blue;">{{
            props.row.age
          }}</span>
        </span>
        <span v-else>
          {{ props.formattedRow[props.column.field] }}
        </span>
      </template>
      <!-- 自定义列 -->
      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'before'">
          before
        </span>
        <span v-else-if="props.column.field == 'after'">
          after
        </span>
        <span v-else>
          {{ props.formattedRow[props.column.field] }}
        </span>
      </template>
    </vue-good-table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "my-component",
  data() {
    return {
      columns: [
        {
          label: "Name",
          field: "name"
        },
        {
          label: "Name",
          field: "before"
        },
        {
          label: "Age",
          field: "age",
          type: "number"
        },
        {
          label: "Name",
          field: "after"
        },
        {
          label: "Created On",
          field: "createdAt",
          type: "date",
          dateInputFormat: "yyyy-MM-dd",
          dateOutputFormat: "MMM do yy"
        },
        {
          label: "Percent",
          field: "score",
          type: "percentage"
        }
      ],
      rows: [
        {
          id: 1,
          name: "John",
          age: 20,
          createdAt: "2011-10-31",
          score: 0.03343
        },
        {
          id: 2,
          name: "Jane",
          age: 24,
          createdAt: "2011-10-31",
          score: 0.03343
        },
        {
          id: 3,
          name: "Susan",
          age: 16,
          createdAt: "2011-10-30",
          score: 0.03343
        },
        {
          id: 4,
          name: "Chris",
          age: 55,
          createdAt: "2011-10-11",
          score: 0.03343
        },
        {
          id: 5,
          name: "Dan",
          age: 40,
          createdAt: "2011-10-21",
          score: 0.03343
        },
        {
          id: 6,
          name: "John",
          age: 20,
          createdAt: "2011-10-31",
          score: 0.03343
        },
        {
          id: 4,
          name: "Chris",
          age: 55,
          createdAt: "2011-10-11",
          score: 0.03343
        },
        {
          id: 5,
          name: "Dan",
          age: 40,
          createdAt: "2011-10-21",
          score: 0.03343
        },
        {
          id: 4,
          name: "Chris",
          age: 55,
          createdAt: "2011-10-11",
          score: 0.03343
        },
        {
          id: 5,
          name: "Dan",
          age: 40,
          createdAt: "2011-10-21",
          score: 0.03343
        },
        {
          id: 4,
          name: "Chris",
          age: 55,
          createdAt: "2011-10-11",
          score: 0.03343
        },
        {
          id: 5,
          name: "Dan",
          age: 40,
          createdAt: "2011-10-21",
          score: 0.03343
        },
        {
          id: 4,
          name: "Chris",
          age: 55,
          createdAt: "2011-10-11",
          score: 0.03343
        },
        {
          id: 5,
          name: "Dan",
          age: 40,
          createdAt: "2011-10-21",
          score: 0.03343
        },
        {
          id: 4,
          name: "Chris",
          age: 55,
          createdAt: "2011-10-11",
          score: 0.03343
        },
        {
          id: 5,
          name: "Dan",
          age: 40,
          createdAt: "2011-10-21",
          score: 0.03343
        },
        {
          id: 4,
          name: "Chris",
          age: 55,
          createdAt: "2011-10-11",
          score: 0.03343
        },
        {
          id: 5,
          name: "Dan",
          age: 40,
          createdAt: "2011-10-21",
          score: 0.03343
        },
        {
          id: 4,
          name: "Chris",
          age: 55,
          createdAt: "2011-10-11",
          score: 0.03343
        },
        {
          id: 5,
          name: "Dan",
          age: 40,
          createdAt: "2011-10-21",
          score: 0.03343
        },
        {
          id: 4,
          name: "Chris",
          age: 55,
          createdAt: "2011-10-11",
          score: 0.03343
        },
        {
          id: 5,
          name: "Dan",
          age: 40,
          createdAt: "2011-10-21",
          score: 0.03343
        },
        {
          id: 4,
          name: "Chris",
          age: 55,
          createdAt: "2011-10-11",
          score: 0.03343
        },
        {
          id: 5,
          name: "Dan",
          age: 40,
          createdAt: "2011-10-21",
          score: 0.03343
        },
        {
          id: 4,
          name: "Chris",
          age: 55,
          createdAt: "2011-10-11",
          score: 0.03343
        },
        {
          id: 5,
          name: "Dan",
          age: 40,
          createdAt: "2011-10-21",
          score: 0.03343
        },
        {
          id: 4,
          name: "Chris",
          age: 55,
          createdAt: "2011-10-11",
          score: 0.03343
        },
        {
          id: 5,
          name: "Dan",
          age: 40,
          createdAt: "2011-10-21",
          score: 0.03343
        }
      ]
    };
  },
  methods: {
    rowStyleClassFn(row) {
      return row.age > 18 ? "green" : "red";
    }
  }
};
</script>


<style lang="scss">
.red {
  color: red;
}
.green {
  color: green;
}
</style>
