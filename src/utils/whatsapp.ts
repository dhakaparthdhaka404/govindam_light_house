import { BUSINESS_INFO } from '../data/business';

export interface CustomEnquiryPayload {
  name: string;
  phone: string;
  product?: string;
  message?: string;
}

/**
 * Builds standard WhatsApp direct link for a product inquiry.
 * Generates exact message:
 * "Hello Govindam Light House, I am interested in [Product Name]. Please share more details and pricing."
 */
export function buildProductEnquiryMessage(productName: string): string {
  const trimmed = productName.trim();
  return `Hello Govindam Light House, I am interested in ${trimmed}. Please share more details and pricing.`;
}

/**
 * Builds custom inquiry message from the contact form.
 */
export function buildCustomEnquiryMessage(payload: CustomEnquiryPayload): string {
  const parts: string[] = [
    `Hello Govindam Light House,`,
    `I am submitting an enquiry from your website.`,
    `Name: ${payload.name.trim()}`,
    `Phone: ${payload.phone.trim()}`,
  ];

  if (payload.product && payload.product.trim()) {
    parts.push(`Product Interested In: ${payload.product.trim()}`);
  }

  if (payload.message && payload.message.trim()) {
    parts.push(`Message: ${payload.message.trim()}`);
  } else {
    parts.push(`Please share catalogue details and showroom location assistance.`);
  }

  return parts.join('\n');
}

/**
 * Constructs a fully encoded WhatsApp URL with prefilled text.
 */
export function buildWhatsAppLink(message?: string): string {
  const phone = BUSINESS_INFO.whatsappRaw;
  if (!message || !message.trim()) {
    return `https://wa.me/${phone}`;
  }
  return `https://wa.me/${phone}?text=${encodeURIComponent(message.trim())}`;
}
