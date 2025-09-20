import crypto from 'crypto';

const ICICI_SECRET_KEY = process.env.ICICI_SECRET_KEY || 'your_icici_secret_key_here'; // Put in .env
const HASH_KEY = process.env.HASH_KEY || 'HASH_KEY'; // Put in .env

export function calculateSecureHash(request: PaymentRequest): string {
  const {
    addlParam1 = '',
    addlParam2 = '',
    amount,
    currencyCode,
    customerEmailID,
    customerMobileNo,
    merchantId,
    merchantTxnNo,
    payType,
    returnURL,
    transactionType,
    txnDate,
  } = request;

  const dataString = `${addlParam1}${addlParam2}${amount}${currencyCode}${customerEmailID}${customerMobileNo}${merchantId}${merchantTxnNo}${payType}${returnURL}${transactionType}${txnDate}`;

  const hash = crypto
    .createHmac('sha256', ICICI_SECRET_KEY) // or HASH_KEY if PhiCommerce gave you that
    .update(dataString)
    .digest('hex');

  return hash;
}

export interface PaymentRequest {
  merchantId: string;
  merchantTxnNo: string;
  amount: string;
  currencyCode: string;
  payType: string;
  customerEmailID: string;
  transactionType: string;
  txnDate: string;
  returnURL: string;
  secureHash: string;
  customerMobileNo: string;
  addlParam1?: string;
  addlParam2?: string;
}

export function generateTxnDate(): string {
  const now = new Date();
  const pad = (n: number) => n.toString().padStart(2, '0');
  return (
    now.getFullYear().toString() +
    pad(now.getMonth() + 1) +
    pad(now.getDate()) +
    pad(now.getHours()) +
    pad(now.getMinutes()) +
    pad(now.getSeconds())
  );
}

export function generateTxnId(): string {
  return Date.now().toString();
}

export function createPaymentRequest(
  amount: number,
  currency: string,
  email: string,
  mobile: string,
  description: string
): PaymentRequest {
  const txnDate = generateTxnDate();
  const merchantTxnNo = generateTxnId();

  const paymentRequest: PaymentRequest = {
    merchantId: 'T_08880',
    merchantTxnNo,
    amount: amount.toFixed(2),
    currencyCode: currency,
    payType: '0',
    customerEmailID: email,
    transactionType: 'SALE',
    txnDate,
    returnURL: 'https://qa.phicommerce.com/pg/api/merchant',
    secureHash: '',
    customerMobileNo: mobile,
    addlParam1: description,
    addlParam2: 'StaticTestParam',
  };

  paymentRequest.secureHash = calculateSecureHash(paymentRequest);
  return paymentRequest;
}
