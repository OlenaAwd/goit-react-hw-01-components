import PropTypes from 'prop-types';
import styles from './statistics.module.css';
import StatisticsTitle from './StatisticsTitle';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    <StatisticsTitle title={title} />
    <ul className={styles.stat_list}>
      {stats.map(stat => (
        <li className={styles.item} key={stat.id}>
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
