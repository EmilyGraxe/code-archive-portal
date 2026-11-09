import { createFileRoute, redirect } from "@tanstack/react-router";

// Old address from the previous site; keeps existing links working.
export const Route = createFileRoute("/HotelGuesthouse")({
  beforeLoad: () => {
    throw redirect({ to: "/hotels" });
  },
});
