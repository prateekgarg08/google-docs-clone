export interface IRequestUser extends Request {
  user: {
    userId: string;
    name: string;
  };
}
export type IAuthRequest = Request & {
  headers: { authorization: string };
};
