import { createI18nMiddleware } from 'next-international/middleware';
import { NextRequest } from "next/server";

//@ts-ignore
const I18nMiddleware = createI18nMiddleware({
    locales: ['da', 'en'],
    defaultLocale: 'da',
    resolveLocaleFromRequest: (request: any) => {
        // Do your logic here to resolve the locale
        return 'da'
    }
});


export const config = {
    // runtime: 'experimental-edge',
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - favicon.ico (favicon file)
         */
        // '/((?!api|_next/static|favicon.ico).*)',
        '/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'
    ]
}
 
export async function middleware(req: NextRequest) {
     
    return I18nMiddleware(req);

}
