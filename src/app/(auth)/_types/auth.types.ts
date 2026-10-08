import { InferOutput } from 'valibot';
import { SignInSchema } from './auth.schema';


export type SignInModel = InferOutput<typeof SignInSchema>;
