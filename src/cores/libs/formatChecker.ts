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

/**
 * email Form에 맞는지 유효성 검사
 */

export const isEmailForm = (asValue: any) => {
  const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
};

/**
 * phone Form에 맞는지 유효성 검사
 */

export const isCellPhoneForm = (asValue: any, hyphen = false) => {
  const regExp = hyphen ? /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/ : /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
};

/**
 * password Form에 맞는지 유효성 검사
 */

export const isPasswordForm = (asValue: any) => {
  // const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/; //  8 ~ 10자 영문, 숫자 조합
  const regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/; // 8자 이상 영문, 숫자, 특수문자 조합
  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
};

/**
 * 숫자만 들어오는지 유효성 검사
 */

export const onlyNumber = (value: any) => {
  return /[0-9]/.test(value) || value.length > 1;
};
