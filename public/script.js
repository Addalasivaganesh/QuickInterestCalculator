// ✅ Translations object (13 languages, all UI text)
const translations = {
  en: {
    loanAmount: "Loan Amount",
    loanTakenDate: "Loan Taken Date",
    loanEndDate: "Loan End Date",
    duration: "Duration",
    interest: "Interest",
    totalAmount: "Total Amount",
    calculatedOn: "Calculated on",
    rate: "Rate of Interest",
    startDate: "Start Date",
    endDate: "End Date",
    calculate: "Calculate",
    export: "Export/Share",
    clear: "Clear History",
    history: "History",
    logout: "Logout",
    print: "Print History",
    phone: "Enter phone number",
    otp: "Enter OTP",
    sendOtp: "Send OTP",
    verifyOtp: "Verify OTP",
    noHistory: "No history yet",
    historyCleared: "History cleared successfully!",
    yearSingular: "year",
    yearPlural: "years",
    monthSingular: "month",
    monthPlural: "months",
    daySingular: "day",
    dayPlural: "days",
    loanAmountPlaceholder: "Enter loan amount",
    roiPlaceholder: "Enter interest or select from dropdown →",
    startDatePlaceholder: "dd-mm-yyyy",
    endDatePlaceholder: "dd-mm-yyyy",
    roiOptions: [
      "0.25 Rupee → 3% per year","0.50 Rupee → 6% per year","0.75 Rupee → 9% per year",
      "1.00 Rupee → 12% per year","1.25 Rupee → 15% per year","1.50 Rupee → 18% per year",
      "1.75 Rupee → 21% per year","2.00 Rupee → 24% per year","2.25 Rupee → 27% per year",
      "2.50 Rupee → 30% per year","2.75 Rupee → 33% per year","3.00 Rupee → 36% per year",
      "3.25 Rupee → 39% per year","3.50 Rupee → 42% per year","3.75 Rupee → 45% per year",
      "4.00 Rupee → 48% per year","4.25 Rupee → 51% per year","4.50 Rupee → 54% per year",
      "4.75 Rupee → 57% per year","5.00 Rupee → 60% per year"
    ]
  },
  hi: { // Hindi
    loanAmount: "ऋण राशि",
    loanTakenDate: "ऋण लिया गया दिनांक",
    loanEndDate: "ऋण समाप्ति दिनांक",
    duration: "अवधि",
    interest: "ब्याज",
    totalAmount: "कुल राशि",
    calculatedOn: "गणना की गई तिथि",
    rate: "ब्याज दर",
    startDate: "प्रारंभ तिथि",
    endDate: "समाप्ति तिथि",
    calculate: "गणना करें",
    export: "निर्यात/साझा करें",
    clear: "इतिहास साफ करें",
    history: "इतिहास",
    logout: "लॉग आउट",
    print: "इतिहास प्रिंट करें",
    phone: "फ़ोन नंबर दर्ज करें",
    otp: "OTP दर्ज करें",
    sendOtp: "OTP भेजें",
    verifyOtp: "OTP सत्यापित करें",
    noHistory: "अभी तक कोई इतिहास नहीं",
    historyCleared: "इतिहास सफलतापूर्वक साफ किया गया!",
    yearSingular: "वर्ष",
    yearPlural: "वर्ष",
    monthSingular: "महीना",
    monthPlural: "महीने",
    daySingular: "दिन",
    dayPlural: "दिन",

    // ✅ NEW placeholders
    loanAmountPlaceholder: "ऋण राशि दर्ज करें",
    roiPlaceholder: "ब्याज दर्ज करें या ड्रॉपडाउन से चुनें →",
    startDatePlaceholder: " दिनांक -  महीना -  वर्ष",
    endDatePlaceholder: " दिनांक -  महीना -  वर्ष",
    roiOptions: [
      "0.25 रुपया → 3% प्रति वर्ष","0.50 रुपया → 6% प्रति वर्ष","0.75 रुपया → 9% प्रति वर्ष",
      "1.00 रुपया → 12% प्रति वर्ष","1.25 रुपया → 15% प्रति वर्ष","1.50 रुपया → 18% प्रति वर्ष",
      "1.75 रुपया → 21% प्रति वर्ष","2.00 रुपया → 24% प्रति वर्ष","2.25 रुपया → 27% प्रति वर्ष",
      "2.50 रुपया → 30% प्रति वर्ष","2.75 रुपया → 33% प्रति वर्ष","3.00 रुपया → 36% प्रति वर्ष",
      "3.25 रुपया → 39% प्रति वर्ष","3.50 रुपया → 42% प्रति वर्ष","3.75 रुपया → 45% प्रति वर्ष",
      "4.00 रुपया → 48% प्रति वर्ष","4.25 रुपया → 51% प्रति वर्ष","4.50 रुपया → 54% प्रति वर्ष",
      "4.75 रुपया → 57% प्रति वर्ष","5.00 रुपया → 60% प्रति वर्ष"
    ]
  },
  te: { // Telugu
    loanAmount: "రుణం మొత్తం",
    loanTakenDate: "రుణం తీసుకున్న తేదీ",
    loanEndDate: "రుణం ముగింపు తేదీ",
    duration: "వ్యవధి",
    interest: "వడ్డీ",
    totalAmount: "మొత్తం",
    calculatedOn: "లెక్కించబడిన తేదీ",
    rate: "వడ్డీ రేటు",
    startDate: "ప్రారంభ తేదీ",
    endDate: "ముగింపు తేదీ",
    calculate: "లెక్కించు",
    export: "ఎగుమతి/పంచుకోండి",
    clear: "చరిత్రను తొలగించు",
    history: "చరిత్ర",
    logout: "లాగ్ అవుట్",
    print: "చరిత్రను ముద్రించండి",
    phone: "ఫోన్ నంబర్ నమోదు చేయండి",
    otp: "OTP నమోదు చేయండి",
    sendOtp: "OTP పంపండి",
    verifyOtp: "OTP ధృవీకరించండి",
    noHistory: "ఇప్పటివరకు చరిత్ర లేదు",
    historyCleared: "చరిత్ర విజయవంతంగా తొలగించబడింది!",
    yearSingular: "సంవత్సరం",
    yearPlural: "సంవత్సరాలు",
    monthSingular: "నెల",
    monthPlural: "నెలలు",
    daySingular: "రోజు",
    dayPlural: "రోజులు",

    // ✅ NEW placeholders
    loanAmountPlaceholder: "రుణం మొత్తం నమోదు చేయండి",
    roiPlaceholder: "వడ్డీ నమోదు చేయండి లేదా డ్రాప్‌డౌన్ నుండి ఎంచుకోండి →",
    startDatePlaceholder: " తేదీ -  నెల -  సంవత్సరం",
    endDatePlaceholder: " తేదీ -  నెల -  సంవత్సరం",
    roiOptions: [
      "0.25 రూపాయి → 3% సంవత్సరానికి","0.50 రూపాయి → 6% సంవత్సరానికి","0.75 రూపాయి → 9% సంవత్సరానికి",
      "1.00 రూపాయి → 12% సంవత్సరానికి","1.25 రూపాయి → 15% సంవత్సరానికి","1.50 రూపాయి → 18% సంవత్సరానికి",
      "1.75 రూపాయి → 21% సంవత్సరానికి","2.00 రూపాయి → 24% సంవత్సరానికి","2.25 రూపాయి → 27% సంవత్సరానికి",
      "2.50 రూపాయి → 30% సంవత్సరానికి","2.75 రూపాయి → 33% సంవత్సరానికి","3.00 రూపాయి → 36% సంవత్సరానికి",
      "3.25 రూపాయి → 39% సంవత్సరానికి","3.50 రూపాయి → 42% సంవత్సరానికి","3.75 రూపాయి → 45% సంవత్సరానికి",
      "4.00 రూపాయి → 48% సంవత్సరానికి","4.25 రూపాయి → 51% సంవత్సరానికి","4.50 రూపాయి → 54% సంవత్సరానికి",
      "4.75 రూపాయి → 57% సంవత్సరానికి","5.00 రూపాయి → 60% సంవత్సరానికి"
    ]
  },
ta: { // Tamil
    loanAmount: "கடன் தொகை",
  loanTakenDate: "கடன் பெற்ற தேதி",
  loanEndDate: "கடன் முடிவு தேதி",
  duration: "காலம்",
  interest: "வட்டி",
  totalAmount: "மொத்த தொகை",
  calculatedOn: "கணக்கிடப்பட்ட தேதி",
  rate: "வட்டி விகிதம்",
  startDate: "தொடக்க தேதி",
  endDate: "முடிவு தேதி",
  calculate: "கணக்கிடு",
  export: "ஏற்றுமதி/பகிர்",
  clear: "வரலாறு அழி",
  history: "வரலாறு",
  logout: "வெளியேறு",
  print: "வரலாற்றை அச்சிடு",
  phone: "தொலைபேசி எண்ணை உள்ளிடவும்",
  otp: "OTP உள்ளிடவும்",
  sendOtp: "OTP அனுப்பு",
  verifyOtp: "OTP சரிபார்க்கவும்",
  noHistory: "இன்னும் வரலாறு இல்லை",
  historyCleared: "வரலாறு வெற்றிகரமாக அழிக்கப்பட்டது!",
  yearSingular: "ஆண்டு",
  yearPlural: "ஆண்டுகள்",
  monthSingular: "மாதம்",
  monthPlural: "மாதங்கள்",
  daySingular: "நாள்",
  dayPlural: "நாட்கள்",
  loanAmountPlaceholder: "கடன் தொகையை உள்ளிடவும்",
  roiPlaceholder: "வட்டி உள்ளிடவும் அல்லது பட்டியலில் இருந்து தேர்ந்தெடுக்கவும் →",
  startDatePlaceholder: " தேதி -  மாதம் -  ஆண்டு",
  endDatePlaceholder: " தேதி -  மாதம் -  ஆண்டு",
  roiOptions: [
    "0.25 ரூபாய் → 3% வருடத்திற்கு","0.50 ரூபாய் → 6% வருடத்திற்கு","0.75 ரூபாய் → 9% வருடத்திற்கு",
    "1.00 ரூபாய் → 12% வருடத்திற்கு","1.25 ரூபாய் → 15% வருடத்திற்கு","1.50 ரூபாய் → 18% வருடத்திற்கு",
    "1.75 ரூபாய் → 21% வருடத்திற்கு","2.00 ரூபாய் → 24% வருடத்திற்கு","2.25 ரூபாய் → 27% வருடத்திற்கு",
    "2.50 ரூபாய் → 30% வருடத்திற்கு","2.75 ரூபாய் → 33% வருடத்திற்கு","3.00 ரூபாய் → 36% வருடத்திற்கு",
    "3.25 ரூபாய் → 39% வருடத்திற்கு","3.50 ரூபாய் → 42% வருடத்திற்கு","3.75 ரூபாய் → 45% வருடத்திற்கு",
    "4.00 ரூபாய் → 48% வருடத்திற்கு","4.25 ரூபாய் → 51% வருடத்திற்கு","4.50 ரூபாய் → 54% வருடத்திற்கு",
    "4.75 ரூபாய் → 57% வருடத்திற்கு","5.00 ரூபாய் → 60% வருடத்திற்கு"
  ]
},
kn: { // Kannada
    loanAmount: "ಸಾಲದ ಮೊತ್ತ",
    loanTakenDate: "ಸಾಲ ಪಡೆದ ದಿನಾಂಕ",
    loanEndDate: "ಸಾಲ ಮುಗಿದ ದಿನಾಂಕ",
    duration: "ಅವಧಿ",
    interest: "ಬಡ್ಡಿ",
    totalAmount: "ಒಟ್ಟು ಮೊತ್ತ",
    calculatedOn: "ಲೆಕ್ಕ ಹಾಕಿದ ದಿನಾಂಕ",
    rate: "ಬಡ್ಡಿ ದರ",
    startDate: "ಪ್ರಾರಂಭ ದಿನಾಂಕ",
    endDate: "ಅಂತಿಮ ದಿನಾಂಕ",
    calculate: "ಲೆಕ್ಕ ಹಾಕಿ",
    export: "ರಫ್ತು/ಹಂಚಿಕೊಳ್ಳಿ",
    clear: "ಇತಿಹಾಸ ಅಳಿಸಿ",
    history: "ಇತಿಹಾಸ",
    logout: "ಲಾಗ್ ಔಟ್",
    print: "ಇತಿಹಾಸವನ್ನು ಮುದ್ರಿಸಿ",
    phone: "ಫೋನ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ",
    otp: "OTP ನಮೂದಿಸಿ",
    sendOtp: "OTP ಕಳುಹಿಸಿ",
    verifyOtp: "OTP ಪರಿಶೀಲಿಸಿ",
    noHistory: "ಇತಿಹಾಸ ಇಲ್ಲ",
    historyCleared: "ಇತಿಹಾಸ ಯಶಸ್ವಿಯಾಗಿ ಅಳಿಸಲಾಗಿದೆ!",
    yearSingular: "ವರ್ಷ",
    yearPlural: "ವರ್ಷಗಳು",
    monthSingular: "ತಿಂಗಳು",
    monthPlural: "ತಿಂಗಳುಗಳು",
    daySingular: "ದಿನ",
    dayPlural: "ದಿನಗಳು",
    loanAmountPlaceholder: "ಸಾಲದ ಮೊತ್ತ ನಮೂದಿಸಿ",
    roiPlaceholder: "ಬಡ್ಡಿ ನಮೂದಿಸಿ ಅಥವಾ ಡ್ರಾಪ್‌ಡೌನ್‌ನಿಂದ ಆಯ್ಕೆಮಾಡಿ →",
    startDatePlaceholder: " ದಿನಾಂಕ -  ತಿಂಗಳು -  ವರ್ಷ",
    endDatePlaceholder: " ದಿನಾಂಕ -  ತಿಂಗಳು -  ವರ್ಷ",
  roiOptions: [
    "0.25 ರೂಪಾಯಿ → 3% ವರ್ಷಕ್ಕೆ","0.50 ರೂಪಾಯಿ → 6% ವರ್ಷಕ್ಕೆ","0.75 ರೂಪಾಯಿ → 9% ವರ್ಷಕ್ಕೆ",
    "1.00 ರೂಪಾಯಿ → 12% ವರ್ಷಕ್ಕೆ","1.25 ರೂಪಾಯಿ → 15% ವರ್ಷಕ್ಕೆ","1.50 ರೂಪಾಯಿ → 18% ವರ್ಷಕ್ಕೆ",
    "1.75 ರೂಪಾಯಿ → 21% ವರ್ಷಕ್ಕೆ","2.00 ರೂಪಾಯಿ → 24% ವರ್ಷಕ್ಕೆ","2.25 ರೂಪಾಯಿ → 27% ವರ್ಷಕ್ಕೆ",
    "2.50 ರೂಪಾಯಿ → 30% ವರ್ಷಕ್ಕೆ","2.75 ರೂಪಾಯಿ → 33% ವರ್ಷಕ್ಕೆ","3.00 ರೂಪಾಯಿ → 36% ವರ್ಷಕ್ಕೆ",
    "3.25 ರೂಪಾಯಿ → 39% ವರ್ಷಕ್ಕೆ","3.50 ರೂಪಾಯಿ → 42% ವರ್ಷಕ್ಕೆ","3.75 ರೂಪಾಯಿ → 45% ವರ್ಷಕ್ಕೆ",
    "4.00 ರೂಪಾಯಿ → 48% ವರ್ಷಕ್ಕೆ","4.25 ರೂಪಾಯಿ → 51% ವರ್ಷಕ್ಕೆ","4.50 ರೂಪಾಯಿ → 54% ವರ್ಷಕ್ಕೆ",
    "4.75 ರೂಪಾಯಿ → 57% ವರ್ಷಕ್ಕೆ","5.00 ರೂಪಾಯಿ → 60% ವರ್ಷಕ್ಕೆ"
  ]
},

ml: { // Malayalam
    loanAmount: "കടം തുക",
    loanTakenDate: "കടം എടുത്ത തീയതി",
    loanEndDate: "കടം അവസാനിക്കുന്ന തീയതി",
    duration: "കാലാവധി",
    interest: "പലിശ",
    totalAmount: "ആകെ തുക",
    calculatedOn: "കണക്കാക്കിയ തീയതി",
    rate: "പലിശ നിരക്ക്",
    startDate: "ആരംഭ തീയതി",
    endDate: "അവസാന തീയതി",
    calculate: "കണക്കാക്കുക",
    export: "കയറ്റുമതി/പങ്കിടുക",
    clear: "ചരിത്രം മായ്ക്കുക",
    history: "ചരിത്രം",
    logout: "ലോഗ് ഔട്ട്",
    print: "ചരിത്രം പ്രിന്റ് ചെയ്യുക",
    phone: "ഫോൺ നമ്പർ നൽകുക",
    otp: "OTP നൽകുക",
    sendOtp: "OTP അയയ്ക്കുക",
    verifyOtp: "OTP സ്ഥിരീകരിക്കുക",
    noHistory: "ചരിത്രം ഇല്ല",
    historyCleared: "ചരിത്രം വിജയകരമായി മായ്ച്ചു!",
    yearSingular: "വർഷം",
    yearPlural: "വർഷങ്ങൾ",
    monthSingular: "മാസം",
    monthPlural: "മാസങ്ങൾ",
    daySingular: "ദിവസം",
    dayPlural: "ദിവസങ്ങൾ",
    loanAmountPlaceholder: "കടം തുക നൽകുക",
    roiPlaceholder: "പലിശ നൽകുക അല്ലെങ്കിൽ ഡ്രോപ്പ്ഡൗണിൽ നിന്ന് തിരഞ്ഞെടുക്കുക →",
    startDatePlaceholder: " തീയതി -  മാസം -  വർഷം",
    endDatePlaceholder: " തീയതി -  മാസം -  വർഷം",
  roiOptions: [
    "0.25 രൂപ → 3% വർഷത്തിൽ","0.50 രൂപ → 6% വർഷത്തിൽ","0.75 രൂപ → 9% വർഷത്തിൽ",
    "1.00 രൂപ → 12% വർഷത്തിൽ","1.25 രൂപ → 15% വർഷത്തിൽ","1.50 രൂപ → 18% വർഷത്തിൽ",
    "1.75 രൂപ → 21% വർഷത്തിൽ","2.00 രൂപ → 24% വർഷത്തിൽ","2.25 രൂപ → 27% വർഷത്തിൽ",
    "2.50 രൂപ → 30% വർഷത്തിൽ","2.75 രൂപ → 33% വർഷത്തിൽ","3.00 രൂപ → 36% വർഷത്തിൽ",
    "3.25 രൂപ → 39% വർഷത്തിൽ","3.50 രൂപ → 42% വർഷത്തിൽ","3.75 രൂപ → 45% വർഷത്തിൽ",
    "4.00 രൂപ → 48% വർഷത്തിൽ","4.25 രൂപ → 51% വർഷത്തിൽ","4.50 രൂപ → 54% വർഷത്തിൽ",
    "4.75 രൂപ → 57% വർഷത്തിൽ","5.00 രൂപ → 60% വർഷത്തിൽ"
  ]
},

bn: { // Bengali
    loanAmount: "ঋণের পরিমাণ",
    loanTakenDate: "ঋণ নেওয়ার তারিখ",
    loanEndDate: "ঋণ শেষ হওয়ার তারিখ",
    duration: "সময়কাল",
    interest: "সুদ",
    totalAmount: "মোট পরিমাণ",
    calculatedOn: "গণনা করা হয়েছে",
    rate: "সুদের হার",
    startDate: "শুরুর তারিখ",
    endDate: "শেষ তারিখ",
    calculate: "গণনা করুন",
    export: "রপ্তানি/শেয়ার করুন",
    clear: "ইতিহাস মুছুন",
    history: "ইতিহাস",
    logout: "লগ আউট",
    print: "ইতিহাস প্রিন্ট করুন",
    phone: "ফোন নম্বর লিখুন",
    otp: "OTP লিখুন",
    sendOtp: "OTP পাঠান",
    verifyOtp: "OTP যাচাই করুন",
    noHistory: "এখনও কোনো ইতিহাস নেই",
    historyCleared: "ইতিহাস সফলভাবে মুছে ফেলা হয়েছে!",
    yearSingular: "বছর",
    yearPlural: "বছর",
    monthSingular: "মাস",
    monthPlural: "মাস",
    daySingular: "দিন",
    dayPlural: "দিন",
    loanAmountPlaceholder: "ঋণের পরিমাণ লিখুন",
    roiPlaceholder: "সুদ লিখুন অথবা ড্রপডাউন থেকে নির্বাচন করুন →",
    startDatePlaceholder: " তারিখ -  মাস -  বছর",
    endDatePlaceholder: " তারিখ -  মাস -  বছর",
  roiOptions: [
    "0.25 টাকা → 3% প্রতি বছর","0.50 টাকা → 6% প্রতি বছর","0.75 টাকা → 9% প্রতি বছর",
    "1.00 টাকা → 12% প্রতি বছর","1.25 টাকা → 15% প্রতি বছর","1.50 টাকা → 18% প্রতি বছর",
    "1.75 টাকা → 21% প্রতি বছর","2.00 টাকা → 24% প্রতি বছর","2.25 টাকা → 27% প্রতি বছর",
    "2.50 টাকা → 30% প্রতি বছর","2.75 টাকা → 33% প্রতি বছর","3.00 টাকা → 36% প্রতি বছর",
    "3.25 টাকা → 39% প্রতি বছর","3.50 টাকা → 42% প্রতি বছর","3.75 টাকা → 45% প্রতি বছর",
    "4.00 টাকা → 48% প্রতি বছর","4.25 টাকা → 51% প্রতি বছর","4.50 টাকা → 54% প্রতি বছর",
    "4.75 টাকা → 57% প্রতি বছর","5.00 টাকা → 60% প্রতি বছর"
  ]
},

gu: { // Gujarati
    loanAmount: "લોન રકમ",
    loanTakenDate: "લોન લીધેલી તારીખ",
    loanEndDate: "લોન પૂર્ણ તારીખ",
    duration: "સમયગાળો",
    interest: "વ્યાજ",
    totalAmount: "કુલ રકમ",
    calculatedOn: "ગણતરી તારીખ",
    rate: "વ્યાજ દર",
    startDate: "પ્રારંભ તારીખ",
    endDate: "અંતિમ તારીખ",
    calculate: "ગણતરી કરો",
    export: "નિકાસ/શેર કરો",
    clear: "ઇતિહાસ સાફ કરો",
    history: "ઇતિહાસ",
    logout: "લોગ આઉટ",
    print: "ઇતિહાસ પ્રિન્ટ કરો",
    phone: "ફોન નંબર દાખલ કરો",
    otp: "OTP દાખલ કરો",
    sendOtp: "OTP મોકલો",
    verifyOtp: "OTP ચકાસો",
    noHistory: "હજુ સુધી કોઈ ઇતિહાસ નથી",
    historyCleared: "ઇતિહાસ સફળતાપૂર્વક સાફ થયો!",
    yearSingular: "વર્ષ",
    yearPlural: "વર્ષો",
    monthSingular: "મહિનો",
    monthPlural: "મહિના",
    daySingular: "દિવસ",
    dayPlural: "દિવસો",
    loanAmountPlaceholder: "લોન રકમ દાખલ કરો",
    roiPlaceholder: "વ્યાજ દાખલ કરો અથવા ડ્રોપડાઉનમાંથી પસંદ કરો →",
    startDatePlaceholder: " તારીખ -  મહિનો -  વર્ષ",
    endDatePlaceholder: " તારીખ -  મહિનો -  વર્ષ",
  roiOptions: [
    "0.25 રૂપિયા → 3% દર વર્ષે","0.50 રૂપિયા → 6% દર વર્ષે","0.75 રૂપિયા → 9% દર વર્ષે",
    "1.00 રૂપિયા → 12% દર વર્ષે","1.25 રૂપિયા → 15% દર વર્ષે","1.50 રૂપિયા → 18% દર વર્ષે",
    "1.75 રૂપિયા → 21% દર વર્ષે","2.00 રૂપિયા → 24% દર વર્ષે","2.25 રૂપિયા → 27% દર વર્ષે",
    "2.50 રૂપિયા → 30% દર વર્ષે","2.75 રૂપિયા → 33% દર વર્ષે","3.00 રૂપિયા → 36% દર વર્ષે",
    "3.25 રૂપિયા → 39% દર વર્ષે","3.50 રૂપિયા → 42% દર વર્ષે","3.75 રૂપિયા → 45% દર વર્ષે",
    "4.00 રૂપિયા → 48% દર વર્ષે","4.25 રૂપિયા → 51% દર વર્ષે","4.50 રૂપિયા → 54% દર વર્ષે",
    "4.75 રૂપિયા → 57% દર વર્ષે","5.00 રૂપિયા → 60% દર વર્ષે"
  ]
},
mr: { // Marathi
    loanAmount: "कर्जाची रक्कम",
    loanTakenDate: "कर्ज घेतलेली तारीख",
    loanEndDate: "कर्ज संपण्याची तारीख",
    duration: "कालावधी",
    interest: "व्याज",
    totalAmount: "एकूण रक्कम",
    calculatedOn: "गणना केलेली तारीख",
    rate: "व्याज दर",
    startDate: "सुरुवातीची तारीख",
    endDate: "शेवटची तारीख",
    calculate: "गणना करा",
    export: "निर्यात/शेअर करा",
    clear: "इतिहास साफ करा",
    history: "इतिहास",
    logout: "लॉग आउट",
    print: "इतिहास छापा",
    phone: "फोन नंबर टाका",
    otp: "OTP टाका",
    sendOtp: "OTP पाठवा",
    verifyOtp: "OTP सत्यापित करा",
    noHistory: "अजून इतिहास नाही",
    historyCleared: "इतिहास यशस्वीरित्या साफ केला!",
    yearSingular: "वर्ष",
    yearPlural: "वर्षे",
    monthSingular: "महिना",
    monthPlural: "महिने",
    daySingular: "दिवस",
    dayPlural: "दिवस",
    loanAmountPlaceholder: "कर्जाची रक्कम टाका",
    roiPlaceholder: "व्याज टाका किंवा ड्रॉपडाउनमधून निवडा →",
    startDatePlaceholder: " तारीख -  महिना -  वर्ष",
    endDatePlaceholder: " तारीख -  महिना -  वर्ष",
  roiOptions: [
    "0.25 रुपये → 3% दरवर्षी","0.50 रुपये → 6% दरवर्षी","0.75 रुपये → 9% दरवर्षी",
    "1.00 रुपये → 12% दरवर्षी","1.25 रुपये → 15% दरवर्षी","1.50 रुपये → 18% दरवर्षी",
    "1.75 रुपये → 21% दरवर्षी","2.00 रुपये → 24% दरवर्षी","2.25 रुपये → 27% दरवर्षी",
    "2.50 रुपये → 30% दरवर्षी","2.75 रुपये → 33% दरवर्षी","3.00 रुपये → 36% दरवर्षी",
    "3.25 रुपये → 39% दरवर्षी","3.50 रुपये → 42% दरवर्षी","3.75 रुपये → 45% दरवर्षी",
    "4.00 रुपये → 48% दरवर्षी","4.25 रुपये → 51% दरवर्षी","4.50 रुपये → 54% दरवर्षी",
    "4.75 रुपये → 57% दरवर्षी","5.00 रुपये → 60% दरवर्षी"
  ]
},
pa: { // Punjabi
    loanAmount: "ਕਰਜ਼ ਦੀ ਰਕਮ",
    loanTakenDate: "ਕਰਜ਼ ਲਿਆ ਗਿਆ ਮਿਤੀ",
    loanEndDate: "ਕਰਜ਼ ਖਤਮ ਮਿਤੀ",
    duration: "ਅਵਧੀ",
    interest: "ਸੂਦ",
    totalAmount: "ਕੁੱਲ ਰਕਮ",
    calculatedOn: "ਗਿਣਤੀ ਕੀਤੀ ਮਿਤੀ",
    rate: "ਸੂਦ ਦੀ ਦਰ",
    startDate: "ਸ਼ੁਰੂ ਮਿਤੀ",
    endDate: "ਅੰਤ ਮਿਤੀ",
    calculate: "ਗਿਣਤੀ ਕਰੋ",
    export: "ਨਿਰਯਾਤ/ਸਾਂਝਾ ਕਰੋ",
    clear: "ਇਤਿਹਾਸ ਸਾਫ ਕਰੋ",
    history: "ਇਤਿਹਾਸ",
    logout: "ਲਾਗ ਆਉਟ",
    print: "ਇਤਿਹਾਸ ਪ੍ਰਿੰਟ ਕਰੋ",
    phone: "ਫੋਨ ਨੰਬਰ ਦਰਜ ਕਰੋ",
    otp: "OTP ਦਰਜ ਕਰੋ",
    sendOtp: "OTP ਭੇਜੋ",
    verifyOtp: "OTP ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",
    noHistory: "ਅਜੇ ਤੱਕ ਕੋਈ ਇਤਿਹਾਸ ਨਹੀਂ",
    historyCleared: "ਇਤਿਹਾਸ ਸਫਲਤਾਪੂਰਵਕ ਸਾਫ ਕੀਤਾ ਗਿਆ!",
    yearSingular: "ਸਾਲ",
    yearPlural: "ਸਾਲ",
    monthSingular: "ਮਹੀਨਾ",
    monthPlural: "ਮਹੀਨੇ",
    daySingular: "ਦਿਨ",
    dayPlural: "ਦਿਨ",
    loanAmountPlaceholder: "ਕਰਜ਼ ਦੀ ਰਕਮ ਦਰਜ ਕਰੋ",
    roiPlaceholder: "ਸੂਦ ਦਰਜ ਕਰੋ ਜਾਂ ਡ੍ਰਾਪਡਾਊਨ ਤੋਂ ਚੁਣੋ →",
    startDatePlaceholder: " ਤਾਰੀਖ -  ਮਹੀਨਾ -  ਸਾਲ",
    endDatePlaceholder: " ਤਾਰੀਖ -  ਮਹੀਨਾ -  ਸਾਲ",
  roiOptions: [
    "0.25 ਰੁਪਏ → 3% ਪ੍ਰਤੀ ਸਾਲ","0.50 ਰੁਪਏ → 6% ਪ੍ਰਤੀ ਸਾਲ","0.75 ਰੁਪਏ → 9% ਪ੍ਰਤੀ ਸਾਲ",
    "1.00 ਰੁਪਏ → 12% ਪ੍ਰਤੀ ਸਾਲ","1.25 ਰੁਪਏ → 15% ਪ੍ਰਤੀ ਸਾਲ","1.50 ਰੁਪਏ → 18% ਪ੍ਰਤੀ ਸਾਲ",
    "1.75 ਰੁਪਏ → 21% ਪ੍ਰਤੀ ਸਾਲ","2.00 ਰੁਪਏ → 24% ਪ੍ਰਤੀ ਸਾਲ","2.25 ਰੁਪਏ → 27% ਪ੍ਰਤੀ ਸਾਲ",
    "2.50 ਰੁਪਏ → 30% ਪ੍ਰਤੀ ਸਾਲ","2.75 ਰੁਪਏ → 33% ਪ੍ਰਤੀ ਸਾਲ","3.00 ਰੁਪਏ → 36% ਪ੍ਰਤੀ ਸਾਲ",
    "3.25 ਰੁਪਏ → 39% ਪ੍ਰਤੀ ਸਾਲ","3.50 ਰੁਪਏ → 42% ਪ੍ਰਤੀ ਸਾਲ","3.75 ਰੁਪਏ → 45% ਪ੍ਰਤੀ ਸਾਲ",
    "4.00 ਰੁਪਏ → 48% ਪ੍ਰਤੀ ਸਾਲ","4.25 ਰੁਪਏ → 51% ਪ੍ਰਤੀ ਸਾਲ","4.50 ਰੁਪਏ → 54% ਪ੍ਰਤੀ ਸਾਲ",
    "4.75 ਰੁਪਏ → 57% ਪ੍ਰਤੀ ਸਾਲ","5.00 ਰੁਪਏ → 60% ਪ੍ਰਤੀ ਸਾਲ"
  ]
},
or: { // Odia
    loanAmount: "ଋଣ ରାଶି",
    loanTakenDate: "ଋଣ ନିଆର ତାରିଖ",
    loanEndDate: "ଋଣ ସମାପ୍ତି ତାରିଖ",
    duration: "ଅବଧି",
    interest: "ସୁଧ",
    totalAmount: "ମୋଟ ରାଶି",
    calculatedOn: "ଗଣନା କରାଗଲା",
    rate: "ସୁଧ ହାର",
    startDate: "ଆରମ୍ଭ ତାରିଖ",
    endDate: "ଶେଷ ତାରିଖ",
    calculate: "ଗଣନା କରନ୍ତୁ",
    export: "ରପ୍ତାନି/ସେୟାର",
    clear: "ଇତିହାସ ସଫା କରନ୍ତୁ",
    history: "ଇତିହାସ",
    logout: "ଲଗ୍ ଆଉଟ୍",
    print: "ଇତିହାସ ପ୍ରିଣ୍ଟ କରନ୍ତୁ",
    phone: "ଫୋନ ନମ୍ବର ଦିଅନ୍ତୁ",
    otp: "OTP ଦିଅନ୍ତୁ",
    sendOtp: "OTP ପଠାନ୍ତୁ",
    verifyOtp: "OTP ସତ୍ୟାପିତ କରନ୍ତୁ",
    noHistory: "ଏପର୍ଯ୍ୟନ୍ତ କୌଣସି ଇତିହାସ ନାହିଁ",
    historyCleared: "ଇତିହାସ ସଫଳତାର ସହିତ ସଫା ହେଲା!",
    yearSingular: "ବର୍ଷ",
    yearPlural: "ବର୍ଷ",
    monthSingular: "ମାସ",
    monthPlural: "ମାସ",
    daySingular: "ଦିନ",
    dayPlural: "ଦିନ",
    loanAmountPlaceholder: "ଋଣ ରାଶି ଦିଅନ୍ତୁ",
    roiPlaceholder: "ସୁଧ ଦିଅନ୍ତୁ କିମ୍ବା ଡ୍ରପ୍ଡାଉନରୁ ବାଛନ୍ତୁ →",
    startDatePlaceholder: " ତାରିଖ -  ମାସ -  ବର୍ଷ",
    endDatePlaceholder: " ତାରିଖ -  ମାସ -  ବର୍ଷ",
  roiOptions: [
    "0.25 ଟଙ୍କା → 3% ପ୍ରତି ବର୍ଷ","0.50 ଟଙ୍କା → 6% ପ୍ରତି ବର୍ଷ","0.75 ଟଙ୍କା → 9% ପ୍ରତି ବର୍ଷ",
    "1.00 ଟଙ୍କା → 12% ପ୍ରତି ବର୍ଷ","1.25 ଟଙ୍କା → 15% ପ୍ରତି ବର୍ଷ","1.50 ଟଙ୍କା → 18% ପ୍ରତି ବର୍ଷ",
    "1.75 ଟଙ୍କା → 21% ପ୍ରତି ବର୍ଷ","2.00 ଟଙ୍କା → 24% ପ୍ରତି ବର୍ଷ","2.25 ଟଙ୍କା → 27% ପ୍ରତି ବର୍ଷ",
    "2.50 ଟଙ୍କା → 30% ପ୍ରତି ବର୍ଷ","2.75 ଟଙ୍କା → 33% ପ୍ରତି ବର୍ଷ","3.00 ଟଙ୍କା → 36% ପ୍ରତି ବର୍ଷ",
    "3.25 ଟଙ୍କା → 39% ପ୍ରତି ବର୍ଷ","3.50 ଟଙ୍କା → 42% ପ୍ରତି ବର୍ଷ","3.75 ଟଙ୍କା → 45% ପ୍ରତି ବର୍ଷ",
    "4.00 ଟଙ୍କା → 48% ପ୍ରତି ବର୍ଷ","4.25 ଟଙ୍କା → 51% ପ୍ରତି ବର୍ଷ","4.50 ଟଙ୍କା → 54% ପ୍ରତି ବର୍ଷ",
    "4.75 ଟଙ୍କା → 57% ପ୍ରତି ବର୍ଷ","5.00 ଟଙ୍କା → 60% ପ୍ରତି ବର୍ଷ"
  ]
},
as: { // Assamese
    loanAmount: "ঋণৰ পৰিমাণ",
    loanTakenDate: "ঋণ লোৱা তাৰিখ",
    loanEndDate: "ঋণ শেষ তাৰিখ",
    duration: "সময়কাল",
    interest: "সুদ",
    totalAmount: "মুঠ পৰিমাণ",
    calculatedOn: "গণনা কৰা তাৰিখ",
    rate: "সুদৰ হাৰ",
    startDate: "আৰম্ভ তাৰিখ",
    endDate: "শেষ তাৰিখ",
    calculate: "গণনা কৰক",
    export: "ৰপ্তানি/ভাগ কৰক",
    clear: "ইতিহাস মচি পেলাওক",
    history: "ইতিহাস",
    logout: "লগ আউট",
    print: "ইতিহাস প্ৰিন্ট কৰক",
    phone: "ফোন নম্বৰ লিখক",
    otp: "OTP লিখক",
    sendOtp: "OTP পঠাওক",
    verifyOtp: "OTP যাচাই কৰক",
    noHistory: "এতিয়ালৈকে কোনো ইতিহাস নাই",
    historyCleared: "ইতিহাস সফলতাৰে মচি পেলোৱা হৈছে!",
    yearSingular: "বছৰ",
    yearPlural: "বছৰ",
    monthSingular: "মাহ",
    monthPlural: "মাহ",
    daySingular: "দিন",
    dayPlural: "দিন",
    loanAmountPlaceholder: "ঋণৰ পৰিমাণ লিখক",
    roiPlaceholder: "সুদ লিখক বা ড্ৰপডাউনৰ পৰা বাছক →",
    startDatePlaceholder: " তাৰিখ -  মাহ -  বছৰ",
    endDatePlaceholder: " তাৰিখ -  মাহ -  বছৰ",
  roiOptions: [
    "0.25 টকা → বছৰত 3%","0.50 টকা → বছৰত 6%","0.75 টকা → বছৰত 9%",
    "1.00 টকা → বছৰত 12%","1.25 টকা → বছৰত 15%","1.50 টকা → বছৰত 18%",
    "1.75 টকা → বছৰত 21%","2.00 টকা → বছৰত 24%","2.25 টকা → বছৰত 27%",
    "2.50 টকা → বছৰত 30%","2.75 টকা → বছৰত 33%","3.00 টকা → বছৰত 36%",
    "3.25 টকা → বছৰত 39%","3.50 টকা → বছৰত 42%","3.75 টকা → বছৰত 45%",
    "4.00 টকা → বছৰত 48%","4.25 টকা → বছৰত 51%","4.50 টকা → বছৰত 54%",
    "4.75 টকা → বছৰত 57%","5.00 টকা → বছৰত 60%"
  ]
},
sa: { // Sanskrit
    loanAmount: "ऋणराशिः",
    loanTakenDate: "ऋणगृहीततिथिः",
    loanEndDate: "ऋणसमाप्तितिथिः",
    duration: "अवधिः",
    interest: "व्याजम्",
    totalAmount: "कुलराशिः",
    calculatedOn: "गणितं तिथौ",
    rate: "व्याजदरः",
    startDate: "आरम्भतिथिः",
    endDate: "समाप्तितिथिः",
    calculate: "गणयतु",
    export: "निर्यात/साझा",
    clear: "इतिहासं शुद्धयतु",
    history: "इतिहासः",
    logout: "लॉग् आउट्",
    phone: "दूरभाषसङ्ख्या प्रविष्टयतु",
    otp: "OTP प्रविष्टयतु",
    print: "इतिहासं मुद्रयतु",
    sendOtp: "OTP प्रेषयतु",
    verifyOtp: "OTP सत्यापयतु",
    noHistory: "इतिहासः नास्ति",
    historyCleared: "इतिहासः सफलतया शुद्धः!",
    yearSingular: "वर्षम्",
    yearPlural: "वर्षाणि",
    monthSingular: "मासः",
    monthPlural: "मासाः",
    daySingular: "दिनम्",
    dayPlural: "दिनानि",
    loanAmountPlaceholder: "ऋणराशिं प्रविष्टयतु",
    roiPlaceholder: "व्याजं प्रविष्टयतु वा ड्रॉपडाउनतः चिनोतु →",
    startDatePlaceholder: " तिथि -  मास -  वर्ष",
    endDatePlaceholder: " तिथि -  मास -  वर्ष",
  roiOptions: [
    "0.25 रूप्यकः → 3% प्रति वर्षम्","0.50 रूप्यकः → 6% प्रति वर्षम्","0.75 रूप्यकः → 9% प्रति वर्षम्",
    "1.00 रूप्यकः → 12% प्रति वर्षम्","1.25 रूप्यकः → 15% प्रति वर्षम्","1.50 रूप्यकः → 18% प्रति वर्षम्",
    "1.75 रूप्यकः → 21% प्रति वर्षम्","2.00 रूप्यकः → 24% प्रति वर्षम्","2.25 रूप्यकः → 27% प्रति वर्षम्",
    "2.50 रूप्यकः → 30% प्रति वर्षम्","2.75 रूप्यकः → 33% प्रति वर्षम्","3.00 रूप्यकः → 36% प्रति वर्षम्",
    "3.25 रूप्यकः → 39% प्रति वर्षम्","3.50 रूप्यकः → 42% प्रति वर्षम्","3.75 रूप्यकः → 45% प्रति वर्षम्",
    "4.00 रूप्यकः → 48% प्रति वर्षम्","4.25 रूप्यकः → 51% प्रति वर्षम्","4.50 रूप्यकः → 54% प्रति वर्षम्",
    "4.75 रूप्यकः → 57% प्रति वर्षम्","5.00 रूप्यकः → 60% प्रति वर्षम्"
  ]
}
}

// ✅ Apply translations
function applyTranslations() {
  const lang = localStorage.getItem("lang") || "en";
  const t = translations[lang];

  // ✅ Form labels
  if (document.getElementById("loanLabel")) document.getElementById("loanLabel").innerText = t.loanAmount;
  if (document.getElementById("rateLabel")) document.getElementById("rateLabel").innerText = t.rate;
  if (document.getElementById("startLabel")) document.getElementById("startLabel").innerText = t.startDate;
  if (document.getElementById("endLabel")) document.getElementById("endLabel").innerText = t.endDate;
  if (document.getElementById("calcBtn")) document.getElementById("calcBtn").innerText = t.calculate;
  if (document.getElementById("historyTitle")) document.getElementById("historyTitle").innerText = t.history;
  if (document.getElementById("exportBtn")) document.getElementById("exportBtn").innerText = t.export;
  if (document.getElementById("clearBtn")) document.getElementById("clearBtn").innerText = t.clear;
  if (document.getElementById("logoutBtn")) document.getElementById("logoutBtn").innerText = t.logout;
  if (document.getElementById("printBtn")) document.getElementById("printBtn").innerText = t.print;

  // ✅ Form placeholders
  if (document.getElementById("principal")) document.getElementById("principal").placeholder = t.loanAmountPlaceholder;
  if (document.getElementById("rate")) document.getElementById("rate").placeholder = t.roiPlaceholder;
  if (document.getElementById("startDate")) document.getElementById("startDate").placeholder = t.startDatePlaceholder;
  if (document.getElementById("endDate")) document.getElementById("endDate").placeholder = t.endDatePlaceholder;

  // ✅ Login placeholders
  if (document.getElementById("phone")) document.getElementById("phone").placeholder = t.phone;
  if (document.getElementById("otp")) document.getElementById("otp").placeholder = t.otp;
  if (document.getElementById("sendOtpBtn")) document.getElementById("sendOtpBtn").innerText = t.sendOtp;
  if (document.getElementById("verifyOtpBtn")) document.getElementById("verifyOtpBtn").innerText = t.verifyOtp;

  if (document.getElementById("language")) document.getElementById("language").value = lang;

  // ✅ ResultBox labels
  if (document.getElementById("loanAmountLabel")) document.getElementById("loanAmountLabel").innerText = t.loanAmount;
  if (document.getElementById("loanTakenDateLabel")) document.getElementById("loanTakenDateLabel").innerText = t.loanTakenDate;
  if (document.getElementById("loanEndDateLabel")) document.getElementById("loanEndDateLabel").innerText = t.loanEndDate;
  if (document.getElementById("durationLabel")) document.getElementById("durationLabel").innerText = t.duration;
  if (document.getElementById("interestLabel")) document.getElementById("interestLabel").innerText = t.interest;
  if (document.getElementById("totalAmountLabel")) document.getElementById("totalAmountLabel").innerText = t.totalAmount;

  // ✅ Refresh ROI options in selected language
  populateRateDropdown();
}

// ✅ Populate Rate dropdown
function populateRateDropdown() {
  const roiSelect = document.getElementById("rate");
  if (!roiSelect) return;

  const lang = localStorage.getItem("lang") || "en";
  const t = translations[lang];

  roiSelect.innerHTML = "";
  if (t.roiOptions) {
    t.roiOptions.forEach(opt => {
      const option = document.createElement("option");
      const numeric = parseFloat(opt.split(" ")[0]); 
      option.textContent = opt;
      option.value = numeric;
      roiSelect.appendChild(option);
    });
  }
}

function changeLanguage() {
  const selectedLang = document.getElementById("language").value;
  localStorage.setItem("lang", selectedLang);
  applyTranslations();
}

// ✅ On load
document.addEventListener("DOMContentLoaded", () => {
  const systemLang = navigator.language.slice(0,2);
  const supportedLangs = ["en","hi","te","ta","kn","ml","bn","gu","mr","pa","or","as","sa"];

  // ✅ Set default language if not already stored
  if (!localStorage.getItem("lang")) {
    localStorage.setItem("lang", supportedLangs.includes(systemLang) ? systemLang : "en");
  }

  // ✅ Initialize flatpickr for date inputs
  flatpickr("#startDate", { dateFormat: "d-m-Y" });
  flatpickr("#endDate", { dateFormat: "d-m-Y" });

  // ✅ Apply translations immediately
  applyTranslations();

  // ✅ Update dropdown selection
  const langSelect = document.getElementById("language");
  if (langSelect) langSelect.value = localStorage.getItem("lang");

  // ✅ Profile section toggle
  const profileSection = document.getElementById("profileSection");
  const toggleBtn = document.getElementById("profileToggle");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent immediate close
      profileSection.classList.toggle("open");
    });
  }

  // ✅ Close profile when clicking outside
  document.addEventListener("click", (e) => {
    if (!profileSection.contains(e.target)) {
      profileSection.classList.remove("open");
    }
  });
});

// ✅ Format Loan Amount input with Indian commas
const principalInput = document.getElementById("principal");
if (principalInput) {
  principalInput.addEventListener("input", () => {
    let value = principalInput.value.replace(/,/g, "");
    if (!isNaN(value) && value !== "") {
      principalInput.value = parseFloat(value).toLocaleString("en-IN", {minimumFractionDigits:0});
    }
  });
}

// Register service worker for PWA
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js")
    .then(() => console.log("✅ Service Worker registered"))
    .catch(err => console.error("❌ Service Worker registration failed:", err));
}


// ✅ Language change function
function changeLanguage() {
  const selectedLang = document.getElementById("language").value;
  localStorage.setItem("lang", selectedLang);
  applyTranslations(); // refresh UI immediately
}


// ✅ Validation helper
function validateInputs(principal, rateValue, startDate, endDate) {
  let valid = true;

  if (isNaN(principal) || principal <= 0) {
    document.getElementById("principal").style.border = "2px solid red";
    valid = false;
  } else {
    document.getElementById("principal").style.border = "";
  }

  if (isNaN(rateValue)) {
    document.getElementById("rate").style.border = "2px solid red";
    valid = false;
  } else {
    document.getElementById("rate").style.border = "";
  }

  if (!startDate || !endDate || endDate <= startDate) {
    document.getElementById("startDate").style.border = "2px solid red";
    document.getElementById("endDate").style.border = "2px solid red";
    valid = false;
  } else {
    document.getElementById("startDate").style.border = "";
    document.getElementById("endDate").style.border = "";
  }

  return valid;
}



// ✅ Calculator logic
function calculate() {
  const principal = parseFloat(document.getElementById("principal").value.replace(/,/g, "")) || 0;
  const rateValue = parseFloat(document.getElementById("rate").value);
  const rateError = document.getElementById("rateError");
  // Clear old error
  rateError.textContent = "";

  // Inline validation
  if (isNaN(rateValue) || rateValue < 0 || rateValue > 5) {
  rateError.textContent = "ROI must be between 0 and 5 rupees (0% to 60%).";
  return; // stop calculation
}


  // Conversion: 1 rupee = 12% per year
  const percentage = rateValue * 12;
  const startDate = new Date(document.getElementById("startDate").value);
  const endDate = new Date(document.getElementById("endDate").value);

  // ✅ Use validation helper
  if (!validateInputs(principal, rateValue, startDate, endDate)) {
    return; // stop if invalid
  }

  // ✅ Exact duration breakdown
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  let days = endDate.getDate() - startDate.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  // ✅ Slab-based interest calculation
  const annualInterest = principal * (percentage / 100);
  const monthlyInterest = annualInterest / 12;
  const dailyInterest = annualInterest / 365;

  let interest = 0;
  interest += years * annualInterest;
  interest += months * monthlyInterest;
  interest += days * dailyInterest;

  const total = principal + interest;

  // ✅ Translation object for labels
  const t = translations[localStorage.getItem("lang") || "en"];
  const yearLabel = years === 1 ? t.yearSingular : t.yearPlural;
  const monthLabel = months === 1 ? t.monthSingular : t.monthPlural;
  const dayLabel = days === 1 ? t.daySingular : t.dayPlural;

  // ✅ Update UI
  document.getElementById("loanResult").textContent = principal.toLocaleString("en-IN", {minimumFractionDigits:2});
  document.getElementById("startDateResult").textContent = startDate.toLocaleDateString();
  document.getElementById("endDateResult").textContent = endDate.toLocaleDateString();
  document.getElementById("durationResult").textContent =
    `${years} ${yearLabel} ${months} ${monthLabel} ${days} ${dayLabel}`;
  document.getElementById("interestResult").textContent = interest.toLocaleString("en-IN", {minimumFractionDigits:2});
  document.getElementById("totalResult").textContent = total.toLocaleString("en-IN", {minimumFractionDigits:2});

  // ✅ Save history with language
  const lang = localStorage.getItem("lang") || "en";
  let history = JSON.parse(localStorage.getItem("calcHistory")) || [];

  history.unshift({
    principal,
    rate: rateValue,
    interest,
    total,
    startDate: startDate.toLocaleDateString(),
    endDate: endDate.toLocaleDateString(),
    duration: `${years} ${yearLabel} ${months} ${monthLabel} ${days} ${dayLabel}`,
    date: new Date().toLocaleString(),
    lang
  });

  history = history.slice(0, 3);
  localStorage.setItem("calcHistory", JSON.stringify(history));

  renderHistory();
}






function renderHistory() {
  const historyList = document.getElementById("historyList");
  if (!historyList) return;

  const history = JSON.parse(localStorage.getItem("calcHistory")) || [];
  historyList.innerHTML = "";

  if (history.length === 0) {
  const li = document.createElement("li");
  const lang = localStorage.getItem("lang") || "en";
  const t = translations[lang];
  li.textContent = t.noHistory || "No history yet"; // 👈 use translation
  li.style.fontStyle = "italic";
  li.style.color = "#666";
  historyList.appendChild(li);
  return;
}
  history.forEach(entry => {
    // 👇 Use the language stored with this entry
    const t = translations[entry.lang] || translations["en"];

    const li = document.createElement("li");
    li.innerHTML = `
      <div class="result-row"><span class="emoji">💰</span><span class="label">${t.loanAmount}</span><span class="colon">:</span><span class="value">${entry.principal.toLocaleString("en-IN", {minimumFractionDigits:2})}</span></div>
      <div class="result-row"><span class="emoji">📅</span><span class="label">${t.loanTakenDate}</span><span class="colon">:</span><span class="value">${entry.startDate}</span></div>
      <div class="result-row"><span class="emoji">📅</span><span class="label">${t.loanEndDate}</span><span class="colon">:</span><span class="value">${entry.endDate}</span></div>
      <div class="result-row"><span class="emoji">⏳</span><span class="label">${t.duration}</span><span class="colon">:</span><span class="value">${entry.duration}</span></div>
      <div class="result-row"><span class="emoji">📊</span><span class="label">${t.interest}</span><span class="colon">:</span><span class="value">${entry.interest.toLocaleString("en-IN", {minimumFractionDigits:2})}</span></div>
      <div class="result-row"><span class="emoji">💵</span><span class="label">${t.totalAmount}</span><span class="colon">:</span><span class="value">${entry.total.toLocaleString("en-IN", {minimumFractionDigits:2})}</span></div>
      <small>${t.calculatedOn}: ${entry.date}</small>
    `;
    historyList.appendChild(li);
  });
}

// ✅ History functions
function saveHistory(principal, rate, interest, total, startDate, endDate, duration) {
  const lang = localStorage.getItem("lang") || "en"; // 👈 capture language

  let history = JSON.parse(localStorage.getItem("calcHistory")) || [];
  history.unshift({
    principal,
    rate,
    interest,
    total,
    startDate: startDate.toLocaleDateString(),
    endDate: endDate.toLocaleDateString(),
    duration,
    date: new Date().toLocaleString(),
    lang // 👈 store language used at calculation time
  });
  history = history.slice(0, 3); // keep only last 3
  localStorage.setItem("calcHistory", JSON.stringify(history));

  renderHistory(); // show on screen
}



function exportHistory() {
  const history = JSON.parse(localStorage.getItem("calcHistory")) || [];
  if (history.length === 0) {
    alert("No history to export."); // fallback
    return;
  }

  let content = "Interest Calculator History:\n\n";

  history.forEach(entry => {
    const t = translations[entry.lang] || translations["en"]; // 👈 use entry’s language
    content += `${t.calculatedOn}: ${entry.date}\n`;
    content += `${t.loanAmount}: ${entry.principal.toLocaleString("en-IN", {minimumFractionDigits:2})}\n`;
    content += `${t.rate}: ${entry.rate}%\n`;
    content += `${t.interest}: ${entry.interest.toLocaleString("en-IN", {minimumFractionDigits:2})}\n`;
    content += `${t.totalAmount}: ${entry.total.toLocaleString("en-IN", {minimumFractionDigits:2})}\n`;
    content += `${t.loanTakenDate}: ${entry.startDate}\n`;
    content += `${t.loanEndDate}: ${entry.endDate}\n`;
    content += `${t.duration}: ${entry.duration}\n\n`;
  });

  const blob = new Blob([content], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "interest_history.txt";
  link.click();
}






function printHistory() {
  const history = JSON.parse(localStorage.getItem("calcHistory")) || [];
  if (history.length === 0) {
    alert("No history to print."); // fallback
    return;
  }

  let printContent = "<h2>Interest Calculator History</h2><ul>";

  history.forEach(entry => {
    const t = translations[entry.lang] || translations["en"]; // 👈 use entry’s language
    printContent += `<li>
      <strong>${t.calculatedOn}: ${entry.date}</strong><br>
      ${t.loanAmount}: ${entry.principal.toLocaleString("en-IN", {minimumFractionDigits:2})}<br>
      ${t.rate}: ${entry.rate}%<br>
      ${t.interest}: ${entry.interest.toLocaleString("en-IN", {minimumFractionDigits:2})}<br>
      ${t.totalAmount}: ${entry.total.toLocaleString("en-IN", {minimumFractionDigits:2})}<br>
      ${t.loanTakenDate}: ${entry.startDate}<br>
      ${t.loanEndDate}: ${entry.endDate}<br>
      ${t.duration}: ${entry.duration}
    </li>`;
  });

  printContent += "</ul>";

  const printWindow = window.open("", "", "width=600,height=400");
  printWindow.document.write("<html><head><title>Print History</title></head><body>");
  printWindow.document.write(printContent);
  printWindow.document.write("</body></html>");
  printWindow.document.close();
  printWindow.print();
}


function clearHistory() {
  localStorage.removeItem("calcHistory");
  renderHistory();
  const lang = localStorage.getItem("lang") || "en";
  const t = translations[lang];
  alert(t.historyCleared || "History cleared successfully!");
}





