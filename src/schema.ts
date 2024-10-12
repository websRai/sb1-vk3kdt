import { pgTable, serial, text, timestamp, jsonb } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  username: text('username').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const dataStreams = pgTable('data_streams', {
  id: serial('id').primaryKey(),
  userId: serial('user_id').references(() => users.id),
  data: jsonb('data').notNull(),
  timestamp: timestamp('timestamp').defaultNow(),
});