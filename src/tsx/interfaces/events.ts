import { ChangeEvent, FormEvent } from 'react';

export type ChangeEventType = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;
export type BlurEventType = { target: { name: string } };
export type FormEventType = FormEvent<HTMLFormElement>;
