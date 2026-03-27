import { createBrowserRouter } from "react-router";
import { Dashboard } from "./pages/Dashboard";
import { Insights } from "./pages/Insights";
import { Interviews } from "./pages/Interviews";
import { Reddit } from "./pages/Reddit";
import { AIOutput } from "./pages/AIOutput";
import { PRD } from "./pages/PRD";
import { Tickets } from "./pages/Tickets";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Dashboard,
  },
  {
    path: "/ai-output",
    Component: AIOutput,
  },
  {
    path: "/prd",
    Component: PRD,
  },
  {
    path: "/tickets",
    Component: Tickets,
  },
  {
    path: "/insights",
    Component: Insights,
  },
  {
    path: "/interviews",
    Component: Interviews,
  },
  {
    path: "/reddit",
    Component: Reddit,
  },
]);
