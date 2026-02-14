import { Form, useLoaderData, redirect, ActionFunction, useNavigate } from "react-router";
import { Contact } from "../types";
import { getContactById, editContact } from "../api/contactsApi";

type LoaderParams = {
    params: {
        contactId?: string;
    };
};

export const contactLoader = async ({ params }: LoaderParams) => {
    if (!params.contactId) {
        throw new Error("No contact ID provided");
    }
    const contact = await getContactById(params.contactId);
    if (!contact) {
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }
    return { contact };
};

export const editAction: ActionFunction = async ({ request, params }) => {
    const formData = await request.formData();
    const updates = {
        name: {
            first: formData.get("first") as string,
            last: formData.get("last") as string,
        },
        email: formData.get("email") as string,
        picture: {
            thumbnail: formData.get("url") as string,
            medium: formData.get("url") as string,
            large: formData.get("url") as string,
        }
    };
    if (!params.contactId) {
        throw new Error("No contact ID provided for update");
    }
    await editContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`);
};

const EditContact = () => {
    const { contact } = useLoaderData() as { contact: Contact };
    const navigate = useNavigate();

    return (
        <div className="card bg-base-200 shadow-xl max-w-2xl mx-auto mt-8">
            <div className="card-body">
                <h2 className="card-title justify-center text-3xl mb-6 text-primary">Edit Contact</h2>
                <Form method="post" id="contact-form" className="flex flex-col gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Profile Picture URL</span>
                        </label>
                        <input
                            type="url"
                            name="url"
                            defaultValue={contact.picture?.thumbnail}
                            placeholder="https://example.com/image.jpg"
                            className="input input-bordered w-full focus:input-primary"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-medium">First Name</span>
                            </label>
                            <input
                                type="text"
                                name="first"
                                defaultValue={contact.name.first}
                                placeholder="First Name"
                                className="input input-bordered w-full focus:input-primary"
                                required
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-medium">Last Name</span>
                            </label>
                            <input
                                type="text"
                                name="last"
                                defaultValue={contact.name.last}
                                placeholder="Last Name"
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
                            type="email"
                            name="email"
                            defaultValue={contact.email}
                            placeholder="email@example.com"
                            className="input input-bordered w-full focus:input-primary"
                            required
                        />
                    </div>

                    <div className="card-actions justify-end mt-6 gap-3">
                        <button type="button" className="btn btn-ghost hover:bg-base-300" onClick={() => navigate(-1)}>
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-primary px-8">
                            Save Changes
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default EditContact;