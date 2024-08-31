/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import styles from "./assets/styles/App.module.scss";
import dayjs from "dayjs";
import "dayjs/locale/ko";

export default function App() {
  let now = dayjs(new Date()).locale("ko");
  const initialCurrentDate = useRef(now); // 달력 이동해도 초기 오늘일자 기억용
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const [today, setToday] = useState(now);
  const [currentMonth, setCurrentMonth] = useState(0); // 현재 월
  const [daysInMonth, setDaysInMonth] = useState(0); // 이번달 일수

  // 이전 월
  const prevMonth = () => {
    setToday((prev) => prev.subtract(1, "month"));
  };

  // 다음 월
  const nextMonth = () => {
    setToday((prev) => prev.add(1, "month"));
  };

  // 일자 뿌려주기
  const printBody = () => {
    let bodys = [];
    let emptyStartDays = [];
    let emptyEndDays = [];

    const isSame = today.isSame(initialCurrentDate.current); // 오늘날 체크용
    const isAfter = today.isAfter(today.subtract(1, "M")); // 오늘날과 이전달이 같은지
    const isBefore = today.isBefore(today.add(1, "M")); // 오늘날과 이전달이 같은지

    // 어느 요일에 시작하고 끝나는지 찾기
    const isStart = today.startOf("M").day(); // 이번달 시작 요일
    const isEnd = today.endOf("M").day(); // 이번달 마지막 요일

    // 시작일이 일요일이 아닐때
    if (isStart !== 0) {
      const beforeEndDate = today.subtract(1, "month").endOf("M").date(); // 이전달 마지막 날
      const isStartCnt = beforeEndDate - isStart;
      for (let i = 1; i <= isStart; i++) {
        emptyStartDays.push(isStartCnt + i);
      }
      // 최종 배열 앞에 붙여주기
      bodys = [...emptyStartDays];
    }

    // 끝나는일이 토요일이 아닐때
    if (isEnd !== 6) {
      const endCnt = 6 - isEnd; // 7일 => 0~6 6칸 기준 = 6 - 이번달 총일수
      // emptyEndDays = new Array(endCnt).fill(0);
      for (let k = 1; k <= endCnt; k++) {
        emptyEndDays.push(k);
      }
    }

    // 최종 뿌려주기
    for (let i = 1; i <= daysInMonth; i++) {
      bodys.push(i);
    }

    // 최종 배열 뒤에 붙여주기
    bodys = [...bodys, ...emptyEndDays];

    return bodys.map((body, index) => {
      return (
        <p
          key={index}
          className={
            index > isStart &&
            isSame &&
            initialCurrentDate.current.date() === body
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
