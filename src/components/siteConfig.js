export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Stair Lift Connect',
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || '877-799-3212',
  phoneTel: process.env.NEXT_PUBLIC_PHONE_TEL || '+18777993212',
  hoursShort: 'Mon–Fri 7am–10pm EST | Sat 8am–10pm EST | Sun 7am–9pm EST',
  hoursFull: [
    ['Monday through Friday', '7am - 10pm EST'],
    ['Saturday', '8am - 10pm EST'],
    ['Sunday', '7am - 9pm EST'],
  ],
};
