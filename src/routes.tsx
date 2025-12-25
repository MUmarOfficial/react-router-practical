import {
  Navigate,
  Route,
  createRoutesFromElements,
  createHashRouter,
} from "react-router";
import NotFoundPage from "./pages/NotFound";
import RootLayout from "./pages/Root";
import ContactDetailPage, { contactByIdLoader } from "./pages/ContactDetail";
import { ContactNotFoundPage } from "./pages/ContactNotFound";
import ContactsPage, { contactsLoader, createContactAction } from "./pages/Contacts";
import { destroyContactAction } from "./pages/ContactDestroy";
import About from "./pages/About/About";
import Info from "./pages/About/Info";
import Settings from "./pages/About/Settings";
import EditContact, { contactLoader as editContactLoader, editAction } from "./pages/EditContact";

const appRouter = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<NotFoundPage />}>
      <Route
        index={true}
        element={<Navigate to={"contacts"} replace={true} />}
      />

      <Route
        path="contacts"
        action={createContactAction}
        loader={contactsLoader}
        element={<ContactsPage />}
      />

      <Route
        path="contacts/:contactId"
        loader={contactByIdLoader}
        element={<ContactDetailPage />}
        errorElement={<ContactNotFoundPage />}
      />

      <Route action={destroyContactAction} path="contacts/:contactId/destroy" />

      <Route
        path="contacts/:contactId/edit"
        element={<EditContact />}
        loader={editContactLoader}
        action={editAction}
      />

      <Route path="about" element={<About />}>
        <Route
          index={true}
          element={
            <div className="text-center">
              <h2 className="text-2xl">This is the about page</h2>
            </div>
          }
        />
        <Route path="info" element={<Info />} />
        <Route path="settings" element={<Settings />} />
      </Route>

    </Route>,
  ),
);

export default appRouter;
