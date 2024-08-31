/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import styles from "./assets/styles/App.module.scss";
import dayjs from "dayjs";

export default function App() {
  let now = dayjs(new Date()).locale("ko");
  const initialCurrentDate = useRef(now);
  const days = ["일", "월", "화", "수", "목", "금", "토"];

  const [today, setToday] = useState(now);
  const [currentMonth, setCurrentMonth] = useState(0); // 현재 월
  const [daysInMonth, setDaysInMonth] = useState(0); // 이번달 일수

  const prevMonth = () => {
    setToday((prev) => prev.subtract(1, "month"));
  };

  const nextMonth = () => {
    setToday((prev) => prev.add(1, "month"));
  };

  const printBody = () => {
    const isInitial =
      initialCurrentDate.current.month() + 1 === today.month() + 1;

    let bodys = [];
    for (let i = 1; i <= daysInMonth; i++) {
      bodys.push(i);
    }
    return bodys.map((body) => {
      return (
        <p
          key={body}
          className={
            isInitial && initialCurrentDate.current.date() === body
              ? styles.current_date
              : ""
          }
        >
          {body}
        </p>
      );
    });
  };

  const changeDate = () => {
    setCurrentMonth(today.month() + 1);
    setDaysInMonth(today.daysInMonth());
  };

  useEffect(() => {
    changeDate();
  }, [today]);

  // console.log(today.day()); // 현재 요일
  // console.log(today.date()); // 현재 일자

  return (
    <div className={styles.app}>
      <div className={styles.calendar_wrap}>
        <div className={styles.calendar_header}>
          <div className={styles.calendar_date}>
            <h3>날짜</h3>
            <p>{today.year()}년</p>
            <p>{currentMonth}월</p>
          </div>
          <div className={styles.calendar_month_change}>
            <button type='button' onClick={prevMonth}>
              &lt;
            </button>
            <button type='button' onClick={nextMonth}>
              &gt;
            </button>
          </div>
        </div>
        <div className={styles.calendar_days}>
          {days.map((days) => {
            return (
              <div
                key={days}
                className={days === "토" || days === "일" ? styles.holiday : ""}
              >
                {days}
              </div>
            );
          })}
        </div>
        <div className={styles.calendar_body}>{printBody()}</div>
      </div>
    </div>
  );
}
