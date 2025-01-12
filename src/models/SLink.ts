import mongoose, { Document, Model, Schema } from 'mongoose';

export interface ISLink extends Document {
  code: string;
  full_link: string;
}

const SLinkSchema: Schema<ISLink> = new Schema({
  code: { type: String, required: true },
  full_link: { type: String, required: true },
});

export const SLink: Model<ISLink> = mongoose.models.SLink || mongoose.model<ISLink>('SLink', SLinkSchema);
