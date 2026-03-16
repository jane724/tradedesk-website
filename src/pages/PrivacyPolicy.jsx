export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-semibold text-slate-900">
          Privacy Policy
        </h1>

        <p className="mt-4 text-sm text-slate-500">
          Last updated: {new Date().getFullYear()}
        </p>

        <div className="mt-10 space-y-8 text-slate-600 leading-7">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              Who we are
            </h2>
            <p className="mt-2">
              TradeDesk Support operates the website
              tradedesksupport.co.uk and is responsible for handling any
              personal information collected through this website.
            </p>

            <p className="mt-2">
              TradeDesk is a job management platform designed for plumbing,
              heating and trade businesses in the United Kingdom.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              Information we collect
            </h2>

            <p className="mt-2">
              When you register your interest or contact us through the website
              we may collect the following information:
            </p>

            <ul className="mt-3 list-disc pl-6">
              <li>Full name</li>
              <li>Email address</li>
              <li>Business name (optional)</li>
              <li>Type of interest or enquiry</li>
              <li>Message or enquiry details</li>
            </ul>

            <p className="mt-3">
              This information is provided voluntarily through the early access
              registration or contact forms on the website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              How we use your information
            </h2>

            <p className="mt-2">
              The information submitted through this website may be used to:
            </p>

            <ul className="mt-3 list-disc pl-6">
              <li>Respond to enquiries or contact requests</li>
              <li>Notify you about TradeDesk updates</li>
              <li>Invite you to early access or beta testing</li>
              <li>Provide information about launch dates or availability</li>
              <li>Improve the TradeDesk platform and related services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              Legal basis for processing
            </h2>

            <p className="mt-2">
              Under UK data protection law (UK GDPR), we rely on the following
              lawful bases for processing personal information:
            </p>

            <ul className="mt-3 list-disc pl-6">
              <li>
                <strong>Consent</strong> – when you voluntarily submit your
                information through our early access or contact forms.
              </li>
              <li>
                <strong>Legitimate interest</strong> – to respond to enquiries
                and communicate with individuals who have expressed interest in
                TradeDesk.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              Data storage and security
            </h2>

            <p className="mt-2">
              Personal information submitted through this website is stored
              securely using trusted infrastructure providers.
            </p>

            <p className="mt-2">
              We use services such as secure database hosting and cloud
              infrastructure providers to process and store information safely.
              These providers implement appropriate technical and organisational
              security measures to protect personal data.
            </p>

            <p className="mt-2">
              While we take reasonable steps to protect your information, no
              internet transmission or storage system can be guaranteed to be
              completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              Sharing your information
            </h2>

            <p className="mt-2">
              We do not sell, rent, or trade personal information.
            </p>

            <p className="mt-2">
              Information may only be shared with trusted service providers who
              help operate the website or manage communication systems. These
              providers are required to handle personal information securely and
              only for the purposes necessary to operate the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              Data retention
            </h2>

            <p className="mt-2">
              Personal information submitted through this website will only be
              kept for as long as necessary to manage early access registrations,
              respond to enquiries, or communicate updates related to the
              TradeDesk platform.
            </p>

            <p className="mt-2">
              You may request removal of your information at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              Your data protection rights
            </h2>

            <p className="mt-2">
              Under UK GDPR you have the right to:
            </p>

            <ul className="mt-3 list-disc pl-6">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal data</li>
              <li>Withdraw consent for communications</li>
              <li>Object to certain types of data processing</li>
            </ul>

            <p className="mt-3">
              Requests can be made by contacting us using the details below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              Complaints
            </h2>

            <p className="mt-2">
              If you believe your data has been handled improperly, you have the
              right to lodge a complaint with the UK Information Commissioner’s
              Office (ICO).
            </p>

            <p className="mt-2">
              Website: https://ico.org.uk
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              Contact
            </h2>

            <p className="mt-2">
              If you have any questions about this Privacy Policy or how your
              information is handled, you can contact us at:
            </p>

            <p className="mt-3">
              Email: admin@tradedesksupport.co.uk
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}