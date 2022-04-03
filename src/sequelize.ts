/* eslint-disable linebreak-style */
import 'dotenv/config';

import mongoose from 'mongoose';

export const connect = async (): Promise<void> => {
  try {
    const connectString = process.env.CONNECTION_STRING as string;
    await mongoose.connect(connectString);
    console.log('is connected');
  } catch (err: unknown) {
    console.log(`refused to connect: ${err}`);
  }
};
