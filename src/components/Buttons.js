const Buttons = ({ text, type, onClick }) => {
  const btnType = ['positive', 'negative'].includes(type) ? type : 'default';

  return (
    <button
      className={['Buttons', `Buttons_${btnType}`].join(' ')}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Buttons.defaultProps = {
  type: 'default',
};

export default Buttons;
