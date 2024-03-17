import React from 'react';
import { z } from 'zod';

const TestSchema = z.object({
    hui: z.boolean()
});

type ITestSchema = z.infer<typeof TestSchema>;

export type { ITestSchema };
export default TestSchema;