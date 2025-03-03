
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

const MembersSalaries = () => {
  useEffect(() => {
    document.title = "Members' Salaries and Allowances | Peace Bridge";
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to home
          </Link>
          
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Members' Salaries and Allowances</h1>
            <p className="text-lg text-foreground/70">
              Information about the salaries, expenses, and allowances for Members of the Legislative Assembly (MLAs) in Northern Ireland.
            </p>
          </div>
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
                    <td className="border p-3">Junior Minister</td>
                    <td className="border p-3">£19,609</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Committee Chairperson</td>
                    <td className="border p-3">£13,910</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Committee Deputy Chairperson</td>
                    <td className="border p-3">£6,140</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Office Costs Expenditure (OCE)</h2>
            <p className="mb-4">Members are entitled to recover expenses necessarily incurred in the performance of their duties as a Member. The maximum amount recoverable per annum is £80,000.</p>
            <p className="mb-4">OCE is designed to meet the costs of:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Running an office and providing associated services</li>
              <li>Engaging with constituents</li>
              <li>Travel costs when on constituency or Assembly business</li>
              <li>Employing support staff</li>
            </ul>
            <p>The expenses scheme is administered by the Northern Ireland Assembly Commission, with oversight from the Independent Financial Review Panel.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Staffing Expenditure</h2>
            <p className="mb-4">MLAs can use their Office Costs Expenditure to employ staff to help them in their Assembly duties. Members must follow strict employment practices and adhere to the guidance issued by the Assembly Commission when employing staff.</p>
            <p>Members can employ both full-time and part-time staff, and they are responsible for ensuring that their staff are managed properly and in accordance with employment law.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Travel and Subsistence</h2>
            <p className="mb-4">Members can claim for travel costs when carrying out their constituency and Assembly duties, including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Travel between their home, constituency office, and Parliament Buildings</li>
              <li>Travel within their constituency</li>
              <li>Travel to other locations when representing the Assembly or their constituents</li>
            </ul>
            <p>Subsistence allowances can be claimed when a Member is required to be away from their home on official business.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Pension Scheme</h2>
            <p className="mb-4">MLAs are eligible to join the Northern Ireland Assembly Members' Pension Scheme. This is a defined benefit scheme based on a Member's final salary.</p>
            <p>Members contribute a percentage of their salary to the pension scheme, and the Assembly Commission makes an employer's contribution.</p>
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
                Visit NI Assembly website for more information
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MembersSalaries;
