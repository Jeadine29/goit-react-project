export function retrieveCurrency(currency) {
    switch (currency) {
      case 'uah':
        return '₱';
      case 'usd':
        return '$';
      case 'eur':
        return '€';
      default:
        break;
    }
  }