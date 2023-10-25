import { MouseEventHandler } from 'react';

interface Props {
  selectId: string;
  children?: React.ReactNode;
  onSelect: MouseEventHandler;
  onCancel?: MouseEventHandler;
  style?: { [key: string]: any };
}

const SelectOption = ({
  selectId,
  id,
  onSelect,
  onCancel,
  children,
  ...props
}: Props) => {
  const handleKeyDown = (event: any) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      onSelect(event);
      return;
    }
    switch (event.key) {
      case 'Escape':
        // event.preventDefault();
        // const inputContainerElement = event.target.closest('[data-select-id]');

        // inputContainerElement.children[0].focus();

        if (onCancel) onCancel(event);
      case 'ArrowUp':
        event.preventDefault();

        if (
          event.target.previousSibling &&
          event.target.previousSibling.dataset &&
          event.target.previousSibling.dataset.option
        ) {
          event.target.previousSibling.focus();
        }
        return;
      case 'ArrowDown':
        event.preventDefault();
        if (
          event.target.nextSibling &&
          event.target.nextSibling.dataset &&
          event.target.nextSibling.dataset.option
        ) {
          event.target.nextSibling.focus();
        }
        return;
    }
  };
  return (
    <div
      data-option={true}
      data-option-id={id}
      aria-disabled="false"
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      onClick={onSelect}
      {...props}
    >
      {children}
    </div>
  );
};

export default SelectOption;
