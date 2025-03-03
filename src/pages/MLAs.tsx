import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

interface MLA {
  id: number;
  name: string;
  party: string;
  constituency: string;
  email: string;
  phone: string;
  office: string;
  image: string;
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
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=M+O'Neill"
  },
  {
    id: 2,
    name: "Emma Little-Pengelly",
    party: "DUP",
    constituency: "Lagan Valley",
    email: "emma.little-pengelly@mla.niassembly.gov.uk",
    phone: "028 9266 3800",
    office: "58 Bachelors Walk, Lisburn, BT28 1XN",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=E+Pengelly"
  },
  {
    id: 3,
    name: "Doug Beattie",
    party: "UUP",
    constituency: "Upper Bann",
    email: "doug.beattie@mla.niassembly.gov.uk",
    phone: "028 3833 2421",
    office: "34a Bridge Street, Portadown, BT63 5AE",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=D+Beattie"
  },
  {
    id: 4,
    name: "Colum Eastwood",
    party: "SDLP",
    constituency: "Foyle",
    email: "colum.eastwood@mla.niassembly.gov.uk",
    phone: "028 7136 5516",
    office: "32 Bishop Street, Derry, BT48 6PR",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=C+Eastwood"
  },
  {
    id: 5,
    name: "Naomi Long",
    party: "Alliance",
    constituency: "East Belfast",
    email: "naomi.long@mla.niassembly.gov.uk",
    phone: "028 9047 2004",
    office: "5 Ardenlee Avenue, Belfast, BT6 8QF",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=N+Long"
  },
  {
    id: 6,
    name: "Clare Bailey",
    party: "Green Party",
    constituency: "South Belfast",
    email: "clare.bailey@mla.niassembly.gov.uk",
    phone: "028 9052 1141",
    office: "76 University Street, Belfast, BT7 1HB",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=C+Bailey"
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

        <div className="mb-8" data-aos="fade-up" data-aos-delay="100">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by name, constituency, or party..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
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
                    <Button className="w-full mt-4" variant="outline">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-16 text-center" data-aos="fade-up">
          <p className="text-muted-foreground mb-6">
            Don't see your MLA? The list above contains a sample of MLAs.
          </p>
          <a 
            href="https://www.niassembly.gov.uk/your-mlas/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:underline"
          >
            View complete list on NI Assembly website
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
