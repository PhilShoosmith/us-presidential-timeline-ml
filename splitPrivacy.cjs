const fs = require("fs");
let content = fs.readFileSync("contexts/LanguageContext.tsx", "utf-8");

const replacements = [
  {
    find: `'privacy.p4': 'This application uses Google Gemini API for generating historical content. When you use the "Learn More" feature, the application sends a prompt to the API. No personal user data is sent.',`,
    replace: `'privacy.p4': 'This application uses Google Gemini API for generating historical content. When you use the "Learn More" feature, the application sends a prompt to the API. ',\n    'privacy.p4.bold': 'No personal user data is sent.',`
  },
  {
    find: `'privacy.p4': 'Cette application utilise l\\'API Google Gemini pour générer du contenu historique. Lorsque vous utilisez la fonction "En Savoir Plus", l\\'application envoie une invite à l\\'API. Aucune donnée utilisateur personnelle n\\'est envoyée.',`,
    replace: `'privacy.p4': 'Cette application utilise l\\'API Google Gemini pour générer du contenu historique. Lorsque vous utilisez la fonction "En Savoir Plus", l\\'application envoie une invite à l\\'API. ',\n    'privacy.p4.bold': 'Aucune donnée utilisateur personnelle n\\'est envoyée.',`
  },
  {
    find: `'privacy.p4': 'このアプリケーションは、歴史的コンテンツの生成にGoogle Gemini APIを使用しています。「もっと詳しく」機能を使用すると、アプリケーションはAPIにプロンプトを送信します。個人のユーザーデータは送信されません。',`,
    replace: `'privacy.p4': 'このアプリケーションは、歴史的コンテンツの生成にGoogle Gemini APIを使用しています。「もっと詳しく」機能を使用すると、アプリケーションはAPIにプロンプトを送信します。',\n    'privacy.p4.bold': '個人のユーザーデータは送信されません。',`
  },
  {
    find: `'privacy.p4': 'يستخدم هذا التطبيق واجهة برمجة تطبيقات Google Gemini لإنشاء محتوى تاريخي. عند استخدام ميزة "اعرف المزيد"، يرسل التطبيق مطالبة إلى واجهة برمجة التطبيقات. لا يتم إرسال أي بيانات شخصية للمستخدم.',`,
    replace: `'privacy.p4': 'يستخدم هذا التطبيق واجهة برمجة تطبيقات Google Gemini لإنشاء محتوى تاريخي. عند استخدام ميزة "اعرف المزيد"، يرسل التطبيق مطالبة إلى واجهة برمجة التطبيقات. ',\n    'privacy.p4.bold': 'لا يتم إرسال أي بيانات شخصية للمستخدم.',`
  },
  {
    find: `'privacy.p4': 'यह एप्लिकेशन ऐतिहासिक सामग्री उत्पन्न करने के लिए Google Gemini API का उपयोग करता है। जब आप "और जानें" सुविधा का उपयोग करते हैं, तो एप्लिकेशन API को एक संकेत भेजता है। कोई व्यक्तिगत उपयोगकर्ता डेटा नहीं भेजा जाता है।',`,
    replace: `'privacy.p4': 'यह एप्लिकेशन ऐतिहासिक सामग्री उत्पन्न करने के लिए Google Gemini API का उपयोग करता है। जब आप "और जानें" सुविधा का उपयोग करते हैं, तो एप्लिकेशन API को एक संकेत भेजता है। ',\n    'privacy.p4.bold': 'कोई व्यक्तिगत उपयोगकर्ता डेटा नहीं भेजा जाता है।',`
  },
  {
    find: `'privacy.p4': 'Esta aplicación utiliza la API de Google Gemini para generar contenido histórico. Cuando utiliza la función "Saber más", la aplicación envía un mensaje a la API. No se envían datos personales del usuario.',`,
    replace: `'privacy.p4': 'Esta aplicación utiliza la API de Google Gemini para generar contenido histórico. Cuando utiliza la función "Saber más", la aplicación envía un mensaje a la API. ',\n    'privacy.p4.bold': 'No se envían datos personales del usuario.',`
  },
  {
    find: `'privacy.p4': '此应用程序使用 Google Gemini API 生成历史内容。当您使用“了解更多”功能时，应用程序会向 API 发送提示。不会发送任何个人用户数据。',`,
    replace: `'privacy.p4': '此应用程序使用 Google Gemini API 生成历史内容。当您使用“了解更多”功能时，应用程序会向 API 发送提示。',\n    'privacy.p4.bold': '不会发送任何个人用户数据。',`
  }
];

replacements.forEach(r => {
  content = content.replace(r.find, r.replace);
});

fs.writeFileSync("contexts/LanguageContext.tsx", content);
