import { useEffect, useState } from 'react';

export const Filter = ({ text, active, selected, setSelected, item, buttons, setButtons }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  useEffect(() => {
    active && setIsActive(true);
  }, [active]);
  const handleClick = () => {
    if (isActive) {
      let removeFilter = selected;
      item.items.map((item) => {
        delete removeFilter[removeFilter.indexOf(item)];
      });
      setSelected(removeFilter.filter(Boolean));
      setButtons(buttons.filter((actual) => actual !== item.id));
    }
    if (!isActive) {
      setSelected([...selected.filter(Boolean), ...item.items]);
      setButtons([...buttons, item.id]);
    }
    setIsActive(!isActive);
  };

  return (
    <button
      className={
        isActive
          ? 'border rounded-lg border-primary-black bg-primary-black text-primary-white p-4'
          : 'border rounded-lg border-secondary-10 p-4 text-secondary-60'
      }
      onClick={handleClick}
    >
      <p className="text-left text-s3">{text}</p>
    </button>
  );
};
