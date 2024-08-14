import { routes } from "../lib/data";
import styles from "@/app/ui/events.module.scss";

export default async function Events() {
  //fetch events data from API
  const eventsData = await fetch(
    "https://d75fe7de-5459-4e69-8d34-76e465dcccf7.mock.pstmn.io/getEvents"
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return (
    <div className={styles.main}>
      <div className={styles.header}>{routes.futureEvents}</div>
      <div className={styles.container}>
        {eventsData.map((event) => (
          <div key={event.id} className={styles.item}>
            <div>{event.name}</div>
            <div>{new Date(event.eventDate).toLocaleDateString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
