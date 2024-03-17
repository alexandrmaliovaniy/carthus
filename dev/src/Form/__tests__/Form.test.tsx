import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Form from './..'

test('Initial testing component: Form', async () => {
    render(<Form />)

})