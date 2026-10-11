export interface ContemporaryLeader {
  name: string;
  roleOrTitle: string;
  years: string;
  notes?: string;
}

export interface PresidentTenureHighlight {
  presidentId: number;
  presidentName: string;
  termYears: string;
  keyEvents: string[];
  ukMonarchs: ContemporaryLeader[];
  ukPrimeMinisters: ContemporaryLeader[];
  frenchRulers: ContemporaryLeader[];
}

export const presidentsTenureHighlights: Record<number, PresidentTenureHighlight> = {
  1: {
    presidentId: 1,
    presidentName: "George Washington",
    termYears: "1789–1797",
    keyEvents: [
      "Established executive branch departments and created the Presidential Cabinet",
      "Ratification of the Bill of Rights (1791) and founding of the First Bank of the United States",
      "Suppressed the Whiskey Rebellion (1794), establishing federal enforcement power",
      "Proclamation of Neutrality (1793) & Jay Treaty (1795) avoiding foreign war"
    ],
    ukMonarchs: [
      { name: "George III", roleOrTitle: "King of Great Britain & Ireland", years: "1760–1820", notes: "House of Hanover" }
    ],
    ukPrimeMinisters: [
      { name: "William Pitt the Younger", roleOrTitle: "Prime Minister of Great Britain", years: "1783–1801", notes: "Tory" }
    ],
    frenchRulers: [
      { name: "Louis XVI", roleOrTitle: "King of France / King of the French", years: "1774–1792", notes: "Executed Jan 1793" },
      { name: "National Convention", roleOrTitle: "French First Republic (Reign of Terror)", years: "1792–1795", notes: "Robespierre & Committee of Public Safety" },
      { name: "The French Directory", roleOrTitle: "Executive Directory (Directoire)", years: "1795–1799", notes: "Five-member executive council" }
    ]
  },
  2: {
    presidentId: 2,
    presidentName: "John Adams",
    termYears: "1797–1801",
    keyEvents: [
      "Quasi-War naval confrontation with Revolutionary France (1798–1800)",
      "XYZ Affair diplomatic crisis resulting in patriotic defense buildup",
      "Passage of the contentious Alien and Sedition Acts (1798)",
      "Established the Department of the Navy and peaceful relocation to Washington, D.C."
    ],
    ukMonarchs: [
      { name: "George III", roleOrTitle: "King of Great Britain & Ireland", years: "1760–1820" }
    ],
    ukPrimeMinisters: [
      { name: "William Pitt the Younger", roleOrTitle: "Prime Minister of Great Britain", years: "1783–1801" },
      { name: "Henry Addington", roleOrTitle: "Prime Minister of the United Kingdom", years: "1801–1804", notes: "Tory (Acts of Union 1800)" }
    ],
    frenchRulers: [
      { name: "The French Directory", roleOrTitle: "Executive Directory", years: "1795–1799", notes: "Overthrown in Coup of 18 Brumaire" },
      { name: "Napoleon Bonaparte", roleOrTitle: "First Consul of the French Republic", years: "1799–1804", notes: "French Consulate period" }
    ]
  },
  3: {
    presidentId: 3,
    presidentName: "Thomas Jefferson",
    termYears: "1801–1809",
    keyEvents: [
      "Louisiana Purchase (1803) doubling U.S. land area from Napoleonic France for $15M",
      "Commissioned the Lewis and Clark Expedition (1804–1806) to chart the Pacific Northwest",
      "First Barbary War (1801–1805) protecting American shipping against Mediterranean corsairs",
      "Embargo Act of 1807 responding to British and French maritime blockades"
    ],
    ukMonarchs: [
      { name: "George III", roleOrTitle: "King of the United Kingdom", years: "1760–1820" }
    ],
    ukPrimeMinisters: [
      { name: "Henry Addington", roleOrTitle: "Prime Minister", years: "1801–1804" },
      { name: "William Pitt the Younger", roleOrTitle: "Prime Minister", years: "1804–1806" },
      { name: "Lord Grenville", roleOrTitle: "Prime Minister (Ministry of All the Talents)", years: "1806–1807", notes: "Abolished transatlantic slave trade" },
      { name: "Duke of Portland", roleOrTitle: "Prime Minister", years: "1807–1809" }
    ],
    frenchRulers: [
      { name: "Napoleon Bonaparte", roleOrTitle: "First Consul (1799–1804) / Emperor of the French (Napoleon I)", years: "1804–1814", notes: "Sold Louisiana Territory; First French Empire" }
    ]
  },
  4: {
    presidentId: 4,
    presidentName: "James Madison",
    termYears: "1809–1817",
    keyEvents: [
      "War of 1812 against Great Britain defending American maritime sovereignty",
      "Burning of Washington (1814) and heroic defense of Fort McHenry inspiring national anthem",
      "Treaty of Ghent (1814) concluding the war on status quo ante bellum terms",
      "Chartered the Second Bank of the United States (1816) and established tariff protection"
    ],
    ukMonarchs: [
      { name: "George III", roleOrTitle: "King of the United Kingdom", years: "1760–1820", notes: "Regency of Prince of Wales from 1811" }
    ],
    ukPrimeMinisters: [
      { name: "Duke of Portland", roleOrTitle: "Prime Minister", years: "1807–1809" },
      { name: "Spencer Perceval", roleOrTitle: "Prime Minister", years: "1809–1812", notes: "Only British PM assassinated in office" },
      { name: "Lord Liverpool", roleOrTitle: "Prime Minister", years: "1812–1827", notes: "Tory; oversaw defeat of Napoleon and War of 1812" }
    ],
    frenchRulers: [
      { name: "Napoleon I", roleOrTitle: "Emperor of the French", years: "1804–1814, 1815 (Hundred Days)", notes: "Defeated at Waterloo (1815)" },
      { name: "Louis XVIII", roleOrTitle: "King of France", years: "1814–1815, 1815–1824", notes: "Bourbon Restoration" }
    ]
  },
  5: {
    presidentId: 5,
    presidentName: "James Monroe",
    termYears: "1817–1825",
    keyEvents: [
      "Promulgated the Monroe Doctrine (1823) warning European powers against Western Hemisphere colonization",
      "Missouri Compromise of 1820 regulating slavery expansion in western territories",
      "Adams-Onís Treaty (1819) acquiring Spanish Florida and defining western border",
      "Presided over the bipartisan 'Era of Good Feelings'"
    ],
    ukMonarchs: [
      { name: "George III", roleOrTitle: "King of the United Kingdom", years: "1760–1820" },
      { name: "George IV", roleOrTitle: "King of the United Kingdom", years: "1820–1830", notes: "Prince Regent 1811–1820" }
    ],
    ukPrimeMinisters: [
      { name: "Lord Liverpool", roleOrTitle: "Prime Minister", years: "1812–1827", notes: "Tory" }
    ],
    frenchRulers: [
      { name: "Louis XVIII", roleOrTitle: "King of France", years: "1815–1824", notes: "Bourbon Restoration" },
      { name: "Charles X", roleOrTitle: "King of France", years: "1824–1830", notes: "Ultra-royalist Bourbon monarch" }
    ]
  },
  6: {
    presidentId: 6,
    presidentName: "John Quincy Adams",
    termYears: "1825–1829",
    keyEvents: [
      "Championed the 'American System' of federally funded canals, turnpikes, and national universities",
      "Enacted the protective Tariff of 1828 ('Tariff of Abominations')",
      "Oversaw grand opening and rapid economic boom of the Erie Canal (1825)",
      "Advanced scientific institutions and astronomical observatories"
    ],
    ukMonarchs: [
      { name: "George IV", roleOrTitle: "King of the United Kingdom", years: "1820–1830" }
    ],
    ukPrimeMinisters: [
      { name: "Lord Liverpool", roleOrTitle: "Prime Minister", years: "1812–1827" },
      { name: "George Canning", roleOrTitle: "Prime Minister", years: "1827", notes: "Served 119 days" },
      { name: "Lord Goderich", roleOrTitle: "Prime Minister", years: "1827–1828" },
      { name: "Duke of Wellington", roleOrTitle: "Prime Minister", years: "1828–1830", notes: "Tory; hero of Waterloo" }
    ],
    frenchRulers: [
      { name: "Charles X", roleOrTitle: "King of France", years: "1824–1830", notes: "Bourbon Restoration" }
    ]
  },
  7: {
    presidentId: 7,
    presidentName: "Andrew Jackson",
    termYears: "1829–1837",
    keyEvents: [
      "Stared down South Carolina in the Nullification Crisis (1832–1833), preserving federal union",
      "Waged the 'Bank War' against the Second Bank of the United States and fully paid off national debt",
      "Signed the Indian Removal Act (1830) enforcing forced relocation along the Trail of Tears",
      "Expanded Jacksonian democracy and universal white male suffrage"
    ],
    ukMonarchs: [
      { name: "George IV", roleOrTitle: "King of the United Kingdom", years: "1820–1830" },
      { name: "William IV", roleOrTitle: "King of the United Kingdom", years: "1830–1837", notes: "The Sailor King; Reform Act 1832" }
    ],
    ukPrimeMinisters: [
      { name: "Duke of Wellington", roleOrTitle: "Prime Minister", years: "1828–1830, 1834" },
      { name: "Earl Grey", roleOrTitle: "Prime Minister", years: "1830–1834", notes: "Whig; Reform Act 1832 & Slavery Abolition Act 1833" },
      { name: "Lord Melbourne", roleOrTitle: "Prime Minister", years: "1834, 1835–1841", notes: "Whig" },
      { name: "Sir Robert Peel", roleOrTitle: "Prime Minister", years: "1834–1835", notes: "Founder of modern Conservative Party" }
    ],
    frenchRulers: [
      { name: "Charles X", roleOrTitle: "King of France", years: "1824–1830", notes: "Overthrown in July Revolution 1830" },
      { name: "Louis-Philippe I", roleOrTitle: "King of the French ('Citizen King')", years: "1830–1848", notes: "July Monarchy (House of Orléans)" }
    ]
  },
  8: {
    presidentId: 8,
    presidentName: "Martin Van Buren",
    termYears: "1837–1841",
    keyEvents: [
      "Navigated the catastrophic economic depression of the Panic of 1837",
      "Established the Independent Treasury System divorcing government funds from private banks",
      "Enforced the Cherokee Trail of Tears and resolved border disputes in the bloodless Aroostook War",
      "Resisted annexation of the Republic of Texas to avert sectional slavery conflict"
    ],
    ukMonarchs: [
      { name: "William IV", roleOrTitle: "King of the United Kingdom", years: "1830–1837" },
      { name: "Queen Victoria", roleOrTitle: "Queen of the United Kingdom", years: "1837–1901", notes: "Beginning of the Victorian Era" }
    ],
    ukPrimeMinisters: [
      { name: "Lord Melbourne", roleOrTitle: "Prime Minister", years: "1835–1841", notes: "Whig; mentor to young Queen Victoria" }
    ],
    frenchRulers: [
      { name: "Louis-Philippe I", roleOrTitle: "King of the French", years: "1830–1848", notes: "July Monarchy (Prime Minister François Guizot)" }
    ]
  },
  9: {
    presidentId: 9,
    presidentName: "William Henry Harrison",
    termYears: "1841",
    keyEvents: [
      "Delivered longest inaugural address (8,445 words) in freezing rain",
      "Contracted pneumonia and died after just 31 days in office",
      "First U.S. President to die in office, sparking constitutional succession debate"
    ],
    ukMonarchs: [
      { name: "Queen Victoria", roleOrTitle: "Queen of the United Kingdom", years: "1837–1901" }
    ],
    ukPrimeMinisters: [
      { name: "Lord Melbourne", roleOrTitle: "Prime Minister", years: "1835–1841" }
    ],
    frenchRulers: [
      { name: "Louis-Philippe I", roleOrTitle: "King of the French", years: "1830–1848" }
    ]
  },
  10: {
    presidentId: 10,
    presidentName: "John Tyler",
    termYears: "1841–1845",
    keyEvents: [
      "Established the vital 'Tyler Precedent' confirming VP fully assumes presidential office upon death",
      "Signed the Joint Resolution annexing the Republic of Texas (1845)",
      "Webster-Ashburton Treaty (1842) resolving U.S.–Canadian boundary",
      "Treaty of Wanghia (1844) opening initial diplomatic and trade relations with Qing Dynasty China"
    ],
    ukMonarchs: [
      { name: "Queen Victoria", roleOrTitle: "Queen of the United Kingdom", years: "1837–1901" }
    ],
    ukPrimeMinisters: [
      { name: "Lord Melbourne", roleOrTitle: "Prime Minister", years: "1835–1841" },
      { name: "Sir Robert Peel", roleOrTitle: "Prime Minister", years: "1841–1846", notes: "Conservative; repealed Corn Laws" }
    ],
    frenchRulers: [
      { name: "Louis-Philippe I", roleOrTitle: "King of the French", years: "1830–1848" }
    ]
  },
  11: {
    presidentId: 11,
    presidentName: "James K. Polk",
    termYears: "1845–1849",
    keyEvents: [
      "Led victory in Mexican-American War (1846–1848) acquiring California and the Southwest",
      "Negotiated Oregon Treaty (1846) with Britain establishing 49th parallel border to the Pacific",
      "Reduced tariffs via Walker Tariff and re-established Independent Treasury",
      "Achieved all stated presidential campaign objectives in a single energetic term"
    ],
    ukMonarchs: [
      { name: "Queen Victoria", roleOrTitle: "Queen of the United Kingdom", years: "1837–1901" }
    ],
    ukPrimeMinisters: [
      { name: "Sir Robert Peel", roleOrTitle: "Prime Minister", years: "1841–1846" },
      { name: "Lord John Russell", roleOrTitle: "Prime Minister", years: "1846–1852", notes: "Whig; Irish Potato Famine response" }
    ],
    frenchRulers: [
      { name: "Louis-Philippe I", roleOrTitle: "King of the French", years: "1830–1848", notes: "Abdicated in February Revolution 1848" },
      { name: "French Second Republic (Provisional Govt)", roleOrTitle: "Second Republic", years: "1848" },
      { name: "Louis-Napoléon Bonaparte", roleOrTitle: "President of the French Republic", years: "1848–1852", notes: "Elected Dec 1848; nephew of Napoleon I" }
    ]
  },
  12: {
    presidentId: 12,
    presidentName: "Zachary Taylor",
    termYears: "1849–1850",
    keyEvents: [
      "Opposed expansion of slavery into new territories despite being a Louisiana slaveholder",
      "Encouraged immediate admission of California and New Mexico as free states",
      "Clayton-Bulwer Treaty (1850) with Britain ensuring neutral Central American canal route",
      "Died suddenly in July 1850 from acute gastroenteritis following Fourth of July celebrations"
    ],
    ukMonarchs: [
      { name: "Queen Victoria", roleOrTitle: "Queen of the United Kingdom", years: "1837–1901" }
    ],
    ukPrimeMinisters: [
      { name: "Lord John Russell", roleOrTitle: "Prime Minister", years: "1846–1852" }
    ],
    frenchRulers: [
      { name: "Louis-Napoléon Bonaparte", roleOrTitle: "President of the French Republic", years: "1848–1852" }
    ]
  },
  13: {
    presidentId: 13,
    presidentName: "Millard Fillmore",
    termYears: "1850–1853",
    keyEvents: [
      "Signed the landmark Compromise of 1850 into law, including controversial Fugitive Slave Act",
      "Admitted California as the 31st state (free state)",
      "Dispatched Commodore Matthew Perry's naval expedition to open feudal Japan to world trade",
      "Last president affiliated with the Whig Party"
    ],
    ukMonarchs: [
      { name: "Queen Victoria", roleOrTitle: "Queen of the United Kingdom", years: "1837–1901" }
    ],
    ukPrimeMinisters: [
      { name: "Lord John Russell", roleOrTitle: "Prime Minister", years: "1846–1852" },
      { name: "Earl of Derby", roleOrTitle: "Prime Minister", years: "1852", notes: "Conservative" },
      { name: "Earl of Aberdeen", roleOrTitle: "Prime Minister (Peelite coalition)", years: "1852–1855" }
    ],
    frenchRulers: [
      { name: "Louis-Napoléon Bonaparte / Napoleon III", roleOrTitle: "President (1848–52) / Emperor of the French", years: "1852–1870", notes: "Staged coup Dec 1851; proclaimed Second French Empire Dec 1852" }
    ]
  },
  14: {
    presidentId: 14,
    presidentName: "Franklin Pierce",
    termYears: "1853–1857",
    keyEvents: [
      "Signed Kansas-Nebraska Act of 1854 repealing Missouri Compromise and igniting 'Bleeding Kansas'",
      "Completed Gadsden Purchase (1853) acquiring southern Arizona and New Mexico for transcontinental rail",
      "Ratified Treaty of Kanagawa with Japan (1854)",
      "Disavowed Ostend Manifesto recommending acquisition of Spanish Cuba"
    ],
    ukMonarchs: [
      { name: "Queen Victoria", roleOrTitle: "Queen of the United Kingdom", years: "1837–1901" }
    ],
    ukPrimeMinisters: [
      { name: "Earl of Aberdeen", roleOrTitle: "Prime Minister", years: "1852–1855", notes: "Entered Crimean War" },
      { name: "Lord Palmerston", roleOrTitle: "Prime Minister", years: "1855–1858", notes: "Whig / Liberal" }
    ],
    frenchRulers: [
      { name: "Napoleon III", roleOrTitle: "Emperor of the French", years: "1852–1870", notes: "Second French Empire; Crimean War ally of Britain" }
    ]
  },
  15: {
    presidentId: 15,
    presidentName: "James Buchanan",
    termYears: "1857–1861",
    keyEvents: [
      "Endorsed Supreme Court Dred Scott decision (1857) denying citizenship to African Americans",
      "Failed to halt Southern secession crisis following Lincoln's election in 1860",
      "Navigated Panic of 1857 and territorial conflict in Utah War",
      "Observed seven Deep South states secede to form the Confederacy prior to leaving office"
    ],
    ukMonarchs: [
      { name: "Queen Victoria", roleOrTitle: "Queen of the United Kingdom", years: "1837–1901", notes: "Indian Rebellion of 1857; Crown rule instituted" }
    ],
    ukPrimeMinisters: [
      { name: "Lord Palmerston", roleOrTitle: "Prime Minister", years: "1855–1858, 1859–1865" },
      { name: "Earl of Derby", roleOrTitle: "Prime Minister", years: "1858–1859" }
    ],
    frenchRulers: [
      { name: "Napoleon III", roleOrTitle: "Emperor of the French", years: "1852–1870", notes: "Second Empire; Haussmann renovation of Paris" }
    ]
  },
  16: {
    presidentId: 16,
    presidentName: "Abraham Lincoln",
    termYears: "1861–1865",
    keyEvents: [
      "Preserved the American Union through four grueling years of Civil War",
      "Issued Emancipation Proclamation (1863) freeing slaves in rebellious states",
      "Delivered Gettysburg Address (1863) redefining democratic purpose and equality",
      "Enacted Homestead Act, Morrill Land-Grant Act, and championed 13th Amendment abolishing slavery"
    ],
    ukMonarchs: [
      { name: "Queen Victoria", roleOrTitle: "Queen of the United Kingdom", years: "1837–1901", notes: "Maintained official British neutrality in Civil War" }
    ],
    ukPrimeMinisters: [
      { name: "Lord Palmerston", roleOrTitle: "Prime Minister", years: "1859–1865", notes: "Liberal; managed Trent Affair crisis" }
    ],
    frenchRulers: [
      { name: "Napoleon III", roleOrTitle: "Emperor of the French", years: "1852–1870", notes: "Invaded Mexico install Archduke Maximilian (violation of Monroe Doctrine)" }
    ]
  },
  17: {
    presidentId: 17,
    presidentName: "Andrew Johnson",
    termYears: "1865–1869",
    keyEvents: [
      "Oversaw early Presidential Reconstruction clashing with Radical Republicans over freedmen's civil rights",
      "First U.S. President impeached by the House; acquitted by one vote in the Senate (1868)",
      "Secretary of State Seward negotiated Alaska Purchase ('Seward's Folly') from Russia for $7.2M (1867)",
      "Ratification of 14th Amendment granting birthright citizenship and equal protection"
    ],
    ukMonarchs: [
      { name: "Queen Victoria", roleOrTitle: "Queen of the United Kingdom", years: "1837–1901" }
    ],
    ukPrimeMinisters: [
      { name: "Lord Palmerston", roleOrTitle: "Prime Minister", years: "1859–1865" },
      { name: "Earl Russell", roleOrTitle: "Prime Minister", years: "1865–1866" },
      { name: "Earl of Derby", roleOrTitle: "Prime Minister", years: "1866–1868", notes: "Second Reform Act 1867" },
      { name: "Benjamin Disraeli", roleOrTitle: "Prime Minister", years: "1868", notes: "Conservative" },
      { name: "William Ewart Gladstone", roleOrTitle: "Prime Minister", years: "1868–1874", notes: "Liberal" }
    ],
    frenchRulers: [
      { name: "Napoleon III", roleOrTitle: "Emperor of the French", years: "1852–1870", notes: "Forced to withdraw French forces from Mexico under U.S. diplomatic pressure" }
    ]
  },
  18: {
    presidentId: 18,
    presidentName: "Ulysses S. Grant",
    termYears: "1869–1877",
    keyEvents: [
      "Dismantled first Ku Klux Klan through Enforcement Acts and Department of Justice creation",
      "Ratification of 15th Amendment protecting voting rights regardless of race",
      "Signed Civil Rights Act of 1875 and established Yellowstone as world's first National Park (1872)",
      "Treaty of Washington (1871) peacefully resolving Alabama Claims arbitration with Britain"
    ],
    ukMonarchs: [
      { name: "Queen Victoria", roleOrTitle: "Queen of the United Kingdom & Empress of India", years: "1837–1901", notes: "Empress of India title created 1876" }
    ],
    ukPrimeMinisters: [
      { name: "William Ewart Gladstone", roleOrTitle: "Prime Minister", years: "1868–1874" },
      { name: "Benjamin Disraeli", roleOrTitle: "Prime Minister", years: "1874–1880", notes: "Conservative; purchased Suez Canal shares" }
    ],
    frenchRulers: [
      { name: "Napoleon III", roleOrTitle: "Emperor of the French", years: "1852–1870", notes: "Captured at Battle of Sedan in Franco-Prussian War; deposed" },
      { name: "Government of National Defense", roleOrTitle: "Provisional French Republic", years: "1870–1871", notes: "Siege of Paris & Paris Commune" },
      { name: "Adolphe Thiers", roleOrTitle: "President of the French Republic", years: "1871–1873", notes: "French Third Republic founded" },
      { name: "Patrice de MacMahon", roleOrTitle: "President of the French Republic", years: "1873–1879", notes: "Marshal of France; Third Republic consolidation" }
    ]
  },
  19: {
    presidentId: 19,
    presidentName: "Rutherford B. Hayes",
    termYears: "1877–1881",
    keyEvents: [
      "Ended military Reconstruction in the South via Compromise of 1877",
      "Initiated federal civil service reform defying Republican party machine bosses",
      "Restored gold standard backing for U.S. currency with Specie Payment Resumption",
      "Suppressed Great Railroad Strike of 1877 using federal troops"
    ],
    ukMonarchs: [
      { name: "Queen Victoria", roleOrTitle: "Queen of the United Kingdom & Empress of India", years: "1837–1901" }
    ],
    ukPrimeMinisters: [
      { name: "Benjamin Disraeli", roleOrTitle: "Prime Minister", years: "1874–1880" },
      { name: "William Ewart Gladstone", roleOrTitle: "Prime Minister", years: "1880–1885" }
    ],
    frenchRulers: [
      { name: "Patrice de MacMahon", roleOrTitle: "President of the French Republic", years: "1873–1879" },
      { name: "Jules Grévy", roleOrTitle: "President of the French Republic", years: "1879–1887", notes: "Third Republic" }
    ]
  },
  20: {
    presidentId: 20,
    presidentName: "James A. Garfield",
    termYears: "1881",
    keyEvents: [
      "Challenged New York political machine boss Roscoe Conkling over federal patronage",
      "Shot by disgruntled office-seeker Charles Guiteau on July 2, 1881",
      "Died on September 19, 1881 after 200 days in office; tragedy catalyzed civil service merit reform"
    ],
    ukMonarchs: [
      { name: "Queen Victoria", roleOrTitle: "Queen of the United Kingdom & Empress of India", years: "1837–1901" }
    ],
    ukPrimeMinisters: [
      { name: "William Ewart Gladstone", roleOrTitle: "Prime Minister", years: "1880–1885" }
    ],
    frenchRulers: [
      { name: "Jules Grévy", roleOrTitle: "President of the French Republic", years: "1879–1887" }
    ]
  },
  21: {
    presidentId: 21,
    presidentName: "Chester A. Arthur",
    termYears: "1881–1885",
    keyEvents: [
      "Signed landmark Pendleton Civil Service Act of 1883 establishing merit-based federal civil service",
      "Modernized the U.S. Navy commissioning its first steel-hulled warships ('New Navy')",
      "Signed Chinese Exclusion Act of 1882 following intense congressional debate",
      "Upheld administrative integrity defying former Stalwart patronage allies"
    ],
    ukMonarchs: [
      { name: "Queen Victoria", roleOrTitle: "Queen of the United Kingdom & Empress of India", years: "1837–1901" }
    ],
    ukPrimeMinisters: [
      { name: "William Ewart Gladstone", roleOrTitle: "Prime Minister", years: "1880–1885" }
    ],
    frenchRulers: [
      { name: "Jules Grévy", roleOrTitle: "President of the French Republic", years: "1879–1887" }
    ]
  },
  22: {
    presidentId: 22,
    presidentName: "Grover Cleveland",
    termYears: "1885–1889",
    keyEvents: [
      "Created Interstate Commerce Commission (ICC, 1887) establishing federal railway regulation",
      "Dedicated the Statue of Liberty in New York Harbor (1886), gift of the French Republic",
      "Signed Dawes Severalty Act of 1887",
      "Vetoed hundreds of fraudulent Civil War pension bills exercising vigorous executive restraint"
    ],
    ukMonarchs: [
      { name: "Queen Victoria", roleOrTitle: "Queen of the United Kingdom & Empress of India", years: "1837–1901", notes: "Golden Jubilee (1887)" }
    ],
    ukPrimeMinisters: [
      { name: "William Ewart Gladstone", roleOrTitle: "Prime Minister", years: "1880–1885, 1886" },
      { name: "Marquess of Salisbury", roleOrTitle: "Prime Minister", years: "1885–1886, 1886–1892", notes: "Conservative" }
    ],
    frenchRulers: [
      { name: "Jules Grévy", roleOrTitle: "President of the French Republic", years: "1879–1887" },
      { name: "Sadi Carnot", roleOrTitle: "President of the French Republic", years: "1887–1894", notes: "Presided over Paris Exposition 1889 (Eiffel Tower)" }
    ]
  },
  23: {
    presidentId: 23,
    presidentName: "Benjamin Harrison",
    termYears: "1889–1893",
    keyEvents: [
      "Signed landmark Sherman Antitrust Act of 1890 outlawing business monopolies",
      "Signed McKinley Tariff of 1890 and Sherman Silver Purchase Act",
      "Admitted six new states (ND, SD, MT, WA, ID, WY) into the Union, most of any president",
      "Created first national forest reserves under the Forest Reserve Act of 1891"
    ],
    ukMonarchs: [
      { name: "Queen Victoria", roleOrTitle: "Queen of the United Kingdom & Empress of India", years: "1837–1901" }
    ],
    ukPrimeMinisters: [
      { name: "Marquess of Salisbury", roleOrTitle: "Prime Minister", years: "1886–1892" },
      { name: "William Ewart Gladstone", roleOrTitle: "Prime Minister", years: "1892–1894", notes: "Fourth premiership; introduced Second Irish Home Rule Bill" }
    ],
    frenchRulers: [
      { name: "Sadi Carnot", roleOrTitle: "President of the French Republic", years: "1887–1894" }
    ]
  },
  24: {
    presidentId: 24,
    presidentName: "Grover Cleveland",
    termYears: "1893–1897",
    keyEvents: [
      "Only president to serve two non-consecutive terms until Donald Trump in 2024",
      "Navigated devastating Panic of 1893 and repealed Sherman Silver Purchase Act to defend gold reserves",
      "Dispatched federal troops to break the nationwide Pullman Railway Strike (1894)",
      "Enforced Monroe Doctrine in Venezuela boundary arbitration crisis against Great Britain"
    ],
    ukMonarchs: [
      { name: "Queen Victoria", roleOrTitle: "Queen of the United Kingdom & Empress of India", years: "1837–1901" }
    ],
    ukPrimeMinisters: [
      { name: "William Ewart Gladstone", roleOrTitle: "Prime Minister", years: "1892–1894" },
      { name: "Earl of Rosebery", roleOrTitle: "Prime Minister", years: "1894–1895", notes: "Liberal" },
      { name: "Marquess of Salisbury", roleOrTitle: "Prime Minister", years: "1895–1902" }
    ],
    frenchRulers: [
      { name: "Sadi Carnot", roleOrTitle: "President of the French Republic", years: "1887–1894", notes: "Assassinated by Italian anarchist June 1894" },
      { name: "Jean Casimir-Perier", roleOrTitle: "President of the French Republic", years: "1894–1895" },
      { name: "Félix Faure", roleOrTitle: "President of the French Republic", years: "1895–1899", notes: "Dreyfus affair crisis & Franco-Russian Alliance" }
    ]
  },
  25: {
    presidentId: 25,
    presidentName: "William McKinley",
    termYears: "1897–1901",
    keyEvents: [
      "Led victory in Spanish-American War (1898) elevating United States to global imperial power",
      "Acquired Puerto Rico, Guam, and the Philippines; annexed Hawaiian Islands (1898)",
      "Formulated 'Open Door' policy in China and sent expedition during Boxer Rebellion (1900)",
      "Signed Gold Standard Act of 1900; assassinated by Leon Czolgosz in Buffalo (Sept 1901)"
    ],
    ukMonarchs: [
      { name: "Queen Victoria", roleOrTitle: "Queen of the United Kingdom & Empress of India", years: "1837–1901", notes: "Diamond Jubilee (1897); died Jan 1901" },
      { name: "Edward VII", roleOrTitle: "King of the United Kingdom & Emperor of India", years: "1901–1910", notes: "House of Saxe-Coburg and Gotha; Edwardian Era" }
    ],
    ukPrimeMinisters: [
      { name: "Marquess of Salisbury", roleOrTitle: "Prime Minister", years: "1895–1902", notes: "Second Boer War" }
    ],
    frenchRulers: [
      { name: "Félix Faure", roleOrTitle: "President of the French Republic", years: "1895–1899" },
      { name: "Émile Loubet", roleOrTitle: "President of the French Republic", years: "1899–1906", notes: "Pardoned Alfred Dreyfus; signed Entente Cordiale 1904" }
    ]
  },
  26: {
    presidentId: 26,
    presidentName: "Theodore Roosevelt",
    termYears: "1901–1909",
    keyEvents: [
      "Championed progressive 'Square Deal' trust-busting against Northern Securities and Standard Oil",
      "Initiated construction of the Panama Canal and dispatched the 'Great White Fleet' world tour",
      "Awarded Nobel Peace Prize for negotiating Treaty of Portsmouth ending Russo-Japanese War (1905)",
      "Conserved 230 million acres of public land including 5 National Parks and 18 National Monuments"
    ],
    ukMonarchs: [
      { name: "Edward VII", roleOrTitle: "King of the United Kingdom & Emperor of India", years: "1901–1910" }
    ],
    ukPrimeMinisters: [
      { name: "Marquess of Salisbury", roleOrTitle: "Prime Minister", years: "1895–1902" },
      { name: "Arthur Balfour", roleOrTitle: "Prime Minister", years: "1902–1905", notes: "Conservative; Entente Cordiale" },
      { name: "Sir Henry Campbell-Bannerman", roleOrTitle: "Prime Minister", years: "1905–1908", notes: "Liberal landslide victory" },
      { name: "H. H. Asquith", roleOrTitle: "Prime Minister", years: "1908–1916", notes: "Liberal; welfare state foundations with Lloyd George" }
    ],
    frenchRulers: [
      { name: "Émile Loubet", roleOrTitle: "President of the French Republic", years: "1899–1906" },
      { name: "Armand Fallières", roleOrTitle: "President of the French Republic", years: "1906–1913", notes: "Georges Clemenceau served as Council President (PM) 1906–1909" }
    ]
  },
  27: {
    presidentId: 27,
    presidentName: "William Howard Taft",
    termYears: "1909–1913",
    keyEvents: [
      "Prosecuted over 90 antitrust suits, breaking up Standard Oil and American Tobacco",
      "Advanced 'Dollar Diplomacy' promoting U.S. commercial and financial interests in Latin America and East Asia",
      "Supported 16th (Income Tax) and 17th (Direct Senate Election) Constitutional Amendments",
      "Only person in American history to serve as both U.S. President and Chief Justice of Supreme Court"
    ],
    ukMonarchs: [
      { name: "Edward VII", roleOrTitle: "King of the United Kingdom & Emperor of India", years: "1901–1910" },
      { name: "George V", roleOrTitle: "King of the United Kingdom & Emperor of India", years: "1910–1936", notes: "House of Windsor (adopted 1917)" }
    ],
    ukPrimeMinisters: [
      { name: "H. H. Asquith", roleOrTitle: "Prime Minister", years: "1908–1916", notes: "Parliament Act 1911; sinking of Titanic 1912" }
    ],
    frenchRulers: [
      { name: "Armand Fallières", roleOrTitle: "President of the French Republic", years: "1906–1913" },
      { name: "Raymond Poincaré", roleOrTitle: "President of the French Republic", years: "1913–1920", notes: "Led France into World War I" }
    ]
  },
  28: {
    presidentId: 28,
    presidentName: "Woodrow Wilson",
    termYears: "1913–1921",
    keyEvents: [
      "Led U.S. entry into World War I (1917) and formulated 'Fourteen Points' peace blueprint",
      "Established Federal Reserve System (1913), Federal Trade Commission, and Clayton Antitrust Act",
      "Advocated creation of League of Nations at Paris Peace Conference (1919); awarded Nobel Peace Prize",
      "Ratification of 18th (Prohibition) and 19th (Women's Suffrage) Constitutional Amendments"
    ],
    ukMonarchs: [
      { name: "George V", roleOrTitle: "King of the United Kingdom & Emperor of India", years: "1910–1936", notes: "World War I monarch" }
    ],
    ukPrimeMinisters: [
      { name: "H. H. Asquith", roleOrTitle: "Prime Minister", years: "1908–1916" },
      { name: "David Lloyd George", roleOrTitle: "Prime Minister (Wartime Coalition)", years: "1916–1922", notes: "Liberal; 'Big Four' leader at Versailles" }
    ],
    frenchRulers: [
      { name: "Raymond Poincaré", roleOrTitle: "President of the French Republic", years: "1913–1920", notes: "Georges Clemenceau served as wartime Prime Minister 1917–1920" },
      { name: "Paul Deschanel", roleOrTitle: "President of the French Republic", years: "1920" },
      { name: "Alexandre Millerand", roleOrTitle: "President of the French Republic", years: "1920–1924" }
    ]
  },
  29: {
    presidentId: 29,
    presidentName: "Warren G. Harding",
    termYears: "1921–1923",
    keyEvents: [
      "Elected on landslide platform of 'Return to Normalcy' following World War I",
      "Convened Washington Naval Conference (1921–1922) resulting in historic naval arms limitation treaties",
      "Signed Budget and Accounting Act of 1921 creating Bureau of the Budget (now OMB)",
      "Presidency overshadowed by posthumous exposure of Teapot Dome bribery scandal"
    ],
    ukMonarchs: [
      { name: "George V", roleOrTitle: "King of the United Kingdom & Emperor of India", years: "1910–1936" }
    ],
    ukPrimeMinisters: [
      { name: "David Lloyd George", roleOrTitle: "Prime Minister", years: "1916–1922" },
      { name: "Bonar Law", roleOrTitle: "Prime Minister", years: "1922–1923", notes: "Conservative" },
      { name: "Stanley Baldwin", roleOrTitle: "Prime Minister", years: "1923–1924, 1924–1929, 1935–1937" }
    ],
    frenchRulers: [
      { name: "Alexandre Millerand", roleOrTitle: "President of the French Republic", years: "1920–1924", notes: "Occupation of the Ruhr (1923)" }
    ]
  },
  30: {
    presidentId: 30,
    presidentName: "Calvin Coolidge",
    termYears: "1923–1929",
    keyEvents: [
      "Presided over the economic boom of the 'Roaring Twenties' with low taxes and fiscal discipline",
      "Signed Indian Citizenship Act of 1924 granting citizenship to all Native Americans born in the U.S.",
      "Restored presidential dignity following scandals of the Harding administration",
      "Signed Kellogg-Briand Pact of 1928 renouncing war as an instrument of national policy"
    ],
    ukMonarchs: [
      { name: "George V", roleOrTitle: "King of the United Kingdom & Emperor of India", years: "1910–1936" }
    ],
    ukPrimeMinisters: [
      { name: "Stanley Baldwin", roleOrTitle: "Prime Minister", years: "1923–1924, 1924–1929" },
      { name: "Ramsay MacDonald", roleOrTitle: "Prime Minister", years: "1924", notes: "First Labour Prime Minister" }
    ],
    frenchRulers: [
      { name: "Alexandre Millerand", roleOrTitle: "President of the French Republic", years: "1920–1924" },
      { name: "Gaston Doumergue", roleOrTitle: "President of the French Republic", years: "1924–1931", notes: "Aristide Briand served as Foreign Minister / PM" }
    ]
  },
  31: {
    presidentId: 31,
    presidentName: "Herbert Hoover",
    termYears: "1929–1933",
    keyEvents: [
      "Faced onset of the Great Depression following Wall Street Crash of October 1929",
      "Created Reconstruction Finance Corporation (RFC) to extend emergency loans to businesses and banks",
      "Authorized construction of Hoover Dam on Colorado River, engineering marvel",
      "Signed Smoot-Hawley Tariff of 1930 which triggered international retaliatory trade collapse"
    ],
    ukMonarchs: [
      { name: "George V", roleOrTitle: "King of the United Kingdom & Emperor of India", years: "1910–1936" }
    ],
    ukPrimeMinisters: [
      { name: "Stanley Baldwin", roleOrTitle: "Prime Minister", years: "1924–1929" },
      { name: "Ramsay MacDonald", roleOrTitle: "Prime Minister (Labour / National Govt)", years: "1929–1935", notes: "Formed National Government coalition 1931" }
    ],
    frenchRulers: [
      { name: "Gaston Doumergue", roleOrTitle: "President of the French Republic", years: "1924–1931" },
      { name: "Paul Doumer", roleOrTitle: "President of the French Republic", years: "1931–1932", notes: "Assassinated May 1932" },
      { name: "Albert Lebrun", roleOrTitle: "President of the French Republic", years: "1932–1940", notes: "Last President of Third Republic" }
    ]
  },
  32: {
    presidentId: 32,
    presidentName: "Franklin D. Roosevelt",
    termYears: "1933–1945",
    keyEvents: [
      "Enacted sweeping 'New Deal' programs (Social Security, FDIC, SEC, TVA, WPA, Wagner Act)",
      "Led the United States through World War II as commander-in-chief alongside Allied powers",
      "Arsenal of Democracy and Lend-Lease policy before entry after Pearl Harbor (1941)",
      "Only president elected to four terms; laid architectural foundations for United Nations"
    ],
    ukMonarchs: [
      { name: "George V", roleOrTitle: "King of the United Kingdom & Emperor of India", years: "1910–1936" },
      { name: "Edward VIII", roleOrTitle: "King of the United Kingdom & Emperor of India", years: "1936", notes: "Abdicated Dec 1936" },
      { name: "George VI", roleOrTitle: "King of the United Kingdom & Emperor of India", years: "1936–1952", notes: "Wartime monarch; father of Elizabeth II" }
    ],
    ukPrimeMinisters: [
      { name: "Ramsay MacDonald", roleOrTitle: "Prime Minister", years: "1929–1935" },
      { name: "Stanley Baldwin", roleOrTitle: "Prime Minister", years: "1935–1937", notes: "Managed Abdication Crisis" },
      { name: "Neville Chamberlain", roleOrTitle: "Prime Minister", years: "1937–1940", notes: "Munich Agreement appeasement" },
      { name: "Winston Churchill", roleOrTitle: "Prime Minister (Wartime Coalition)", years: "1940–1945", notes: "Historic wartime partnership with FDR" }
    ],
    frenchRulers: [
      { name: "Albert Lebrun", roleOrTitle: "President of the French Republic", years: "1932–1940", notes: "Fall of France (June 1940)" },
      { name: "Philippe Pétain", roleOrTitle: "Chief of the French State (Vichy France)", years: "1940–1944", notes: "Collaborationist regime in southern France" },
      { name: "Charles de Gaulle", roleOrTitle: "Leader of Free France & Chairman of Provisional Govt", years: "1940–1946", notes: "Liberation of Paris August 1944" }
    ]
  },
  33: {
    presidentId: 33,
    presidentName: "Harry S. Truman",
    termYears: "1945–1953",
    keyEvents: [
      "Authorized atomic bomb use on Hiroshima and Nagasaki ending World War II (1945)",
      "Launched Marshall Plan to rebuild postwar Western Europe and Truman Doctrine containment",
      "Executive Order 9981 desegregating the United States Armed Forces (1948)",
      "Co-founded NATO alliance (1949) and committed U.S. forces to Korean War (1950–1953)"
    ],
    ukMonarchs: [
      { name: "George VI", roleOrTitle: "King of the United Kingdom & Emperor/Head of Commonwealth", years: "1936–1952" },
      { name: "Elizabeth II", roleOrTitle: "Queen of the United Kingdom & Head of the Commonwealth", years: "1952–2022", notes: "Acceded Feb 1952; reigned 70 years" }
    ],
    ukPrimeMinisters: [
      { name: "Winston Churchill", roleOrTitle: "Prime Minister", years: "1940–1945, 1951–1955" },
      { name: "Clement Attlee", roleOrTitle: "Prime Minister", years: "1945–1951", notes: "Labour; founded National Health Service (NHS)" }
    ],
    frenchRulers: [
      { name: "Charles de Gaulle", roleOrTitle: "President of the Provisional Government", years: "1944–1946" },
      { name: "Vincent Auriol", roleOrTitle: "President of the French Republic", years: "1947–1954", notes: "French Fourth Republic" }
    ]
  },
  34: {
    presidentId: 34,
    presidentName: "Dwight D. Eisenhower",
    termYears: "1953–1961",
    keyEvents: [
      "Negotiated armistice ending fighting in Korean War (1953)",
      "Created Interstate Highway System (1956), transforming national commerce and defense",
      "Deployed 101st Airborne to enforce school desegregation in Little Rock, Arkansas (1957)",
      "Created NASA and warned of the expanding 'military-industrial complex' in farewell address"
    ],
    ukMonarchs: [
      { name: "Elizabeth II", roleOrTitle: "Queen of the United Kingdom", years: "1952–2022", notes: "Coronation June 1953" }
    ],
    ukPrimeMinisters: [
      { name: "Sir Winston Churchill", roleOrTitle: "Prime Minister", years: "1951–1955" },
      { name: "Sir Anthony Eden", roleOrTitle: "Prime Minister", years: "1955–1957", notes: "Resigned after Suez Crisis 1956" },
      { name: "Harold Macmillan", roleOrTitle: "Prime Minister", years: "1957–1963", notes: "'Wind of Change' decolonization speech" }
    ],
    frenchRulers: [
      { name: "Vincent Auriol", roleOrTitle: "President of the French Republic", years: "1947–1954" },
      { name: "René Coty", roleOrTitle: "President of the French Republic", years: "1954–1959", notes: "Last President of Fourth Republic; Algerian Crisis" },
      { name: "Charles de Gaulle", roleOrTitle: "President of the French Republic", years: "1959–1969", notes: "Founded French Fifth Republic (1958)" }
    ]
  },
  35: {
    presidentId: 35,
    presidentName: "John F. Kennedy",
    termYears: "1961–1963",
    keyEvents: [
      "Resolved Cuban Missile Crisis (1962), navigating closest brink of nuclear war",
      "Launched Apollo space program with commitment to land a man on the Moon",
      "Founded Peace Corps and initiated Alliance for Progress in Latin America",
      "Proposed comprehensive Civil Rights Act; assassinated in Dallas on November 22, 1963"
    ],
    ukMonarchs: [
      { name: "Elizabeth II", roleOrTitle: "Queen of the United Kingdom", years: "1952–2022" }
    ],
    ukPrimeMinisters: [
      { name: "Harold Macmillan", roleOrTitle: "Prime Minister", years: "1957–1963" },
      { name: "Sir Alec Douglas-Home", roleOrTitle: "Prime Minister", years: "1963–1964", notes: "Conservative" }
    ],
    frenchRulers: [
      { name: "Charles de Gaulle", roleOrTitle: "President of the French Republic", years: "1959–1969", notes: "Fifth Republic; withdrew France from NATO integrated command" }
    ]
  },
  36: {
    presidentId: 36,
    presidentName: "Lyndon B. Johnson",
    termYears: "1963–1969",
    keyEvents: [
      "Passed landmark Civil Rights Act of 1964 and Voting Rights Act of 1965",
      "Enacted 'Great Society' domestic agenda (Medicare, Medicaid, Head Start, Clean Air Act)",
      "Immigration and Nationality Act of 1965 abolishing national origin quotas",
      "Deeply escalated American military involvement in the Vietnam War"
    ],
    ukMonarchs: [
      { name: "Elizabeth II", roleOrTitle: "Queen of the United Kingdom", years: "1952–2022" }
    ],
    ukPrimeMinisters: [
      { name: "Sir Alec Douglas-Home", roleOrTitle: "Prime Minister", years: "1963–1964" },
      { name: "Harold Wilson", roleOrTitle: "Prime Minister", years: "1964–1970, 1974–1976", notes: "Labour; modern social reform era" }
    ],
    frenchRulers: [
      { name: "Charles de Gaulle", roleOrTitle: "President of the French Republic", years: "1959–1969", notes: "May 1968 student/worker protests" }
    ]
  },
  37: {
    presidentId: 37,
    presidentName: "Richard Nixon",
    termYears: "1969–1974",
    keyEvents: [
      "Historic diplomatic breakthrough opening relations with People's Republic of China (1972)",
      "Pioneered détente and signed Anti-Ballistic Missile Treaty / SALT I with Soviet Union",
      "Created Environmental Protection Agency (EPA) and signed Clean Air Act of 1970 and Title IX",
      "Watergate scandal led to House impeachment proceedings and resignation on August 9, 1974"
    ],
    ukMonarchs: [
      { name: "Elizabeth II", roleOrTitle: "Queen of the United Kingdom", years: "1952–2022" }
    ],
    ukPrimeMinisters: [
      { name: "Harold Wilson", roleOrTitle: "Prime Minister", years: "1964–1970, 1974–1976" },
      { name: "Edward Heath", roleOrTitle: "Prime Minister", years: "1970–1974", notes: "Conservative; led UK into European Economic Community (1973)" }
    ],
    frenchRulers: [
      { name: "Charles de Gaulle", roleOrTitle: "President of the French Republic", years: "1959–1969", notes: "Resigned April 1969" },
      { name: "Georges Pompidou", roleOrTitle: "President of the French Republic", years: "1969–1974", notes: "Died in office April 1974" },
      { name: "Valéry Giscard d'Estaing", roleOrTitle: "President of the French Republic", years: "1974–1981", notes: "Center-right modernize agenda" }
    ]
  },
  38: {
    presidentId: 38,
    presidentName: "Gerald Ford",
    termYears: "1974–1977",
    keyEvents: [
      "Only person to serve as both VP and President without winning national election",
      "Granted full and unconditional presidential pardon to Richard Nixon",
      "Signed Helsinki Accords (1975) strengthening human rights guarantees in Soviet bloc",
      "Navigated end of American involvement in Vietnam with Fall of Saigon (1975)"
    ],
    ukMonarchs: [
      { name: "Elizabeth II", roleOrTitle: "Queen of the United Kingdom", years: "1952–2022" }
    ],
    ukPrimeMinisters: [
      { name: "Harold Wilson", roleOrTitle: "Prime Minister", years: "1974–1976" },
      { name: "James Callaghan", roleOrTitle: "Prime Minister", years: "1976–1979", notes: "Labour" }
    ],
    frenchRulers: [
      { name: "Valéry Giscard d'Estaing", roleOrTitle: "President of the French Republic", years: "1974–1981", notes: "Established G7 summit with Ford and Schmidt" }
    ]
  },
  39: {
    presidentId: 39,
    presidentName: "Jimmy Carter",
    termYears: "1977–1981",
    keyEvents: [
      "Brokered historic Camp David Accords (1978) peace treaty between Egypt and Israel",
      "Negotiated Torrijos-Carter Treaties returning control of Panama Canal to Panama",
      "Established Departments of Energy and Education; signed Airline Deregulation Act",
      "Oversaw response to 1979 Iranian Revolution, Iran hostage crisis, and Soviet invasion of Afghanistan"
    ],
    ukMonarchs: [
      { name: "Elizabeth II", roleOrTitle: "Queen of the United Kingdom", years: "1952–2022", notes: "Silver Jubilee (1977)" }
    ],
    ukPrimeMinisters: [
      { name: "James Callaghan", roleOrTitle: "Prime Minister", years: "1976–1979", notes: "Winter of Discontent" },
      { name: "Margaret Thatcher", roleOrTitle: "Prime Minister", years: "1979–1990", notes: "First female British Prime Minister; Conservative" }
    ],
    frenchRulers: [
      { name: "Valéry Giscard d'Estaing", roleOrTitle: "President of the French Republic", years: "1974–1981" }
    ]
  },
  40: {
    presidentId: 40,
    presidentName: "Ronald Reagan",
    termYears: "1981–1989",
    keyEvents: [
      "Enacted 'Reaganomics' tax cuts (Economic Recovery Tax Act 1981) and deregulation",
      "Negotiated INF Treaty (1987) with Soviet General Secretary Mikhail Gorbachev eliminating intermediate-range nuclear missiles",
      "Delivered Brandenburg Gate speech urging 'Mr. Gorbachev, tear down this wall!'",
      "Appointed Sandra Day O'Connor as first female Supreme Court Justice (1981)"
    ],
    ukMonarchs: [
      { name: "Elizabeth II", roleOrTitle: "Queen of the United Kingdom", years: "1952–2022" }
    ],
    ukPrimeMinisters: [
      { name: "Margaret Thatcher", roleOrTitle: "Prime Minister", years: "1979–1990", notes: "Strong ideological alliance with Reagan; Falklands War 1982" }
    ],
    frenchRulers: [
      { name: "Valéry Giscard d'Estaing", roleOrTitle: "President of the French Republic", years: "1974–1981" },
      { name: "François Mitterrand", roleOrTitle: "President of the French Republic", years: "1981–1995", notes: "First socialist President of Fifth Republic" }
    ]
  },
  41: {
    presidentId: 41,
    presidentName: "George H.W. Bush",
    termYears: "1989–1993",
    keyEvents: [
      "Skillfully managed peaceful conclusion of the Cold War and reunification of Germany",
      "Built international coalition liberating Kuwait in Operation Desert Storm / Gulf War (1991)",
      "Signed landmark Americans with Disabilities Act (ADA, 1990) and Clean Air Act Amendments",
      "Signed START I arms reduction treaty with USSR and negotiated NAFTA framework"
    ],
    ukMonarchs: [
      { name: "Elizabeth II", roleOrTitle: "Queen of the United Kingdom", years: "1952–2022" }
    ],
    ukPrimeMinisters: [
      { name: "Margaret Thatcher", roleOrTitle: "Prime Minister", years: "1979–1990", notes: "Resigned Nov 1990" },
      { name: "John Major", roleOrTitle: "Prime Minister", years: "1990–1997", notes: "Conservative; Gulf War ally; Maastricht Treaty" }
    ],
    frenchRulers: [
      { name: "François Mitterrand", roleOrTitle: "President of the French Republic", years: "1981–1995", notes: "Architect of Maastricht Treaty and European Union" }
    ]
  },
  42: {
    presidentId: 42,
    presidentName: "Bill Clinton",
    termYears: "1993–2001",
    keyEvents: [
      "Presided over longest peacetime economic expansion in modern history and federal budget surpluses",
      "Ratified North American Free Trade Agreement (NAFTA, 1993) and created World Trade Organization",
      "Brokered Dayton Peace Accords (1995) ending Bosnian War and NATO air campaign in Kosovo (1999)",
      "Signed Family and Medical Leave Act (1993) and welfare reform (PRWORA 1996)"
    ],
    ukMonarchs: [
      { name: "Elizabeth II", roleOrTitle: "Queen of the United Kingdom", years: "1952–2022" }
    ],
    ukPrimeMinisters: [
      { name: "John Major", roleOrTitle: "Prime Minister", years: "1990–1997" },
      { name: "Tony Blair", roleOrTitle: "Prime Minister", years: "1997–2007", notes: "'New Labour' landslide; Good Friday Agreement 1998" }
    ],
    frenchRulers: [
      { name: "François Mitterrand", roleOrTitle: "President of the French Republic", years: "1981–1995" },
      { name: "Jacques Chirac", roleOrTitle: "President of the French Republic", years: "1995–2007", notes: "RPR / UMP; transition to the Euro currency" }
    ]
  },
  43: {
    presidentId: 43,
    presidentName: "George W. Bush",
    termYears: "2001–2009",
    keyEvents: [
      "Led national response to September 11 terrorist attacks, launching global War on Terror",
      "Created Department of Homeland Security and signed USA PATRIOT Act",
      "Commenced military operations in Afghanistan (2001) and invasion of Iraq (2003)",
      "Passed No Child Left Behind education act and Medicare Part D prescription drug benefit"
    ],
    ukMonarchs: [
      { name: "Elizabeth II", roleOrTitle: "Queen of the United Kingdom", years: "1952–2022", notes: "Golden Jubilee (2002)" }
    ],
    ukPrimeMinisters: [
      { name: "Tony Blair", roleOrTitle: "Prime Minister", years: "1997–2007", notes: "Key War on Terror coalition partner" },
      { name: "Gordon Brown", roleOrTitle: "Prime Minister", years: "2007–2010", notes: "Labour; managed global financial crisis response" }
    ],
    frenchRulers: [
      { name: "Jacques Chirac", roleOrTitle: "President of the French Republic", years: "1995–2007", notes: "Opposed 2003 invasion of Iraq at UN Security Council" },
      { name: "Nicolas Sarkozy", roleOrTitle: "President of the French Republic", years: "2007–2012", notes: "Reintegrated France into NATO command" }
    ]
  },
  44: {
    presidentId: 44,
    presidentName: "Barack Obama",
    termYears: "2009–2017",
    keyEvents: [
      "First African American President; enacted Affordable Care Act ('Obamacare') expanding healthcare coverage",
      "Signed $831B American Recovery and Reinvestment Act and rescued domestic automotive industry",
      "Authorized operation resulting in death of al-Qaeda leader Osama bin Laden (2011)",
      "Brokered Paris Climate Agreement and Iran Nuclear Deal (JCPOA); restored relations with Cuba"
    ],
    ukMonarchs: [
      { name: "Elizabeth II", roleOrTitle: "Queen of the United Kingdom", years: "1952–2022", notes: "Diamond Jubilee (2012)" }
    ],
    ukPrimeMinisters: [
      { name: "Gordon Brown", roleOrTitle: "Prime Minister", years: "2007–2010" },
      { name: "David Cameron", roleOrTitle: "Prime Minister (Coalition & Con)", years: "2010–2016", notes: "Conservative; Brexit referendum 2016" },
      { name: "Theresa May", roleOrTitle: "Prime Minister", years: "2016–2019", notes: "Conservative; negotiated Brexit withdrawal" }
    ],
    frenchRulers: [
      { name: "Nicolas Sarkozy", roleOrTitle: "President of the French Republic", years: "2007–2012" },
      { name: "François Hollande", roleOrTitle: "President of the French Republic", years: "2012–2017", notes: "Socialist; hosted Paris Climate Agreement COP21" }
    ]
  },
  45: {
    presidentId: 45,
    presidentName: "Joe Biden",
    termYears: "2021–2025",
    keyEvents: [
      "Enacted $1.9T American Rescue Plan and $1.2T bipartisan Infrastructure Investment and Jobs Act",
      "Passed landmark CHIPS and Science Act and Inflation Reduction Act (largest climate investment in U.S. history)",
      "Reinvigorated NATO alliance and led international support for Ukraine following Russian invasion",
      "Appointed Ketanji Brown Jackson as first African American woman on the Supreme Court"
    ],
    ukMonarchs: [
      { name: "Elizabeth II", roleOrTitle: "Queen of the United Kingdom", years: "1952–2022", notes: "Platinum Jubilee (June 2022); passed away Sept 8, 2022" },
      { name: "Charles III", roleOrTitle: "King of the United Kingdom & Commonwealth", years: "2022–Present", notes: "Coronation May 6, 2023" }
    ],
    ukPrimeMinisters: [
      { name: "Boris Johnson", roleOrTitle: "Prime Minister", years: "2019–2022", notes: "Conservative; executed UK departure from EU" },
      { name: "Liz Truss", roleOrTitle: "Prime Minister", years: "2022", notes: "49-day tenure during monarch transition" },
      { name: "Rishi Sunak", roleOrTitle: "Prime Minister", years: "2022–2024", notes: "First British-Asian Prime Minister" },
      { name: "Sir Keir Starmer", roleOrTitle: "Prime Minister", years: "2024–Present", notes: "Labour landslide general election victory" }
    ],
    frenchRulers: [
      { name: "Emmanuel Macron", roleOrTitle: "President of the French Republic", years: "2017–Present", notes: "Renaissance; re-elected 2022; hosted 2024 Paris Olympic Games" }
    ]
  },
  46: {
    presidentId: 46,
    presidentName: "Donald Trump",
    termYears: "2017–2021, 2025–Present",
    keyEvents: [
      "Signed Tax Cuts and Jobs Act of 2017 and bipartisan First Step Act criminal justice reform",
      "Negotiated USMCA trade pact replacing NAFTA and brokered historic Middle East Abraham Accords",
      "Accelerated COVID-19 vaccine development through Operation Warp Speed",
      "Achieved historic second non-consecutive presidential victory in 2024 election"
    ],
    ukMonarchs: [
      { name: "Elizabeth II", roleOrTitle: "Queen of the United Kingdom", years: "1952–2022", notes: "Hosted 2019 State Visit for President Trump" },
      { name: "Charles III", roleOrTitle: "King of the United Kingdom & Commonwealth", years: "2022–Present" }
    ],
    ukPrimeMinisters: [
      { name: "Theresa May", roleOrTitle: "Prime Minister", years: "2016–2019" },
      { name: "Boris Johnson", roleOrTitle: "Prime Minister", years: "2019–2022" },
      { name: "Sir Keir Starmer", roleOrTitle: "Prime Minister", years: "2024–Present" }
    ],
    frenchRulers: [
      { name: "Emmanuel Macron", roleOrTitle: "President of the French Republic", years: "2017–Present", notes: "Hosted Bastille Day celebration and state visits" }
    ]
  }
};
