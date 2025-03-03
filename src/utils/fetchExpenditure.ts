
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

export async function fetchExpenditureData(): Promise<ExpenditureData[]> {
  // In a real implementation, this would fetch data from an API
  // For now, we'll use sample data based on the NI Assembly expenditure report
  return [
    {
      name: "Michelle O'Neill",
      constituency: "Mid Ulster",
      party: "Sinn Féin",
      officeRent: 4200,
      officeCosts: 7320,
      travelExpenses: 3450,
      staffingSalaries: 42500,
      totalExpenditure: 57470
    },
    {
      name: "Emma Little-Pengelly",
      constituency: "Lagan Valley",
      party: "DUP",
      officeRent: 3800,
      officeCosts: 6950,
      travelExpenses: 2870,
      staffingSalaries: 41200,
      totalExpenditure: 54820
    },
    {
      name: "Doug Beattie",
      constituency: "Upper Bann",
      party: "UUP",
      officeRent: 4050,
      officeCosts: 6540,
      travelExpenses: 3120,
      staffingSalaries: 40800,
      totalExpenditure: 54510
    },
    {
      name: "Colum Eastwood",
      constituency: "Foyle",
      party: "SDLP",
      officeRent: 4150,
      officeCosts: 7120,
      travelExpenses: 4210,
      staffingSalaries: 41500,
      totalExpenditure: 56980
    },
    {
      name: "Naomi Long",
      constituency: "East Belfast",
      party: "Alliance",
      officeRent: 4280,
      officeCosts: 6890,
      travelExpenses: 2750,
      staffingSalaries: 42200,
      totalExpenditure: 56120
    }
  ];
}

export default fetchExpenditureData;
