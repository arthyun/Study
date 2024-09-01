import { useState, useRef, useEffect } from "react";
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
  const [bodys, setBodys] = useState([]); // bodys 상태 추가
  const [daysOfWeek, setDaysOfWeek] = useState([]); // 각 주의 데이터 배열

  // 주차 계산
  const selectedWeeks = (index) => {
    // console.log(bodys);
    switch (index) {
      case 7:
        return setDaysOfWeek(bodys.slice(0, index));
      case 14:
      case 21:
      case 28:
      case 35:
        return setDaysOfWeek(bodys.slice(index - 7, index));
      default:
        return;
    }
  };

  // 이전 월
  const prevMonth = () => {
    setToday((prev) => prev.subtract(1, "month"));
  };

  // 다음 월
  const nextMonth = () => {
    setToday((prev) => prev.add(1, "month"));
  };

  // 일자 배열 생성
  const generateBodys = () => {
    let bodysArray = [];
    let emptyStartDays = [];
    let emptyEndDays = [];

    const isStart = today.startOf("M").day(); // 이번달 시작 요일
    const isEnd = today.endOf("M").day(); // 이번달 마지막 요일

    // 시작일이 일요일이 아닐 때
    if (isStart !== 0) {
      const beforeEndDate = today.subtract(1, "month").endOf("M").date(); // 이전달 마지막 날
      const isStartCnt = beforeEndDate - isStart;
      for (let i = 1; i <= isStart; i++) {
        emptyStartDays.push(isStartCnt + i);
      }
      bodysArray = [...emptyStartDays];
    }

    // 끝나는 일이 토요일이 아닐 때
    if (isEnd !== 6) {
      const endCnt = 6 - isEnd;
      for (let k = 1; k <= endCnt; k++) {
        emptyEndDays.push(k);
      }
    }

    // 이번달의 날짜를 추가
    for (let i = 1; i <= daysInMonth; i++) {
      bodysArray.push(i);
    }

    // 최종 배열 뒤에 빈 날 추가
    bodysArray = [...bodysArray, ...emptyEndDays];

    // 현재 월과 일 수를 업데이트
    setCurrentMonth(today.month() + 1);
    setDaysInMonth(today.daysInMonth());

    return bodysArray;
  };

  useEffect(() => {
    // bodys를 생성하여 상태로 저장
    setBodys(generateBodys());
    // if (bodys.length > 5) {
    //   selectedWeeks(7);
    // }
  }, [currentMonth, today]);

  return (
    <div className={styles.app}>
      <div className={styles.calendar_btn_group}>
        {bodys.map((item, index) => {
          if ((index + 1) % 7 === 0) {
            return (
              <span key={index} onClick={() => selectedWeeks(index + 1)}>
                {index + 1 === 7
                  ? 1
                  : index + 1 === 14
                  ? 2
                  : index + 1 === 21
                  ? 3
                  : index + 1 === 28
                  ? 4
                  : 5}
                주차
              </span>
            );
          }
        })}
      </div>

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
          {days.map((day, i) => (
            <div
              key={day}
              className={day === "토" || day === "일" ? styles.holiday : ""}
            >
              {day}
              {daysOfWeek[i]}
            </div>
          ))}
        </div>
        <div className={styles.calendar_body}>
          {bodys.map((body, index) => (
            <p
              key={index}
              className={
                today.isSame(initialCurrentDate.current) &&
                body === initialCurrentDate.current.date() &&
                index < initialCurrentDate.current.endOf("M").date()
                  ? styles.current_date
                  : ""
              }
            >
              {body}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
