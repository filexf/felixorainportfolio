// src/app/contact/page.tsx
import ContactPage from '@/components/page-components/ContactPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Félix Orain',
  description: 'Contactez-moi pour vos projets de développement web et photographie à Rennes, Bretagne.',
};

export default function Contact() {
  return <ContactPage />;
}
