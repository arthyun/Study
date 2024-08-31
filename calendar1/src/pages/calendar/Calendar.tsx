/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import styles from "../../assets/styles/Calendar.module.scss";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  isSameDay,
  addDays,
  parse,
} from "date-fns";

// 감싸는애
const CalendarWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.calendar_wrap}>{children}</div>;
};

// 현재 월 알려줌
const CalendarHeader = ({
  currentMonth,
  prevMonth,
  nextMonth,
}: {
  currentMonth: Date;
  prevMonth: () => void;
  nextMonth: () => void;
}) => {
  return (
    <header className={styles.calendar_header}>
      <p>{format(currentMonth, "yyyy")}년</p>
      <p>{format(currentMonth, "M")}월</p>
      {/* <p>{format(currentMonth, "d")}일</p> */}
      <button type="button" onClick={prevMonth}>
        이전
      </button>
      <button type="button" onClick={nextMonth}>
        이후
      </button>
    </header>
  );
};

// 요일 깔아주는 화면
const CalendarDays = ({ currentMonth }: { currentMonth: Date }) => {
  const days = [];
  const dateFormat = "EEE";
  const startDate = startOfWeek(currentMonth);

  for (let i = 0; i < 7; i++) {
    days.push(<div key={i}>{format(addDays(startDate, i), dateFormat)}</div>);
  }

  return <div className={styles.calendar_days}>{days}</div>;
};

// 날짜 깔아주는 화면
const CalendarBody = ({
  currentMonth,
  selectedDate,
  onDateClick,
}: {
  currentMonth: Date;
  selectedDate: Date;
  onDateClick: (param: any) => void;
}) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const dateFormat = "d";
  const rows = [];

  let days = [];
  let day: any = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, dateFormat);
      const cloneDay = day;
      days.push(
        <div
          className={`col cell ${
            !isSameMonth(day, monthStart)
              ? styles.disabled
              : isSameDay(day, selectedDate)
              ? styles.selected
              : ""
          }`}
          key={day}
          onClick={() => onDateClick(cloneDay)}
        >
          <span className="number">{formattedDate}</span>
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className={styles.row} key={day}>
        {days}
      </div>
    );
    console.log(rows);
    console.log(days);
    days = [];
  }

  return <div className={styles.calendar_body}>{rows}</div>;
};

const CalendarComponent = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // 버튼 이벤트
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  const onDateClick = (day: any) => {
    setSelectedDate(day);
  };

  return (
    <div className={styles.calendar_container}>
      <CalendarWrapper>
        <CalendarHeader
          currentMonth={currentMonth}
          prevMonth={prevMonth}
          nextMonth={nextMonth}
        />
        <CalendarDays currentMonth={currentMonth} />
        <CalendarBody
          currentMonth={currentMonth}
          selectedDate={selectedDate}
          onDateClick={onDateClick}
        />
      </CalendarWrapper>
    </div>
  );
};

export default CalendarComponent;
