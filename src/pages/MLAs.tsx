import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExternalLink, Mail, MapPin, Phone, Search } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";
import fetchExpenditureData from '../utils/fetchExpenditure'; // Import statement added

interface MLA {
  id: number;
  name: string;
  party: string;
  constituency: string;
  email: string;
  phone: string;
  office: string;
  image: string;
  profileUrl: string;
}

const mlaData: MLA[] = [
  {
    id: 1,
    name: "Michelle O'Neill",
    party: "Sinn Féin",
    constituency: "Mid Ulster",
    email: "michelle.oneill@mla.niassembly.gov.uk",
    phone: "028 8674 8090",
    office: "8 - 10 Market Square, Coalisland, Co. Tyrone, BT71 4NB",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=M+O'Neill",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/michelle-oneill/"
  },
  {
    id: 2,
    name: "Emma Little-Pengelly",
    party: "DUP",
    constituency: "Lagan Valley",
    email: "emma.little-pengelly@mla.niassembly.gov.uk",
    phone: "028 9266 3800",
    office: "58 Bachelors Walk, Lisburn, BT28 1XN",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=E+Pengelly",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/emma-little-pengelly/"
  },
  {
    id: 3,
    name: "Doug Beattie",
    party: "UUP",
    constituency: "Upper Bann",
    email: "doug.beattie@mla.niassembly.gov.uk",
    phone: "028 3833 2421",
    office: "34a Bridge Street, Portadown, BT63 5AE",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=D+Beattie",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/doug-beattie/"
  },
  {
    id: 4,
    name: "Colum Eastwood",
    party: "SDLP",
    constituency: "Foyle",
    email: "colum.eastwood@mla.niassembly.gov.uk",
    phone: "028 7136 5516",
    office: "32 Bishop Street, Derry, BT48 6PR",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=C+Eastwood",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/colum-eastwood/"
  },
  {
    id: 5,
    name: "Naomi Long",
    party: "Alliance",
    constituency: "East Belfast",
    email: "naomi.long@mla.niassembly.gov.uk",
    phone: "028 9047 2004",
    office: "5 Ardenlee Avenue, Belfast, BT6 8QF",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=N+Long",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/naomi-long/"
  },
  {
    id: 6,
    name: "Clare Bailey",
    party: "Green Party",
    constituency: "South Belfast",
    email: "clare.bailey@mla.niassembly.gov.uk",
    phone: "028 9052 1141",
    office: "76 University Street, Belfast, BT7 1HB",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=C+Bailey",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/clare-bailey/"
  },
  {
    id: 7,
    name: "Jim Allister",
    party: "TUV",
    constituency: "North Antrim",
    email: "jim.allister@mla.niassembly.gov.uk",
    phone: "028 2075 1865",
    office: "38 Henry Street, Ballymena, BT42 3AH",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=J+Allister",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/jim-allister/"
  },
  {
    id: 8,
    name: "Gerry Carroll",
    party: "People Before Profit",
    constituency: "West Belfast",
    email: "gerry.carroll@mla.niassembly.gov.uk",
    phone: "028 9023 3547",
    office: "273 Falls Road, Belfast, BT12 6FB",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=G+Carroll",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/gerry-carroll/"
  },
  {
    id: 9,
    name: "John O'Dowd",
    party: "Sinn Féin",
    constituency: "Upper Bann",
    email: "john.odowd@mla.niassembly.gov.uk",
    phone: "028 3834 0991",
    office: "58 William Street, Lurgan, BT66 6JB",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=J+O'Dowd",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/john-odowd/"
  },
  {
    id: 10,
    name: "Gordon Lyons",
    party: "DUP",
    constituency: "East Antrim",
    email: "gordon.lyons@mla.niassembly.gov.uk",
    phone: "028 2826 9200",
    office: "24 Main Street, Larne, BT40 1SP",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=G+Lyons",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/gordon-lyons/"
  },
  {
    id: 11,
    name: "Matthew O'Toole",
    party: "SDLP",
    constituency: "South Belfast",
    email: "matthew.otoole@mla.niassembly.gov.uk",
    phone: "028 9052 0010",
    office: "3 Cregagh Road, Belfast, BT6 8PX",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=M+O'Toole",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/matthew-otoole/"
  },
  {
    id: 12,
    name: "Caoimhe Archibald",
    party: "Sinn Féin",
    constituency: "East Derry",
    email: "caoimhe.archibald@mla.niassembly.gov.uk",
    phone: "028 7744 1766",
    office: "47 Main Street, Dungiven, BT47 4LG",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=C+Archibald",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/caoimhe-archibald/"
  },
  {
    id: 13,
    name: "Kellie Armstrong",
    party: "Alliance",
    constituency: "Strangford",
    email: "kellie.armstrong@mla.niassembly.gov.uk",
    phone: "028 9181 4806",
    office: "19 The Square, Newtownards, BT23 4FB",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=K+Armstrong",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/kellie-armstrong/"
  },
  {
    id: 14,
    name: "Harry Harvey",
    party: "DUP",
    constituency: "Strangford",
    email: "harry.harvey@mla.niassembly.gov.uk",
    phone: "028 9756 1200",
    office: "6 Church Street, Saintfield, BT24 7LR",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=H+Harvey",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/harry-harvey/"
  },
  {
    id: 15,
    name: "Mike Nesbitt",
    party: "UUP",
    constituency: "Strangford",
    email: "mike.nesbitt@mla.niassembly.gov.uk",
    phone: "028 9145 5969",
    office: "34a Upper Greenwell Street, Newtownards, BT23 7JJ",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=M+Nesbitt",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/mike-nesbitt/"
  },
  {
    id: 16,
    name: "Jonathan Buckley",
    party: "DUP",
    constituency: "Upper Bann",
    email: "jonathan.buckley@mla.niassembly.gov.uk",
    phone: "028 3833 1088",
    office: "3 Church Place, Lurgan, BT66 6EY",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=J+Buckley",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/jonathan-buckley/"
  },
  {
    id: 17,
    name: "Eóin Tennyson",
    party: "Alliance",
    constituency: "Upper Bann",
    email: "eoin.tennyson@mla.niassembly.gov.uk",
    phone: "028 3834 2452",
    office: "54 Church Place, Lurgan, BT66 6HD",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=E+Tennyson",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/eoin-tennyson/"
  },
  {
    id: 18,
    name: "Paula Bradshaw",
    party: "Alliance",
    constituency: "South Belfast",
    email: "paula.bradshaw@mla.niassembly.gov.uk",
    phone: "028 9064 1303",
    office: "7 Annadale Avenue, Belfast, BT7 3JH",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=P+Bradshaw",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/paula-bradshaw/"
  },
  {
    id: 19,
    name: "Kate Nicholl",
    party: "Alliance",
    constituency: "South Belfast",
    email: "kate.nicholl@mla.niassembly.gov.uk",
    phone: "028 9064 1303",
    office: "7 Annadale Avenue, Belfast, BT7 3JH",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=K+Nicholl",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/kate-nicholl/"
  },
  {
    id: 20,
    name: "Deirdre Hargey",
    party: "Sinn Féin",
    constituency: "South Belfast",
    email: "deirdre.hargey@mla.niassembly.gov.uk",
    phone: "028 9024 2426",
    office: "Sinn Féin Head Office, 51-53 Falls Road, Belfast, BT12 4PD",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=D+Hargey",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/deirdre-hargey/"
  },
  {
    id: 21,
    name: "Edwin Poots",
    party: "DUP",
    constituency: "Lagan Valley",
    email: "edwin.poots@mla.niassembly.gov.uk",
    phone: "028 9266 5516",
    office: "47B Ballymacash Road, Lisburn, BT28 3EZ",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=E+Poots",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/edwin-poots/"
  },
  {
    id: 22,
    name: "Sorcha Eastwood",
    party: "Alliance",
    constituency: "Lagan Valley",
    email: "sorcha.eastwood@mla.niassembly.gov.uk",
    phone: "028 9266 2503",
    office: "18a Bow Street, Lisburn, BT28 1BN",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=S+Eastwood",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/sorcha-eastwood/"
  },
  {
    id: 23,
    name: "Diane Forsythe",
    party: "DUP",
    constituency: "South Down",
    email: "diane.forsythe@mla.niassembly.gov.uk",
    phone: "028 4461 3427",
    office: "18 Newcastle Street, Kilkeel, BT34 4AF",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=D+Forsythe",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/diane-forsythe/"
  },
  {
    id: 24,
    name: "Sinéad Ennis",
    party: "Sinn Féin",
    constituency: "South Down",
    email: "sinead.ennis@mla.niassembly.gov.uk",
    phone: "028 4175 7900",
    office: "31 St. Mary's Street, Newry, BT34 1AR",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=S+Ennis",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/sinead-ennis/"
  },
  {
    id: 25,
    name: "Colin McGrath",
    party: "SDLP",
    constituency: "South Down",
    email: "colin.mcgrath@mla.niassembly.gov.uk",
    phone: "028 4372 4374",
    office: "6 St. Patrick's Avenue, Downpatrick, BT30 6DW",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=C+McGrath",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/colin-mcgrath/"
  },
  {
    id: 26,
    name: "Gary Middleton",
    party: "DUP",
    constituency: "Foyle",
    email: "gary.middleton@mla.niassembly.gov.uk",
    phone: "028 7127 1588",
    office: "Unit 2, 2nd Floor, River House, Castle Street, Londonderry, BT48 6HQ",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=G+Middleton",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/gary-middleton/"
  },
  {
    id: 27,
    name: "Mark H Durkan",
    party: "SDLP",
    constituency: "Foyle",
    email: "mark.durkan@mla.niassembly.gov.uk",
    phone: "028 7136 0700",
    office: "28a Bishop Street, Derry, BT48 6PP",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=M+Durkan",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/mark-h-durkan/"
  }
];

const MLAs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMLAs = mlaData.filter(mla => {
    return mla.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mla.constituency.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mla.party.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-24 max-w-7xl">
        <div className="mb-10 text-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold mb-4">Northern Ireland MLAs</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Contact your local MLA (Member of the Legislative Assembly) to voice your concerns,
            seek assistance, or contribute to the peace process in Northern Ireland.
          </p>
        </div>

        <div className="relative mb-12 max-w-md mx-auto" data-aos="fade-up" data-aos-delay="100">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            type="text"
            placeholder="Search by name, constituency, or party..."
            className="pl-10 py-6"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {filteredMLAs.length === 0 ? (
          <div className="text-center py-16" data-aos="fade-up">
            <p className="text-muted-foreground text-lg">No MLAs found matching your search criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="200">
            {filteredMLAs.map((mla) => (
              <Card key={mla.id} className="transition-all hover:shadow-md">
                <CardHeader>
                  <CardTitle>{mla.name}</CardTitle>
                  <CardDescription>
                    {mla.party} • {mla.constituency}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Mail className="mr-3 h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <a 
                        href={`mailto:${mla.email}`} 
                        className="text-sm text-primary hover:underline overflow-hidden text-ellipsis"
                      >
                        {mla.email}
                      </a>
                    </div>
                    <div className="flex items-start">
                      <Phone className="mr-3 h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <a href={`tel:${mla.phone}`} className="text-sm hover:underline">
                        {mla.phone}
                      </a>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="mr-3 h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <span className="text-sm">{mla.office}</span>
                    </div>
                    <div className="space-y-2 mt-4">
                      <a 
                        href={mla.profileUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full block"
                      >
                        <Button className="w-full" variant="outline">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Profile
                        </Button>
                      </a>
                      <Button 
                        className="w-full" 
                        variant="outline"
                        onClick={() => {
                          const expenditureData = fetchExpenditureData();
                          const mlaName = mla.name;
                          expenditureData.then(data => {
                            const mlaExpenditure = data.find(item => 
                              item.name.toLowerCase().includes(mla.name.toLowerCase()) ||
                              mla.name.toLowerCase().includes(item.name.toLowerCase())
                            );

                            if (mlaExpenditure) {
                              alert(
                                `${mla.name} - Expenditure (April-Sept 2024):\n` +
                                `Office Rent: £${mlaExpenditure.officeRent.toLocaleString()}\n` +
                                `Office Costs: £${mlaExpenditure.officeCosts.toLocaleString()}\n` +
                                `Travel Expenses: £${mlaExpenditure.travelExpenses.toLocaleString()}\n` +
                                `Staffing Salaries: £${mlaExpenditure.staffingSalaries.toLocaleString()}\n` +
                                `Total: £${mlaExpenditure.totalExpenditure.toLocaleString()}`
                              );
                            } else {
                              alert(`No expenditure data available for ${mla.name}`);
                            }
                          });
                        }}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Expenses
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-16 text-center" data-aos="fade-up">
          <p className="text-muted-foreground mb-6">
            Data sourced from the official NI Assembly website. Don't see your MLA? 
          </p>
          <a 
            href="https://aims.niassembly.gov.uk/mlas/contacts.aspx" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:underline"
          >
            View complete and up-to-date list on NI Assembly website
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default MLAs;