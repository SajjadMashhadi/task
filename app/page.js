import { Suspense } from "react";
import styles from "./page.module.scss";
import Events from "./ui/events";
import { routes } from "./lib/data";
import Tab from "./ui/tab";
import Chart from "./ui/chart";
import Loading from "./ui/Loading";

export default async function Home() {
  //fetch charts data from API
  const chartData = await fetch(
    "https://d75fe7de-5459-4e69-8d34-76e465dcccf7.mock.pstmn.io/getChartsData"
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return (
    <main className={styles.main}>
      <h2 className={styles.header}>{routes.myAthletes}</h2>
      <Tab />
      <Suspense fallback={<Loading />}>
        <Chart chartData={chartData} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Events />
      </Suspense>
    </main>
  );
}
