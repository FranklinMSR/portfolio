import styles from "./Timeline.module.scss";

interface TimelineItemProps {
  date: string;
  location?: string;
  city?: string;
  title: string;
  subtitle?: string;
  text?: string;
}

export default function TimelineItem({
  date,
  location,
  city,
  title,
  subtitle,
  text,
}: TimelineItemProps) {
  return (
    <div className={styles.timelineItem}>
      <div className={`${styles.circleDot} ${styles.shineEffect}`}></div>
      <h3 className={styles.timelineDate}>
        <i className="fa fa-calendar"></i> {date}
      </h3>
      <h6 className="fa fa-map-marker-alt">{location}</h6> <i style={{ fontSize: '13px' }} className={styles.timelineTitle}>{city}</i>
      <br />
      <br />
      <h4 className={styles.timelineTitle}>{title}</h4>
      <h4 className={styles.timelineSubtitle}>{subtitle}</h4>
      <p className={styles.timelineText}>{text}</p>
    </div>
  );
}
