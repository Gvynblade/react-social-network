import { render } from '@testing-library/react';
import React from 'react';

import { create } from "react-test-renderer";

import App from './App';
import ProfileStatus from
  './components/profile/profileInfo/profileStatus/profileStatus';

describe("ProfileStatus component ", () => {
    test("Status from props should be in the state", () => {
        const component = create(<ProfileStatus status="test status" />)
        const instance = component.getInstance()
        expect(instance.state.status).toBe("test status")
    });
});

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
