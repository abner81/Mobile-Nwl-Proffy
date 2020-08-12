interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function sigIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "kxdjxm3j38887cjhdcmcdkk8c7u7dfndmdmd88euj",
        user: {
          name: "Abner",
          email: "abner81@live.com",
        },
      });
    }, 2000);
  });
}
