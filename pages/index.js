import Head from "next/head";

import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>Next Events</title>
        <meta name="description" content="A lot of events"></meta>
      </Head>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
