// ✅ Translations object (13 languages, all UI text)
const translations = {
  en: {
    loanAmount:"Loan Amount",
    rate:"Rate of Interest", 
    startDate:"Start Date", 
    endDate:"End Date",
    calculate:"Calculate", 
    export:"Export/Share", 
    clear:"Clear History", 
    history:"History", 
    logout:"Logout",
    phone:"Enter phone number", 
    otp:"Enter OTP", 
    sendOtp:"Send OTP", 
    verifyOtp:"Verify OTP",
    interest:"Interest",
    total:"Total Amount",
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
  hi: {
    loanAmount:"ऋण राशि", rate:"ब्याज दर", startDate:"ऋण तिथि", endDate:"समाप्ति तिथि",
    calculate:"गणना करें", export:"निर्यात/साझा करें", clear:"इतिहास साफ करें", history:"इतिहास", logout:"लॉगआउट",
    phone:"फोन नंबर दर्ज करें", otp:"ओटीपी दर्ज करें", sendOtp:"ओटीपी भेजें", verifyOtp:"ओटीपी सत्यापित करें",
    interest:"ब्याज",
    total:"कुल राशि",
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
  te: {
    loanAmount:"రుణం మొత్తం", rate:"వడ్డీ రేటు", startDate:"ప్రారంభ తేదీ", endDate:"ముగింపు తేదీ",
    calculate:"లెక్కించు", export:"ఎగుమతి/పంచుకోండి", clear:"చరిత్రను క్లియర్ చేయండి", history:"చరిత్ర", logout:"లాగ్ అవుట్",
    phone:"ఫోన్ నంబర్ నమోదు చేయండి", otp:"ఓటీపీ నమోదు చేయండి", sendOtp:"ఓటీపీ పంపండి", verifyOtp:"ఓటీపీ ధృవీకరించండి",
    interest:"వడ్డీ",
    total:"మొత్తం",
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
ta: {
  loanAmount:"கடன் தொகை", rate:"வட்டி விகிதம்", startDate:"தொடக்க தேதி", endDate:"முடிவு தேதி",
  calculate:"கணக்கிடு", export:"ஏற்றுமதி/பகிர்", clear:"வரலாறு அழி", history:"வரலாறு", logout:"வெளியேறு",
  phone:"தொலைபேசி எண் உள்ளிடவும்", otp:"OTP உள்ளிடவும்", sendOtp:"OTP அனுப்பு", verifyOtp:"OTP சரிபார்",
  interest:"வட்டி",
  total:"மொத்தம்",
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
kn: {
  loanAmount:"ಸಾಲದ ಮೊತ್ತ", rate:"ಬಡ್ಡಿ ದರ", startDate:"ಆರಂಭ ದಿನಾಂಕ", endDate:"ಅಂತ್ಯ ದಿನಾಂಕ",
  calculate:"ಗಣನೆ ಮಾಡಿ", export:"ರಫ್ತು/ಹಂಚಿಕೊಳ್ಳಿ", clear:"ಇತಿಹಾಸ ಅಳಿಸಿ", history:"ಇತಿಹಾಸ", logout:"ಲಾಗ್ ಔಟ್",
  phone:"ದೂರವಾಣಿ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ", otp:"OTP ನಮೂದಿಸಿ", sendOtp:"OTP ಕಳುಹಿಸಿ", verifyOtp:"OTP ಪರಿಶೀಲಿಸಿ",
  interest:"ಬಡ್ಡಿ",
  total:"ಒಟ್ಟು",
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

ml: {
  loanAmount:"വായ്പ തുക", rate:"പലിശ നിരക്ക്", startDate:"ആരംഭ തീയതി", endDate:"അവസാന തീയതി",
  calculate:"കണക്കാക്കുക", export:"കയറ്റുമതി/പങ്കിടുക", clear:"ചരിത്രം മായ്ക്കുക", history:"ചരിത്രം", logout:"ലോഗൗട്ട്",
  phone:"ഫോൺ നമ്പർ നൽകുക", otp:"OTP നൽകുക", sendOtp:"OTP അയയ്ക്കുക", verifyOtp:"OTP സ്ഥിരീകരിക്കുക",
  interest:"പലിശ",
  total:"ആകെ",
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

bn: {
  loanAmount:"ঋণের পরিমাণ", rate:"সুদের হার", startDate:"শুরুর তারিখ", endDate:"শেষ তারিখ",
  calculate:"গণনা করুন", export:"রপ্তানি/শেয়ার করুন", clear:"ইতিহাস মুছুন", history:"ইতিহাস", logout:"লগআউট",
  phone:"ফোন নম্বর লিখুন", otp:"OTP লিখুন", sendOtp:"OTP পাঠান", verifyOtp:"OTP যাচাই করুন",
  interest:"সুদ",
  total:"মোট",
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

gu: {
  loanAmount:"લોન રકમ", rate:"વ્યાજ દર", startDate:"શરૂઆત તારીખ", endDate:"અંત તારીખ",
  calculate:"ગણતરી કરો", export:"નિકાસ/શેર કરો", clear:"ઇતિહાસ સાફ કરો", history:"ઇતિહાસ", logout:"લોગઆઉટ",
  phone:"ફોન નંબર દાખલ કરો", otp:"OTP દાખલ કરો", sendOtp:"OTP મોકલો", verifyOtp:"OTP ચકાસો",
  interest:"વ્યાજ",
  total:"કુલ",
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
mr: {
  loanAmount:"कर्ज रक्कम", rate:"व्याज दर", startDate:"सुरुवातीची तारीख", endDate:"शेवटची तारीख",
  calculate:"गणना करा", export:"निर्यात/शेअर करा", clear:"इतिहास साफ करा", history:"इतिहास", logout:"लॉगआउट",
  phone:"फोन नंबर टाका", otp:"OTP टाका", sendOtp:"OTP पाठवा", verifyOtp:"OTP सत्यापित करा",
  interest:"व्याज",
  total:"एकूण",
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
pa: {
  loanAmount:"ਕਰਜ਼ ਦੀ ਰਕਮ", rate:"ਬਿਆਜ ਦਰ", startDate:"ਸ਼ੁਰੂ ਮਿਤੀ", endDate:"ਅੰਤ ਮਿਤੀ",
  calculate:"ਗਣਨਾ ਕਰੋ", export:"ਨਿਰਯਾਤ/ਸਾਂਝਾ ਕਰੋ", clear:"ਇਤਿਹਾਸ ਸਾਫ ਕਰੋ", history:"ਇਤਿਹਾਸ", logout:"ਲਾਗਆਉਟ",
  phone:"ਫੋਨ ਨੰਬਰ ਦਰਜ ਕਰੋ", otp:"OTP ਦਰਜ ਕਰੋ", sendOtp:"OTP ਭੇਜੋ", verifyOtp:"OTP ਸੱਚੋ",
  interest:"ਬਿਆਜ",
  total:"ਕੁੱਲ ਰਕਮ",
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
or: {
  loanAmount:"ଋଣ ରାଶି", rate:"ସୁଦ ହାର", startDate:"ଆରମ୍ଭ ତାରିଖ", endDate:"ଶେଷ ତାରିଖ",
  calculate:"ଗଣନା କରନ୍ତୁ", export:"ରପ୍ତାନି/ସେୟାର", clear:"ଇତିହାସ ସଫା କରନ୍ତୁ", history:"ଇତିହାସ", logout:"ଲଗଆଉଟ୍",
  phone:"ଫୋନ୍ ନମ୍ବର ଲେଖନ୍ତୁ", otp:"OTP ଲେଖନ୍ତୁ", sendOtp:"OTP ପଠାନ୍ତୁ", verifyOtp:"OTP ପରୀକ୍ଷା କରନ୍ତୁ",
  interest:"ସୁଦ",
  total:"ମୋଟ",
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
as: {
  loanAmount:"ঋণৰ পৰিমাণ", rate:"সুদৰ হাৰ", startDate:"আৰম্ভণি তাৰিখ", endDate:"শেষ তাৰিখ",
  calculate:"গণনা কৰক", export:"ৰপ্তানি/ভাগ কৰক", clear:"ইতিহাস মচি পেলাওক", history:"ইতিহাস", logout:"লগআউট",
  phone:"ফোন নম্বৰ লিখক", otp:"OTP লিখক", sendOtp:"OTP পঠিয়াওক", verifyOtp:"OTP পৰীক্ষা কৰক",
  interest:"সুদ",
  total:"মুঠ",
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
sa: {
  loanAmount:"ऋणराशि", rate:"व्याजदरः", startDate:"आरम्भतिथिः", endDate:"समाप्तितिथिः",
  calculate:"गणयतु", export:"निर्यात/साझा", clear:"इतिहासः शुद्धयतु", history:"इतिहासः", logout:"लॉगआउट्",
  phone:"दूरवाणी सङ्ख्या प्रविष्टयतु", otp:"OTP प्रविष्टयतु", sendOtp:"OTP प्रेषयतु", verifyOtp:"OTP परीक्ष्यताम्",
  interest:"व्याजः",
  total:"कुलराशिः",
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
// ✅ Apply translations
function applyTranslations() {
  const lang = localStorage.getItem("lang") || "en";
  const t = translations[lang];

  if (document.getElementById("loanLabel")) document.getElementById("loanLabel").innerText = t.loanAmount;
  if (document.getElementById("rateLabel")) document.getElementById("rateLabel").innerText = t.rate;
  if (document.getElementById("startLabel")) document.getElementById("startLabel").innerText = t.startDate;
  if (document.getElementById("endLabel")) document.getElementById("endLabel").innerText = t.endDate;
  if (document.getElementById("calcBtn")) document.getElementById("calcBtn").innerText = t.calculate;
  if (document.getElementById("historyTitle")) document.getElementById("historyTitle").innerText = t.history;

  if (document.getElementById("phone")) document.getElementById("phone").placeholder = t.phone;
  if (document.getElementById("otp")) document.getElementById("otp").placeholder = t.otp;
  if (document.getElementById("sendOtpBtn")) document.getElementById("sendOtpBtn").innerText = t.sendOtp;
  if (document.getElementById("verifyOtpBtn")) document.getElementById("verifyOtpBtn").innerText = t.verifyOtp;

  if (document.getElementById("language")) document.getElementById("language").value = lang;

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
      option.textContent = opt;
      option.value = opt;
      roiSelect.appendChild(option);
    });
  }
}

function changeLanguage() {
  const lang = document.getElementById("language").value;
  localStorage.setItem("lang", lang);
  applyTranslations();
}

// ✅ On load
document.addEventListener("DOMContentLoaded", () => {
  // Detect system language (first two letters, e.g. "te" for Telugu)
  const systemLang = navigator.language.slice(0,2);

  // Supported languages in your app
  const supportedLangs = ["en","hi","te","ta","kn","ml","bn","gu","mr","pa","or","as","sa"];

  // If no language is set yet, use system language
  if (!localStorage.getItem("lang")) {
    if (supportedLangs.includes(systemLang)) {
      localStorage.setItem("lang", systemLang);
    } else {
      localStorage.setItem("lang", "en"); // fallback
    }
  }

  // Apply translations immediately
  applyTranslations();

  // Update dropdown selection to match chosen language
  const langSelect = document.getElementById("language");
  if (langSelect) {
    langSelect.value = localStorage.getItem("lang");
  }
});


// ✅ Calculator logic
function calculate() {
  const principal = parseFloat(document.getElementById("principal").value);
  const rateValue = parseFloat(document.getElementById("rate").value); // dropdown gives numeric value
  const startDate = new Date(document.getElementById("startDate").value);
  const endDate = new Date(document.getElementById("endDate").value);

  if (isNaN(principal) || isNaN(rateValue) || !startDate || !endDate) {
    alert("Please fill all fields correctly.");
    return;
  }

  // 1 Rupee = 12% annual
  const annualRate = rateValue * 12;

  const durationDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
  const interest = principal * (annualRate / 100) * (durationDays / 365);
  const total = principal + interest;

  document.getElementById("resultBox").innerText =
    `${translations[localStorage.getItem("lang")].interest}: ${interest.toFixed(2)} | ${translations[localStorage.getItem("lang")].total}: ${total.toFixed(2)}`;

  saveHistory(principal, annualRate, interest, total);
}


// ✅ History functions
function saveHistory(principal, rate, interest, total) {
  const history = JSON.parse(localStorage.getItem("calcHistory")) || [];
  history.push({ principal, rate, interest, total, date: new Date().toLocaleString() });
  localStorage.setItem("calcHistory", JSON.stringify(history));
}
