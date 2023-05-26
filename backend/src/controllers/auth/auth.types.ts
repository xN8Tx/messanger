interface RequestEmailType extends Request {
  email: string;
}
interface RequestFullType extends RequestEmailType {
  code: number;
}

export type { RequestEmailType, RequestFullType };
