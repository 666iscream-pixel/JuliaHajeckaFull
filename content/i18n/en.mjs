// English version of the site: all texts and data (same structure as uk.mjs)

const ASK = "after consultation";

const PACKS = [
  { name: "Start Legal", price: "1000",
    f: "For those who want to go through the procedure on their own, with professional help in preparing the documents.",
    li: ["Individual consultation on your case", "Personalised checklist of required documents", "Review of the document set — 1 time", "Identification of missing documents and necessary additions", "Preparation of the application in the MOS system", "Preparation of documents for electronic submission"],
    note: "You receive a prepared set of documents and know exactly which steps you need to take yourself." },
  { tag: "Recommended", hot: true, name: "Full Support", price: "1800",
    f: "For those who want to entrust document preparation and the main handling of the case to a specialist.",
    inc: "Everything in Start Legal, plus:",
    li: ["Help with collecting and organising documents", "Preparation of documents to be provided by the employer", "Support with the electronic submission of the application", "Monitoring of the case status and important procedural deadlines", "Review of the document set — 1 time before submission", "Preparation and filing of 1 complaint about the authority's inaction (ponaglenie), if there are legal grounds", "Preparation of up to 2 standard replies to requests from the authority", "Preparation of up to 2 additional document sets within the case", "Appeal, if there are legal grounds"] },
  { name: "Premium Fast Track", price: "2100",
    f: "For those who need extended support, in particular when the case is delayed.",
    inc: "Everything in Full Support, plus:",
    li: ["Review of the document set — up to 2 times before submission", "Preparation of up to 3 standard replies to requests from the authority", "Preparation of up to 3 additional document sets within the case", "Analysis of the procedural situation in case of delays", "Preparation and filing of 1 complaint about the authority's inaction (ponaglenie), if there are legal grounds", "Help with setting up Profil Zaufany (Trusted Profile)", "Help with setting up e-Doręczenia (e-Delivery)", "Support when collecting the residence card, within the agreed scope"] }
];

const PACKS_BIZ = [
  { name: "Basic Package", price: "1200", pay: "Payment in 2 stages",
    f: "For entrepreneurs ready to go through the procedure themselves, with professional support at the preparation stage.",
    li: ["Individual consultation on the procedure", "Preliminary analysis of the entrepreneur's situation and key requirements", "Personalised document checklist", "Review of the submitted document set — 1 time", "Preparation of the application in the MOS 2.0 system", "Preparation of documents for electronic submission"] },
  { tag: "Recommended", hot: true, name: "Comprehensive Package", price: "2400", pay: "Payment in 2 stages",
    f: "For entrepreneurs who want to delegate document preparation and the main handling of the case.",
    inc: "Everything in the Basic Package, plus:",
    li: ["Detailed analysis of the company's documents relevant to the procedure", "Review of registration, accounting and financial documents within the agreed scope", "Help with collecting and organising the required documentation", "Recommendations on proving business activity", "Help with obtaining required documents from business partners", "Review of the document set — 1 time before submission", "Preparation and filing of 1 complaint about the authority's inaction (ponaglenie), if there are legal grounds", "Monitoring of the case status and important procedural deadlines", "Preparation of up to 2 standard replies to requests from the authority", "Preparation of up to 2 additional document sets within the case", "Support when collecting the residence card, within the agreed scope"] },
  { name: "Full & Maximum Package", price: "2800", pay: "Payment in 2 stages",
    f: "For entrepreneurs who need broader support, including possible action if the case is delayed.",
    inc: "Everything in the Comprehensive Package, plus:",
    li: ["Review of the document set — up to 2 times before submission", "Preparation of up to 3 standard replies to requests from the authority", "Preparation of up to 3 additional document sets within the case", "Analysis of the procedural situation in case of delays", "Preparation and filing of 1 complaint about the authority's inaction (ponaglenie), if there are legal grounds", "Consultation on further steps if the authority remains inactive", "Help with setting up Profil Zaufany (Trusted Profile)", "Help with setting up e-Doręczenia (e-Delivery)", "Support when collecting the residence card, within the agreed scope"] }
];

const TERMS = `
      <div class="terms">
        <div><b>Official bilingual contract</b> and a receipt for every payment.</div>
        <div>Prices do not include state fees for the application and power of attorney, or document translation costs.</div>
        <div>Prices are final for standard cases. If a case requires additional work or a non-standard set of documents, the fee is agreed individually.</div>
      </div>`;

const TERMS_PACKS = `
      <div class="conds">
        <div class="cond">
          <h3>* Special terms for families</h3>
          <p>Apply for several family members at the same time and benefit from special prices:</p>
          <ul>
            <li>Each additional adult family member — <b>1300 zł</b></li>
            <li>Child under 18 — <b>500 zł</b></li>
          </ul>
        </div>
        <div class="cond">
          <h3>* General terms for all packages</h3>
          <ul>
            <li>Prices apply to standard cases.</li>
            <li>State fees (<a href="poslugy.html#oplaty">list</a>), power of attorney costs, translations and other external costs are paid separately.</li>
            <li>The number of reviews means the number of checks of the document set within the agreed scope, not unlimited editing of each document.</li>
            <li>A standard reply means preparing a response to a typical request within the current case. Complex requests, new circumstances or significant additional analysis are priced separately.</li>
            <li>Additional work is carried out after the scope and cost have been agreed with the client.</li>
            <li>A complaint about the authority's inaction (ponaglenie) or any other complaint is prepared and filed only where there are appropriate legal grounds.</li>
            <li>The decision and processing time depend on the competent authority. No package guarantees a positive decision or a faster procedure.</li>
          </ul>
        </div>
      </div>`;

const SERVICES = [
  { slug: "karta-pobytu", name: "Residence card", h1: "Temporary residence card", price: "from 1000 zł",
    short: "Temporary residence based on work, family or studies.",
    intro: "Help with preparing documents, submitting the application and handling the procedure to legalise your stay in Poland — based on work, family or studies.",
    chips: ["Work", "Family", "Studies"],
    does: ["We analyse your situation and the basis for residence", "We prepare a personalised document checklist", "We prepare the application in MOS and the documents for electronic submission", "We monitor the case and important procedural deadlines", "We prepare a ponaglenie or an appeal, if there are legal grounds"],
    lines: [["Start Legal", "1 000 zł"], ["Full Support", "1 800 zł"], ["Premium Fast Track", "2 100 zł"]], packs: "main" },
  { slug: "karta-cukr", name: "CUKR residence card", h1: "CUKR residence card for Ukrainian citizens in Poland", price: "650 zł",
    short: "Full support in obtaining the CUKR residence card for Ukrainian citizens.",
    intro: "We help you prepare the documents and go through the CUKR residence card procedure: from checking the eligibility requirements to monitoring the case.",
    alert: { text: "Don't wait — submit your application before 4 March 2027!" },
    doesTitle: "What the service includes",
    does: ["<b>Specialist consultation</b> — analysis of your situation and check of the CUKR eligibility requirements.", "<b>Document review</b> — identifying the required documents and checking that they are complete.", "<b>Application preparation</b> — completing the application in the MOS 2.0 system and helping with electronic submission.", "<b>Electronic tools</b> — help with Profil Zaufany, an electronic signature and an e-Doręczenia mailbox, if required for the procedure.", "<b>Case monitoring</b> — tracking the proceedings and informing you of any necessary next steps.", "<b>Ponaglenie</b> — analysis of the grounds and preparation of a ponaglenie in case of inaction or delays, if there are legal grounds.", "<b>Support until you receive the card</b> — advisory support during the final stages of the procedure."],
    lines: [["Full support in obtaining the CUKR residence card", "650 zł"]] },
  { slug: "karta-biznes", name: "Residence card for business owners", h1: "Temporary residence based on running a business", price: "from 1200 zł",
    short: "Residence permit for foreigners running their own business in Poland.",
    intro: "We handle applications for temporary residence based on running a business in Poland — from analysing the entrepreneur's situation to collecting the card.",
    does: ["We analyse the entrepreneur's situation and key requirements", "We prepare a personalised document checklist", "We review company documents and help obtain documents from business partners", "We prepare the application in MOS 2.0 and the documents for electronic submission", "We monitor the case and prepare a ponaglenie, if there are legal grounds"],
    lines: [["Basic Package", "1 200 zł"], ["Comprehensive Package", "2 400 zł"], ["Full & Maximum Package", "2 800 zł"]], packs: "biz" },
  { slug: "blue-card", name: "Blue Card", h1: "EU Blue Card", price: "1000–2000 zł",
    short: "Residence and work permit for highly qualified specialists.",
    intro: "Your professional growth in Poland — with legal residence and work.",
    aboutTitle: "About the service",
    about: ["The EU Blue Card is a temporary residence and work permit for highly qualified specialists who meet the statutory requirements.", "We handle the process together with you and your employer — from checking the employment conditions to the Voivode's decision."],
    doesTitle: "What our support includes",
    does: ["<b>Eligibility check</b> — we analyse your qualifications, contract, position, salary and other required conditions.", "<b>Document preparation</b> — we prepare a list of documents for the employee and the employer and check that they meet the requirements.", "<b>Complete application preparation</b> — we prepare the document set and help with submitting the application.", "<b>Case handling</b> — we monitor the proceedings and help prepare replies to the office's requests within the agreed package.", "<b>Change of employer</b> — we advise on the required formalities and handle the procedure for changing employment conditions or employer according to your situation."],
    forWhom: "For foreign specialists planning to work in Poland in a position that meets the Blue Card requirements, and for Blue Card holders who need to change their employer or employment conditions.",
    closing: "Your qualifications deserve professional support. Contact us — we will check your situation, identify the required documents and explain the next steps.",
    stagesNote: "We adapt the stages of cooperation to the company's needs and the specifics of each case.",
    lines: [["Case handling", "1000–2000 zł"], ["Consultation, 1 hour", "300 zł"]] },
  { slug: "rezydent-ue", name: "Permanent residence and EU resident", h1: "Permanent residence card and EU long-term resident card", price: "from 1000 zł",
    short: "The right to live in Poland permanently — permanent residence or EU long-term resident status.",
    intro: "We help you obtain the right to live in Poland permanently — from checking the grounds to handling the case at the office.",
    aboutTitle: "About the service",
    about: ["Each legal basis has its own requirements regarding documents, length of stay and proof of circumstances. We analyse your situation and help you prepare the documents for the chosen procedure."],
    doesTitle: "What our support includes",
    does: ["<b>Checking the grounds</b> — we assess whether you can obtain a permanent residence permit or EU long-term resident status.", "<b>Residence history analysis</b> — we check the continuity of your stay and take trips outside Poland into account.", "<b>Document preparation</b> — we analyse and organise documents from previous years and identify what is missing.", "<b>Preparing and submitting the application</b> — we compile the document set according to your legal basis.", "<b>Case monitoring</b> — we track the proceedings and help prepare replies to the office's requests within the agreed package."],
    whichTitle: "Which permit is right for you?",
    which: ["<b>Permanent residence</b> — in particular for people of Polish descent, Pole's Card holders and other categories that meet the statutory requirements.", "<b>EU long-term resident</b> — for people who meet the requirements regarding the length and legality of stay, stable income, health insurance and other statutory conditions."],
    closing: "Not sure which basis applies to you? We will analyse your situation and help you decide on the next steps.",
    chips: ["Polish descent", "Pole's Card", "EU resident"],
    lines: [["Permanent residence — Polish descent", "2000–3000 zł"], ["Permanent residence based on the Pole's Card", "1000–2000 zł"], ["EU long-term resident card", "1000–2500 zł"], ["Analysis of residence documents", "350–500 zł"]] },
  { slug: "hromadianstvo", name: "Citizenship", h1: "Polish citizenship", price: "from 3000 zł",
    short: "Support with the procedure for recognition as a Polish citizen.",
    intro: "We handle the procedure for recognition as a Polish citizen by the Voivode — for foreigners who meet the statutory requirements.",
    aboutTitle: "About the service",
    about: ["Every situation is individual. We analyse your residence history, check your documents and determine whether you meet the statutory requirements."],
    doesTitle: "What our support includes",
    does: ["<b>Analysis of your situation</b> — we identify the appropriate legal basis.", "<b>Document review</b> — we assess your residence history, income, housing and other required circumstances.", "<b>Application preparation</b> — we prepare the application and the necessary attachments.", "<b>Case handling</b> — we monitor the procedure and help you respond to the authority's requests within the agreed package.", "<b>Support until the decision</b> — we accompany you through all stages set out in the contract."],
    forWhom: "We help assess whether you can obtain citizenship, in particular on the basis of long-term residence in Poland, marriage to a Polish citizen, Polish descent or the Pole's Card, refugee status, and in other cases provided for by law.",
    closing: "Your path to Polish citizenship starts with a proper assessment of your situation.",
    lines: [["Recognition as a Polish citizen (uznanie za obywatela polskiego)", "from 3000 zł"], ["Consultation, 1 hour", "300 zł"]] },
  { slug: "vozziednannia-simi", name: "Family reunification", h1: "Residence card for family reunification", price: "from 1300 zł",
    short: "Legalising the stay of a spouse, children and parents.",
    intro: "We help families go through the procedure to legalise their stay in Poland — from checking documents to handling the case at the office.",
    pre: `<h2 class="subh">Cost of support</h2>
        <p class="plain">The cost depends on whether the main applicant applies at the same time as the family members, or whether their case is already being processed.</p>
        <div class="variant">
          <h3>Option 1. The main applicant applies for residence based on work</h3>
          <p>If one family member applies for temporary residence and work, their husband or wife and children can benefit from a special price for support with their own cases.</p>
          <div class="vrow"><span>Spouse's application for temporary residence</span><b>1300 zł</b></div>
          <div class="vrow"><span>Application for a child under 18</span><b>500 zł per child</b></div>
          <p class="vnote">Family benefit: when the cases are handled as one family process, the cost of support for the spouse and children is lower.</p>
        </div>
        <div class="variant">
          <h3>Option 2. The main applicant has already applied and the case is being processed</h3>
          <p>If the husband or wife has already applied for temporary residence and work and the case is being processed by the voivodeship office, the other spouse can submit a separate application for temporary residence on the appropriate legal basis.</p>
          <div class="vrow"><span>Spouse's application for temporary residence</span><b>1500 zł</b></div>
          <div class="vrow"><span>Application for a child under 18</span><b>500 zł per child</b></div>
          <p class="vnote">We will check your situation, identify the appropriate legal basis and prepare the documents in line with the procedure's requirements.</p>
        </div>`,
    doesTitle: "What the cost of support includes (options 1 and 2)",
    does: ["Analysis of the family's situation and of the legal basis for the application", "Individual list of required documents", "Review of the applicant's documents and proof of family ties", "Preparation and completion of the temporary residence application", "Check that the documents are complete before submission", "Support with submitting the application within the agreed scope of services", "Monitoring of the case and information on any necessary next steps"],
    post: `<div class="variant parents">
          <h3>Legalising the stay of parents of adult children in Poland</h3>
          <div class="vrow"><span>Full support, per person</span><b>1800 zł</b></div>
          <p class="lbl2">What the service includes:</p>
          <ul class="checks">
            <li>Preliminary analysis of the parents' situation and the legal status of the adult child in Poland</li>
            <li>Checking whether there are legal grounds for a temporary residence permit due to family circumstances</li>
            <li>Individual list of required documents</li>
            <li>Review of documents confirming family ties, financial means, housing and other circumstances of the case</li>
            <li>Preparation of the application and necessary attachments according to the chosen legal basis</li>
            <li>Help with submitting the documents through the appropriate procedure</li>
            <li>Monitoring of the case and information on the main procedural steps</li>
            <li>Preparation of up to two standard replies to requests from the authority within the agreed scope of the service</li>
          </ul>
          <p class="lbl2">Good to know</p>
          <p>Reunification of parents with adult children is not a procedure available automatically on the basis of kinship alone. Before we start, the child's legal status in Poland and the specific family circumstances need to be assessed. In some cases a different legal basis for legalising the stay should be considered.</p>
          <p>The price covers support services. State fees, translations, notary costs and other external costs are paid separately. Complex additional requests from the authority, an appeal and a court complaint are not included in the basic scope and are agreed separately.</p>
        </div>`,
    lines: [["Spouse — joint application", "1300 zł"], ["Spouse — main applicant's case in progress", "1500 zł"], ["Child under 18", "500 zł"], ["Parents of adult children, per person", "1800 zł"]] },
  { slug: "zmina-robotodavtsia", name: "Change of employer", h1: "Changing employer while holding a residence card", price: "500 zł",
    short: "So that a new job does not put your legal status at risk.",
    intro: "Changing jobs with a valid residence card involves formalities and deadlines. We take care of them.",
    does: ["We check exactly what is required in your case", "We prepare an application for a change or a new application", "We notify the Voivode that your employment has ended", "We liaise with your new employer about the documents"],
    lines: [["Change of employer", "500 zł"], ["Notification to the Voivode (foreigner)", "200 zł"]] },
  { slug: "dovidky", name: "Certificates: court, tax office, ZUS", h1: "Certificates from the court, tax office and ZUS", price: "from 150 zł",
    short: "We obtain the certificates you need for residence, citizenship or the bank.",
    intro: "We obtain on your behalf the certificates required by offices, banks and employers.",
    does: ["Certificate of no tax arrears", "ZUS certificate of employment history", "Court certificates", "PESEL, Profil Zaufany, EHIC (EKUZ)"],
    lines: [["Tax office certificate", "150 zł"], ["ZUS certificate", "150 zł"], ["PESEL number", "150 zł"], ["Profil Zaufany (ePUAP)", "150 zł"], ["EHIC card (EKUZ)", "150 zł"], ["Court certificates", "on request"]] },
  { slug: "akty-tsyvilnoho-stanu", name: "Birth and marriage certificates", h1: "Transcription of foreign civil status records", price: "800 zł",
    short: "Entering foreign birth and marriage certificates into the Polish register; acknowledgement of paternity.",
    intro: "Entering a foreign birth or marriage certificate into the Polish civil status register (umiejscowienie zagranicznych aktów).",
    about: [
      "Transcription is the official process of recognising foreign documents in Poland. A birth or marriage certificate issued abroad is transferred into the Polish civil status records. As a result, you receive a Polish document that fully corresponds to the original but has legal effect in Poland.",
      "The original foreign documents are retained during the procedure, so we recommend obtaining duplicates in advance if you may need them later."
    ],
    when: [
      "if you plan to apply for Polish citizenship;",
      "if you want to obtain a temporary or permanent residence permit for a family member under family reunification and cannot obtain an apostille in the country of origin (required by most offices since 1 June 2025)."
    ],
    doesTitle: "How we help",
    does: ["We consult you on your situation and analyse the documents", "We explain every stage of the procedure clearly and simply", "We arrange a professional sworn translation", "We prepare and submit the application with all documents to the Civil Registry Office (Urząd Stanu Cywilnego)", "We collect the Polish certificate and hand it over to you", "We also handle the acknowledgement of paternity procedure"],
    faq: [
      ["How long does the procedure take?", "Usually up to 30 days."],
      ["Does the number of documents affect the price?", "The price depends not on the number, but on the complexity of the documents."],
      ["Are the original birth and marriage certificates retained?", "Yes, the originals are retained, so we recommend obtaining duplicates in the issuing country in advance."],
      ["Can notarised copies be submitted?", "No, only the original birth certificate (and marriage certificate) is accepted."]
    ],
    lines: [["Entering a certificate into the register", "800 zł"], ["Acknowledgement of paternity", ASK], ["Sworn translation", "on request"]],
    note: "State fees and sworn translation of documents are paid additionally." },
  { slug: "strakhuvannia", name: "Insurance", h1: "All types of insurance", price: ASK,
    short: "Health and other insurance — including policies required for residence.",
    intro: "We find insurance for you and your family, including the health insurance policies required in residence cases.",
    does: ["We choose a policy that suits your situation and the office's requirements", "We arrange health insurance for family members", "We help you obtain an EHIC card (EKUZ)", "We explain what the policy covers"],
    lines: [["Choosing and arranging a policy", ASK], ["EHIC card (EKUZ)", "150 zł"]] }
];

const OTHER = [
  ["Consultation, 1 hour", "the first hour is paid in full, then half the rate for every 30 min", "300 zł"],
  ["Personal assistance at the office", "1 visit", "300 zł"],
  ["Travel document for a foreigner", "Dokument podróży", "350 zł"],
  ["Declaration on entrusting work to a foreigner", "Oświadczenie o powierzeniu pracy — including a copy of the contract and notifications of the start and end of work", "500 zł"],
  ["Invitation for a foreigner", "Zaproszenie dla cudzoziemca", "500 zł"],
  ["Analysis and organisation of residence documents", "depending on the number of documents and complexity of the case", "350–500 zł"],
  ["UK visa", "", "2000 zł"],
  ["Notifying the Voivode that employment has ended", "200 zł for a foreigner, 300 zł for an employer", "200 / 300 zł"],
  ["Case status check", "establishing the status of the case, reviewing the files under a power of attorney, analysis, action plan and one official letter to the Voivode (request, application or ponaglenie). Does not include an appeal or further handling of the case", "1000 zł"],
  ["Translation and legalisation of documents", "apostille on Polish documents, sworn translations, checking document requirements", "individually"],
  ["Exchange of a foreign driving licence for a Polish one", "and replacement of an expired Polish licence: analysis, documents, translation, application, status monitoring", "800 zł"],
  ["Appeal against an office's decision", "included in Full Support and Premium Fast Track if there are legal grounds", ASK],
  ["Registration of residence for EU citizens", "", ASK]
];

const FEES = [
  ["Temporary residence and work permit", "Zezwolenie na pobyt czasowy i pracę", "440 zł"],
  ["EU Blue Card", "Niebieska Karta UE", "440 zł"],
  ["Temporary residence permit (other cases, including the CUKR residence card)", "Zezwolenie na pobyt czasowy (pozostałe przypadki)", "340 zł"],
  ["Permanent residence permit", "Zezwolenie na pobyt stały", "640 zł"],
  ["EU long-term resident permit", "Zezwolenie na pobyt rezydenta długoterminowego UE", "640 zł"],
  ["Entry of an invitation into the register of invitations", "Wpis zaproszenia do ewidencji zaproszeń", "27 zł"],
  ["Duplicate of a decision", "Duplikat decyzji", "5 zł per page or part thereof"],
  ["Amendment of a residence and work permit", "Zmiana zezwolenia na pobyt i pracę", "220 zł"],
  ["Decision on a cash benefit for a Pole's Card holder", "Decyzja — świadczenie pieniężne dla posiadacza Karty Polaka", "10 zł"],
  ["Issuing a certificate", "Wydanie zaświadczenia", "17 zł"],
  ["Power of attorney", "Pełnomocnictwo", "17 zł"],
  ["Issue or replacement of a residence card (including CUKR, adults and children)", "Wydanie lub wymiana karty pobytu", "100 zł"],
  ["Issue or replacement of a residence card for minors under 16 on the date of application, secondary school pupils and students", "Wydanie lub wymiana karty pobytu — małoletni, uczniowie, studenci", "50 zł"],
  ["Recognition as a Polish citizen", "Uznanie za obywatela polskiego", "1000 zł"],
  ["Granting of Polish citizenship by the President", "Nadanie obywatelstwa polskiego przez Prezydenta RP", "1669 zł"]
];

const STAGES = [
  { h: "Initial consultation and analysis",
    p: "Our cooperation starts with a detailed look at your situation — during a meeting at the office or an online consultation.",
    l: "At this stage we:",
    li: ["analyse your current situation and the grounds for legalisation", "check your documents and assess possible risks", "determine your realistic chances of obtaining a residence card", "choose the safest and most effective strategy for your case"],
    o: "Our goal is that after the very first consultation you fully understand the next steps, timelines and possible scenarios." },
  { h: "Individual case plan",
    p: "Once you decide to work with us, we prepare a personal strategy.",
    l: "This stage includes:",
    li: ["signing an official contract", "an individual list of required documents", "a step-by-step support plan", "deadlines and the order of submitting documents"],
    o: "You get a clear structure of actions and full support — without chaos, uncertainty or unnecessary mistakes." },
  { h: "Preparing the complete document set",
    p: "We take care of the entire organisational and bureaucratic side of the process.",
    l: "In particular:",
    li: ["preparing applications, questionnaires and required forms", "liaising with the employer, accountants and institutions", "checking that all documents are correct", "preparing copies, translations and notarial certifications", "support when submitting documents to the office"],
    o: "Careful preparation and attention to detail reduce the risk of errors and increase the chances of a positive decision." },
  { h: "Full support at every stage",
    p: "Throughout the process we handle your case as your official representative (Pełnomocnik).",
    l: "As part of our support we:",
    li: ["represent your interests before state authorities", "monitor the progress of the case", "track statuses and deadlines", "prepare and submit additional documents when needed", "stay in touch with you until the decision is issued"],
    o: "You always know what stage your case is at and what our specialists are doing." },
  { h: "Completing the process",
    p: "",
    l: "After a positive decision we:",
    li: ["support you when collecting your residence card", "advise you on staying legally in Poland in the future", "help with the next stages of legalisation if needed"],
    o: "We support our clients not just until the documents are submitted, but until the actual result." }
];

export default {
  meta: { lang: "en", code: "EN", name: "English", locale: "en-GB", og: "en_GB", hl: "en" },
  nav: { services: "Services", how: "How we work", about: "About us", cases: "Case studies", blog: "Blog", contacts: "Contact" },
  ui: {
    write: "Contact us", home: "Home",
    footerTag: "Legalisation of residence and work for foreigners in Poland.",
    fServices: "Services", fAll: "All services and prices", fSite: "Site", fContacts: "Contact",
    disclaimer: "The content on the Julia Hajecka — Legalizacja pobytu cudzoziemców website is for information and educational purposes only. It does not constitute individual legal or tax advice or a formal legal opinion and does not replace an analysis of a specific case.",
    cookieSettings: "Cookie settings",
    ccText: "We use necessary cookies. With your consent we also load Google Maps, which sets its own cookies.",
    ccNecessary: "Necessary only", ccAll: "Accept all",
    consult: "Book a consultation", request: "Send a request",
    bandH: "Tell us about your situation", bandP: "Message us on a messenger app — we'll reply and suggest a time for a consultation.",
    more: "Details and price", read: "Read →", readCase: "Read the case →", choose: "Choose package",
    price: "Price", service: "Service", wa: "Message on WhatsApp",
    stagesDefault: "We adapt the stages of cooperation to the specifics of each case.", stagesMore: "More —", stagesLink: "how we work",
    aboutProc: "About the procedure", when: "When you need it", doesDefault: "What we do", forWhom: "Who is this service for?",
    faqEyebrow: "FAQ", faqH: "Answers to common questions",
    packsEyebrow: "Support with legalisation", also: "See also", otherServices: "Other services",
    rvEyebrow: "Reviews", rvH: "What our clients say", rvMore: "More client reviews on our Google profile.", rvBtn: "Read reviews on Google", prev: "Previous", next: "Next",
    articleNote: "This article is for information only. Every case has its nuances — message us and we will look at your particular situation.",
    readAlso: "Read also", caseWord: "Case", caseSit: "Situation", caseDone: "What we did", caseRes: "Result",
    packsets: {
      main: { title: "Support packages", lead: "Help with preparing documents, submitting the application and handling the procedure to legalise your stay in Poland." },
      biz: { title: "Packages for entrepreneurs", lead: "Temporary residence based on running a business." }
    }
  },
  home: {
    title: "Julia Hajecka — residence and work legalisation for foreigners in Poland",
    desc: "Residence card, Blue Card, family reunification, citizenship. Support from consultation to decision. Warsaw.",
    eyebrow: "Warsaw · residence card · Blue Card · citizenship",
    h1: "Legal residence and work in Poland — without mistakes or unnecessary stress",
    sub: "We handle your case from the first consultation to the decision: we check documents, submit the application and monitor the case at the office.",
    prices: "Services and prices",
    door1t: "I'm a foreigner", door1p: "Residence card, Blue Card, family reunification, citizenship, certificates",
    urgentH: "Is your visa or residence card expiring?",
    urgent: ["The application must be submitted by the last day of your legal stay.", "The sooner we start, the smoother the process."],
    urgentBtn: "Message us now",
    svcEyebrow: "Services", svcH: "How we can help", svcLead: "Every service comes with a transparent price and a clear scope of work.", svcAll: "All services and prices",
    komuEyebrow: "Who we help", komuH: "Real support for foreigners and employers in Poland",
    komuLead: "We offer specialised services tailored to individual needs. We focus on understanding your situation and providing effective, practical solutions.",
    foreignH: "For foreigners",
    foreignP: "Want to sort out your stay in Poland, deal with official matters or start your own business? We'll guide you through the formalities.",
    foreignLi: [
      "<b>Residence legalisation</b> — obtaining a temporary or permanent residence card.",
      "<b>Polish citizenship</b> — preparing an application for the granting of or recognition as a Polish citizen.",
      "<b>Document exchange</b> — residence cards and driving licences, as well as obtaining a PESEL number.",
      "<b>Appeals against official decisions</b> — help when a document or permit has been refused.",
      "<b>Registration of residence for EU citizens</b> — formalities related to living in Poland.",
      "<b>Transcription of foreign civil status records</b> — entering foreign documents into the Polish register.",
      "<b>Profil Zaufany (Trusted Profile)</b> — access to online public administration services."
    ],
    stagesEyebrow: "Process", stagesH: "How we work", stagesMore: "More about the stages",
    blogEyebrow: "Blog", blogH: "Useful information on legalisation", blogAll: "All articles"
  },
  servicesPage: {
    title: "Services and prices — Julia Hajecka",
    desc: "Residence card, Blue Card, EU resident, citizenship, family reunification, certificates, insurance. Prices for all services.",
    eyebrow: "Services", h1: "Services and prices", lead: "Choose a service to see exactly what we do and how much it costs.",
    packsH: "Temporary residence card: support packages",
    packsLead: "Help with preparing documents, submitting the application and handling the procedure to legalise your stay in Poland.",
    allEyebrow: "All services", allH: "Choose a service", priceEyebrow: "Price list", priceH: "Additional services",
    toc: ["On this page", "Residence card support packages", "Main services", "Additional services", "State fees"],
    feesEyebrow: "Opłaty skarbowe", feesH: "State fees", feesLead: "Fees are paid to the relevant authority, separately from the cost of our services."
  },
  how: {
    title: "How we work — Julia Hajecka", desc: "Five stages of support: consultation, case plan, documents, case handling, decision.",
    crumb: "How we work", eyebrow: "Process", h1: "How we work", lead: "From the first consultation to collecting your card — five clear stages.",
    bandH: "Let's start with a consultation", bandP: "The first hour costs 300 zł. Afterwards you'll know the next steps, timelines and possible scenarios."
  },
  about: {
    title: "About us — Julia Hajecka",
    desc: "Since 2017 we have been helping foreigners, their families and entrepreneurs legalise their residence and work in Poland.",
    crumb: "About us", eyebrow: "About us", h1: "Individual approach. Experience. Strategy.",
    paras: [
      "Since 2017 I have been supporting foreigners, their families and entrepreneurs in matters of legalising residence and work in Poland. Today I combine my own experience with the knowledge of a team of trusted specialists: I set the direction, ensure a consistent strategy and maintain the quality of service at every stage.",
      "I don't believe in one-size-fits-all solutions. Before we act, we analyse the circumstances of the case, the client's needs and the available legal options — and we look beyond a single application: at long-term plans, risks and the next stages of your stay in Poland."
    ],
    pull: "More than 1,500 families have trusted me with their cases. Behind this number are real stories and people for whom legalisation means being able to live together, work and plan their future in Poland.",
    prEyebrow: "Approach", prH: "Our principles",
    principles: [
      ["An individual approach to every case", "We don't use ready-made templates. We carefully analyse your situation, needs and goals to propose the best solution in line with the current regulations."],
      ["Clear terms of cooperation", "From the start you know what our cooperation involves, how much it costs and how long it will take. Transparent terms, reliable information and no hidden costs."],
      ["Ongoing support and contact", "We stay in touch at every stage: we answer your questions and keep you updated on progress. You can reach us by phone, email, WhatsApp, Viber and Telegram."]
    ],
    bandH: "Your future in Poland deserves a well-thought-out strategy",
    bandP: "Need help legalising your residence or work? Message us — we'll analyse your situation and suggest possible courses of action."
  },
  casesPage: {
    title: "Case studies — Julia Hajecka", desc: "Case stories: what our clients came to us with and how it ended.",
    crumb: "Case studies", eyebrow: "Case studies", h1: "Case stories", lead: "No names or personal data: the situation, what we did, the result."
  },
  blogPage: {
    title: "Blog on legalisation in Poland — Julia Hajecka", desc: "Answers to common questions about legalising residence and work in Poland.",
    crumb: "Blog", eyebrow: "Blog", h1: "Useful information on legalisation", lead: "Answers to the questions our clients ask most often."
  },
  contact: {
    title: "Contact — Julia Hajecka", desc: "WhatsApp, Telegram, office in Blizne Łaszczyńskiego near Warsaw.",
    crumb: "Contact", eyebrow: "Contact", h1: "Tell us about your situation",
    lead: "Message us on a messenger app or send a request — we'll reply and suggest a time for a consultation.",
    phone: "Phone", email: "Email", office: "Office", hours: "Hours", hoursV: "Mon–Fri from 9:00, meetings by appointment",
    langs: "Languages", langsV: "Polski, Українська, Русский",
    fName: "Name", fPhone: "Phone", fMsgr: "Preferred messenger", fOther: "Other", fLang: "Language",
    fWho: "You are", whoPriv: "Private individual", whoEmp: "Employer", fService: "Service", svcConsult: "Consultation", svcOther: "Other",
    fMsg: "Briefly about your situation", fSend: "Send via WhatsApp", fNote: "Your request will open in WhatsApp with the text ready — just tap “Send”.",
    visitEyebrow: "Getting here", visitH: "Planning to visit our office?",
    visitP: "We'll be happy to see you! The office is in Blizne Łaszczyńskiego, close to Warsaw's Bemowo district. You can get here by car or public transport.",
    route: "Get directions", gcard: "Google profile", mapPh: "The Google map will appear after you accept cookies.", mapBtn: "Show map"
  },
  ask: ASK, packs: PACKS, packsBiz: PACKS_BIZ, terms: TERMS, termsPacks: TERMS_PACKS,
  services: SERVICES, other: OTHER, fees: FEES, stages: STAGES
};
