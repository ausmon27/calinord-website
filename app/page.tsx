'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, GlobeIcon } from "lucide-react";
import { useState } from "react";

export default function CaliNordExpressWebsite() {
  const [language, setLanguage] = useState("en");

  const t = {
    en: {
      title: "CaliNord Express LLC",
      tagline: "Immigration Support for the Uzbek Community",
      description:
        "We provide administrative support for immigration matters such as document preparation, USCIS/EOIR form filing, and case organization. We do not give legal advice.",
      servicesTitle: "Our Services",
      services: [
        "Document Preparation",
        "Form Filing (USCIS / EOIR)",
        "Case Organization",
        "Consultation Scheduling"
      ],
      disclaimer:
        "Disclaimer: CaliNord Express LLC is not a law firm and does not provide legal advice. We assist with administrative tasks only.",
      consult: "Book a Consultation",
      consultDetails: "$50 per 1-hour session. Pay & schedule via Calendly.",
      testimonialsTitle: "What Our Clients Say",
      testimonial: "Thanks to CaliNord, I filed my documents on time and with confidence! — Client from San Francisco"
    },
    uz: {
      title: "CaliNord Express MChJ",
      tagline: "O'zbek hamjamiyatiga immigratsion yordam",
      description:
        "Biz hujjatlarni tayyorlash, USCIS/EOIR shakllarini to'ldirish va ishni tashkil etish bo'yicha ma'muriy yordam ko'rsatamiz. Biz huquqiy maslahat bermaymiz.",
      servicesTitle: "Xizmatlarimiz",
      services: [
        "Hujjatlarni tayyorlash",
        "Shakllarni to'ldirish (USCIS / EOIR)",
        "Ishni tashkil etish",
        "Konsultatsiyani belgilash"
      ],
      disclaimer:
        "Ogohlantirish: CaliNord Express MChJ advokatlik firmasi emas va huquqiy maslahat bermaydi. Biz faqat ma'muriy yordam ko'rsatamiz.",
      consult: "Konsultatsiyaga yoziling",
      consultDetails: "1 soatlik konsultatsiya uchun $50. To'lov va vaqtni Calendly orqali belgilang.",
      testimonialsTitle: "Mijozlarimiz fikri",
      testimonial: "CaliNord yordamida hujjatlarimni o'z vaqtida topshirdim va ishonch bilan harakat qildim! — San-Fransiskolik mijoz"
    }
  };

  const content = t[language];

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">{content.title}</h1>
        <Button onClick={() => setLanguage(language === "en" ? "uz" : "en")}>
          <GlobeIcon className="mr-2 h-4 w-4" />
          {language === "en" ? "O'zbekcha" : "English"}
        </Button>
      </div>

      <p className="text-xl text-gray-600 mb-4">{content.tagline}</p>
      <p className="mb-6">{content.description}</p>

      <Card className="mb-6">
        <CardContent>
          <h2 className="text-xl font-semibold mb-2">{content.servicesTitle}</h2>
          <ul className="list-disc list-inside">
            {content.services.map((service, i) => (
              <li key={i}>{service}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent>
          <h2 className="text-xl font-semibold mb-2">{content.consult}</h2>
          <p className="mb-2">{content.consultDetails}</p>
          <a href="https://calendly.com/your-link" target="_blank" rel="noopener noreferrer">
            <Button>
              <CalendarIcon className="mr-2 h-4 w-4" />
              {content.consult}
            </Button>
          </a>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="italic text-sm text-gray-600">
          {content.disclaimer}
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="text-xl font-semibold mb-2">{content.testimonialsTitle}</h2>
          <p className="text-gray-700">“{content.testimonial}”</p>
        </CardContent>
      </Card>
    </div>
  );
}
