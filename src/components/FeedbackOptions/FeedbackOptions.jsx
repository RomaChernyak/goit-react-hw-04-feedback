import PropTypes from 'prop-types';
import css from "./FeedbackOptions.module.css";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            <ul className={css.buttonGroup}>
                {
                    options.map((item, index) => (
                        <li key={index}>
                            <button type="button" onClick={onLeaveFeedback} className={css.button}>
                                {item}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};