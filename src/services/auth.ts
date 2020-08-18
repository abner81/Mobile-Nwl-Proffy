

interface Response {
  token: string;
  user: {
    name: string;
    email: string;
    avatar?: string
    whatsapp?: string
    bio?: string
    id: number
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
          id: 1,
        },
      });
    }, 2000);
  });
}
