import { redirect } from 'next/navigation';

/**
 * This page should show a landing page that allow the user can pick the language.
 * 
 * 
 */
export default function RootPage() {
    
    redirect('/en');
}