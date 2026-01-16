export interface QA {
    keywords: string[];
    answer: string;
}

export const chatbotData: QA[] = [

    /* ================= GREETING & BASIC ================= */

    {
        keywords: ["hello", "hi", "hey", "start", "greetings"],
        answer: "Hello and welcome to Needin. Main aapka virtual assistant hoon. How can I help you today?"
    },
    {
        keywords: ["language", "hindi", "english"],
        answer: "Aap English ya Hindi dono mein baat ya type kar sakte hain. Main aapko usi language mein assist karunga."
    },
    {
        keywords: ["what can you do", "help", "support"],
        answer: "Main aapko services, delivery, pricing, registration, earning aur support ke baare mein madad kar sakta hoon."
    },

    /* ================= COMPANY ================= */

    {
        keywords: ["what is needin", "about needin", "needin kya hai"],
        answer: "Needin ek hyperlocal gig economy platform hai jo customers ko verified vendors aur travelers ke saath services aur delivery ke liye connect karta hai."
    },
    {
        keywords: ["owner", "who owns needin", "company"],
        answer: "Needin ko Viec Carry India Pvt Ltd own aur operate karti hai."
    },
    {
        keywords: ["registered", "legal", "is needin safe"],
        answer: "Haan, Viec Carry India Pvt Ltd India mein ek registered private limited company hai, isliye Needin ek safe aur legal platform hai."
    },

    /* ================= NEEDIN EXPRESS ================= */

    {
        keywords: ["needin express", "parcel delivery", "courier"],
        answer: "Needin Express ek travel-based parcel delivery service hai jisme verified travelers apne travel ke dauran parcels deliver karte hain."
    },
    {
        keywords: ["how delivery works", "travel based delivery"],
        answer: "Aapka parcel us verified traveler ke saath match hota hai jo already usi route par travel kar raha hota hai."
    },
    {
        keywords: ["same day delivery", "fast delivery"],
        answer: "Haan, travel availability ke basis par kaafi deliveries same day ya few hours mein complete ho jaati hain."
    },

    /* ================= PARCEL RULES ================= */

    {
        keywords: ["what can i send", "allowed items"],
        answer: "Aap documents, kapde, electronics aur dusre legal items bhej sakte hain."
    },
    {
        keywords: ["restricted items", "illegal"],
        answer: "Illegal, hazardous ya prohibited items bilkul allow nahi hain."
    },
    {
        keywords: ["insurance", "parcel safe"],
        answer: "Insurance booking type aur selected service ke terms par depend karti hai."
    },
    {
        keywords: ["track", "where is my parcel"],
        answer: "Booking confirm hone ke baad aap apna parcel real-time track kar sakte hain."
    },

    /* ================= PRICING ================= */

    {
        keywords: ["price", "cost", "charges"],
        answer: "Pricing distance, parcel size aur route ke basis par calculate hoti hai."
    },
    {
        keywords: ["base price", "starting price"],
        answer: "Needin Express ka base delivery price ₹99 se start hota hai."
    },
    {
        keywords: ["hidden charges"],
        answer: "Nahi, koi hidden charges nahi hote. Final price booking se pehle hi dikha diya jata hai."
    },
    {
        keywords: ["cheap", "compare courier"],
        answer: "Needin Express traditional courier services ke comparison mein kaafi fast aur affordable hota hai."
    },

    /* ================= CARRIER / TRAVELER ================= */

    {
        keywords: ["earn", "delivery partner", "carrier"],
        answer: "Aap apne travel route par parcels deliver karke earn kar sakte hain."
    },
    {
        keywords: ["become carrier", "earn while travel"],
        answer: "Needin par register karke, KYC complete karne ke baad aap delivery partner ban sakte hain."
    },
    {
        keywords: ["carrier verification", "kyc"],
        answer: "Haan, safety aur trust ke liye sabhi carriers ke liye KYC verification mandatory hai."
    },
    {
        keywords: ["accept reject delivery"],
        answer: "Haan, carriers apni marzi se delivery requests accept ya reject kar sakte hain."
    },

    /* ================= VENDOR ================= */

    {
        keywords: ["vendor", "services", "local services"],
        answer: "Needin aapko verified local vendors se connect karta hai jo home aur personal services provide karte hain."
    },
    {
        keywords: ["become vendor", "register vendor"],
        answer: "Vendor banne ke liye aapko Needin par register karke apne business details aur documents submit karne hote hain."
    },
    {
        keywords: ["vendor verification"],
        answer: "Haan, vendor activation se pehle verification mandatory hoti hai."
    },
    {
        keywords: ["vendor payment", "when do vendors get paid"],
        answer: "Service successfully complete hone ke baad vendors ko payment milti hai."
    },

    /* ================= TRUST & SAFETY ================= */

    {
        keywords: ["is it safe", "trust", "scam"],
        answer: "Haan, Needin bilkul safe hai. Sabhi vendors aur travelers strict KYC aur verification process se pass hote hain."
    },
    {
        keywords: ["otp", "qr", "delivery proof"],
        answer: "Pickup aur delivery ke time OTP ya QR verification hota hai taaki parcel security ensure ho."
    },

    /* ================= SUPPORT ================= */

    {
        keywords: ["contact", "support", "help"],
        answer: "Aap Needin support se phone ya email ke through contact kar sakte hain."
    },
    {
        keywords: ["phone", "call"],
        answer: "Aap humein +91 9286483640 par call kar sakte hain."
    },
    {
        keywords: ["email"],
        answer: "Hamara official email hai needinexpress06@gmail.com."
    },

    /* ================= WEBSITE & ADDRESS ================= */

    {
        keywords: ["website", "official site"],
        answer: "Needin ka official website hai www.vieccarryindia.com."
    },
    {
        keywords: ["address", "office location"],
        answer: "Needin ka office address hai BG-60, Balaji Garden Main NH-58, front of police chowki, Yogi Puram, Meerut – 250002."
    },

    /* ================= CLOSING ================= */

    {
        keywords: ["bye", "thank you", "thanks"],
        answer: "Needin choose karne ke liye dhanyavaad. Agar aapko aur madad chahiye ho to pooch sakte hain. Have a great day!"
    }

];

export const defaultAnswer =
    "Maaf kijiye, main aapka sawaal samajh nahi paaya. Kripya thoda alag tarike se poochiye ya support se contact kijiye.";
