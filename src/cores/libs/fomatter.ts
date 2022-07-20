export function numberFormat(x: any) {
  // 수치 데이터에 구분자(,)를 넣음
  if (x !== undefined && x !== null) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return "0";
  }
}
export function numberToKorean(number: number) {
  // 수치 데이터를 한글 표현으로 변경
  const inputNumber = number < 0 ? 0 : number;
  const unitWords = ["", "만", "억", "조", "경"];
  const splitUnit = 10000;
  const splitCount = unitWords.length;
  let resultArray = [];
  let resultString = "";
  for (let i = 0; i < splitCount; i++) {
    let unitResult = (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
    unitResult = Math.floor(unitResult);
    if (unitResult > 0) {
      resultArray[i] = unitResult;
    }
  }
  for (let i = 0; i < resultArray.length; i++) {
    if (!resultArray[i]) continue;
    resultString = String(numberFormat(resultArray[i])) + unitWords[i] + resultString;
  }
  return resultString;
}

// string을 전화번호 표현(구분자 '-' 추가)으로 변경
export const telToString = (tel: string) => (tel ? tel.replace("-", "") : "");

export const dateToRelative = (date: string, join = "-") => {
  const MS = 1000;
  const DIF_MINUTES = 60 * MS;
  const DIF_HOURS = 60 * DIF_MINUTES;
  const DIF_DAYS = 24 * DIF_HOURS;

  // Javascript Date 객체를 현재 시간과 비교하여 표현함.
  const current = Date.now(),
    relative = crossBrowsingDate(date);
  const elapsed = current - relative.getTime();

  if (elapsed >= DIF_DAYS) {
    return dateToYYYYMMDD(relative, join);
  } else if (elapsed >= DIF_HOURS) {
    return `${Math.floor(elapsed / DIF_HOURS)}시간 전`;
  } else if (elapsed >= DIF_MINUTES) {
    return `${Math.floor(elapsed / DIF_MINUTES)}분 전`;
  } else if (elapsed >= 0) {
    return `${Math.floor(elapsed / MS)}초 전`;
  } else if (elapsed >= -DIF_MINUTES) {
    return `${-Math.ceil(elapsed / MS)}초 후`;
  } else if (elapsed >= -DIF_HOURS) {
    return `${-Math.ceil(elapsed / DIF_MINUTES)}분 후`;
  } else if (elapsed >= -DIF_DAYS) {
    return `${-Math.ceil(elapsed / DIF_HOURS)}시간 후`;
  } else {
    return dateToYYYYMMDD(relative, join);
  }
};

export const dateToYYYYMMDD = (date: Date, join = "-") => {
  // Javascript Date 객체를 형식에 맞게 변환하여 표현함.
  const absolute = crossBrowsingDate(date.toString()); // 만약에 Date 객체가 넘어오지 않을 것을 대비
  const monthFormatting = dateFormatting(absolute.getMonth() + 1); // 월을 두 자리로 변환
  const dayFormatting = dateFormatting(absolute.getDate()); // 일을 두 자리로 변환
  return absolute.getFullYear() + join + monthFormatting + join + dayFormatting;
};

const crossBrowsingDate = (date: string) => {
  if (date) {
    let setDate = null;
    if (typeof date === "string") {
      // IE 에서 YYYY-MM-DD HH:MM:SS 를 생성자로 사용할 수 없기 때문에 예외 처리.
      setDate = date.replace(/-/g, "/");
      // YYYY/MM/DD HH:MM:SS로 변경해줌
    } else setDate = date;
    return new Date(setDate);
  }
  return new Date(0);
};

const dateFormatting = (date: number) => (date < 10 ? "0" + date : date); // 달력의 수치를 두 자리로 변환해주는 함수
