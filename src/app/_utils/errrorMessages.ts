const SUCCESS_STATUS = 200;
type ErrorStatus = number | '400' | '401' | '403' | '404' | '500' | '503';
const ApiErrorMessages: Record<ErrorStatus, string> = {
  '400': '잘못된 요청입니다. 요청을 다시 확인해주세요.',
  '401': '인증되지 않은 사용자입니다. 로그인 후 이용해주세요.',
  '403': '접근 권한이 없습니다.',
  '404': '요청하신 페이지를 찾을 수 없습니다.',
  '500': '서버에 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
  '503': '서비스를 이용할 수 없습니다. 잠시 후 다시 시도해주세요.'
};

const isErrorStatus = (status: number) => {
  if (status === SUCCESS_STATUS) {
    return false;
  }
  if (Object.hasOwnProperty.call(ApiErrorMessages, status)) {
    return true;
  }
  return false;
};

export const getErrorMessage = (status: number): string | null => {
  if (isErrorStatus(status)) {
    const apiErrorMessage = ApiErrorMessages[status];
    if (apiErrorMessage) {
      return apiErrorMessage;
    }
    return '알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
  }
  return null;
};
