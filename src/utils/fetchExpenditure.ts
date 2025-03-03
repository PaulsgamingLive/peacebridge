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

export default async function fetchExpenditureData() {
  // In a real application, this would be an API call to the NI Assembly website
  // For demo purposes, we're using a static dataset with small random variations
  // to simulate real-time updates

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // Add small random variations to make data appear to update in real-time
  const randomFactor = () => 0.98 + (Math.random() * 0.04); // Random number between 0.98 and 1.02

  return [
    {
      name: "Michelle O'Neill",
      constituency: "Mid Ulster",
      party: "Sinn Féin",
      officeRent: Math.round(4200 * randomFactor()),
      officeCosts: Math.round(7320 * randomFactor()),
      travelExpenses: Math.round(3450 * randomFactor()),
      staffingSalaries: Math.round(42500 * randomFactor()),
      get totalExpenditure() { return this.officeRent + this.officeCosts + this.travelExpenses + this.staffingSalaries; }
    },
    {
      name: "Emma Little-Pengelly",
      constituency: "Lagan Valley",
      party: "DUP",
      officeRent: Math.round(3800 * randomFactor()),
      officeCosts: Math.round(6950 * randomFactor()),
      travelExpenses: Math.round(2870 * randomFactor()),
      staffingSalaries: Math.round(41200 * randomFactor()),
      get totalExpenditure() { return this.officeRent + this.officeCosts + this.travelExpenses + this.staffingSalaries; }
    },
    {
      name: "Doug Beattie",
      constituency: "Upper Bann",
      party: "UUP",
      officeRent: Math.round(4050 * randomFactor()),
      officeCosts: Math.round(6540 * randomFactor()),
      travelExpenses: Math.round(3120 * randomFactor()),
      staffingSalaries: Math.round(40800 * randomFactor()),
      get totalExpenditure() { return this.officeRent + this.officeCosts + this.travelExpenses + this.staffingSalaries; }
    },
    {
      name: "Colum Eastwood",
      constituency: "Foyle",
      party: "SDLP",
      officeRent: Math.round(4150 * randomFactor()),
      officeCosts: Math.round(7120 * randomFactor()),
      travelExpenses: Math.round(4210 * randomFactor()),
      staffingSalaries: Math.round(41500 * randomFactor()),
      get totalExpenditure() { return this.officeRent + this.officeCosts + this.travelExpenses + this.staffingSalaries; }
    },
    {
      name: "Naomi Long",
      constituency: "East Belfast",
      party: "Alliance",
      officeRent: Math.round(4280 * randomFactor()),
      officeCosts: Math.round(6890 * randomFactor()),
      travelExpenses: Math.round(2750 * randomFactor()),
      staffingSalaries: Math.round(42200 * randomFactor()),
      get totalExpenditure() { return this.officeRent + this.officeCosts + this.travelExpenses + this.staffingSalaries; }
    }
  ];
}