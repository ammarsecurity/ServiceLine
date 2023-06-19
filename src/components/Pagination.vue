<template>
  <div class="flex justify-between items-center">
    <div class="flex justify-end" dir="ltr">
      <ul class="pagination p-2">
        <li class="pagination-item">
          <button
            :class="{ 'cursor-not-allowed': isInFirstPage }"
            :disabled="isInFirstPage"
            class="px-3 py-[0.45rem] no-underline"
            type="button"
            @click="onClickPreviousPage"
          >
            <svg
              fill="none"
              height="1em"
              viewBox="0 0 10 17"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.13386 16.257L0.285857 9.17702C-0.0501436 8.88902 -0.0501436 8.36102 0.285857 8.07302L8.13386 0.99302C8.63786 0.53702 9.45386 0.87302 9.45386 1.54502L9.45386 15.705C9.45386 16.377 8.63786 16.713 8.13386 16.257Z"
                fill="#A098AE"
              />
            </svg>
          </button>
        </li>

        <li v-for="page in pages" :key="page.name" class="pagination-item">
          <span
            v-if="isPageActive(page.name)"
            class="rounded-full px-3 py-[2px] bg-pm no-underline text-white cursor-not-allowed mx-2 shadow-md"
            >{{ page.name }}</span
          >
          <a
            v-else
            class="rounded-full border border-[#A098AE] px-3 py-[2px] hover:bg-gray-100 text-gray-600 no-underline mx-2"
            href="#"
            role="button"
            @click.prevent="onClickPage(page.name)"
            >{{ page.name }}</a
          >
        </li>

        <li class="pagination-item">
          <button
            :class="{ 'cursor-not-allowed': isInLastPage }"
            :disabled="isInLastPage"
            class="px-3 py-[0.45rem] no-underline text-sm"
            type="button"
            @click="onClickNextPage"
          >
            <svg
              fill="none"
              height="1em"
              viewBox="0 0 10 17"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.36614 0.992994L9.21414 8.073C9.55014 8.361 9.55014 8.889 9.21414 9.177L1.36614 16.257C0.862143 16.713 0.0461426 16.377 0.0461426 15.705L0.0461428 1.545C0.0461428 0.872995 0.862143 0.536995 1.36614 0.992994Z"
                fill="#A098AE"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
    <span class="text-sm font-normal text-gray3"
      >اظهار
      <span class="font-semibold text-black"
        >{{ currentPage * perPage - perPage + 1 }}-
        {{
          currentPage * perPage > total ? total : currentPage * perPage
        }}</span
      >
      من <span class="font-semibold text-black">{{ total }}</span></span
    >
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },

    total: {
      type: Number,
      required: true,
    },

    perPage: {
      type: Number,
      required: true,
    },

    currentPage: {
      type: Number,
      required: true,
    },

    hasMorePages: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.perPage);
    },
    startPage() {
      if (this.currentPage === 1) {
        return 1;
      }

      if (this.currentPage === this.totalPages) {
        // check if total pages is smaller than max visible buttons
        if (this.totalPages <= this.maxVisibleButtons) {
          return 1;
        }
        return this.totalPages - this.maxVisibleButtons + 1;
      }
      return this.currentPage - 1;
    },
    endPage() {
      return Math.min(
        this.startPage + this.maxVisibleButtons - 1,
        this.totalPages
      );
    },
    pages() {
      const range = [];

      for (let i = this.startPage; i <= this.endPage; i += 1) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        });
      }

      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },
  methods: {
    onClickFirstPage() {
      this.$emit("pagechanged", 1);
    },
    onClickPreviousPage() {
      this.$emit("pagechanged", this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit("pagechanged", page);
    },
    onClickNextPage() {
      this.$emit("pagechanged", this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit("pagechanged", this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
  },
};
</script>

<style scoped></style>
