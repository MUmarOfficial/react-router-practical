# React Router Contacts App

A modern contact management application built with React 19, React Router 7, and Vite. This application demonstrates advanced routing concepts, data loading, and effective state management in a React application.

## 🚀 Features

- **Contact Management**: Create, read, update, and delete (CRUD) contacts.
- **Search Functionality**: Real-time search to filter contacts.
- **Favorites**: Mark contacts as favorites for quick access.
- **Responsive Design**: optimized for various screen sizes using Tailwind CSS and DaisyUI.
- **Client-Side Routing**: Seamless navigation without full page reloads using React Router 7.
- **Data Loading**: Efficient data fetching with loaders and actions.

## 🛠️ Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) & [DaisyUI 5](https://daisyui.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Linting**: ESLint

## 📂 Project Structure

```
src/
├── api/            # API integration modules
│   └── contactsApi.ts  # Functions to interact with the backend API
├── assets/         # Static assets like images
├── components/     # Reusable UI components
├── pages/          # Page components corresponding to routes
│   ├── About/      # About page and its sub-routes
│   ├── Contacts.tsx    # List of contacts
│   ├── ContactDetail.tsx # detailed view of a single contact
│   ├── EditContact.tsx # Form to edit a contact
│   └── ...
├── routes.tsx      # Application routing configuration
├── App.tsx         # Main application component
└── main.tsx        # Entry point
```

## 🔌 Backend Integration

The application connects to a RESTful API for data persistence.

- **API Base URL**: `https://contacts-api-inky.vercel.app`
- **Endpoints**:
  - `GET /contacts`: Fetch all contacts
  - `POST /contacts`: Create a new contact
  - `GET /contacts/:id`: Get a specific contact
  - `PATCH /contacts/:id`: Update a contact
  - `DELETE /contacts/:id`: Delete a contact

## 🏁 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd react-router-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

## 📦 Building for Production

To create a production-ready build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```
