
import React, { useEffect, useState } from 'react';
import fetchExpenditureData from '../utils/fetchExpenditure';
import { Search } from 'lucide-react';
import { Input } from './ui/input';

const MLAExpenditure = () => {
  const [expenditureData, setExpenditureData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const getExpenditureData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchExpenditureData();
        setExpenditureData(data);
        setError('');
      } catch (err) {
        setError('Failed to load expenditure data');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    getExpenditureData();
  }, []);

  const filteredData = expenditureData.filter(mla => 
    mla.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mla.constituency.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mla.party.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Members' Expenditure (April 2024 - September 2024)</h2>
      
      <div className="relative mb-6 max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <Input
          type="text"
          placeholder="Search by name, constituency, or party..."
          className="pl-10 py-6"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : error ? (
        <div className="text-red-500 text-center py-4">{error}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Name</th>
                <th className="border p-3 text-left">Constituency</th>
                <th className="border p-3 text-left">Party</th>
                <th className="border p-3 text-left">Office Rent</th>
                <th className="border p-3 text-left">Office Costs</th>
                <th className="border p-3 text-left">Travel Expenses</th>
                <th className="border p-3 text-left">Staffing Salaries</th>
                <th className="border p-3 text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((mla, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                    <td className="border p-3">{mla.name}</td>
                    <td className="border p-3">{mla.constituency}</td>
                    <td className="border p-3">{mla.party}</td>
                    <td className="border p-3">£{mla.officeRent.toLocaleString()}</td>
                    <td className="border p-3">£{mla.officeCosts.toLocaleString()}</td>
                    <td className="border p-3">£{mla.travelExpenses.toLocaleString()}</td>
                    <td className="border p-3">£{mla.staffingSalaries.toLocaleString()}</td>
                    <td className="border p-3 font-semibold">£{mla.totalExpenditure.toLocaleString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="border p-4 text-center">No results found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
      
      <div className="mt-6 text-sm text-muted-foreground">
        <p>Data source: NI Assembly Members' Expenditure 2024-2025 (April 2024 - September 2024)</p>
        <p>Note: This data is for demonstration purposes and may not reflect current figures.</p>
      </div>
    </div>
  );
};

export default MLAExpenditure;
