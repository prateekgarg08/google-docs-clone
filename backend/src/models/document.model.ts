import { Document, Schema, model, Types } from "mongoose";

interface DocumentInput {
  title: string;
  data: object;
  createdBy: Types.ObjectId;
}
interface IDocument extends DocumentInput, Document {
  access: [{ user: Types.ObjectId; accessLevel: "viewer" | "editor" | "owner" }];
  publicAccess: "view" | "edit" | "none";
  createdAt: Date;
}

const DocumentSchema = new Schema<IDocument>({
  title: {
    type: String,
    required: [true, "Please provied a title"],
  },

  data: { type: Object, default: "" },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide user"],
  },
  access: {
    type: [
      {
        user: {
          type: Types.ObjectId,
          ref: "User",
        },
        accessLevel: {
          type: String,
          enum: ["viewer", "editor", "owner"],
        },
      },
    ],
    default: function () {
      return [{ user: this.createdBy, accessLevel: "owner" }];
    },
  },
  publicAccess: {
    type: String,
    enum: ["view", "edit", "none"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Doc = model<IDocument>("Document", DocumentSchema);

export default Doc;
