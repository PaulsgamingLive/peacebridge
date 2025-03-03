
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { ExternalLink, Mail, MapPin, Phone, Search } from "lucide-react";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

interface MLA {
  id: number;
  name: string;
  party: string;
  constituency: string;
  email?: string;
  phone?: string;
  office: string;
  image: string;
  profileUrl?: string;
}

const mlaData: MLA[] = [
  {
    id: 1,
    name: "Dr Steve Aiken OBE",
    party: "Ulster Unionist Party",
    constituency: "South Antrim",
    phone: "02893344966",
    office: "3 The Square, Ballyclare, BT39 9BB",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=S+Aiken",
    email: "steve.aiken@mla.niassembly.gov.uk",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/steve-aiken/"
  },
  {
    id: 2,
    name: "Mr Andy Allen MBE",
    party: "Ulster Unionist Party",
    constituency: "East Belfast",
    phone: "028 9046 3900",
    office: "174 ALBERTBRIDGE ROAD, BALLYMACARRET, BALLYMACARRET, BELFAST, BT5 4GS",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=A+Allen",
    email: "andy.allen@mla.niassembly.gov.uk",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/andy-allen/"
  },
  {
    id: 3,
    name: "Dr Caoimhe Archibald",
    party: "Sinn Féin",
    constituency: "East Londonderry",
    phone: "02877 742488",
    office: "81 Main Street, Dungiven, BT47 4LE",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=C+Archibald",
    email: "caoimhe.archibald@mla.niassembly.gov.uk",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/caoimhe-archibald/"
  },
  {
    id: 4,
    name: "Ms Kellie Armstrong",
    party: "Alliance Party",
    constituency: "Strangford",
    phone: "028 9181 1414",
    office: "Unit 3 Conway Buildings, 14 South Street, Corporation North, Newtownards, BT23 4JT",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=K+Armstrong",
    email: "kellie.armstrong@mla.niassembly.gov.uk",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/kellie-armstrong/"
  },
  {
    id: 5,
    name: "Mr Danny Baker",
    party: "Sinn Féin",
    constituency: "West Belfast",
    phone: "028 9061 1176",
    office: "UNIT 23, THE NEW DAIRY FARM CENTRE, STEWARTSTOWN ROAD, POLEGLASS, DUNMURRY, BT17 0AW",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=D+Baker",
    email: "danny.baker@mla.niassembly.gov.uk",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/danny-baker/"
  },
  {
    id: 6,
    name: "Mr Doug Beattie MC",
    party: "Ulster Unionist Party",
    constituency: "Upper Bann",
    phone: "028 3835 0004",
    office: "103 BRIDGE STREET, EDENDERRY, PORTADOWN, BT63 5AA",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=D+Beattie",
    email: "doug.beattie@mla.niassembly.gov.uk",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/doug-beattie/"
  },
  {
    id: 7,
    name: "Mr John Blair",
    party: "Alliance Party",
    constituency: "South Antrim",
    phone: "02890 840930",
    office: "Unit 1C, 55 High Street, Town Parks, Antrim, BT41 4AY",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=J+Blair",
    email: "john.blair@mla.niassembly.gov.uk",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/john-blair/"
  },
  {
    id: 8,
    name: "Mr Cathal Boylan",
    party: "Sinn Féin",
    constituency: "Newry and Armagh",
    phone: "02837 511797",
    office: "24 Ogle Street, Corporation, Armagh, BT61 7EW",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=C+Boylan",
    email: "cathal.boylan@mla.niassembly.gov.uk",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/cathal-boylan/"
  },
  {
    id: 9,
    name: "Mr Maurice Bradley",
    party: "Democratic Unionist Party",
    constituency: "East Londonderry",
    phone: "02870 356990",
    office: "22 NEW ROW, COLERAINE AND SUBURBS, COLERAINE, BT52 1AF",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=M+Bradley",
    email: "maurice.bradley@mla.niassembly.gov.uk",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/maurice-bradley/"
  },
  {
    id: 10,
    name: "Ms Paula Bradshaw",
    party: "Alliance Party",
    constituency: "South Belfast",
    phone: "028 90328162",
    office: "291 ORMEAU ROAD, ORMEAU, BALLYNAFOY, BELFAST, BT7 3GG",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=P+Bradshaw",
    email: "paula.bradshaw@mla.niassembly.gov.uk",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/paula-bradshaw/"
  },
  {
    id: 11,
    name: "Mr Phillip Brett",
    party: "Democratic Unionist Party",
    constituency: "North Belfast",
    phone: "02890 027 277",
    office: "277 Shore Road, Skegoneill, Belfast, BT15 3PW",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=P+Brett",
    email: "phillip.brett@mla.niassembly.gov.uk",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/phillip-brett/"
  },
  {
    id: 12,
    name: "Miss Nicola Brogan",
    party: "Sinn Féin",
    constituency: "West Tyrone",
    phone: "028 8225 3040",
    office: "4 James Street, Meetinghousehill, Omagh, BT78 1DH",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=N+Brogan",
    email: "nicola.brogan@mla.niassembly.gov.uk",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/nicola-brogan/"
  },
  {
    id: 13,
    name: "Mr David Brooks",
    party: "Democratic Unionist Party",
    constituency: "East Belfast",
    phone: "028 9694 4487",
    office: "977 Upper Newtownards Road, Church Quarter, Dundonald, BT16 1RL",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=D+Brooks",
    email: "david.brooks@mla.niassembly.gov.uk",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/david-brooks/"
  },
  {
    id: 14,
    name: "Ms Cheryl Brownlee",
    party: "Democratic Unionist Party",
    constituency: "East Antrim",
    office: "1C Castle Street, Carrickfergus, BT38 7BE",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=C+Brownlee",
    email: "cheryl.brownlee@mla.niassembly.gov.uk",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/cheryl-brownlee/"
  },
  {
    id: 15,
    name: "Mr Keith Buchanan",
    party: "Democratic Unionist Party",
    constituency: "Mid Ulster",
    phone: "028 7930 0295",
    office: "2 QUEENS AVENUE, TOWN PARKS OF MAGHERAFELT, MAGHERAFELT, BT45 6BU",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=K+Buchanan",
    email: "keith.buchanan@mla.niassembly.gov.uk",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/keith-buchanan/"
  },
  {
    id: 16,
    name: "Mr Tom Buchanan",
    party: "Democratic Unionist Party",
    constituency: "West Tyrone",
    phone: "028 8224 7702",
    office: "52 MARKET STREET, OMAGH, BT78 1EH",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=T+Buchanan",
    email: "tom.buchanan@mla.niassembly.gov.uk",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/tom-buchanan/"
  },
  {
    id: 17,
    name: "Mr Jonathan Buckley",
    party: "Democratic Unionist Party",
    constituency: "Upper Bann",
    phone: "02838 894477",
    office: "6 WEST STREET, TAVANAGH, PORTADOWN, BT62 3PD",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=J+Buckley",
    email: "jonathan.buckley@mla.niassembly.gov.uk",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/jonathan-buckley/"
  },
  {
    id: 18,
    name: "Ms Joanne Bunting",
    party: "Democratic Unionist Party",
    constituency: "East Belfast",
    phone: "028 9079 7100",
    office: "220 KNOCK ROAD, CARNAMUCK, BELFAST, BT5 6QD",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=J+Bunting",
    email: "joanne.bunting@mla.niassembly.gov.uk",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/joanne-bunting/"
  },
  {
    id: 19,
    name: "Mr Robbie Butler",
    party: "Ulster Unionist Party",
    constituency: "Lagan Valley",
    phone: "02892 44 9898",
    office: "59 BRIDGE STREET, LISNAGARVY, LISBURN, BT28 1XZ",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=R+Butler",
    email: "robbie.butler@mla.niassembly.gov.uk",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/robbie-butler/"
  },
  {
    id: 20,
    name: "Mrs Pam Cameron",
    party: "Democratic Unionist Party",
    constituency: "South Antrim",
    phone: "02890 34 2234",
    office: "12A BEVERLEY ROAD, BALLYDUFF, NEWTOWNABBEY, BT36 6QD",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=P+Cameron",
    email: "pam.cameron@mla.niassembly.gov.uk",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/pam-cameron/"
  },
  {
    id: 21,
    name: "Mr Gerry Carroll",
    party: "People Before Profit Alliance",
    constituency: "West Belfast",
    phone: "02890 23 1628",
    office: "208 FALLS ROAD, TOWN PARKS, BELFAST, BT12 6AH",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=G+Carroll",
    email: "gerry.carroll@mla.niassembly.gov.uk",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/gerry-carroll/"
  },
  {
    id: 22,
    name: "Mr Alan Chambers",
    party: "Ulster Unionist Party",
    constituency: "North Down",
    phone: "02891 47 7555",
    office: "1a DONAGHADEE ROAD, GROOMSPORT, BT19 6LG",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=A+Chambers",
    email: "alan.chambers@mla.niassembly.gov.uk",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/alan-chambers/"
  },
  {
    id: 23,
    name: "Mr Trevor Clarke",
    party: "Democratic Unionist Party",
    constituency: "South Antrim",
    phone: "028 9446 3273",
    office: "1 RAILWAY STREET, TOWNS PARKS, ANTRIM, BT41 4AE",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=T+Clarke",
    email: "trevor.clarke@mla.niassembly.gov.uk",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/trevor-clarke/"
  },
  {
    id: 24,
    name: "Mr Colin Crawford",
    party: "Ulster Unionist Party",
    constituency: "North Antrim",
    office: "76 Church Street, Town Parks, Ballymena, BT43 6DF",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=C+Crawford",
    email: "colin.crawford@mla.niassembly.gov.uk",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/colin-crawford/"
  },
  {
    id: 25,
    name: "Mr Pádraig Delargy",
    party: "Sinn Féin",
    constituency: "Foyle",
    office: "18 Bishop Street, Derry / Londonderry, BT48 6UX",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=P+Delargy",
    email: "padraig.delargy@mla.niassembly.gov.uk",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/padraig-delargy/"
  },
  {
    id: 26,
    name: "Mr Stewart Dickson",
    party: "Alliance Party",
    constituency: "East Antrim",
    phone: "028 9335 0286",
    office: "8 WEST STREET, CARRICKFERGUS, BT38 7AR",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=S+Dickson",
    email: "stewart.dickson@mla.niassembly.gov.uk",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/stewart-dickson/"
  },
  {
    id: 27,
    name: "Mrs Linda Dillon",
    party: "Sinn Féin",
    constituency: "Mid Ulster",
    phone: "028 8774 8689",
    office: "7-9 The Square, Gortnaskea, Coalisland, BT71 4LN",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=L+Dillon",
    email: "linda.dillon@mla.niassembly.gov.uk",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/linda-dillon/"
  },
  {
    id: 28,
    name: "Mrs Diane Dodds",
    party: "Democratic Unionist Party",
    constituency: "Upper Bann",
    phone: "02840 520048",
    office: "27 BRIDGE STREET, BALLYVALLY, BANBRIDGE, BT32 3JL",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=D+Dodds",
    email: "diane.dodds@mla.niassembly.gov.uk",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/diane-dodds/"
  },
  {
    id: 29,
    name: "Miss Jemma Dolan",
    party: "Sinn Féin",
    constituency: "Fermanagh and South Tyrone",
    phone: "028 6632 8214",
    office: "7 MARKET STREET, ENNISKILLEN, BT74 7DS",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=J+Dolan",
    email: "jemma.dolan@mla.niassembly.gov.uk",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/jemma-dolan/"
  },
  {
    id: 30,
    name: "Mr Danny Donnelly",
    party: "Alliance Party",
    constituency: "East Antrim",
    office: "73 Main Street, Town Parks, Larne, BT40 1HH",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=D+Donnelly",
    email: "danny.donnelly@mla.niassembly.gov.uk",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/danny-donnelly/"
  },
  {
    id: 31,
    name: "Mr Stephen Dunne",
    party: "Democratic Unionist Party",
    constituency: "North Down",
    phone: "02891 245 277",
    office: "86 High Street, Corporation, Bangor, BT20 5BA",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=S+Dunne",
    email: "stephen.dunne@mla.niassembly.gov.uk",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/stephen-dunne/"
  },
  {
    id: 32,
    name: "Mr Mark Durkan",
    party: "Social Democratic and Labour Party",
    constituency: "Foyle",
    phone: "028 7136 5516",
    office: "141H Strand Road, Rock Mills, Edenballymore, Derry, BT48 7PB",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=M+Durkan",
    email: "mark.durkan@mla.niassembly.gov.uk",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/mark-durkan/"
  },
  {
    id: 33,
    name: "Ms Connie Egan",
    party: "Alliance Party",
    constituency: "North Down",
    phone: "028 9189 8170",
    office: "12 HAMILTON ROAD, CORPORATION, BANGOR, BT20 4LE",
    image: "https://placehold.co/400x500/d1d5db/6b7280?text=C+Egan",
    email: "connie.egan@mla.niassembly.gov.uk",
    profileUrl: "https://www.niassembly.gov.uk/your-mlas/connie-egan/"
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
                    {mla.email && (
                      <div className="flex items-start">
                        <Mail className="mr-3 h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                        <a 
                          href={`mailto:${mla.email}`} 
                          className="text-sm text-primary hover:underline overflow-hidden text-ellipsis"
                        >
                          {mla.email}
                        </a>
                      </div>
                    )}
                    {mla.phone && (
                      <div className="flex items-start">
                        <Phone className="mr-3 h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                        <a href={`tel:${mla.phone}`} className="text-sm hover:underline">
                          {mla.phone}
                        </a>
                      </div>
                    )}
                    <div className="flex items-start">
                      <MapPin className="mr-3 h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <span className="text-sm">{mla.office}</span>
                    </div>
                    {mla.profileUrl && (
                      <a 
                        href={mla.profileUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full mt-4 block"
                      >
                        <Button className="w-full" variant="outline">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Profile
                        </Button>
                      </a>
                    )}
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
