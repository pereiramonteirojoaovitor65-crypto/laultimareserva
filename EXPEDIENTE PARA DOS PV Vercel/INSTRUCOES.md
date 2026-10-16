# La Última Reserva — PV en español

Versión estática, sin paquetes ni compilación. Assets locales optimizados.

## Vercel
Subir el contenido de `dist` como raíz de un repositorio nuevo. En Vercel, importar el repositorio con Framework Preset `Other`, sin Build Command y sin Output Directory adicional. Alternativamente publicar esta estructura completa declarando `dist` como Output Directory.

## Antes de tráfico pago
1. En Hotmart crear/configurar la oferta del principal con precio US$12,90 y entrega de la edición de ocho desafíos.
2. Editar `dist/config.js`: sustituir checkoutUrl vacío por el enlace real HTTPS de pago. El enlace debe pertenecer a pay.hotmart.com, payment.hotmart.com o checkout.hotmart.com. En el ZIP Vercel, config.js estará en la raíz.
3. Confirmar que el checkout muestra el producto, precio, impuestos, garantía y medios de pago correctos. La página no inventa un plazo de garantía; se remite al checkout.
4. Completar información fiscal/comercial y canales de soporte conforme al vendedor y a los países atendidos. No se inventó identidad legal ni contacto.
5. Configurar y validar por separado medición Meta/Hotmart, consentimiento cuando corresponda, compra de prueba y entrega. No hay píxel ni CAPI instalados. El código conserva UTM, src, sck y fbclid al pasar al checkout y emite el evento de navegador `offer:checkout-click`; no registra compras por sí solo.

Los enlaces de apertura de la página conducen a la oferta. El botón final solo navega al checkout cuando se configure el enlace real; en esta versión permanece desactivado para evitar compras mal dirigidas.

## Verificación
Sintaxis JS, referencias HTML, imágenes, IDs, anclas, demostración, respuestas y parámetros del checkout comprobados. Sin prueba visual en navegador móvil real en este entorno. No hay garantía de conversión ni testimonios inventados. El precio y las condiciones deben coincidir con Hotmart antes de lanzar.
