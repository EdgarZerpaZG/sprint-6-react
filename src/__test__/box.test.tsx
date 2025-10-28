import {expect, test} from 'vitest';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Box from './../components/campaigns/box/box';

test('Box should return a function(campaign, id, description, price)', () => {
    expect(typeof Box).toBe('function')
})