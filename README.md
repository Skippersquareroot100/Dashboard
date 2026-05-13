# Dashboard

A Nuxt 3 admin dashboard for managing an ecommerce or merchant operations workflow. The project combines authentication, shop profile management, products, orders, customers, reports, billing, invoicing, coupon management, lucky spin rewards, and transaction ID generation in one Tailwind-powered interface.

## Project Overview

This dashboard is built as a client-facing admin panel with file-based Nuxt pages and reusable sidebar/navigation patterns. Some modules work with browser `localStorage` for quick in-app persistence, while customer, billing, and lucky spin flows connect to backend API endpoints.

Core workflows include:

- Login and token persistence through Pinia and browser storage.
- Protected dashboard pages with Nuxt route middleware.
- Shop profile editing with logo upload, business details, and QR code generation.
- Product creation and product browsing backed by local browser storage.
- Order filtering by type, status, and customer phone.
- Customer management with paginated API requests.
- Sales reporting with monthly values saved locally and visualized with Chart.js.
- Billing/withdraw approval workflows using authenticated API calls.
- Invoice item calculation with discount and tax support.
- Coupon creation, filtering, removal, and export.
- Lucky spin reward management using API-backed spinner items.
- Bulk transaction ID generation with CSV, PDF, TXT, and JSON export options.

## Tech Stack

- Nuxt 3
- Vue 3 Composition API
- TypeScript support
- Tailwind CSS
- Pinia
- Axios and native `fetch`
- Chart.js / vue-chart-3
- jsPDF and jspdf-autotable
- qrcode.vue
- vue3-fortune-wheel
- Nuxt Image, Color Mode, Device, and VueUse modules

## Project Structure

```text
Dashboard/
├── pages/              # Nuxt file-based routes and dashboard screens
├── components/         # Reusable dashboard widgets and sidebar components
├── store/modules/      # Auth Pinia store
├── stores/             # Dashboard data stores
├── middleware/         # Auth route middleware
├── plugins/            # Auth initialization plugin
├── composable/         # Shared composables
├── utils/              # API, Redis, notifications, validation helpers
├── public/             # Static assets
└── server/             # Nuxt server TypeScript config
```

## Main Routes

- `/` - Login screen.
- `/dashboard` - Main overview with totals, shop shortcut, and sales chart.
- `/products` and `/addproduct` - Product list and product creation.
- `/orders` and `/orders-stats` - Order list, filters, and order statistics.
- `/customers` - Paginated customer API management.
- `/reports` - Monthly income and payment method reporting.
- `/manageShop` - Shop details, logo upload, and QR code.
- `/cupon` - Coupon management.
- `/invoicing` - Invoice builder and totals calculator.
- `/luckyspin` and `/spinset` - Lucky spin/reward management.
- `/billing` - Withdrawal and billing approval workflow.
- `/transaction-id` - Bulk transaction ID generation and export.

## Environment Variables

Create a `.env` file in the project root when connecting the dashboard to an API:

```bash
VITE_API_BASE_URL=https://your-api.example.com/api
VITE_API_URL=https://your-api.example.com/api
```

Notes:

- `VITE_API_BASE_URL` is used by authentication and lucky spin modules.
- `VITE_API_URL` is used by `utils/api.ts`.
- Some pages currently call `https://apexdrive365.com/api` directly. If you deploy this for another backend, update those hard-coded URLs or centralize them through `utils/api.ts`.

## Setup

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The Nuxt app runs at:

```text
http://localhost:3000
```

Build for production:

```bash
npm run build
```

Preview a production build:

```bash
npm run preview
```

Generate a static build:

```bash
npm run generate
```

## Implementation Notes

- Authentication state is managed in `store/modules/auth.ts` and initialized by `plugins/auth-init.ts`.
- Route protection is handled by `middleware/auth.ts` and `middleware/auth.global.js`.
- Several dashboard pages depend on browser-only APIs such as `localStorage`, so client-side rendering behavior should be considered when refactoring.
- Shop data is saved as `shopData` in `localStorage` and reused by dashboard headers.
- Sales report data is saved as `salesData` in `localStorage` and read by the dashboard chart.
- Products, transaction IDs, categories, and brands also use local browser storage for persistence.
- Customer and billing pages require a bearer token from local storage.


