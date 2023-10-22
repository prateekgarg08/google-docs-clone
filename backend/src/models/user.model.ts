import { Document, model, Schema, Types } from "mongoose";
// import bcrypt from "bcrypt";
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
interface UserInput {
  name: string;
  email: string;
  password: string;
}
interface IUser extends UserInput, Document {
  documentAccess: [
    {
      document: Types.ObjectId;
      acessLevel: "viewer" | "editor" | "owner";
    }
  ];
  createJWT(): string;
  verifyPassword(providedPassword: string): Promise<boolean>;
}

const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, "proivde name"],
  },
  email: {
    type: String,
    required: [true, "proivde email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
  },
  documentAccess: [
    {
      document: {
        type: Types.ObjectId,
        ref: "Document",
      },
      accessLevel: {
        type: String,
        enum: ["viewer", "editor", "owner"],
      },
    },
  ],
});
UserSchema.pre("save", async function (this: IUser, next: (err?: Error) => void) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
UserSchema.methods.createJWT = function (this: IUser): string {
  return jwt.sign({ id: this._id, name: this.name }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};
UserSchema.methods.verifyPassword = async function (this: IUser, providedPassword: string): Promise<boolean> {
  const isMatch = await bcrypt.compare(providedPassword, this.password);

  return isMatch;
};
const User = model<IUser>("User", UserSchema);
export default User;
