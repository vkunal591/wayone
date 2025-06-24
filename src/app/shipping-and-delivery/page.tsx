import Head from 'next/head';
import Link from 'next/link';

export default function Page() {
    return (
        <div className='mt-[6rem] max-w-7xl m-auto p-4 lg:p-16 lg:pt-0'>
            <Head>
                <title>Shipping & Delivery Policy | WayOne</title>
                <meta name="description" content="Read the Shipping & Delivery Policy for WayOne services, outlining how and when our digital deliverables are provided to clients." />
            </Head>
            <main className="max-w-7xl mx-auto px-4 py-10 text-gray-800">
                <h1 className="text-3xl font-medium mb-6">Shipping & Delivery Policy</h1>
                <p className="mb-4"><strong>Effective Date:</strong> June 18, 2025</p>

                <p className="mb-4">At WayOne, we provide professional IT services including website development, app development, and digital solutions. As a digital-first company, our products and services are primarily delivered electronically, not via physical shipment. This policy explains how and when our digital deliverables are provided to clients.</p>

                <h2 className="text-2xl font-medium mt-8 mb-4">1. Nature of Delivery</h2>
                <p className="mb-4">All services offered by WayOne fall under digital service delivery. These may include but are not limited to:</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Website design and development projects</li>
                    <li>Mobile application builds</li>
                    <li>UI/UX design assets</li>
                    <li>Source code or staging links</li>
                    <li>Credentials for hosting and CMS</li>
                    <li>PDF documentation or training guides</li>
                    <li>API integrations or digital assets</li>
                </ul>

                <h2 className="text-2xl font-medium mt-8 mb-4">2. Delivery Timelines</h2>
                <p className="mb-4">Delivery timelines vary depending on the scope of the project, and are discussed and agreed upon during the project onboarding or proposal phase.</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li><strong>Standard Projects:</strong> Delivery timelines range between 7 to 30 business days.</li>
                    <li><strong>Custom Development:</strong> Complex projects may take 30–90 days depending on integrations and modules.</li>
                    <li><strong>Maintenance/Updates:</strong> Minor fixes or enhancements are usually delivered within 1–5 business days.</li>
                </ul>
                <p className="mb-4">WayOne will communicate all delivery milestones clearly and provide updates throughout the process.</p>

                <h2 className="text-2xl font-medium mt-8 mb-4">3. Mode of Delivery</h2>
                <p className="mb-4">Since our services are digital, delivery is typically completed via:</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Email (attachments or links)</li>
                    <li>Cloud storage links (Google Drive, Dropbox, WeTransfer, etc.)</li>
                    <li>Secure login credentials shared via email</li>
                    <li>Direct deployment on client servers or hosting</li>
                    <li>GitHub or project management platforms (e.g., Jira, Trello, Asana)</li>
                </ul>
                <p className="mb-4">All deliveries will be accompanied by a confirmation email with necessary documentation or handover notes.</p>

                <h2 className="text-2xl font-medium mt-8 mb-4">4. Delivery Delays</h2>
                <p className="mb-4">We aim to meet all delivery deadlines as per the project timeline. However, delivery may be delayed due to:</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Delayed feedback or approvals from the client</li>
                    <li>Incomplete submission of project inputs/content</li>
                    <li>Scope changes during project execution</li>
                    <li>Unforeseen technical or third-party issues</li>
                </ul>
                <p className="mb-4">In such cases, WayOne will proactively inform the client and revise the timeline with mutual consent.</p>

                <h2 className="text-2xl font-medium mt-8 mb-4">5. Client Responsibilities</h2>
                <p className="mb-4">To ensure smooth and timely delivery, clients are expected to:</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Provide complete and accurate project inputs (logos, content, references, credentials, etc.)</li>
                    <li>Respond to queries or approvals in a timely manner</li>
                    <li>Avoid frequent scope changes after confirmation</li>
                    <li>Keep communication channels open for project updates</li>
                </ul>
                <p className="mb-4">Any delay from the client side may affect the delivery schedule and is not the responsibility of WayOne.</p>

                <h2 className="text-2xl font-medium mt-8 mb-4">6. Downloadable Products or Licenses</h2>
                <p className="mb-4">In case of digital tools, plugins, or downloadable assets offered as part of a service package:</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Download links will be shared via email.</li>
                    <li>Links will remain active for a limited period (usually 7 days).</li>
                    <li>Clients are advised to download and store the files securely.</li>
                    <li>Once delivered, WayOne is not responsible for link expiry or lost downloads unless under an active maintenance agreement.</li>
                </ul>

                <h2 className="text-2xl font-medium mt-8 mb-4">7. Contact & Support</h2>
                <p className="mb-2">For queries related to project delivery or digital handovers, please reach out to:</p>
                <ul className="list-disc list-inside space-y-2 mb-8">
                    <li>Email: <Link href="mailto:support@wayone.co.in" className="text-blue-600 underline">support@wayone.co.in</Link></li>
                    <li>Phone: +91 9889 9889 09</li>
                    <li>Website: <Link href="https://wayone.co.in/" className="text-blue-600 underline">www.wayone.co.in</Link></li>
                </ul>
                <p className="mb-4">Our team is available from Mon–Sat, 10:00 AM to 6:00 PM IST to assist you with any delivery-related concerns.</p>
            </main>
        </div>
    );
}