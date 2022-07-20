export const onlyNumber = (value: string) => {
  return /[0-9]/.test(value) || value.length > 1;
};
/**
 * input의 value가 only number type인지 체크하는 함수
 *
 * @param e - any 타입 // 수정해야함
 * @returns `false` , else `true`
 *
 */
export const onlyNumberListener = (e: any) => {
  !onlyNumber(e.key) && e.preventDefault();
};

/**
 * input의 value가 비어있는지 체크하는 함수
 *
 * @param value - string 타입
 * @returns `false` , else `true`
 *
 */

export const isEmpty = (value: string) => {
  const checker = value.length === 0 ? true : false;
  return checker;
};

/**
 * value의 값이 null인지 체크하는 함수
 *
 * @param obj - unknown 타입
 * @returns null || undefined === `false` , else `true`
 *
 */

export const valueNullChecker = (obj: any) => {
  for (const [key, value] of Object.entries(obj)) {
    if (value === null || value === undefined) {
      return false;
    }
  }
  return true;
};
