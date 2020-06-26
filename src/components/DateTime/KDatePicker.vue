<template>
  <div class="date-time-container" ref="wrapperRef">
    <div class="date-container">
      <div class="text-input-container" :key="dateError">
        <input
          type="text"
          class="k-input-text text-input"
          :disabled="disabled"
          :value="inputValue"
          @focus="onFocus"
          @blur="onBlur"
          @keydown.tab="onTabKeyDown"
          @change="onChangeInput"
        />
      </div>
      <div v-if="dateError && showPickerError" class="label-error">
        <span>{{ dateError }}</span>
      </div>
      <Calendar
        v-if="!disabled"
        ref="calendarRef"
        :pickerDisplay="pickerDisplay"
        :date="timeDateValue"
        :locale="localeObj"
        :hasSelection="hasSelection"
        @click="onDateClick"
      />
    </div>
  </div>
</template>

<script>
import Calendar from './components/Calendar.vue';
import { en, ja, zh, format } from './components/Locale';

export default {
  props: {
    value: {
      type: Date,
      default: null
    },
    locale: {
      type: String,
      default: 'ja'
    },
    dateFormat: {
      type: String,
      defalut: 'MM/dd/YYYY'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  components: {
    Calendar
  },

  data() {
    let localeObj = ja;
    if (this.locale === 'en') {
      localeObj = en;
    } else if (this.locale === 'zh') {
      localeObj = zh;
    }
    return {
      dateError: '',
      showPickerError: false,
      pickerDisplay: 'none',
      timePickerDisplay: 'none',
      hasSelection: true,
      localeObj
    };
  },

  computed: {
    timeDateValue() {
      if (!this.value) {
        return new Date();
      }
      return new Date(this.value);
    },
    inputValue() {
      if (!this.value) {
        return '';
      }
      return format(this.value, this.dateFormat);
    }
  },

  methods: {
    setPickerDisplay(value) {
      this.pickerDisplay = value;
    },
    setTimePickerDisplay(value) {
      this.timePickerDisplay = value;
    },
    setHasSelection(value) {
      this.hasSelection = value;
    },
    setShowPickerError(value) {
      this.showPickerError = value;
    },
    setDateError(value) {
      this.dateError = value;
    },

    onChangeInput(e) {
      if (!e.target.value) {
        this.onChange(null);
      } else {
        const date = new Date(e.target.value);
        if (isNaN(date)) {
          alert(`${this.dateFormat} 形式で入力してください。`);
          return;
        }
        this.onChange(new Date(date));
      }
    },

    onChange(value) {
      this.$emit('change', value && format(value, this.dateFormat));
      this.$emit('input', value);
      document.body.focus();
    },

    onFocus() {
      this.setPickerDisplay('block');
      this.setTimePickerDisplay('none');
    },

    onBlur(e) {
      const relatedTarget =
        e.relatedTarget || e.explicitOriginalTarget || document.activeElement; // IE11
      const calendar = this.$refs.calendarRef.$el;
      if (relatedTarget !== calendar && !calendar.contains(relatedTarget)) {
        this.setPickerDisplay('none');
      }
    },

    onTabKeyDown(e) {
      this.onChangeInput(e);
      this.setPickerDisplay('none');
    },

    onDateClick({ calendarDate, previousDate }) {
      let tempDate;
      if (previousDate) {
        tempDate = new Date(previousDate);
      } else {
        tempDate = new Date();
      }
      if (calendarDate) {
        if (this.value) {
          tempDate = new Date(this.value);
        }
        tempDate.setFullYear(
          calendarDate.getFullYear(),
          calendarDate.getMonth(),
          calendarDate.getDate()
        );
        tempDate.setHours(this.timeDateValue.getHours());
        tempDate.setMinutes(this.timeDateValue.getMinutes());
        tempDate.setSeconds(0);
        if (!this.showPickerError) {
          this.onChange(tempDate);
        }
        this.setHasSelection(true);
        this.setShowPickerError(false);
      } else if (previousDate) {
        tempDate.setHours(this.timeDateValue.getHours());
        tempDate.setMinutes(this.timeDateValue.getMinutes());
        tempDate.setSeconds(0);
        this.onChange(null);
        this.setHasSelection(false);
        this.setShowPickerError(false);
      }
      this.setPickerDisplay('none');
    }
  }
};
</script>
<style>
.date-time-container {
  display: inline-flex;
  /* font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif; */
}

.date-time-container .text-input {
  width: 100px;
  height: 40px;
  margin: 0;
  padding: 0;
  color: #333;
  font-size: 14px;
  text-align: center;
  outline: none;
  border: 1px solid #e3e7e8;
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
  box-sizing: border-box;
}

.date-time-container .text-input.time {
  width: 80px;
}

.date-time-container .text-input:focus {
  border-color: #3498db;
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
  border: 1px solid #3498db;
  background-color: #fff;
  color: #333;
}

.date-time-container .date-picker-container,
.time-picker-container {
  position: absolute;
  width: 350px;
  background: #fff;
  padding: 32px 32px 24px;
  text-align: center;
  font-size: 13px;
  box-sizing: border-box;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);
  z-index: 2000;
}

.time-picker-container {
  width: 250px;
  padding: 0;
  flex-flow: row wrap;
  overflow-y: scroll;
  height: 180px;
}

.date-time-container .month-year-container,
.date-time-container .quick-selections-container {
  position: relative;
  line-height: 16px;
  height: 32px;
  padding: 0;
  outline: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.month-year-container .label {
  outline: initial;
  -webkit-touch-callout: initial;
  -webkit-user-select: initial;
  -khtml-user-select: initial;
  -moz-user-select: initial;
  -ms-user-select: initial;
  user-select: text;
}

.date-time-container .month-year-container {
  text-transform: uppercase;
  border-bottom: 1px solid #e3e7e8;
  display: flex;
}

.date-time-container .month-year-container .label {
  color: #333;
  font-weight: bold;
  line-height: 20px;
}

.date-time-container .month-year-container .prev,
.date-time-container .month-year-container .next {
  position: relative;
  display: inline-flex;
  width: 24px;
  height: 24px;
  top: -2px;
  font-size: 24px;
  color: #a2a2a2;
  line-height: 20px;
  font-family: Arial;
  cursor: pointer;
}

.date-time-container .month-year-container .prev {
  text-align: start;
}

.date-time-container .month-year-container .prev:before {
  content: '\2039';
  width: 24px;
}

.date-time-container .month-year-container .next {
  text-align: end;
}

.date-time-container .month-year-container .next:before {
  content: '\203A';
  width: 24px;
}

.date-time-container .quick-selections-container .today,
.date-time-container .quick-selections-container .none {
  position: absolute;
  top: 10px;
  color: #3498db;
  font-size: 13px;
  cursor: pointer;
}

.date-time-container .quick-selections-container .today {
  left: 0;
}

.date-time-container .quick-selections-container .none {
  right: 0;
}

.date-time-container .days-container {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.date-time-container .days-container .day,
.date-time-container .days-container .wday-header {
  text-transform: uppercase;
  font-weight: normal;
  box-sizing: border-box;
  padding: 8px 0;
  flex-basis: 38px;
  border: 1px solid #fff;
  color: #333;
  font-size: 10px;
  line-height: 15px;
}

.date-time-container .days-container .day {
  cursor: pointer;
}
.date-time-container .days-container .day.today {
  color: #fff;
  background: #9b9b9b;
}

.date-time-container .days-container .day.selected {
  border: 1px solid #3498db;
}

.date-time-container .days-container .grayed-out {
  color: #babcbc;
}

.label-error {
  background-color: #e54d41;
  color: #ffffff;
  margin: 8px 0;
  padding: 0 15px;
  font-size: 14px;
  z-index: 1;
  position: absolute;
}

.date-container {
  display: inline-block;
}
</style>
