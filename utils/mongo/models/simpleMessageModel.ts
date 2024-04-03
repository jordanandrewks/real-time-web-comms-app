import mongoose from 'mongoose';

const { Schema } = mongoose;

const simpleMessageSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const SimpleMessage =
  mongoose.models.SimpleMessage ||
  mongoose.model('SimpleMessage', simpleMessageSchema, 'simple_message_demo');
