<template>
  <div
    role="presentation"
    ref="calRef"
    class="date-picker-container"
    :style="{ display: pickerDisplay }"
    @blur="onBlur"
    tabIndex="-1"
  >
    <div class="header">
      <div class="month-year-container">
        <span
          role="button"
          class="prev calendar-button-control"
          @click="onClickPrev"
          @keyup="onClickPrev"
        />
        <div
          ref="dropDownsRowRef"
          class="k-calendar-dropdown-row"
          v-if="locale === en"
        >
          <k-dropdown
            :items="getMonthLabels(locale)"
            :value="getMonthLabels(locale)[displayDate.getMonth()].label"
            @change="onChangeMonth"
          />
          <k-dropdown
            :items="getYearLabels(displayDate.getFullYear().toString(), locale)"
            :value="format(displayDate, 'calendaryear', { locale })"
            @change="onChangeYearEn"
          />
        </div>
        <div ref="dropDownsRowRef" class="k-calendar-dropdown-row" v-else>
          <k-dropdown
            :items="getYearLabels(displayDate.getFullYear().toString(), locale)"
            :value="format(displayDate, 'calendaryear', { locale })"
            @change="onChangeYear"
          />
          <k-dropdown
            :items="getMonthLabels(locale)"
            :value="getMonthLabels(locale)[displayDate.getMonth()].label"
            @change="onChangeMonth"
          />
        </div>
        <span
          role="button"
          class="next calendar-button-control"
          @click="onClickNext"
          @keyup="onClickNext"
        />
      </div>
      <div class="days-container">
        <span
          v-for="(label, index) in weekDayLabels"
          class="wday-header"
          :class="{ 'grayed-out': isWeekend(index) }"
          :key="`wday-header-${index}`"
        >
          {{ label }}
        </span>
        <span
          v-for="(day, index) in displayingDays"
          role="button"
          class="day calendar-button"
          :class="{
            'grayed-out': displayDate && isSameMonth(day, displayDate),
            today: isToday(day),
            selected: date && isSameDate(day, date) && hasSelection
          }"
          :key="`day-${index}`"
          @click="onClickDay(day)"
          @keyup="onClickDay(day)"
          tabIndex="0"
        >
          {{ format(day, 'd') }}
        </span>
      </div>
      <div class="quick-selections-container">
        <span
          role="button"
          tabIndex="0"
          class="today calendar-button-control"
          @click="onClickToday"
          @keyup="onClickToday"
          >{{ locale.today }}
        </span>
        <span
          role="button"
          class="none calendar-button-control"
          @click="onClickClear"
          @keyup="onClickClear"
          tabIndex="0"
          >{{ locale.none }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import KDropdown from '../../KDropdown.vue';
import {
  getWeekDayLabels,
  getDisplayingDays,
  isSameMonth,
  isToday,
  isSameDate,
  getMonthLabels,
  getYearLabels
} from './utils';
import { en, format } from './Locale';
import Locale from './localizationData/locale-dto';

export default {
  props: {
    date: Date,
    locale: Locale,
    pickerDisplay: String,
    hasSelection: Boolean
  },

  components: {
    KDropdown
  },

  computed: {
    displayingDays() {
      return getDisplayingDays(this.displayDate);
    },

    weekDayLabels() {
      return getWeekDayLabels(this.locale);
    }
  },

  data() {
    return {
      previousDate: new Date(this.date),
      isSameDate,
      isSameMonth,
      isToday,
      getMonthLabels,
      getYearLabels,
      en,
      format,
      displayDate: this.date ? new Date(this.date) : new Date(),
      today: new Date()
    };
  },

  mounted() {
    document.addEventListener('mousedown', this._handleDropdownSelection);
  },

  beforeDestroy() {
    document.removeEventListener('mousedown', this._handleDropdownSelection);
  },

  methods: {
    setDisplayDate(value) {
      this.displayDate = value;
    },

    scrollToSeletedOptions() {
      const selectedItems = document.getElementsByClassName(
        'k-list-item-selected'
      );
      for (let i = 0; i < selectedItems.length; i++) {
        const item = selectedItems[i];
        if (item.parentNode) {
          item.parentNode.scrollTop =
            item.offsetTop - item.parentNode.offsetTop;
        }
      }
    },

    isWeekend(index) {
      return index === 0 || index === 6;
    },

    onBlur(e) {
      const relatedTarget =
        e.relatedTarget || e.explicitOriginalTarget || document.activeElement; // IE11
      if (
        this.$refs.calRef !== relatedTarget &&
        !this.$refs.calRef.contains(relatedTarget) &&
        this.pickerDisplay !== 'none'
      ) {
        this.$emit('click', { calendarDate: null, previousDate: null });
      }
    },

    onClickPrev() {
      const newDate = new Date(this.displayDate);
      newDate.setMonth(newDate.getMonth() - 1, 1);
      this.setDisplayDate(newDate);
    },

    onClickNext() {
      const newDate = new Date(this.displayDate);
      newDate.setMonth(newDate.getMonth() + 1, 1);
      this.setDisplayDate(newDate);
    },

    onChangeYearEn(value) {
      const newDate = new Date(this.displayDate);
      newDate.setFullYear(parseInt(value, 10), this.displayDate.getMonth(), 1);
      this.setDisplayDate(newDate);
      this.scrollToSeletedOptions();
    },

    onChangeYear(value) {
      const newDate = new Date(this.displayDate);
      let currentYear = value;
      currentYear = currentYear.replace('年', '');
      currentYear = parseInt(value, 10);
      newDate.setFullYear(
        parseInt(currentYear, 10),
        this.displayDate.getMonth(),
        1
      );
      this.setDisplayDate(newDate);
      this.scrollToSeletedOptions();
    },

    onChangeMonth(value) {
      const newDate = new Date(this.displayDate);
      newDate.setMonth(this.locale.monthNames.indexOf(value), 1);
      this.setDisplayDate(newDate);
      this.scrollToSeletedOptions();
    },

    onClickDay(day) {
      const returnDate = new Date(this.date);
      returnDate.setFullYear(day.getFullYear(), day.getMonth(), day.getDate());

      this.$emit('click', { calendarDate: returnDate, previousDate: null });

      this.setDisplayDate(new Date(day));
    },

    onClickToday() {
      this.setDisplayDate(new Date());
      this.$emit('click', { calendarDate: this.today, previousDate: null });
    },

    onClickClear() {
      this.$emit('click', {
        calendarDate: null,
        previousDate: this.previousDate
      });
    },

    _handleDropdownSelection(e) {
      if (this.$refs.dropDownsRowRef) {
        const selectedDropdownOuter = e.target.closest('.k-dropdown-outer');
        if (
          this.$refs.dropDownsRowRef.contains(e.target) &&
          selectedDropdownOuter
        ) {
          setTimeout(this.scrollToSeletedOptions, 100);
        }
      }
    }
  },

  watch: {
    date(newDate, oldDate) {
      if (newDate && !isSameDate(newDate, oldDate)) {
        const date = new Date(newDate);
        this.displayDate = date;
        this.previousDate = date;
      }
    }
  }
};
</script>
<style>
.date-picker-container .k-dropdown-sub-container,
.date-picker-container .k-dropdown-container,
.date-picker-container .k-dropdown-outer {
  height: 100%;
}

.k-dropdown-outer {
  padding: 5px;
}

.date-picker-container .k-dropdown-selected-label {
  color: black;
  padding-left: 0ch;
  display: inline;
  font-weight: bold;
}

.date-picker-container .k-dropdown:hover {
  background-color: initial;
}

.date-picker-container .k-dropdown-selected {
  width: auto;
  text-align: left;
  padding-right: 22px;
  height: 22px;
}

.date-picker-container .k-dropdown,
.date-picker-container .k-dropdown-selected-name {
  color: #a2a2a2;
  background-color: white;
  font-size: 13px;
  border: 0ch;
  line-height: 22px;
}

.date-picker-container .k-dropdown-selected-name .icon-arrow-down svg {
  box-sizing: border-box;
  padding: 0;
  height: 26px;
}

.date-picker-container .k-dropdown-selected-name .icon-arrow-down svg path {
  fill: #a2a2a2;
}

.date-picker-container .k-list-outer {
  outline: none;
  text-align: left;
  max-height: 300px;
  top: 32px;
  margin-top: 0;
}

.date-picker-container {
  outline: none;
}

.k-calendar-dropdown-row {
  display: inline-flex;
  justify-content: center;
  flex-basis: calc(100% - 48px);
  text-align: center;
  outline: none;
  position: relative;
  top: -7px;
}

.date-picker-container .k-dropdown-outer {
  border: solid 1px transparent;
  box-sizing: border-box;
}

span.day {
  outline: none;
}

.calendar-button-control {
  background-color: transparent;
  border: none;
  outline: none;
}
</style>
