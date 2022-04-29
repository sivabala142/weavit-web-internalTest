export const parseJSONString = (str: string): any => {
    let result: any;
    try {
      result = JSON.parse(str);
    } catch (e) {}
    return result;
  };