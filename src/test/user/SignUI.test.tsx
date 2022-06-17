import { fireEvent, render, RenderResult, screen } from '@testing-library/react';
import SignTemplate from '@components/Sign/SignTemplate';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';

describe('로그인 페이지 UI 테스트 ', () => {
  const initialState = { isLogin: false };
  const mockStore = configureStore();
  let store;

  const renderSignTamplate = (): RenderResult => {
    store = mockStore(initialState);
    return render(
      <Provider store={store}>
        <MemoryRouter>
          <SignTemplate />
        </MemoryRouter>
      </Provider>
    );
  };

  it('렌더링 UI테스트 입니다. ', () => {
    renderSignTamplate();
    const formTitle = screen.getByTestId('sign-page');
    expect(formTitle).toBeInTheDocument();
  });

  it('로그인 절차 페이지 단위테스트', () => {});
});
