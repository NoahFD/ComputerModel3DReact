
# React Three Fiber + Vite

This is a React application bootstrapped with Vite and with React Three Fiber for 3D Modelling.
## Setup

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository_url>
   cd <repository_directory>
   ```

2. **Install dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Using yarn:

   ```bash
   yarn install
   ```

### Running the Application

To start the development server, use the following command:

Using npm:

```bash
npm run dev
```

Using yarn:

```bash
yarn dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

To build the application for production, use the following command:

Using npm:

```bash
npm run build
```

Using yarn:

```bash
yarn build
```

The production-ready files will be generated in the `dist` directory.

### Previewing the Production Build

To preview the production build, you can use the following command:

Using npm:

```bash
npm run serve
```

Using yarn:

```bash
yarn serve
```

This will start a local server and serve the files from the `dist` directory.

## Scripts

- `dev`: Starts the development server.
- `build`: Builds the application for production.
- `serve`: Serves the production build locally.

## Environment Variables

To configure environment variables, create a `.env` file in the root directory. For example:

```env
VITE_API_URL=https://api.example.com
```

Access these variables in your code using `import.meta.env`:

```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## License

This project is licensed under the MIT License.
