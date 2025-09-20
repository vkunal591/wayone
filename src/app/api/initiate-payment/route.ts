import { createPaymentRequest } from '@/utils/payment';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { amount, currency, email, mobile, description } = body;

        const paymentPayload = createPaymentRequest(
            parseFloat(amount),
            currency,
            email,
            mobile,
            description
        );

        const response = await fetch('https://qa.phicommerce.com/pg/api/v2/initiateSale', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(paymentPayload),
        });

        const data = await response.json();
        console.log(data, "payment data")
        if (data.responseCode === 'R1000' && data.redirectURI && data.tranCtx) {
            const redirectUrl = `${data.redirectURI}?tranCtx=${data.tranCtx}`;

            // ✅ Send URL as JSON instead of trying to redirect on server
            return new Response(JSON.stringify({ redirectURI: redirectUrl }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        } else {
            console.error('Payment API error:', data);
            return new Response(
                JSON.stringify({ message: 'Payment initiation failed', data }),
                { status: 400 }
            );
        }

    } catch (error) {
        console.error('Payment initiation error:', error);
        return new Response(
            JSON.stringify({ message: 'Payment request failed' }),
            { status: 500 }
        );
    }
}
