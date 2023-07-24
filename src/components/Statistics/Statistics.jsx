import PropTypes from 'prop-types';
import css from "./Statistics.module.css";

export const Statistics = props => {
    const { buttons, total, positivePercentage } = props;
    const pct = positivePercentage();
    
    const addEmoji = (pct) => {
        return (pct >= 80
            ?
            '🤩'
            :
            (pct >= 50
                ?
                '😏'
                :
                (pct >= 20
                    ?
                    '😐'
                    :
                    '🗿🗿🗿'
                )
            ))
    };

    return (
        <ul className={css.statsContainer}>
            {buttons.map((item, index) => (
                <li key={index}>
                    <p>
                        {item}: <span>{props[item.toLowerCase()]}</span>
                    </p>
                </li>
            ))}
            <li>
                <p>
                    Total: {total()}
                </p>
            </li>
            <li>
                <p>
                    Positive feedback: {pct}%
                    {" "}
                    {
                        addEmoji(pct)
                    }
                </p>
            </li>
        </ul>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    buttons: PropTypes.arrayOf(PropTypes.string),
    total: PropTypes.func,
    positivePercentage: PropTypes.func,
};