import PropTypes from 'prop-types';
import css from './FeedackForm.module.css';


export const FeedbackForm = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.divFeedback}>
      {options.map(option => (
        <button
          className={css.btnOption}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackForm.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};