import Head from 'next/head';
import Link from 'next/link';

export default function Page() {
    return (
        <div className='mt-[6rem] max-w-7xl m-auto p-4 lg:p-16 lg:pt-0'>
            <Head>
                <title>Refund & Cancellation Policy | WayOne</title>
                <meta name="description" content="Read the Refund & Cancellation Policy for WayOne services, outlining how we handle cancellations, refunds, and dispute resolution." />
            </Head>
            <main className="max-w-7xl mx-auto px-4 py-10 text-gray-800">
                <h1 className="text-3xl font-medium mb-6">Refund & Cancellation Policy</h1>
                <p className="mb-4"><strong>Effective Date:</strong> June 18, 2025</p>

                <p className="mb-4">At WayOne, we are dedicated to delivering high-quality IT solutions including web development, mobile app development, UI/UX design, and digital consulting. Every project we undertake involves strategic planning, time allocation, and technical execution.</p>
                <p className="mb-4">To maintain transparency and fairness, we have outlined our Refund and Cancellation Policy below. This policy governs how we handle service cancellations, refund requests, and dispute resolution.</p>

                <h2 className="text-2xl font-medium mt-8 mb-4">1. Project Confirmation & Initiation</h2>
                <p className="mb-4">A project is considered confirmed when:</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>A written or verbal confirmation is received from the client.</li>
                    <li>An advance payment is made, as per the invoice or agreement.</li>
                    <li>Required inputs (such as content, branding, references) are submitted to initiate the work.</li>
                </ul>
                <p className="mb-4">Once a project is confirmed, it is scheduled, resources are allocated, and planning begins — at which point this policy becomes applicable.</p>

                <h2 className="text-2xl font-medium mt-8 mb-4">2. Cancellation Policy</h2>
                <h3 className="text-xl font-medium mb-2">A. Cancellation by Client</h3>
                <p className="mb-4"><strong>Before Work Starts:</strong></p>
                <p className="mb-4">If you choose to cancel the project before any development/design work has begun, you may be eligible for a full refund after deducting any administrative or consultation fees.</p>
                <p className="mb-4"><strong>After Work Has Started:</strong></p>
                <p className="mb-4">Once work has commenced, the cancellation request will be reviewed by our project team. Any refund in this case will be partial and based on:</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Work already completed</li>
                    <li>Resources and hours spent</li>
                    <li>Third-party costs (such as plugin purchases, domain/hosting, or tools)</li>
                </ul>
                <p className="mb-4">A detailed work log and report will be shared before determining the refund amount.</p>

                <h3 className="text-xl font-medium mb-2">B. Cancellation by WayOne</h3>
                <p className="mb-4">WayOne reserves the right to cancel a project in rare cases such as:</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Lack of communication or feedback from the client for more than 30 days.</li>
                    <li>Client misuse of service, including unethical, illegal, or harmful purposes.</li>
                    <li>Violation of agreed project terms.</li>
                </ul>
                <p className="mb-4">In such cases, WayOne may issue a partial refund depending on the work status and scope.</p>

                <h2 className="text-2xl font-medium mt-8 mb-4">3. Refund Policy</h2>
                <h3 className="text-xl font-medium mb-2">A. Non-Refundable Scenarios</h3>
                <p className="mb-4">Refunds will not be issued in the following cases:</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>If the project is completed or nearly completed.</li>
                    <li>If services have been approved in stages/milestones.</li>
                    <li>If cancellation is requested due to change of mind or shifting of business priorities.</li>
                    <li>Delays caused by incomplete content, late feedback, or miscommunication from the client’s side.</li>
                    <li>For monthly retainers or maintenance packages once the billing cycle has started.</li>
                </ul>

                <h3 className="text-xl font-medium mb-2">B. Eligible for Partial Refund</h3>
                <p className="mb-4">Partial refunds may be considered if:</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Deliverables do not align with the mutually agreed scope.</li>
                    <li>There is a significant delay in delivery from our side (without client-side cause).</li>
                    <li>The project has not yet reached major milestones.</li>
                </ul>
                <p className="mb-4">In all eligible cases, refunds will be calculated after deducting:</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Completed work value</li>
                    <li>Developer/designer hours</li>
                    <li>Third-party or tool expenses</li>
                    <li>Administrative/management costs</li>
                </ul>

                <h2 className="text-2xl font-medium mt-8 mb-4">4. Refund Process & Timeline</h2>
                <p className="mb-4">To request a cancellation or refund, please send an email to <Link href="mailto:support@wayone.co.in" className="text-blue-600 underline">support@wayone.co.in</Link> with:</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Project Name / Invoice Number</li>
                    <li>Reason for refund or cancellation</li>
                    <li>Supporting documents or screenshots (if applicable)</li>
                </ul>
                <p className="mb-4">Once received, your request will be reviewed within 3–5 business days. If approved, refunds will be processed within 7–10 business days and credited to the original payment method. Any transaction charges or third-party fees are non-refundable.</p>

                <h2 className="text-2xl font-medium mt-8 mb-4">5. Revisions vs. Refunds</h2>
                <p className="mb-4">Our first priority is always client satisfaction. In many cases, we offer free revisions or adjustments to address any concerns before considering a refund. We strongly encourage open communication during the project to avoid misunderstandings or mismatched expectations.</p>

                <h2 className="text-2xl font-medium mt-8 mb-4">6. Final Decision</h2>
                <p className="mb-4">WayOne reserves the right to make the final decision on all refund and cancellation matters after an internal assessment. All decisions will be communicated to the client in writing and are considered final.</p>

                <h2 className="text-2xl font-medium mt-8 mb-4">7. Contact Us</h2>
                <p className="mb-2">If you have any questions about this policy or need assistance, please contact:</p>
                <ul className="list-disc list-inside space-y-2 mb-8">
                    <li>Email: <Link href="mailto:support@wayone.co.in" className="text-blue-600 underline">support@wayone.co.in</Link></li>
                    <li>Phone: +91 9889 9889 09</li>
                    <li>Website: <Link href="https://wayone.co.in/" className="text-blue-600 underline">www.wayone.co.in</Link></li>
                </ul>
            </main>
        </div>
    );
}