import { fireEvent, render, screen } from '@testing-library/react';

import { Modal } from '../Modal';

const onClose = jest.fn();

describe('Modal snapshots', () => {
  test('should render modal', () => {
    const tree = render(
      <Modal isOpen={true} onClose={onClose}>
        <h1>Modal children</h1>
      </Modal>
    );

    expect(tree).toMatchSnapshot();
  });

  test('should not render modal', () => {
    const tree = render(
      <Modal isOpen={false} onClose={onClose}>
        <h1>Modal children</h1>
      </Modal>
    );

    expect(tree).toMatchSnapshot();
  });
});

describe('Modal behavior', () => {
  test('should render title', () => {
    render(
      <Modal isOpen={true} onClose={onClose} title="Modal title">
        <h1>Modal children</h1>
      </Modal>
    );

    const title = screen.getByText('Modal title');

    expect(title).toBeInTheDocument();
  });

  test('should click on close button', () => {
    render(
      <Modal isOpen={true} onClose={onClose}>
        <h1>Modal children</h1>
      </Modal>
    );

    const closeButton = screen.getByRole('button');

    fireEvent.click(closeButton);

    expect(onClose).toBeCalledTimes(1);
  });
});
