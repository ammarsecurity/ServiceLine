<template>
  <table
    class="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow rounded-t-2xl overflow-hidden"
  >
    <thead
      class="text-md text-white uppercase bg-pm dark:bg-gray-700 dark:text-gray-400"
    >
      <tr>
        <th v-if="select" class="p-4 table-select-th" scope="col">
          <div class="flex items-center">
            <input
              v-model="allSelected"
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              type="checkbox"
              @change="
                () => {
                  selected.length === sortedList.length
                    ? clearSelected()
                    : selectAllRows();
                }
              "
            />
            <label class="sr-only" for="checkbox-all-search">checkbox</label>
          </div>
        </th>
        <th
          v-for="{ label } in headers"
          :key="label"
          class="py-3 px-6"
          scope="col"
        >
          {{ label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <td
        v-if="!loading && sortedList.length === 0"
        :colspan="headers.length + (select ? 1 : 0)"
        class="text-center"
      >
        <h1 class="text-2xl my-20 text-center" dir="auto">لا توجد بيانات</h1>
      </td>

      <tr
        v-for="(item, i) in sortedList"
        v-if="!loading && sortedList.length > 0"
        :key="item"
        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
      >
        <td v-if="select" class="p-4 w-4">
          <div class="flex items-center">
            <input
              v-model="item.selected"
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              type="checkbox"
              @change="
                () => {
                  item.selected ? selectRow(i) : unselectRow(i);
                }
              "
            />
            <label class="sr-only" for="checkbox-table-search-1"
              >checkbox</label
            >
          </div>
        </td>
        <td
          v-for="({ field, label }, index) in headers"
          :key="field"
          class="py-4 px-6"
          dir="auto"
        >
          <slot
            :item="{ header: { label, field, index }, value: { ...item } }"
            :name="field"
          >
            {{ _.get(item, field) }}
          </slot>
        </td>
      </tr>
      <tr v-if="loading">
        <td :colspan="headers.length + (select ? 1 : 0)" class="text-center">
          <h1 class="text-2xl my-20 text-center lg:max-w-[calc(79vw-40px)]">
            <div class="text-center">
              <svg
                class="inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                fill="none"
                viewBox="0 0 100 101"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <br />
              <span>جاراالتحميل...</span>
            </div>
          </h1>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import * as _ from "lodash";

export default {
  name: "Table",
  props: {
    items: {
      type: Array,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    headers: {
      type: Array,
    },
    select: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    items(value) {
      this.list = this.select
        ? this.items.map((item) => ({ ...item, selected: false }))
        : this.items;
    },
  },
  data() {
    return {
      _,
      list: [],
      allSelected: false,
    };
  },
  created() {
    this.list = this.select
      ? this.items.map((item) => ({ ...item, selected: false }))
      : this.items;
  },
  computed: {
    sortedList: {
      get() {
        return this.list;
      },
      set(value) {
        this.list = value;
      },
    },
    selected() {
      return this.sortedList.filter((item) => item.selected) ?? [];
    },
    getSelected() {
      return this.sortedList.filter((item) => item.selected);
    },
  },
  methods: {
    selectAllRows() {
      this.sortedList = this.sortedList.map((item) => ({
        ...item,
        selected: true,
      }));
      if (this.getSelected.length > 0) {
        this.allSelected = true;
      }
    },
    clearSelected() {
      this.sortedList = this.sortedList.map((item) => ({
        ...item,
        selected: false,
      }));
      this.allSelected = false;
    },

    selectRow(index) {
      const temp = this.sortedList;
      temp[index].selected = true;
      this.sortedList = temp;
      this.selected = this.getSelected;
      if (this.sortedList.length === this.selected.length) {
        this.allSelected = true;
      } else {
        this.allSelected = false;
      }
    },

    unselectRow(index) {
      const temp = this.sortedList;
      temp[index].selected = false;
      this.sortedList = temp;
      this.selected = this.getSelected;
      if (this.sortedList.length === this.selected.length) {
        this.allSelected = true;
      } else {
        this.allSelected = false;
      }
    },
  },
};
</script>

<style scoped>
td,
th {
  /*white-space: nowrap;*/
  text-align: center;
  height: 60px;
}

td {
  background: #f3f4ff;
}

td:first-child {
  border-left: none;
}

td:nth-child(2) {
  border-right: none;
}

th:not(:last-child):not(.table-select-th) {
  border-left: 1px solid white;
}

td {
  border: 1px solid white;
}
</style>
