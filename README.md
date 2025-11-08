# Bladeware Frontend Installation on Cloudflare Workers

This guide provides step-by-step instructions for deploying the Bladeware frontend application to Cloudflare Workers.

## Prerequisites

1.  A Cloudflare account.
2.  Node.js and npm installed on your local machine.
3.  The `wrangler` CLI tool, Cloudflare's command-line tool for managing Worker projects.

---

## Step 1: Install Wrangler CLI

If you don't have Wrangler installed, open your terminal and run the following command:

```bash
npm install -g wrangler
```

---

## Step 2: Configure Your Project for Cloudflare

1.  **Authenticate Wrangler:**
    Log in to your Cloudflare account using Wrangler. This will open a browser window for you to authorize.
    ```bash
    wrangler login
    ```

2.  **Configure `wrangler.jsonc`:**
    Your project should already have a `wrangler.jsonc` or `wrangler.toml` file. Ensure it is configured correctly. For a Vite-based Vue.js app, it might look something like this:

    **`wrangler.jsonc`**
    ```json
    {
      "name": "bladeware-frontend",
      "main": "dist/index.js", // Adjust if your entry point is different
      "compatibility_date": "2025-11-08",
      "assets": {
        "bucket": "./dist",
        "include": ["**/*"],
        "exclude": ["index.html"]
      }
    }
    ```
    *   `name`: A unique name for your Worker.
    *   `main`: The entry point for your worker script (usually not needed for static sites).
    *   `compatibility_date`: Ensures your worker runs with a specific version of the Workers runtime.
    *   `assets`: Configures the project as a static site by pointing to the build output directory (`dist`).

---

## Step 3: Build and Deploy

1.  **Build Your Vue.js Application:**
    Run the build command to generate the static files in the `dist` directory.
    ```bash
    npm run build
    ```

2.  **Deploy to Cloudflare Workers:**
    Deploy your application using Wrangler. This command will upload your `dist` directory to Cloudflare.
    ```bash
    wrangler pages deploy dist
    ```
    After a successful deployment, Wrangler will provide you with a URL where your application is live (e.g., `https://<your-project>.<your-subdomain>.pages.dev`).

---

## Step 4: Setting Up a Custom Route (Custom Domain)

To serve your application from a custom domain (e.g., `app.yourdomain.com`) instead of the default `.pages.dev` URL, follow these steps:

1.  **Navigate to Your Cloudflare Dashboard:**
    *   Go to the **Workers & Pages** section.
    *   Select your deployed project.

2.  **Add a Custom Domain:**
    *   Go to the **"Custom Domains"** tab.
    *   Click **"Set up a domain"**.
    *   Enter the domain you want to use (e.g., `app.yourdomain.com`).

3.  **Update DNS Records:**
    *   Cloudflare will instruct you to add a `CNAME` record in your DNS settings for that domain.
    *   Go to the **DNS** section of your Cloudflare dashboard for the corresponding zone (e.g., `yourdomain.com`).
    *   Add a new `CNAME` record:
        *   **Type:** `CNAME`
        *   **Name:** `app` (or your chosen subdomain)
        *   **Target:** Your Pages project URL (e.g., `<your-project>.<your-subdomain>.pages.dev`).
        *   **Proxy status:** Must be **Proxied** (orange cloud).

Cloudflare will automatically handle SSL and route traffic from your custom domain to your deployed Worker application. Your Bladeware frontend is now accessible via your custom domain.
