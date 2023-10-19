import { useRouter } from "next/router";
import { Fragment } from "react";

import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYears = filterData[0];
  const filteredMonths = filterData[1];

  const numYear = +filteredYears;
  const numMonths = +filteredMonths;

  if (
    isNaN(numYear) ||
    isNaN(numMonths) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonths > 12 ||
    numMonths < 1
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid Filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const fileteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonths,
  });

  if (!fileteredEvents || fileteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonths - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={fileteredEvents} />
    </Fragment>
  );
}

export default FilteredEventsPage;
