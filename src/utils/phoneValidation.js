import { 
  isValidPhoneNumber, 
  parsePhoneNumber, 
  isPossiblePhoneNumber,
  AsYouType
} from 'libphonenumber-js';
import { findCountry, COUNTRIES } from '../data/countriesData.js';

// Convert Arabic-Indic (Eastern) numerals to standard Western numerals
export function convertArabicNumerals(str = '') {
  const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return str.replace(/[٠-٩]/g, (d) => arabicNumerals.indexOf(d).toString());
}

// Clean phone input string for digits only, preserving leading + if present
export function cleanPhoneInput(input = '') {
  if (!input) return '';
  const converted = convertArabicNumerals(input.toString());
  // Allow only digits and an optional leading plus
  const hasPlus = converted.trim().startsWith('+');
  const digitsOnly = converted.replace(/[^0-9]/g, '');
  return hasPlus ? `+${digitsOnly}` : digitsOnly;
}

/**
 * Validate phone or WhatsApp number according to country rules
 * @param {string} rawNumber - The phone number string input by the user
 * @param {string} countryCode - ISO 2-letter country code (e.g. 'PS', 'SA', 'EG')
 * @param {object} options - Options { isWhatsApp?: boolean, required?: boolean }
 * @returns {object} { isValid: boolean, error: string | null, e164: string, national: string, formatted: string }
 */
export function validatePhoneNumber(rawNumber = '', countryCode = 'PS', options = {}) {
  const { isWhatsApp = false, required = true } = options;
  const label = isWhatsApp ? 'رقم الواتساب' : 'رقم الهاتف';

  const cleaned = cleanPhoneInput(rawNumber);

  // If empty
  if (!cleaned) {
    if (required) {
      return {
        isValid: false,
        error: `يرجى إدخال ${label}.`,
        e164: '',
        national: '',
        formatted: ''
      };
    }
    return {
      isValid: true,
      error: null,
      e164: '',
      national: '',
      formatted: ''
    };
  }

  const countryInfo = findCountry(countryCode);
  const iso = countryInfo ? countryInfo.code : 'PS';
  const countryName = countryInfo ? countryInfo.nameAr.split('(')[0].trim() : 'الدولة المحددة';

  // Handle numbers entered with a leading international dial code directly in the input
  let parseTarget = cleaned;
  let targetCountry = iso;

  if (cleaned.startsWith('+')) {
    // If user pasted a full international number with plus
    parseTarget = cleaned;
    targetCountry = undefined;
  } else if (cleaned.startsWith('00')) {
    // 00 prefix converted to +
    parseTarget = `+${cleaned.slice(2)}`;
    targetCountry = undefined;
  }

  try {
    let isPossible = isPossiblePhoneNumber(parseTarget, targetCountry);
    let isValid = isValidPhoneNumber(parseTarget, targetCountry);

    // If not valid with selected country, check if user entered a full international number without leading '+'
    if (!isValid && !cleaned.startsWith('+') && !cleaned.startsWith('00')) {
      try {
        if (isValidPhoneNumber(`+${cleaned}`)) {
          parseTarget = `+${cleaned}`;
          targetCountry = undefined;
          isPossible = true;
          isValid = true;
        }
      } catch (e) {
        // Continue with normal error handling
      }
    }

    if (!isPossible) {
      // Too short or too long
      const digitsCount = cleaned.replace(/[^0-9]/g, '').length;
      if (digitsCount < 6) {
        return {
          isValid: false,
          error: `${label} قصير جداً، يرجى كتابة كامل أرقام الرقم.`,
          e164: '',
          national: cleaned,
          formatted: cleaned
        };
      }
      return {
        isValid: false,
        error: `${label} غير مكتمل أو يحتوي على عدد خانات غير صحيح.`,
        e164: '',
        national: cleaned,
        formatted: cleaned
      };
    }

    if (!isValid) {
      return {
        isValid: false,
        error: `${label} غير صحيح وفق نظام الترقيم المعتمد في ${countryName}.`,
        e164: '',
        national: cleaned,
        formatted: cleaned
      };
    }

    // Number is valid! Parse and format cleanly
    const parsed = parsePhoneNumber(parseTarget, targetCountry);
    return {
      isValid: true,
      error: null,
      e164: parsed.format('E.164'), // e.g. +970599123456
      national: parsed.formatNational(), // e.g. 059 912 3456
      formatted: parsed.formatInternational(), // e.g. +970 59 912 3456
      country: parsed.country || iso
    };
  } catch (err) {
    // Fallback if parsing library threw an error on unexpected input
    return {
      isValid: false,
      error: `يرجى التحقق من صحة ${label}.`,
      e164: '',
      national: cleaned,
      formatted: cleaned
    };
  }
}

/**
 * Format phone as user types (AsYouType)
 */
export function formatAsYouType(rawNumber = '', countryCode = 'PS') {
  const cleaned = cleanPhoneInput(rawNumber);
  if (!cleaned) return '';
  const countryInfo = findCountry(countryCode);
  const iso = countryInfo ? countryInfo.code : 'PS';
  const asYouType = new AsYouType(iso);
  return asYouType.input(cleaned);
}

/**
 * Parse an existing stored phone number to detect its country and national part
 * Ensures compatibility with legacy stored numbers (e.g., "059-9123456", "+970 59 123 4567")
 */
export function parseStoredNumber(stored = '') {
  if (!stored) {
    return { countryCode: 'PS', dialCode: '+970', nationalNumber: '' };
  }

  const str = stored.toString().trim();
  const cleaned = cleanPhoneInput(str);

  // If starts with +, try to parse with libphonenumber
  if (str.startsWith('+')) {
    try {
      const parsed = parsePhoneNumber(str);
      if (parsed && parsed.country) {
        const countryInfo = findCountry(parsed.country);
        return {
          countryCode: parsed.country,
          dialCode: countryInfo ? countryInfo.dialCode : `+${parsed.countryCallingCode}`,
          nationalNumber: parsed.nationalNumber
        };
      }
    } catch (e) {
      // Fallback
    }
  }

  // Check if +cleaned is a valid international number
  try {
    if (isValidPhoneNumber(`+${cleaned}`)) {
      const parsed = parsePhoneNumber(`+${cleaned}`);
      if (parsed && parsed.country) {
        const countryInfo = findCountry(parsed.country);
        return {
          countryCode: parsed.country,
          dialCode: countryInfo ? countryInfo.dialCode : `+${parsed.countryCallingCode}`,
          nationalNumber: parsed.nationalNumber
        };
      }
    }
  } catch (e) {
    // Fallback
  }

  // Check for common dial codes directly in string
  for (const c of COUNTRIES) {
    const rawDial = c.dialCode.replace('+', '');
    if (cleaned.startsWith(rawDial) && cleaned.length > rawDial.length + 5) {
      return {
        countryCode: c.code,
        dialCode: c.dialCode,
        nationalNumber: cleaned.slice(rawDial.length)
      };
    }
  }

  // Default: if local Palestinian number starting with 059 or 056 or 59 or 56
  return {
    countryCode: 'PS',
    dialCode: '+970',
    nationalNumber: cleaned
  };
}
