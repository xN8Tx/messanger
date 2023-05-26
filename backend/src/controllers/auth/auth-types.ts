interface RequestEmailType extends Request {
  email: string;
}
interface RequestFullType extends RequestEmailType {
  code: number;
}

interface UserType {
  id?: number;
  email: string;
  username: string;
  lastName: string;
  firstName: string;
}

export type { RequestEmailType, RequestFullType, UserType };
