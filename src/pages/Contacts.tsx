import { ActionFunction, Form, Link, useLoaderData } from "react-router";
import { createContact, getContacts } from "../api/contactsApi";

export const contactsLoader = async () => {
  const contacts = await getContacts();
  return {
    contacts
  }
}

export const createContactAction: ActionFunction = async ({
  request
}) => {
  const formData = await request.formData();
  const first = formData.get('first')?.toString();
  const last = formData.get('last')?.toString();
  const email = formData.get('email')?.toString();
  if (!email || !first || !last) {
    throw new Error('First name, last name, and email are required');
  }

  const contact = await createContact({
    name: {
      first,
      last
    },
    email
  });
  return contact
}

const ContactsPage = () => {
  const { contacts } = useLoaderData() as Awaited<ReturnType<typeof contactsLoader>>;

  return (
    <div className="flex flex-col gap-10">
      <div className="card bg-base-200 shadow-xl max-w-2xl mx-auto w-full">
        <div className="card-body">
          <h2 className="card-title justify-center text-2xl mb-4 text-primary">Add New Contact</h2>
          <Form action="./" method="POST" className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-medium">First Name</span>
                </label>
                <input
                  name="first"
                  type="text"
                  placeholder="John"
                  className="input input-bordered w-full focus:input-primary"
                  required
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-medium">Last Name</span>
                </label>
                <input
                  name="last"
                  type="text"
                  placeholder="Doe"
                  className="input input-bordered w-full focus:input-primary"
                  required
                />
              </div>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Email Address</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="john.doe@example.com"
                className="input input-bordered w-full focus:input-primary"
                required
              />
            </div>

            <div className="card-actions justify-end mt-4">
              <button className="btn btn-primary w-full md:w-auto">
                Add Contact
              </button>
            </div>
          </Form>
        </div>
      </div>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center border-b border-white/10 pb-4">My Contacts</h2>
        {contacts.length === 0 ? (
          <div className="text-center py-10 opacity-50">
            <p className="text-xl">No contacts found. Add one above!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {contacts.map((contact) => (
              <div key={contact.login.uuid} className="card bg-base-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="card-body items-center text-center p-6">
                  <div className="avatar mb-3">
                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      {contact.picture ? (
                        <img src={contact.picture.medium} alt={`${contact.name.first} ${contact.name.last}`} />
                      ) : (
                        <div className="bg-neutral text-neutral-content w-full h-full flex items-center justify-center text-2xl font-bold">
                          {contact.name.first[0]}{contact.name.last[0]}
                        </div>
                      )}
                    </div>
                  </div>
                  <h3 className="card-title text-xl">
                    {contact.name.first} {contact.name.last}
                  </h3>
                  <p className="text-sm opacity-70 break-all">{contact.email}</p>

                  <div className="divider my-2"></div>

                  <div className="card-actions justify-between w-full mt-2">
                    <Link to={`/contacts/${contact.login.uuid}`} className="btn btn-sm btn-ghost text-info">
                      View
                    </Link>
                    <Link to={`/contacts/${contact.login.uuid}/edit`} className="btn btn-sm btn-ghost text-success">
                      Edit
                    </Link>

                    <Form method="delete" onSubmit={(event) => {
                      const result = confirm('Delete this contact?');
                      if (!result) event.preventDefault();
                    }} action={`/contacts/${contact.login.uuid}/destroy`}>
                      <button className="btn btn-sm btn-ghost text-error">
                        Delete
                      </button>
                    </Form>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default ContactsPage;
