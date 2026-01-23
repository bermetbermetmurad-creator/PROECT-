import emailjs from "emailjs-com";

const SERVICE_ID = "service_iix6dd9";
const TEMPLATE_ORDER = "template_17984gs"; // твой template ID
const PUBLIC_KEY = "h7YgMrc-s210-NanN";

export const sendOrderEmail = (orderData) => {
  const {
    userName,
    userEmail,
    phone,
    address,
    payment,
    delivery,
    cartItems,
    totalPrice,
  } = orderData;

  const productsText = cartItems
    .map(
      (item, index) =>
        `${index + 1}. ${item.name} (${item.job || ""})
Количество: ${item.quantity}
Цена: ${item.price} ₽`
    )
    .join("\n\n");

  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ORDER,
    {
      user_name: userName,
      user_email: userEmail,
      products: `
Телефон: ${phone}
Адрес: ${address}
Оплата: ${payment}
Доставка: ${delivery}

Товары:
${productsText}

Итого: ${totalPrice} ₽
      `,
    },
    PUBLIC_KEY
  );
};
