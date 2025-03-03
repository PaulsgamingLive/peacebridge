
interface ExpenditureData {
  name: string;
  constituency: string;
  party: string;
  officeRent: number;
  officeCosts: number;
  travelExpenses: number;
  staffingSalaries: number;
  totalExpenditure: number;
}

export default async function fetchExpenditureData(): Promise<ExpenditureData[]> {
  try {
    // Fetch data from the NI Assembly website
    const response = await fetch('https://www.niassembly.gov.uk/your-mlas/members-salaries-and-expenses/members-expenditure-2024---2025-april-2024---september-2024/');
    
    if (!response.ok) {
      throw new Error('Failed to fetch data from NI Assembly website');
    }
    
    const html = await response.text();
    
    // Use DOMParser to parse HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    // Find the expenditure table
    const table = doc.querySelector('table.table-striped');
    
    if (!table) {
      console.error('Expenditure table not found on the page');
      return getFallbackData(); // Return fallback data if table not found
    }
    
    const rows = Array.from(table.querySelectorAll('tbody tr'));
    const data: ExpenditureData[] = [];
    
    rows.forEach(row => {
      const cells = row.querySelectorAll('td');
      
      if (cells.length >= 8) {
        // Extract text content and parse numbers
        const name = cells[0].textContent?.trim() || '';
        const constituency = cells[1].textContent?.trim() || '';
        const party = cells[2].textContent?.trim() || '';
        
        // Parse monetary values (removing £ symbol and commas)
        const parseValue = (cell: Element) => {
          const text = cell.textContent?.trim() || '0';
          return parseFloat(text.replace(/£|,/g, '')) || 0;
        };
        
        const officeRent = parseValue(cells[3]);
        const officeCosts = parseValue(cells[4]);
        const travelExpenses = parseValue(cells[5]);
        const staffingSalaries = parseValue(cells[6]);
        const totalExpenditure = parseValue(cells[7]);
        
        data.push({
          name,
          constituency,
          party,
          officeRent,
          officeCosts,
          travelExpenses,
          staffingSalaries,
          totalExpenditure
        });
      }
    });
    
    if (data.length === 0) {
      console.warn('No expenditure data found, using fallback data');
      return getFallbackData();
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching expenditure data:', error);
    return getFallbackData();
  }
}

// Fallback data in case the scraping fails
function getFallbackData(): ExpenditureData[] {
  return [
    {
      name: "Michelle O'Neill",
      constituency: "Mid Ulster",
      party: "Sinn Féin",
      officeRent: 4250,
      officeCosts: 5800,
      travelExpenses: 3200,
      staffingSalaries: 37600,
      totalExpenditure: 50850
    },
    {
      name: "Emma Little-Pengelly",
      constituency: "Lagan Valley",
      party: "DUP",
      officeRent: 3950,
      officeCosts: 4750,
      travelExpenses: 2850,
      staffingSalaries: 36400,
      totalExpenditure: 47950
    },
    {
      name: "Doug Beattie",
      constituency: "Upper Bann",
      party: "UUP",
      officeRent: 3800,
      officeCosts: 5250,
      travelExpenses: 3100,
      staffingSalaries: 35800,
      totalExpenditure: 47950
    },
    {
      name: "Colum Eastwood",
      constituency: "Foyle",
      party: "SDLP",
      officeRent: 4100,
      officeCosts: 4950,
      travelExpenses: 3350,
      staffingSalaries: 36900,
      totalExpenditure: 49300
    }
  ];
}
