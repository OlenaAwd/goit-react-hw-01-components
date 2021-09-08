import PropTypes from 'prop-types';
import styles from './StatisticsTitle.module.css';

function StatisticsTitle({ title }) {
  return title && <h2 className={styles.title}>{title}</h2>;
}

StatisticsTitle.propTypes = {
  title: PropTypes.string,
};

export default StatisticsTitle;
