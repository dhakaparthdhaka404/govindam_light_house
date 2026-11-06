import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildProductEnquiryMessage,
  buildCustomEnquiryMessage,
  buildWhatsAppLink,
} from './whatsapp';

test('buildProductEnquiryMessage formats exact requested message', () => {
  const result = buildProductEnquiryMessage('Royal Grand Crystal Chandelier');
  assert.equal(
    result,
    'Hello Govindam Light House, I am interested in Royal Grand Crystal Chandelier. Please share more details and pricing.'
  );
});

test('buildCustomEnquiryMessage compiles full contact inquiry', () => {
  const msg = buildCustomEnquiryMessage({
    name: 'Vikram Singh',
    phone: '9829012345',
    product: 'Modern LED Ceiling Light',
    message: 'Looking for 4 units for living room renovation.',
  });

  assert.ok(msg.includes('Vikram Singh'));
  assert.ok(msg.includes('9829012345'));
  assert.ok(msg.includes('Modern LED Ceiling Light'));
  assert.ok(msg.includes('Looking for 4 units'));
});

test('buildWhatsAppLink generates valid wa.me url with encoded query', () => {
  const emptyLink = buildWhatsAppLink();
  assert.equal(emptyLink, 'https://wa.me/919829188634');

  const productMsg = buildProductEnquiryMessage('Crystal Chandelier');
  const link = buildWhatsAppLink(productMsg);
  assert.ok(link.startsWith('https://wa.me/919829188634?text='));
  assert.ok(link.includes('Crystal%20Chandelier'));
});
