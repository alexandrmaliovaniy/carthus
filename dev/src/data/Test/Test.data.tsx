import React from 'react';
import { CreateData, ReturnData } from '@carthus/core';
import TestSchema from './Schema/Test.schema'
import TestSource from './Source/Test.source'

const TestData = CreateData({
    Schema: TestSchema,
    Source: TestSource,
    middleware: [] as const
})

TestData()
    .then(e => {
        e.
    })

export type ITestData = ReturnData<typeof TestData>
export default TestData;