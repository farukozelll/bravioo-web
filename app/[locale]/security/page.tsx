import { Metadata } from 'next';
import { SecurityCompliance } from '@/components/sections/security-compliance';

export const metadata: Metadata = {
  title: 'Güvenlik | Security - Bravioo',
  description: 'Bravioo güvenlik standartları, ISO 27001, SOC 2, GDPR/KVKK uyumluluğu ve veri koruma politikaları.',
};

export default function SecurityPage() {
  return (
    <main className="min-h-screen pt-20">
      <SecurityCompliance />
    </main>
  );
}
