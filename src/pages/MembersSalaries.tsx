import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { ExternalLink } from 'lucide-react';
import MLAExpenditure from '../components/MLAExpenditure';

const MembersSalaries = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-24 max-w-7xl">
        <div className="mb-10 text-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold mb-4">Members' Salaries and Allowances</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Information about the salaries, allowances, and expenses of Members of the Legislative Assembly (MLAs).
          </p>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold mb-4">MLA Salary</h2>
            <p className="mb-4">MLAs are paid an annual salary which is set by the Independent Financial Review Panel. The current annual salary for a Member is £51,500.</p>
            <p className="mb-4">Members who hold certain offices are entitled to an additional Office Holder's Allowance as follows:</p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse mb-4">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-3 text-left">Office</th>
                    <th className="border p-3 text-left">Additional Salary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">Speaker</td>
                    <td className="border p-3">£39,270</td>
                  </tr>
                  <tr>
                    <td className="border p-3">First Minister</td>
                    <td className="border p-3">£39,270</td>
                  </tr>
                  <tr>
                    <td className="border p-3">deputy First Minister</td>
                    <td className="border p-3">£39,270</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Minister</td>
                    <td className="border p-3">£38,000</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Committee Chairperson</td>
                    <td className="border p-3">£13,420</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Assembly Commission Member</td>
                    <td className="border p-3">£7,020</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Office Cost Expenditure</h2>
            <p className="mb-4">MLAs are entitled to claim Office Cost Expenditure (OCE) to recover any costs incurred in carrying out their Assembly duties. This includes:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Office running costs</li>
              <li>Office equipment</li>
              <li>Constituency office rent and rates</li>
              <li>Telephone and internet charges</li>
              <li>Stationery and postage</li>
            </ul>
            <p className="mb-4">The maximum amount recoverable for 2024-2025 is approximately £80,500 per MLA.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Travel and Subsistence Allowances</h2>
            <p className="mb-4">MLAs can claim for necessary travel in connection with their Assembly duties including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Travel between their home, constituency office, and Parliament Buildings</li>
              <li>Travel within the constituency on Assembly business</li>
              <li>Travel to meetings and events connected with Assembly business</li>
            </ul>
            <p className="mb-4">Daily subsistence rates are also payable for approved overnight stays away from home.</p>
          </section>

          <section>
            <MLAExpenditure />
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Transparency</h2>
            <p className="mb-4">All expenses claimed by Members are published on the Northern Ireland Assembly website. This includes detailed breakdowns of:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Office Costs Expenditure</li>
              <li>Travel and Subsistence claims</li>
              <li>Staff costs</li>
            </ul>
            <p className="mb-4">This information is published regularly as part of the Assembly's commitment to transparency and accountability.</p>

            <div className="mt-6">
              <a 
                href="https://www.niassembly.gov.uk/your-mlas/members-salaries-and-expenses/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit NI Assembly website for more detailed information
              </a>
            </div>
          </section>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default MembersSalaries;