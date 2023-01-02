import { getByTestId, render, screen } from '@testing-library/react';
import App from './App';
import FollowersFollowing from './pages/FollowersFollowing';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
describe("Test the App Component", () => {
  test("header renders with react testing tutorial in the document", () => {
    const component = render(<App />);
    const linkElement = component.getByText(/Loading/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("render login component in doucment", () => {
    const { getByTestId} = render(<App />);
    const childElement = getByTestId("User ID:");
    expect(childElement).toBeTruthy();
  });
});
