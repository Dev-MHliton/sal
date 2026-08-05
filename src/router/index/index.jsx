import { createBrowserRouter } from "react-router-dom";
import publicRoute from "../public/publicRoute";
import privateRoute from "../private/privateRoute";

export const router = createBrowserRouter([
    ...publicRoute,
    ...privateRoute,
])