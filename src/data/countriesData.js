import { getCountries, getCountryCallingCode } from 'libphonenumber-js';

// International Countries Directory for Tabadul
// Includes flags, Arabic names, English names, dial codes, and placeholders

const CURATED_COUNTRIES = [
  // --- Priority: Primary Local & Arab Region ---
  {
    code: 'PS',
    dialCode: '+970',
    flag: '🇵🇸',
    nameAr: 'فلسطين (+970)',
    nameEn: 'Palestine (+970)',
    placeholder: '059 123 4567',
    priority: 1
  },
  {
    code: 'IL',
    dialCode: '+972',
    flag: '🇵🇸',
    nameAr: 'فلسطين / الشبكات المحلية (+972)',
    nameEn: 'Local Networks (+972)',
    placeholder: '059 123 4567',
    priority: 2
  },
  {
    code: 'SA',
    dialCode: '+966',
    flag: '🇸🇦',
    nameAr: 'المملكة العربية السعودية',
    nameEn: 'Saudi Arabia',
    placeholder: '051 234 5678',
    priority: 3
  },
  {
    code: 'JO',
    dialCode: '+962',
    flag: '🇯🇴',
    nameAr: 'الأردن',
    nameEn: 'Jordan',
    placeholder: '07 9123 4567',
    priority: 4
  },
  {
    code: 'EG',
    dialCode: '+20',
    flag: '🇪🇬',
    nameAr: 'مصر',
    nameEn: 'Egypt',
    placeholder: '010 1234 5678',
    priority: 5
  },
  {
    code: 'AE',
    dialCode: '+971',
    flag: '🇦🇪',
    nameAr: 'الإمارات العربية المتحدة',
    nameEn: 'United Arab Emirates',
    placeholder: '050 123 4567',
    priority: 6
  },
  {
    code: 'KW',
    dialCode: '+965',
    flag: '🇰🇼',
    nameAr: 'الكويت',
    nameEn: 'Kuwait',
    placeholder: '9123 4567',
    priority: 7
  },
  {
    code: 'QA',
    dialCode: '+974',
    flag: '🇶🇦',
    nameAr: 'قطر',
    nameEn: 'Qatar',
    placeholder: '3312 3456',
    priority: 8
  },
  {
    code: 'BH',
    dialCode: '+973',
    flag: '🇧🇭',
    nameAr: 'البحرين',
    nameEn: 'Bahrain',
    placeholder: '3912 3456',
    priority: 9
  },
  {
    code: 'OM',
    dialCode: '+968',
    flag: '🇴🇲',
    nameAr: 'سلطنة عُمان',
    nameEn: 'Oman',
    placeholder: '9123 4567',
    priority: 10
  },
  {
    code: 'TR',
    dialCode: '+90',
    flag: '🇹🇷',
    nameAr: 'تركيا',
    nameEn: 'Turkey',
    placeholder: '512 345 6789',
    priority: 11
  },
  {
    code: 'IQ',
    dialCode: '+964',
    flag: '🇮🇶',
    nameAr: 'العراق',
    nameEn: 'Iraq',
    placeholder: '0790 123 4567',
    priority: 12
  },
  {
    code: 'LB',
    dialCode: '+961',
    flag: '🇱🇧',
    nameAr: 'لبنان',
    nameEn: 'Lebanon',
    placeholder: '03 123 456',
    priority: 13
  },
  {
    code: 'SY',
    dialCode: '+963',
    flag: '🇸🇾',
    nameAr: 'سوريا',
    nameEn: 'Syria',
    placeholder: '0944 123 456',
    priority: 14
  },
  {
    code: 'YE',
    dialCode: '+967',
    flag: '🇾🇪',
    nameAr: 'اليمن',
    nameEn: 'Yemen',
    placeholder: '771 234 567',
    priority: 15
  },
  {
    code: 'SD',
    dialCode: '+249',
    flag: '🇸🇩',
    nameAr: 'السودان',
    nameEn: 'Sudan',
    placeholder: '091 234 5678',
    priority: 16
  },
  {
    code: 'LY',
    dialCode: '+218',
    flag: '🇱🇾',
    nameAr: 'ليبيا',
    nameEn: 'Libya',
    placeholder: '091 234 5678',
    priority: 17
  },
  {
    code: 'TN',
    dialCode: '+216',
    flag: '🇹🇳',
    nameAr: 'تونس',
    nameEn: 'Tunisia',
    placeholder: '98 123 456',
    priority: 18
  },
  {
    code: 'DZ',
    dialCode: '+213',
    flag: '🇩🇿',
    nameAr: 'الجزائر',
    nameEn: 'Algeria',
    placeholder: '0551 23 45 67',
    priority: 19
  },
  {
    code: 'MA',
    dialCode: '+212',
    flag: '🇲🇦',
    nameAr: 'المغرب',
    nameEn: 'Morocco',
    placeholder: '0612 34 56 78',
    priority: 20
  },
  {
    code: 'MR',
    dialCode: '+222',
    flag: '🇲🇷',
    nameAr: 'موريتانيا',
    nameEn: 'Mauritania',
    placeholder: '22 12 34 56',
    priority: 21
  },

  // --- International Diaspora & Major Destinations ---
  {
    code: 'US',
    dialCode: '+1',
    flag: '🇺🇸',
    nameAr: 'الولايات المتحدة الأمريكية',
    nameEn: 'United States',
    placeholder: '(201) 555-0123',
    priority: 30
  },
  {
    code: 'CA',
    dialCode: '+1',
    flag: '🇨🇦',
    nameAr: 'كندا',
    nameEn: 'Canada',
    placeholder: '(416) 555-0123',
    priority: 31
  },
  {
    code: 'GB',
    dialCode: '+44',
    flag: '🇬🇧',
    nameAr: 'المملكة المتحدة (بريطانيا)',
    nameEn: 'United Kingdom',
    placeholder: '07911 123456',
    priority: 32
  },
  {
    code: 'DE',
    dialCode: '+49',
    flag: '🇩🇪',
    nameAr: 'ألمانيا',
    nameEn: 'Germany',
    placeholder: '0151 12345678',
    priority: 33
  },
  {
    code: 'FR',
    dialCode: '+33',
    flag: '🇫🇷',
    nameAr: 'فرنسا',
    nameEn: 'France',
    placeholder: '06 12 34 56 78',
    priority: 34
  },
  {
    code: 'SE',
    dialCode: '+46',
    flag: '🇸🇪',
    nameAr: 'السويد',
    nameEn: 'Sweden',
    placeholder: '070 123 45 67',
    priority: 35
  },
  {
    code: 'NO',
    dialCode: '+47',
    flag: '🇳🇴',
    nameAr: 'النرويج',
    nameEn: 'Norway',
    placeholder: '412 34 567',
    priority: 36
  },
  {
    code: 'DK',
    dialCode: '+45',
    flag: '🇩🇰',
    nameAr: 'الدنمارك',
    nameEn: 'Denmark',
    placeholder: '20 12 34 56',
    priority: 37
  },
  {
    code: 'NL',
    dialCode: '+31',
    flag: '🇳🇱',
    nameAr: 'هولندا',
    nameEn: 'Netherlands',
    placeholder: '06 12345678',
    priority: 38
  },
  {
    code: 'BE',
    dialCode: '+32',
    flag: '🇧🇪',
    nameAr: 'بلجيكا',
    nameEn: 'Belgium',
    placeholder: '0470 12 34 56',
    priority: 39
  },
  {
    code: 'CH',
    dialCode: '+41',
    flag: '🇨🇭',
    nameAr: 'سويسرا',
    nameEn: 'Switzerland',
    placeholder: '079 123 45 67',
    priority: 40
  },
  {
    code: 'AT',
    dialCode: '+43',
    flag: '🇦🇹',
    nameAr: 'النمسا',
    nameEn: 'Austria',
    placeholder: '0664 1234567',
    priority: 41
  },
  {
    code: 'IT',
    dialCode: '+39',
    flag: '🇮🇹',
    nameAr: 'إيطاليا',
    nameEn: 'Italy',
    placeholder: '312 345 6789',
    priority: 42
  },
  {
    code: 'ES',
    dialCode: '+34',
    flag: '🇪🇸',
    nameAr: 'إسبانيا',
    nameEn: 'Spain',
    placeholder: '612 34 56 78',
    priority: 43
  },
  {
    code: 'GR',
    dialCode: '+30',
    flag: '🇬🇷',
    nameAr: 'اليونان',
    nameEn: 'Greece',
    placeholder: '691 234 5678',
    priority: 44
  },
  {
    code: 'CY',
    dialCode: '+357',
    flag: '🇨🇾',
    nameAr: 'قبرص',
    nameEn: 'Cyprus',
    placeholder: '96 123456',
    priority: 45
  },
  {
    code: 'RO',
    dialCode: '+40',
    flag: '🇷🇴',
    nameAr: 'رومانيا',
    nameEn: 'Romania',
    placeholder: '0712 345 678',
    priority: 46
  },
  {
    code: 'RU',
    dialCode: '+7',
    flag: '🇷🇺',
    nameAr: 'روسيا',
    nameEn: 'Russia',
    placeholder: '912 345-67-89',
    priority: 47
  },
  {
    code: 'UA',
    dialCode: '+380',
    flag: '🇺🇦',
    nameAr: 'أوكرانيا',
    nameEn: 'Ukraine',
    placeholder: '050 123 4567',
    priority: 48
  },
  {
    code: 'MY',
    dialCode: '+60',
    flag: '🇲🇾',
    nameAr: 'ماليزيا',
    nameEn: 'Malaysia',
    placeholder: '012-345 6789',
    priority: 49
  },
  {
    code: 'ID',
    dialCode: '+62',
    flag: '🇮🇩',
    nameAr: 'إندونيسيا',
    nameEn: 'Indonesia',
    placeholder: '0812-3456-7890',
    priority: 50
  },
  {
    code: 'AU',
    dialCode: '+61',
    flag: '🇦🇺',
    nameAr: 'أستراليا',
    nameEn: 'Australia',
    placeholder: '0412 345 678',
    priority: 51
  },
  {
    code: 'BR',
    dialCode: '+55',
    flag: '🇧🇷',
    nameAr: 'البرازيل',
    nameEn: 'Brazil',
    placeholder: '(11) 91234-5678',
    priority: 52
  },
  {
    code: 'IN',
    dialCode: '+91',
    flag: '🇮🇳',
    nameAr: 'الهند',
    nameEn: 'India',
    placeholder: '98123 45678',
    priority: 53
  },
  {
    code: 'PK',
    dialCode: '+92',
    flag: '🇵🇰',
    nameAr: 'باكستان',
    nameEn: 'Pakistan',
    placeholder: '0301 2345678',
    priority: 54
  },
  {
    code: 'CN',
    dialCode: '+86',
    flag: '🇨🇳',
    nameAr: 'الصين',
    nameEn: 'China',
    placeholder: '138 1234 5678',
    priority: 55
  },
  {
    code: 'JP',
    dialCode: '+81',
    flag: '🇯🇵',
    nameAr: 'اليابان',
    nameEn: 'Japan',
    placeholder: '090-1234-5678',
    priority: 56
  },
  {
    code: 'KR',
    dialCode: '+82',
    flag: '🇰🇷',
    nameAr: 'كوريا الجنوبية',
    nameEn: 'South Korea',
    placeholder: '010-1234-5678',
    priority: 57
  }
];

export function getFlagEmoji(countryCode) {
  if (!countryCode || countryCode.length !== 2) return '🌐';
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(function(char) { return 127397 + char.charCodeAt(0); });
  return String.fromCodePoint(...codePoints);
}

function buildAllCountries() {
  const existingCodes = new Set(CURATED_COUNTRIES.map(function(c) { return c.code; }));
  let intlAr = null;
  let intlEn = null;
  try {
    if (typeof Intl !== 'undefined' && Intl.DisplayNames) {
      intlAr = new Intl.DisplayNames(['ar'], { type: 'region' });
      intlEn = new Intl.DisplayNames(['en'], { type: 'region' });
    }
  } catch (e) {
    // Fallback if Intl.DisplayNames is not supported
  }

  const remaining = [];
  try {
    const allCodes = getCountries();
    for (const code of allCodes) {
      if (existingCodes.has(code)) continue;
      try {
        const dial = `+${getCountryCallingCode(code)}`;
        const nameAr = intlAr ? intlAr.of(code) : code;
        const nameEn = intlEn ? intlEn.of(code) : code;
        const flag = getFlagEmoji(code);

        remaining.push({
          code,
          dialCode: dial,
          flag,
          nameAr: nameAr || code,
          nameEn: nameEn || code,
          placeholder: 'XXXXXXXX',
          priority: 999
        });
      } catch (e) {
        // Skip codes without calling code
      }
    }
  } catch (e) {
    // Fallback
  }

  remaining.sort(function(a, b) {
    return a.nameAr.localeCompare(b.nameAr, 'ar');
  });

  return [...CURATED_COUNTRIES, ...remaining];
}

export const COUNTRIES = buildAllCountries();

// Helper: Normalize Arabic string for tolerant search (e.g. أ, إ, آ -> ا)
export function normalizeArabic(text = '') {
  return text
    .trim()
    .toLowerCase()
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي')
    .replace(/[\u064B-\u065F]/g, ''); // strip tashkeel
}

// Find country by code (PS, SA, etc.) or by dialCode (+970, +966, etc.)
export function findCountry(codeOrDialCode) {
  if (!codeOrDialCode) return COUNTRIES[0];
  const query = codeOrDialCode.toString().trim();
  
  // Exact match on code
  const byCode = COUNTRIES.find((c) => c.code.toUpperCase() === query.toUpperCase());
  if (byCode) return byCode;

  // Exact match on dialCode (+970, +966...)
  const normalizedDial = query.startsWith('+') ? query : `+${query}`;
  const byDial = COUNTRIES.find((c) => c.dialCode === normalizedDial);
  if (byDial) return byDial;

  return COUNTRIES[0];
}

// Search countries by Arabic name, English name, dial code, or ISO code
export function searchCountries(searchTerm) {
  if (!searchTerm || !searchTerm.trim()) {
    return COUNTRIES;
  }
  const cleanTerm = searchTerm.trim().toLowerCase();
  const normalizedSearch = normalizeArabic(cleanTerm);
  const numericSearch = cleanTerm.replace(/[^0-9]/g, '');

  return COUNTRIES.filter((c) => {
    // Search by dial code (e.g. "970", "+970", "966")
    if (numericSearch && c.dialCode.replace(/[^0-9]/g, '').includes(numericSearch)) {
      return true;
    }
    // Search by country code (e.g. "PS", "SA")
    if (c.code.toLowerCase().includes(cleanTerm)) {
      return true;
    }
    // Search by English name
    if (c.nameEn.toLowerCase().includes(cleanTerm)) {
      return true;
    }
    // Search by Arabic name
    if (normalizeArabic(c.nameAr).includes(normalizedSearch)) {
      return true;
    }
    return false;
  });
}
