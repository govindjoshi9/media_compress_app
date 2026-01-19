/**
 * Utility to create page URLs for the application.
 * This helps in maintaining a single source of truth for routes.
 */

export const ROUTES = {
    Home: '/',
    Blog: '/blog',
    BlogPost: '/blog', // We'll handle the slug separately if needed, or update this
    Download: '/download',
    Pricing: '/pricing',
    Privacy: '/Privacy',
    Terms: '/Terms',
} as const;

export type PageName = keyof typeof ROUTES;

/**
 * Generates a URL for the given page name.
 * @param page The name of the page to navigate to.
 * @returns The URL path for the page.
 */
export function createPageUrl(page: PageName): string {
    return ROUTES[page] || '/';
}
